"use client";

import { useState } from "react";
import { Send, Sparkles, Database, User } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

const mockConversation: Conversation = {
  id: "1",
  title: "Customer Revenue Analysis",
  messages: [
    {
      id: "1",
      role: "user",
      content: "Show me the top 10 customers by revenue this quarter",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      role: "assistant",
      content: "Here are the top 10 customers by revenue this quarter:\n\n| Customer | Revenue |\n|----------|----------|\n| Acme Corp | $124,500 |\n| TechStart Inc | $98,200 |\n| Global Solutions | $87,300 |\n| InnovateTech | $76,800 |\n| DataFlow Systems | $65,400 |\n| CloudNine | $54,200 |\n| Nexus Partners | $48,900 |\n| Prime Digital | $42,100 |\n| Summit Tech | $38,500 |\n| Velocity Inc | $32,700 |",
      timestamp: "10:30 AM",
    },
  ],
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [conversation] = useState(mockConversation);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar - Conversations */}
      <div className="w-80 border-r border-border bg-card">
        <div className="flex h-16 items-center justify-between border-b border-border px-4">
          <h2 className="font-semibold">Conversations</h2>
          <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        <div className="p-3">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="space-y-1 p-3">
          <button className="flex w-full items-start gap-3 rounded-lg bg-primary/10 px-3 py-3 text-left">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium">Customer Revenue Analysis</p>
              <p className="mt-1 truncate text-xs text-muted-foreground">
                Show me the top 10 customers by revenue...
              </p>
            </div>
          </button>
          <button className="flex w-full items-start gap-3 rounded-lg px-3 py-3 text-left text-muted-foreground transition-colors hover:bg-muted">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium">Product Inventory Query</p>
              <p className="mt-1 truncate text-xs">
                What products are low on stock?
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <div>
            <h1 className="font-semibold">Customer Revenue Analysis</h1>
            <p className="text-xs text-muted-foreground">E-commerce Production Database</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <Database className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {conversation.messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-4 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/50"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                  <p
                    className={`mt-1 text-xs ${
                      msg.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
                {msg.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-border bg-card p-6">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-end gap-3 rounded-xl border border-border bg-muted/30 p-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Ask anything about your database..."
                rows={1}
                className="flex-1 resize-none bg-transparent text-sm focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary-hover disabled:opacity-50 disabled:hover:bg-primary"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageSquare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}
