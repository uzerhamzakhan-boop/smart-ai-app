export async function POST(req) {
  try {
    const body = await req.json();

    const message = body.message;

    if (!message) {
      return Response.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const input = message.toLowerCase();

    let reply = "";

    // HISTORY
    if (input.includes("history") || input.includes("world war")) {
      reply = `World War 2 (1939–1945) changed global politics and led to formation of the United Nations.`;
    }

    // SCIENCE
    else if (input.includes("science") || input.includes("gravity") || input.includes("physics")) {
      reply = `Science explains how the natural world works using observation and experiments.

Gravity is a force that pulls objects toward each other.`;
    }

    // AI
    else if (input.includes("ai") || input.includes("artificial intelligence")) {
      reply = `Artificial Intelligence is the simulation of human intelligence in machines.

It is used in chatbots, automation, and recommendation systems.`;
    }

    // DEFAULT (FAILURE CASE)
    else {
      reply = `I understand your question: "${message}"

However, this is a rule-based chatbot, so I may not fully understand complex topics.

Try asking about history, science, or AI.`;
    }

    return Response.json({ reply });

  } catch (error) {
    return Response.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}