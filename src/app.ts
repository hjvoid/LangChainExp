import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

import * as dotenv from "dotenv";
dotenv.config();

export const run = async () => {
    
    const model = new OpenAI({ openAIApiKey:process.env.OPENAI_API_KEY, temperature: 0.9 });

    const res = await model.call(
        "What would be a good company name for a company that makes weird socks?"
    );

    console.log({ res });
    
}

run();