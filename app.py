from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message", "").lower()

    # Simple chatbot logic
    if "hello" in message:
        reply = "Hello! 👋 How can I help you?"
    elif "how are you" in message:
        reply = "I'm doing great! What about you?"
    elif "your name" in message:
        reply = "I'm a Flask Chat Bot 🤖"
    elif "bye" in message:
        reply = "Goodbye! Have a nice day 😊"
    else:
        reply = "You said: " + message

    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(debug=True)