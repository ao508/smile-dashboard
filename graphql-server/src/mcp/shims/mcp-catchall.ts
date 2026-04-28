/**
 * Catch-all shim for any @modelcontextprotocol/sdk/* subpath not explicitly
 * covered by the specific shims. Used to prevent @google/genai's type
 * declarations (which import from the MCP SDK) from triggering the transitive
 * load of zod@4 `.d.cts` files, which use TS5-only `const` type parameters
 * that TypeScript 4.x cannot parse.
 */

// Re-export the types that @google/genai needs from the MCP SDK
export { Client } from "./mcp-client";
export { McpServer } from "./mcp-server";
export { InMemoryTransport } from "./mcp-inmemory";
