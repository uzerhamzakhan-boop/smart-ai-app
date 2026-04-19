export async function POST(req) {
  try {
<<<<<<< HEAD
    console.log("1. API HIT");

    const { question } = await req.json();

    console.log("2. QUESTION:", question);

    if (!question) {
      return Response.json(
        { error: "No question provided" },
=======
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return Response.json(
        { error: "Message is required" },
>>>>>>> 9d1657c (Updated app features)
        { status: 400 }
      );
    }

<<<<<<< HEAD
    console.log("3. DEMO MODE ACTIVE");

    const q = question.toLowerCase();
    let answer = "";

    // Simulated intelligent responses
    if (q.includes("summarize")) {
      answer =
        "This document provides an overview of key concepts and summarizes the main ideas from the dataset.";
    } else if (q.includes("key points")) {
      answer =
        "1. The dataset contains structured information.\n2. Important insights can be extracted.\n3. Key themes are consistent across documents.";
    } else if (q.includes("explain")) {
      answer =
        "The topic is explained as a simplified interpretation of the dataset, focusing on its main idea.";
    } else if (q.includes("facts")) {
      answer =
        "Fact 1: The data is organized.\nFact 2: It contains meaningful information.\nFact 3: It supports analysis.";
    } else if (q.includes("conclusion")) {
      answer =
        "The dataset suggests clear relationships and provides useful insights based on the available information.";
    } else if (q.includes("weather") || q.includes("toronto")) {
      answer =
        "This question is outside the scope of the dataset. Please ask questions related to the provided documents.";
    } else {
      answer =
        "The system could not find a precise answer in the dataset. Try asking a more specific question.";
    }

    console.log("4. DEMO RESPONSE:", answer);

    return Response.json({ answer });
  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
=======
    const input = message.toLowerCase();

    let reply = "";

    // HISTORY
    if (input.includes("history") || input.includes("world war")) {
      reply = `History is the study of past events that shaped human civilization.

For example, World War 2 was a global conflict from 1939 to 1945 involving most nations.

Key impacts:
- Formation of United Nations
- Cold War beginning
- Global political restructuring

History helps us understand patterns of human behavior and avoid past mistakes.`;
    }

    // SCIENCE
    else if (input.includes("science") || input.includes("gravity") || input.includes("physics")) {
      reply = `Science explains how the natural world works through observation and experimentation.

For example, gravity is a force that pulls objects toward each other.

It helps explain:
- Why objects fall
- Planetary motion
- Space physics

Science continuously evolves with new discoveries.`;
    }

    // AI / GENERAL
    else if (input.includes("ai") || input.includes("artificial intelligence")) {
      reply = `Artificial Intelligence is a field of computer science focused on creating systems that can simulate human intelligence.

It is used in:
- Chatbots
- Recommendation systems
- Automation

However, AI systems vary in complexity and capability.`;
    }

    // FAILURE / DEFAULT CASE (IMPORTANT FOR YOUR ASSIGNMENT)
    else {
      reply = `I understand your question: "${message}"

However, this is a simplified AI system based on keyword detection, so I may not fully understand complex or unseen topics.

Try asking about:
- History (World War, civilizations)
- Science (gravity, physics)
- Artificial Intelligence`;
    }

    return Response.json({ reply });

  } catch (error) {
    return Response.json(
      { error: "Invalid request format" },
      { status: 400 }
    );
  }
}
>>>>>>> 9d1657c (Updated app features)
