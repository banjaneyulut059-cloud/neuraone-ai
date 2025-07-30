async function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("chatOutput");

  if (!input) return;

  output.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, mode: "public" })
    });

    const data = await res.json();
    output.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
  } catch (error) {
    output.innerHTML += `<p style="color:red;"><strong>Error:</strong> Could not reach AI.</p>`;
  }

  document.getElementById("userInput").value = "";
}
