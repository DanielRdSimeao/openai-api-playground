import OpenAI from "openai";
import { ResponsesModel } from "openai/resources/shared.mjs";

interface TextInputProps {
  openai: OpenAI;
  model?: ResponsesModel;
  input: string;
}

export async function textInput({ openai, model = "gpt-4.1-mini", input }: TextInputProps) {
  try {
    return await openai.responses.create({
      model,
      input,
    });
  } catch (error) {
    console.error("Erro:", error);
  }
}
