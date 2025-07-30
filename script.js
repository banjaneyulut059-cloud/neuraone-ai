async function sendMessage() {
  const input = document.getElementById("userInput").value;
  const output = document.getElementById("chatOutput");

  output.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();
  output.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;

  document.getElementById("userInput").value = "";
}
