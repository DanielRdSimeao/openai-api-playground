# OpenAI API Playground

Um projeto simples para experimentar e testar a API da OpenAI, permitindo executar pesquisas de texto e pesquisas na web utilizando os modelos mais recentes da OpenAI.

## Funcionalidades

- **Pesquisa de Texto**: Envie prompts de texto para o modelo GPT da OpenAI e receba respostas.
- **Pesquisa na Web**: Utilize o recurso de pesquisa na web integrado aos modelos da OpenAI para obter informações atualizadas da internet.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- Uma chave de API da OpenAI

## Instalação

1. Clone este repositório:

   ```
   git clone https://github.com/DanielRdSimeao/openai-api-playground.git
   cd openai-api-playground
   ```

2. Instale as dependências:

   ```
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com sua chave de API da OpenAI:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

## Como usar

1. Compile o projeto:

   ```
   npm run build
   ```

2. Execute a aplicação:

   ```
   npm start
   ```

3. Siga as instruções no terminal para escolher entre:
   - Opção 1: Pesquisa de texto simples
   - Opção 2: Pesquisa na web
   - Opção 3: Sair

## Desenvolvimento

Para execução em modo de desenvolvimento:

```
npm run dev
```

## Estrutura do projeto

```
openai-api-playground/
├── src/
│   ├── utils/
│   │   ├── textInput.ts     # Função para pesquisa de texto
│   │   └── webSearch.ts     # Função para pesquisa na web
│   └── index.ts             # Ponto de entrada da aplicação
├── .env                     # Variáveis de ambiente (não versionado)
├── .gitignore               # Arquivos ignorados pelo git
├── package.json             # Dependências e scripts
└── tsconfig.json            # Configuração do TypeScript
```

## Tecnologias utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [OpenAI API](https://openai.com/api/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Cursor.ai](https://cursor.ai/)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
