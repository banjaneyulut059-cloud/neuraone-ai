import { OPENAI_API_KEY } from '../config.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { prompt } = req.body;

  const imageUrl = `https://dummyimage.com/600x400/00ffea/000000.png&text=${encodeURIComponent(prompt)}`;

  res.status(200).json({ url: imageUrl });
}
