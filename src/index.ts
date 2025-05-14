import OpenAI from "openai";
import "dotenv/config";
import readline from "readline";

import { textInput } from "./utils/textInput.js";
import { webSearch } from "./utils/webSearch.js";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log("Escolha uma opção:");
  console.log("1 - Executar pesquisa de texto");
  console.log("2 - Executar pesquisa na web");
  console.log("3 - Sair");

  rl.question("Digite o número da opção desejada: ", async (option) => {
    switch (option) {
      case "1": {
        rl.question("Digite sua mensagem: ", async (input) => {
          const response = await textInput({ openai, input });
          console.log("\nResposta da pesquisa de texto:");
          console.log(response);
          rl.close();
        });
        break;
      }
      case "2": {
        rl.question("Digite sua pesquisa: ", async (input) => {
          const response = await webSearch({ openai, input });
          console.log("\nResposta da pesquisa na web:");
          console.log(response);
          rl.close();
        });
        break;
      }
      case "3": {
        console.log("Saindo...");
        rl.close();
        break;
      }
      default: {
        console.log("Opção inválida!");
        rl.close();
      }
    }
  });
}

main().catch(console.error);
