async function sendMessage() {

    let input = document.getElementById("message");
    let message = input.value.trim();

    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += `<div class="user"><b>You:</b> ${message}</div>`;

    input.value = "";

    // Send to backend
    let response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    let data = await response.json();

    // Show bot reply
    chatBox.innerHTML += `<div class="bot"><b>Bot:</b> ${data.reply}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Press Enter to send message
document.getElementById("message").addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        sendMessage();
    }
});