import Anthropic from "@anthropic-ai/sdk";
import {
  ProviderLoopArgs,
  ValidationAdvice,
  extractValidationAdvice,
  normalizeSchema,
  RETURN_ADVICE_TOOL,
  FALLBACK_ADVICE,
} from "./types";

const MAX_ITERATIONS = 5;

export async function runLoop(
  config: { apiKey: string; model: string },
  { tools, systemPrompt, userMessage, callTool }: ProviderLoopArgs
): Promise<ValidationAdvice> {
  const anthropic = new Anthropic({ apiKey: config.apiKey });

  const anthropicTools: Anthropic.Tool[] = tools.map((t) => ({
    name: t.name,
    description: t.description,
    input_schema: normalizeSchema(t.inputSchema) as Anthropic.Tool.InputSchema,
  }));

  const messages: Anthropic.MessageParam[] = [
    { role: "user", content: userMessage },
  ];

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const response = await anthropic.messages.create({
      model: config.model,
      system: systemPrompt,
      messages,
      tools: anthropicTools,
      max_tokens: 1024,
    });

    if (response.stop_reason === "end_turn") {
      const textBlock = response.content.find((b) => b.type === "text");
      return {
        advice:
          textBlock && "text" in textBlock
            ? textBlock.text
            : "Unable to generate advice.",
        suggestedSteps: [],
      };
    }

    if (response.stop_reason === "tool_use") {
      messages.push({ role: "assistant", content: response.content });

      const toolResults: Anthropic.ToolResultBlockParam[] = [];

      for (const block of response.content) {
        if (block.type !== "tool_use") continue;

        if (block.name === RETURN_ADVICE_TOOL) {
          const advice = extractValidationAdvice(block.input);
          return advice ?? FALLBACK_ADVICE;
        }

        let toolOutput: string;
        try {
          toolOutput = await callTool(
            block.name,
            block.input as Record<string, unknown>
          );
        } catch (err) {
          toolOutput = `Tool error: ${
            err instanceof Error ? err.message : String(err)
          }`;
        }

        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: toolOutput,
        });
      }

      if (toolResults.length > 0) {
        messages.push({ role: "user", content: toolResults });
      }
    }
  }

  return FALLBACK_ADVICE;
}
