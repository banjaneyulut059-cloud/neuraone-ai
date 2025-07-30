async function sendBuddyMessage() {
  const input = document.getElementById("buddyInput").value.trim();
  const output = document.getElementById("buddyOutput");

  if (!input) return;

  output.innerHTML += `<div class="message"><b>Commander:</b> ${input}</div>`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, mode: "buddy" })
    });
    const data = await res.json();
    output.innerHTML += `<div class="message"><b>Buddy:</b> ${data.reply}</div>`;
  } catch {
    output.innerHTML += `<div class="message" style="color:red;"><b>Error:</b> Buddy offline</div>`;
  }

  document.getElementById("buddyInput").value = "";
}
