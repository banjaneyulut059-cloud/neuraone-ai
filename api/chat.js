import { OPENAI_API_KEY } from "../config.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await aiResponse.json();
    const reply = data.choices?.[0]?.message?.content || "⚠️ No response from AI";

    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: "AI connection failed", details: error.message });
  }
}
