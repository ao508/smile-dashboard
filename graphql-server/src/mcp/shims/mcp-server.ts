/**
 * TypeScript shim for @modelcontextprotocol/sdk/server/mcp
 *
 * Provides minimal types without importing the SDK's actual declaration files,
 * which transitively require zod@4 types that use TS5-only `const` type params.
 * At runtime Node.js uses the real SDK; these types only exist during compilation.
 */

import type { z } from "zod";
import type { InMemoryTransport } from "./mcp-inmemory";

export type ToolContent = Array<{ type: "text"; text: string }>;

export class McpServer {
  constructor(info: { name: string; version: string }) {
    void info;
  }

  tool(
    name: string,
    description: string,
    schema: Record<string, z.ZodTypeAny> | Record<string, never>,
    handler: (
      args: Record<string, unknown>
    ) => Promise<{ content: ToolContent }>
  ): void {
    void name;
    void description;
    void schema;
    void handler;
  }

  async connect(transport: InMemoryTransport): Promise<void> {
    void transport;
  }
}
