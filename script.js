async function sendMessage() {
  let input = document.getElementById("userInput").value;
  let outputBox = document.getElementById("chatOutput");
  
  outputBox.innerHTML += `<p><b>You:</b> ${input}</p>`;
  
  let res = await fetch('/api/chat', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({message: input})
  });
  let data = await res.json();
  
  outputBox.innerHTML += `<p><b>NeuraOne:</b> ${data.reply}</p>`;
  
  document.getElementById("userInput").value = "";
}
