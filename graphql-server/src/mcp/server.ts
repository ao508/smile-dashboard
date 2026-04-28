/**
 * In-process MCP server that powers the getValidationAdvice GraphQL resolver.
 *
 * Architecture:
 *   GraphQL resolver
 *     → runValidationAdviceQuery()
 *         → McpServer (smile-validation) — registers two tools:
 *             • get_current_record_context  (no params; fetches Neo4j metadata for the bound record)
 *             • return_validation_advice    (structured output tool)
 *         → InMemoryTransport pair  (server ↔ client, no network hop)
 *         → LLM provider tool-use loop (Anthropic | Gemini | OpenAI), max 5 iterations
 *         → returns ValidationAdvice
 */

import { createRequire } from "module";
import type { McpServer as McpServerType } from "./shims/mcp-server";
import type { Client as ClientType } from "./shims/mcp-client";
import type { InMemoryTransport as InMemoryTransportType } from "./shims/mcp-inmemory";

// The MCP SDK's package.json uses "./*" wildcard exports without .js extensions,
// which Node.js CJS refuses to resolve. We load the real classes via createRequire
// from the one explicit export ("./server") that works, using relative .js paths.
const _sdkRequire = createRequire(
  require.resolve("@modelcontextprotocol/sdk/server")
);
const { McpServer } = _sdkRequire("./mcp.js") as {
  McpServer: typeof McpServerType;
};
const { Client } = _sdkRequire("../client/index.js") as {
  Client: typeof ClientType;
};
const { InMemoryTransport } = _sdkRequire("../inMemory.js") as {
  InMemoryTransport: typeof InMemoryTransportType;
};
import { z } from "zod";
import { Driver } from "neo4j-driver";
import {
  SMILE_SYSTEM_PROMPT,
  formatValidationReportForPrompt,
} from "./validationCatalog";
import {
  ProviderConfig,
  ValidationAdvice,
  normalizeSchema,
  RETURN_ADVICE_TOOL,
} from "./providers/types";
import { runLoop as anthropicLoop } from "./providers/anthropic";
import { runLoop as geminiLoop } from "./providers/gemini";
import { runLoop as openaiLoop } from "./providers/openai";

export type { ValidationAdvice };

export interface RunValidationAdviceArgs {
  validationReport: string;
  /** "SAMPLE" | "REQUEST" */
  recordType: string;
  /** primaryId (sample) or igoRequestId (request) — optional but improves advice quality */
  recordId?: string | null;
  providerConfig: ProviderConfig;
  neo4jDriver: Driver;
}

// ---------------------------------------------------------------------------
// Neo4j context helpers
// ---------------------------------------------------------------------------

async function fetchSampleContext(
  primaryId: string,
  driver: Driver
): Promise<string> {
  const session = driver.session();
  try {
    const result = await session.run(
      `
      MATCH (s:Sample)-[:HAS_METADATA]->(sm:SampleMetadata)
      WHERE sm.primaryId = $primaryId
      RETURN sm {
        .primaryId, .cmoSampleName, .sampleClass, .sampleType, .sampleOrigin,
        .tumorOrNormal, .genePanel, .baitSet, .recipe, .oncotreeCode,
        .igoComplete, .investigatorSampleId, .cmoPatientId, .preservation
      } AS metadata
      LIMIT 1
      `,
      { primaryId }
    );
    if (result.records.length === 0) {
      return `No metadata found for sample primaryId="${primaryId}".`;
    }
    return JSON.stringify(result.records[0].get("metadata"), null, 2);
  } catch (err) {
    return `Error fetching sample context: ${
      err instanceof Error ? err.message : String(err)
    }`;
  } finally {
    await session.close();
  }
}

async function fetchRequestContext(
  requestId: string,
  driver: Driver
): Promise<string> {
  const session = driver.session();
  try {
    const result = await session.run(
      `
      MATCH (r:Request)
      WHERE r.igoRequestId = $requestId
      RETURN r {
        .igoRequestId, .igoProjectId, .genePanel, .isCmoRequest,
        .totalSampleCount, .dataAnalystName, .projectManagerName,
        .investigatorName, .labHeadName, .importDate
      } AS metadata
      LIMIT 1
      `,
      { requestId }
    );
    if (result.records.length === 0) {
      return `No metadata found for request igoRequestId="${requestId}".`;
    }
    return JSON.stringify(result.records[0].get("metadata"), null, 2);
  } catch (err) {
    return `Error fetching request context: ${
      err instanceof Error ? err.message : String(err)
    }`;
  } finally {
    await session.close();
  }
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------

export async function runValidationAdviceQuery({
  validationReport,
  recordType,
  recordId,
  providerConfig,
  neo4jDriver: driver,
}: RunValidationAdviceArgs): Promise<ValidationAdvice> {
  // Build MCP server with tools scoped to this request
  const server = new McpServer({ name: "smile-validation", version: "1.0.0" });

  // Tool 1: context lookup — only registered when a record ID is available
  if (recordId) {
    server.tool(
      "get_current_record_context",
      `Fetch current ${recordType.toLowerCase()} metadata from the SMILE Neo4j database for record "${recordId}"`,
      {}, // no input params — handler is already bound to recordId
      async () => {
        const context =
          recordType === "SAMPLE"
            ? await fetchSampleContext(recordId, driver)
            : await fetchRequestContext(recordId, driver);
        return { content: [{ type: "text" as const, text: context }] };
      }
    );
  }

  // Tool 2: structured output — LLM MUST call this to return its advice
  server.tool(
    RETURN_ADVICE_TOOL,
    "Return the final structured advice for resolving the validation errors",
    {
      advice: z
        .string()
        .describe(
          "A concise paragraph explaining the root cause(s) and the overall resolution approach"
        ),
      suggestedSteps: z
        .array(z.string())
        .describe("Ordered list of concrete remediation steps"),
    },
    async (args: Record<string, unknown>) => ({
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({
            advice: args.advice,
            suggestedSteps: args.suggestedSteps,
          }),
        },
      ],
    })
  );

  // Connect server and client in-process via InMemoryTransport
  const [clientTransport, serverTransport] =
    InMemoryTransport.createLinkedPair();
  const mcpClient = new Client(
    { name: "smile-resolver", version: "1.0.0" },
    { capabilities: {} }
  );
  await server.connect(serverTransport);
  await mcpClient.connect(clientTransport);

  try {
    // Convert MCP tools to provider-agnostic format
    const { tools: mcpTools } = await mcpClient.listTools();
    const tools = mcpTools.map((t) => ({
      name: t.name,
      description: t.description ?? "",
      inputSchema: normalizeSchema(t.inputSchema as Record<string, unknown>),
    }));

    // callTool closure — executes an MCP tool and returns its text output
    const callTool = async (
      name: string,
      args: Record<string, unknown>
    ): Promise<string> => {
      const result = await mcpClient.callTool({ name, arguments: args });
      const first = result.content[0];
      return first && "text" in first && first.text != null
        ? first.text
        : JSON.stringify(result.content);
    };

    const loopArgs = {
      tools,
      systemPrompt: SMILE_SYSTEM_PROMPT,
      userMessage: formatValidationReportForPrompt({
        validationReport,
        recordType,
        recordId,
      }),
      callTool,
    };

    switch (providerConfig.provider) {
      case "anthropic":
        return anthropicLoop(providerConfig, loopArgs);
      case "gemini":
        return geminiLoop(providerConfig, loopArgs);
      case "openai":
        return openaiLoop(providerConfig, loopArgs);
    }
  } finally {
    await mcpClient.close();
  }
}
