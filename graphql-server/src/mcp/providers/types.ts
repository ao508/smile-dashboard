/**
 * Shared types and utilities for LLM provider loops.
 */

import { z } from "zod";

// ---------------------------------------------------------------------------
// Shared interfaces
// ---------------------------------------------------------------------------

export interface McpToolDef {
  name: string;
  description: string;
  /** JSON Schema object (already stripped of non-standard fields) */
  inputSchema: Record<string, unknown>;
}

export interface ProviderLoopArgs {
  tools: McpToolDef[];
  systemPrompt: string;
  userMessage: string;
  /**
   * Execute an MCP tool by name. Returns the tool's text output.
   * Should NOT be called with "return_validation_advice" — providers
   * intercept that tool themselves and return immediately.
   */
  callTool: (name: string, args: Record<string, unknown>) => Promise<string>;
}

export interface ValidationAdvice {
  advice: string;
  suggestedSteps: string[];
}

// ---------------------------------------------------------------------------
// Discriminated union for provider config
// ---------------------------------------------------------------------------

export type ProviderConfig =
  | { provider: "anthropic"; apiKey: string; model: string }
  | { provider: "gemini"; apiKey: string; model: string }
  | { provider: "openai"; apiKey: string; model: string };

// ---------------------------------------------------------------------------
// Shared utilities
// ---------------------------------------------------------------------------

const ValidationAdviceSchema = z.object({
  advice: z.string(),
  suggestedSteps: z.array(z.string()),
});

/**
 * Parse and validate the args passed to the `return_validation_advice` tool.
 * Handles both object args (Anthropic/Gemini) and JSON-string args (OpenAI).
 */
export function extractValidationAdvice(
  rawArgs: unknown
): ValidationAdvice | null {
  try {
    const parsed = typeof rawArgs === "string" ? JSON.parse(rawArgs) : rawArgs;
    const result = ValidationAdviceSchema.safeParse(parsed);
    if (result.success) return result.data;
    return null;
  } catch {
    return null;
  }
}

/**
 * Remove JSON-Schema meta-fields that some LLM APIs reject.
 */
export function normalizeSchema(
  schema: Record<string, unknown>
): Record<string, unknown> {
  const { $schema: _s, execution: _e, ...clean } = schema;
  return clean;
}

export const RETURN_ADVICE_TOOL = "return_validation_advice";

export const FALLBACK_ADVICE: ValidationAdvice = {
  advice:
    "Unable to generate advice after maximum iterations. Please contact the SMILE team.",
  suggestedSteps: ["Contact the SMILE team for manual assistance."],
};
