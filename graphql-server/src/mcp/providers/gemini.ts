import {
  GoogleGenAI,
  createPartFromFunctionResponse,
  Content,
} from "@google/genai";
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
  const ai = new GoogleGenAI({ apiKey: config.apiKey });

  const functionDeclarations = tools.map((t) => ({
    name: t.name,
    description: t.description,
    parametersJsonSchema: normalizeSchema(t.inputSchema),
  }));

  const contents: Content[] = [
    { role: "user", parts: [{ text: userMessage }] },
  ];

  for (let i = 0; i < MAX_ITERATIONS; i++) {
    const requestBody = {
      contents,
      generationConfig: { maxOutputTokens: 1024 },
      systemInstruction: { parts: [{ text: systemPrompt }] },
      tools: [{ functionDeclarations }],
    };

    if (i === 0) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:generateContent?key=REDACTED`;
      console.log(
        "[gemini] equivalent cURL:\n" +
          `curl -s -X POST '${url}' \\\n` +
          `  -H 'Content-Type: application/json' \\\n` +
          `  -d '${JSON.stringify(requestBody)}'`
      );
    }

    const response = await ai.models.generateContent({
      model: config.model,
      contents,
      config: {
        systemInstruction: systemPrompt,
        tools: [{ functionDeclarations }],
        maxOutputTokens: 1024,
      },
    });

    const functionCalls = response.functionCalls;

    if (!functionCalls || functionCalls.length === 0) {
      return {
        advice: response.text ?? "Unable to generate advice.",
        suggestedSteps: [],
      };
    }

    // Append model turn to history before processing tools
    const modelParts = response.candidates?.[0]?.content?.parts ?? [];
    contents.push({ role: "model", parts: modelParts });

    // Check for return_validation_advice before executing any tools
    for (const call of functionCalls) {
      if (call.name === RETURN_ADVICE_TOOL) {
        const advice = extractValidationAdvice(call.args ?? {});
        return advice ?? FALLBACK_ADVICE;
      }
    }

    // Execute all other tool calls and collect responses
    const responseParts = await Promise.all(
      functionCalls.map(async (call) => {
        const callId = call.id ?? call.name ?? "";
        const callName = call.name ?? "";
        let output: string;
        try {
          output = await callTool(callName, call.args ?? {});
        } catch (err) {
          output = `Tool error: ${
            err instanceof Error ? err.message : String(err)
          }`;
        }
        return createPartFromFunctionResponse(callId, callName, {
          output,
        });
      })
    );

    contents.push({ role: "user", parts: responseParts });
  }

  return FALLBACK_ADVICE;
}
