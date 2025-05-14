import OpenAI from "openai";
import { ResponsesModel } from "openai/resources/shared.mjs";

interface WebSearchProps {
  openai: OpenAI;
  model?: ResponsesModel;
  input: string;
}

export async function webSearch({ openai, model = "gpt-4.1-mini", input }: WebSearchProps) {
  try {
    return await openai.responses.create({
      model,
      tools: [{ type: "web_search_preview" }],
      input,
    });
  } catch (error) {
    console.error("Erro:", error);
  }
}
