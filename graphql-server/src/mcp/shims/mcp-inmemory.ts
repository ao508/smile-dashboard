/**
 * TypeScript shim for @modelcontextprotocol/sdk/inMemory
 *
 * Provides minimal types without importing the SDK's actual declaration files.
 */

export class InMemoryTransport {
  static createLinkedPair(): [InMemoryTransport, InMemoryTransport] {
    return [new InMemoryTransport(), new InMemoryTransport()];
  }

  async start(): Promise<void> {}
  async close(): Promise<void> {}
}
