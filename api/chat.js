export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  // Simple AI simulation
  const response = `🤖 NeuraOne V1.5: You said "${message}". Processing successful, Commander!`;

  res.status(200).json({ reply: response });
}
