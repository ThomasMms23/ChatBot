"use client";
import { useState } from "react";
import chatGPTRequest from "@/pages/api/chatGPTRequest";
import Image from "next/image";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { sender: "Vous" | "Votre Assistant"; text: string }[]
  >([]);
  const [initialMessage, setInitialMessage] = useState(
    "Quelle est votre question ?"
  );

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Vous", text: input },
    ]);
    setInput("");
    setInitialMessage(""); // Clear the initial message after sending the first message
    try {
      const response = await chatGPTRequest(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Votre Assistant", text: response },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Votre Assistant", text: "Failed to fetch response." },
      ]);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-md w-full">
      <div className="bg-gray-100 p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/favicon.svg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full mr-2"
          />
          <div>
            <h2 className="font-bold">Assistant ForestHill</h2>
            <p className="text-sm text-primary-500">En ligne</p>
          </div>
        </div>
      </div>
      <div className="h-64 overflow-y-scroll mb-4 bg-white p-8">
        {initialMessage && (
          <p className="text-center text-gray-500 mb-4">{initialMessage}</p>
        )}
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <p
              className={`text-sm ${
                message.sender === "Vous"
                  ? "text-right text-stone-500"
                  : "text-left text-stone-500"
              }`}
            >
              {message.sender}
            </p>
            <div
              className={`flex ${
                message.sender === "Vous" ? "justify-end" : "justify-start"
              } animate-fade-in`}
            >
              <p
                className={`p-2 rounded-lg ${
                  message.sender === "Vous"
                    ? "bg-green-100 text-primary-900"
                    : "bg-gray-200 text-primary-900"
                }`}
              >
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex px-8 py-6">
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
