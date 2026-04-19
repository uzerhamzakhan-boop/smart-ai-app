export async function POST(req) {
  try {
    console.log("1. API HIT");

    const { question } = await req.json();

    console.log("2. QUESTION:", question);

    if (!question) {
      return Response.json(
        { error: "No question provided" },
        { status: 400 }
      );
    }

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
