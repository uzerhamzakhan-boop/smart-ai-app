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
  
      console.log("3. BEFORE OPENAI (DISABLED)");
  
      // 🚨 TEMP MOCK RESPONSE (NO OPENAI CALL)
      const answer =
        "AI is disabled (quota exceeded). Please enable billing to activate real responses.";
  
      console.log("4. MOCK RESPONSE SENT");
  
      return Response.json({ answer });
    } catch (err) {
      console.error("API ERROR:", err);
  
      return Response.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }