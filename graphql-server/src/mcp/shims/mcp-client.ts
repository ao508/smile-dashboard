/**
 * TypeScript shim for @modelcontextprotocol/sdk/client
 *
 * Provides minimal types without importing the SDK's actual declaration files.
 */

import type { InMemoryTransport } from "./mcp-inmemory";

export interface McpToolInputSchema {
  type: string;
  properties?: Record<string, unknown>;
  required?: string[];
  [key: string]: unknown;
}

export interface McpTool {
  name: string;
  description?: string;
  inputSchema: McpToolInputSchema;
}

export interface CallToolResult {
  content: Array<{ type: string; text?: string; [key: string]: unknown }>;
  isError?: boolean;
}

export class Client {
  constructor(
    info: { name: string; version: string },
    options: { capabilities?: Record<string, unknown> }
  ) {
    void info;
    void options;
  }

  async connect(transport: InMemoryTransport): Promise<void> {
    void transport;
  }

  async listTools(): Promise<{ tools: McpTool[] }> {
    return { tools: [] };
  }

  async callTool(params: {
    name: string;
    arguments?: Record<string, unknown>;
  }): Promise<CallToolResult> {
    void params;
    return { content: [] };
  }

  async close(): Promise<void> {}
}
