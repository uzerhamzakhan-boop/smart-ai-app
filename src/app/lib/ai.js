import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAnswer(question, context) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant that answers only using the provided documents.",
      },
      {
        role: "user",
        content: `
Context:
${context}

Question:
${question}
        `,
      },
    ],
  });

  return response.choices[0].message.content;
}