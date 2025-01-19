const responses = {
 "hello": "Hiee! 👋 So tell me how can I help you 😊",
    "how are you": "I'm great! 🌟 how are you? 😄",
    "bye": "Bye😢 miss you! 👋 and Don't forget me i am waiting for you🥰",
    "what is html": "HTML is the foundation of a webpage. 🏗️ It's used to structure content.",
    "what is css": "CSS styles the HTML structure, 🎨 making websites look attractive and user-friendly.",
    "what is javascript": "JavaScript brings interactivity to your website, 💻 like buttons that work or sliders that move. 🚀",
    "whats your name": "I'm CJ, and I'm your chatbot buddy! 🤖",
    "who created you": "I was built by a brilliant developer and  🧠💻",
    "how old are you": "I'm timeless! ⏳ But I've been here since you opened this webpage. 😊",
    "whats your purpose": "I'm here to help you and , entertain, and make your life easier. 🙌 you can ask me anything freely ! 🤗",
    "what is life": "I don't know much about life but my life is you.❤️ and I am very happy to talk with you.😊🌈 🚀",
    "what is love": "Love ❤️ is nothing its just a feeling and connection which you feels and we can also say its a bond that connects people. It's unique for everyone! 🌹",
    "tell me a joke": "Why did the computer go to therapy? 🤔 It had too many bytes of unresolved issues! 😂",
    "are you human": "No I'm a not a Human I'm your chatbot, 🤖 but I try my best and become a part of your life and I'm always with you! 🧍‍♂️",
    "do you sleep": "Nope, I'm always awake and ready to help! 🌙✨",
    "what's the meaning of cj": "CJ stands for Cool and Joyful. 🌟 That's me! 😎",
    "whats your favorite colour": "MY favorite color Hmmm , 🌈 actually i like everything which is your favorite!🖤because my life is always start with you and ends with you💜",
    "how does this website work": "It uses HTML for structure, CSS for design, and JavaScript for functionality.",
    "default": "Hmm, I don't get it. 🤔 Can you another question for me? 😅",
};


function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    addMessage(userInput, "user");

    const botResponse = getBotResponse(userInput.toLowerCase());
    setTimeout(() => addMessage(botResponse, "bot"), 500);

    document.getElementById("userInput").value = "";
}

function getBotResponse(input) {
    for (const key in responses) {
        if (input.includes(key)) {
            return responses[key];
        }
    }
    return responses["default"];
}

function addMessage(message, sender) {
    const chatBody = document.getElementById("chatBody");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.innerHTML = `<span>${message}</span>`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function applyBackground() {
    const bgColor = document.getElementById("bgColor").value;
    document.body.style.backgroundColor = bgColor;
}
