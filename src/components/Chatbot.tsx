// src/components/Chatbot.tsx
"use client";
import { useState } from "react";
import chatGPTRequest from "@/pages/api/chatGPTRequest";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [initialMessage, setInitialMessage] = useState(
    "Quelle est votre question ?"
  );

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prevMessages) => [...prevMessages, `Vous: ${input}`]);
    setInput("");
    setInitialMessage(""); // Clear the initial message after sending the first message
    try {
      const response = await chatGPTRequest(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        `Votre Assistant: ${response}`,
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        "Bot: Failed to fetch response.",
      ]);
    }
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
      <div className="h-64 overflow-y-scroll mb-4">
        {initialMessage && (
          <p className="text-center text-gray-500 mb-4">{initialMessage}</p>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 flex ${
              message.startsWith("Vous:") ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            <p
              className={`p-2 rounded-lg ${
                message.startsWith("Vous:")
                  ? "bg-green-100 text-primary-900"
                  : "bg-gray-200 text-green-900"
              }`}
            >
              {message}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Votre demande"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-primary-500 hover:bg-primary-600 transition-colors duration-300 text-white p-2 rounded-r-lg"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
