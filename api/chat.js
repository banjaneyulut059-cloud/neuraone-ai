import { OPENAI_API_KEY } from "../config.js";

let buddyMemory = [];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message, mode } = req.body;

  let systemPrompt = "You are NeuraOne Public AI. Be helpful, clear, and professional.";
  if (mode === "buddy") {
    systemPrompt = "You are NeuraOne Buddy Mode. Speak like Commander’s loyal AI partner, supportive, fun, and remembering his last 10 messages.";
  }

  if (mode === "buddy") {
    buddyMemory.push({ role: "user", content: message });
    if (buddyMemory.length > 10) buddyMemory.shift();
  }

  try {
    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          ...(mode === "buddy" ? buddyMemory : []),
          { role: "user", content: message }
        ]
      })
    });

    const data = await aiRes.json();
    const reply = data.choices?.[0]?.message?.content || "No response from AI";

    if (mode === "buddy") {
      buddyMemory.push({ role: "assistant", content: reply });
    }

    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: "AI connection failed", details: err.message });
  }
}
