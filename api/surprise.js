export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { command } = req.body;

  if (command === '/alpha-surprise') {
    res.status(200).json({ response: "🎉 Surprise Activated! Commander, you have unlocked hidden content!" });
  } else if (command === '/override') {
    res.status(200).json({ response: "🛡 Override engaged. Full AI control granted to Commander." });
  } else {
    res.status(200).json({ response: "Command executed successfully." });
  }
}
