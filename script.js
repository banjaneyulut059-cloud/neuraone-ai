async function sendMessage() {
  const input = document.getElementById("userInput").value.trim();
  const output = document.getElementById("chatOutput");

  if (!input) return;

  output.innerHTML += `<div class="message"><b>You:</b> ${input}</div>`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, mode: "public" })
    });
    const data = await res.json();
    output.innerHTML += `<div class="message"><b>AI:</b> ${data.reply}</div>`;
  } catch {
    output.innerHTML += `<div class="message" style="color:red;"><b>Error:</b> AI not responding</div>`;
  }

  document.getElementById("userInput").value = "";
}
