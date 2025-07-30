// Mission Log for Commander
const missionLog = [
  "✅ Status: NeuraOne V1.5 Operational",
  "🎯 Objective Alpha: Test Buddy Mode access",
  "🎯 Objective Beta: Trigger Commander Surprise",
  "🎯 Objective Gamma: Execute /override for control"
];

window.onload = () => {
  let outputBox = document.getElementById("buddyOutput");
  outputBox.innerHTML += `<h3>Mission Log - Day 1</h3>`;
  missionLog.forEach(item => {
    outputBox.innerHTML += `<p>${item}</p>`;
  });
};

async function sendBuddyCommand() {
  let input = document.getElementById("buddyInput").value;
  let outputBox = document.getElementById("buddyOutput");
  outputBox.innerHTML += `<p><b>Commander:</b> ${input}</p>`;
  
  let res = await fetch('/api/surprise', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({command: input})
  });
  let data = await res.json();
  
  outputBox.innerHTML += `<p><b>Buddy Mode:</b> ${data.response}</p>`;
  
  document.getElementById("buddyInput").value = "";
}
