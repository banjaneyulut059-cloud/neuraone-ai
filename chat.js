import { OPENAI_API_KEY } from '../config.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { message } = req.body;

  const reply = `Simulated AI response to: "${message}" 
  (Replace with OpenAI API call when API key is active)`;

  res.status(200).json({ reply });
}
