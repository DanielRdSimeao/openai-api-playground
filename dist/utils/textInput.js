export async function textInput({ openai, model = "gpt-4.1-mini", input }) {
    try {
        return await openai.responses.create({
            model,
            input,
        });
    }
    catch (error) {
        console.error("Erro:", error);
    }
}
