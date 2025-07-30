async function sendBuddyMessage() {
  const input = document.getElementById("buddyInput").value.trim();
  const output = document.getElementById("buddyOutput");

  if (!input) return;

  output.innerHTML += `<p><strong>Commander:</strong> ${input}</p>`;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, mode: "buddy" })
    });

    const data = await res.json();
    output.innerHTML += `<p><strong>Buddy:</strong> ${data.reply}</p>`;
  } catch (error) {
    output.innerHTML += `<p style="color:red;"><strong>Error:</strong> Buddy AI connection failed.</p>`;
  }

  document.getElementById("buddyInput").value = "";
}
