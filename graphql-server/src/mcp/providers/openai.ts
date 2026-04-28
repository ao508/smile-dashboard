import OpenAI from "openai";
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
  const openai = new OpenAI({ apiKey: config.apiKey });

  const openaiTools: OpenAI.Chat.Completions.ChatCompletionTool[] = tools.map(
    (t) => ({
      type: "function" as const,
      function: {
        name: t.name,
        description: t.description,
        parameters: normalizeSchema(t.inputSchema),
      },
    })
  );

  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userMessage },
  ];

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const response = await openai.chat.completions.create({
      model: config.model,
      messages,
      tools: openaiTools,
      max_tokens: 1024,
    });

    const choice = response.choices[0];
    if (!choice) return FALLBACK_ADVICE;

    if (
      choice.finish_reason !== "tool_calls" ||
      !choice.message.tool_calls?.length
    ) {
      return {
        advice: choice.message.content ?? "Unable to generate advice.",
        suggestedSteps: [],
      };
    }

    // Append assistant message (contains tool_calls) before processing
    messages.push(choice.message);

    // Check for return_validation_advice before executing any tools
    for (const call of choice.message.tool_calls) {
      if (call.type !== "function") continue;
      if (call.function.name === RETURN_ADVICE_TOOL) {
        // OpenAI function.arguments is a JSON string
        const advice = extractValidationAdvice(call.function.arguments);
        return advice ?? FALLBACK_ADVICE;
      }
    }

    // Execute all other tool calls — one "tool" message per call
    for (const call of choice.message.tool_calls) {
      if (call.type !== "function") continue;
      let output: string;
      try {
        const args = JSON.parse(call.function.arguments) as Record<
          string,
          unknown
        >;
        output = await callTool(call.function.name, args);
      } catch (err) {
        output = `Tool error: ${
          err instanceof Error ? err.message : String(err)
        }`;
      }

      messages.push({
        role: "tool",
        tool_call_id: call.id,
        content: output,
      });
    }
  }

  return FALLBACK_ADVICE;
}
