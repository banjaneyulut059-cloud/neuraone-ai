async function sendBuddyMessage() {
  const input = document.getElementById("buddyInput").value;
  const output = document.getElementById("buddyOutput");

  output.innerHTML += `<p><strong>Commander:</strong> ${input}</p>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();
  output.innerHTML += `<p><strong>Buddy:</strong> ${data.reply}</p>`;

  document.getElementById("buddyInput").value = "";
}
