export async function webSearch({ openai, model = "gpt-4.1-mini", input }) {
    try {
        return await openai.responses.create({
            model,
            tools: [{ type: "web_search_preview" }],
            input,
        });
    }
    catch (error) {
        console.error("Erro:", error);
    }
}
