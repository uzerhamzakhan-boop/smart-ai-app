"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center px-4">

      {/* BACKGROUND (behind everything) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-72 bg-cyan-500 blur-3xl opacity-20 rounded-full top-10 left-10" />
        <div className="absolute w-72 h-72 bg-blue-600 blur-3xl opacity-20 rounded-full bottom-10 right-10" />
      </div>

      {/* CONTENT (must be above background) */}
      <div className="relative z-10 flex flex-col items-center w-full">

        {/* title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Smart Notes AI
        </h1>

        <p className="text-gray-400 mt-2 mb-8 text-center">
          Ask anything from your notes ⚡
        </p>

        {/* input box */}
        <div className="w-full max-w-2xl bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-5 shadow-2xl">

          <textarea
            className="w-full p-4 rounded-xl bg-black text-white border border-gray-700 focus:border-cyan-400 outline-none resize-none"
            rows={4}
            placeholder="Ask your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            onClick={askQuestion}
            className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition font-semibold"
          >
            {loading ? "Thinking..." : "Ask AI ⚡"}
          </button>
        </div>

        {/* answer */}
        {answer && (
          <div className="mt-8 w-full max-w-2xl bg-gray-900/60 backdrop-blur-md border border-gray-800 p-5 rounded-2xl">
            <h2 className="text-cyan-400 font-semibold mb-2">Answer</h2>
            <p className="text-gray-200 whitespace-pre-wrap">{answer}</p>
          </div>
        )}

      </div>
    </div>
  );
}