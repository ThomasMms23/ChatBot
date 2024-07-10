"use client";
import { useState } from "react";
import Chatbot from "./Chatbot";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const ChatbotWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="relative w-80 sm:w-96 animate-fade">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-500"
          >
            &times;
          </button>
          <Chatbot />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-500 hover:bg-primary-600 transition-colors duration-300 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />
        </button>
      )}
    </div>
  );
};

export default ChatbotWrapper;
