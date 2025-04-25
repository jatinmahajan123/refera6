import React, { useState, useRef, useEffect } from "react";
import { Bell, Send, User } from "lucide-react";
import {
  LinkIcon,
  PlusCircleIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Types
interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface Campaign {
  goal: string;
  reward: string;
  condition: string;
  duration: string;
}

const AIAgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Welcome Back, Kadin! How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "2",
      content:
        "Hey, I want to create a new referral campaign, but I'd like some help from AI to make sure it's set up correctly and performs well. Can you guide me through it?",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "3",
      content:
        "Absolutely! I'll help you create a high-converting referral campaign step by step. Let's start by defining your main objective. What's the primary goal of this campaign?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "4",
      content:
        "My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I'd like to reward them for it.",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "5",
      content:
        "That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "6",
      content: "Discount on next purchase",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "7",
      content:
        "Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "8",
      content: "15%",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "9",
      content:
        "15% sounds like a strong incentive! Now, let's define when a referral is considered valid. When should the referrer receive their reward?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "10",
      content: "When the referred person signs up",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "11",
      content:
        "That's a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "12",
      content:
        "I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later.",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "13",
      content:
        "Got it! Here's a quick summary of your campaign:\n\n• Goal: Increase sales\n• Reward: 15% discount on the next purchase\n• Condition: Reward is given when the referred person makes a purchase\n• Duration: 3 months",
      sender: "ai",
      timestamp: new Date(),
    },
    {
      id: "14",
      content: "Launch",
      sender: "user",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand your request. Let me help you with that.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2 text-sm text-black-500 cursor-pointer mt-6 mb-6 ml-4">
      
          <h1 className="text-2xl font-bold ">AI Agent</h1>
        </div>
        <div className="flex items-center gap-4 mt-6 mr-8">
          <Bell className="w-5 h-5 text-gray-400" />
          <div className="flex items-center gap-2 ">
            <User className="w-6 h-6 rounded-full bg-gray-200 p-1" />
            <div className="text-sm ">
              <p className="font-semibold text-gray-700">Kadin Stanton</p>
              <p className="text-gray-400 text-xs">kadinstanton@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                } mb-4`}
              >
                {message.sender === "ai" && (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 mt-1">
                    <span className="text-white text-xs">A</span>
                  </div>
                )}
                <div
                  className={`max-w-md rounded-lg p-4 ${
                    message.sender === "user"
                      ? "bg-white text-gray-800 border border-gray-200"
                      : "bg-blue-50 text-gray-800"
                  }`}
                >
                  {message.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== message.content.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center ml-2 mt-1">
                    <span className="text-gray-600 text-xs">K</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="bg-white py-4 px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 mb-3">Quick Links</p>
            <div className="flex space-x-4">
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                SEND REFERRAL
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
                CREATE CAMPAIGN
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4M12 8h.01" />
                </svg>
                FOLLOW-UP
              </button>
              <button className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
                VIEW REFERRAL
              </button>
            </div>
          </div>
        </div> */}
        <div className="bg-white py-4 px-8 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-black font-medium mb-4">Quick Links</p>
            <div className="flex space-x-4">
              <button className="rounded-md border border-blue-500 px-6 py-2 text-sm text-blue-600 font-semibold flex items-center hover:bg-blue-50 transition">
                <LinkIcon className="w-4 h-4 mr-2 text-blue-500" />
                SEND REFERRAL
              </button>
              <div >
                <button className="rounded-md border border-blue-500 px-6 py-2 text-sm text-blue-600 font-semibold flex items-center hover:bg-blue-50 transition">
                  <PlusCircleIcon className="w-4 h-4 mr-2 text-blue-500" />
                  CREATE CAMPAIGN
                </button>
              </div>
              <div>
                <button className="rounded-md border border-blue-500 px-6 py-2 text-sm text-blue-600 font-semibold flex items-center hover:bg-blue-50 transition">
                  <Cog6ToothIcon className="w-4 h-4 mr-2 text-blue-500" />
                  FOLLOW-UP
                </button>
              </div>
              <div  >
                <button className="rounded-md border border-blue-500 px-6 py-2 text-sm text-blue-600 font-semibold flex items-center hover:bg-blue-50 transition">
                  <UserIcon className="w-4 h-4 mr-2 text-blue-500" />
                  VIEW REFERRAL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700"
              >
                <Send size={22} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Settings and Help */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
          <svg
            className="w-4 h-4 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
          <svg
            className="w-4 h-4 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AIAgentChat;
