import React, { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type QuickQuestion = {
  id: string;
  label: string;
  question: string;
  answer: string;
};

const quickQuestions: QuickQuestion[] = [
  {
    id: "about",
    label: "About & Stack",
    question: "Tell me about Muhammad's background & stack",
    answer:
      "I'm **Muhammad Dastgeer** — AI/ML Engineer specializing in **Autonomous Agents, Enterprise RAG, and Cloud Deployment**.\n\n**Core Stack:**\n• Python 3.12, PyTorch, TensorFlow, Scikit-Learn\n• LangGraph, LangChain, CrewAI, MCP Architecture\n• AWS (EC2, S3) & Microsoft Azure\n• Hybrid Vector RAG, ChromaDB, FastAPI, Docker",
  },
  {
    id: "projects",
    label: "Shipped Systems",
    question: "What production systems have you built?",
    answer:
      "I've built **30+ AI systems** across three core pillars:\n\n**Agentic & GenAI:**\nRAG Showcase, Medicall Healthcare Platform, CODA-Ai Code Agent, Travel Agent, Auto Blog Writer, MCP Chatbot\n\n**Machine Learning:**\nPredictive Price Engines, Weather Forecaster, Movie Recommendation, Stock Forecaster, AST Code Smell Analyzer\n\n**Automations:**\nWhatsApp Multimodal RAG, Discord Support Bot, Human-in-the-Loop Email drafter, ETL Ingestion Flows",
  },
  {
    id: "experience",
    label: "Experience",
    question: "Tell me about your industrial experience",
    answer:
      "**Industrial Track Record:**\n• AI/ML Intern @ **Zeltrion Solutions** (Certificate ID: ZS-0004)\n• ML Engineer @ **Codveda Technologies**\n• ML Specialist @ **Arch Technologies**\n• ML Specialist @ **CodaAlpha**\n\n**Academic Foundation:**\n• Intermediate ICS (Computer Science) — BISE Faisalabad\n• DigiSkills AI with Python & AWS Cloud Certified",
  },
  {
    id: "hire",
    label: "Hire Muhammad",
    question: "Are you available for contract or full-time roles?",
    answer:
      "**Yes, actively available for AI Engineering roles & contract builds!**\n\n**Collaboration Areas:**\n• Autonomous AI Multi-Agent Architecture\n• Custom LLM Fine-Tuning & RAG Systems\n• Production MLOps on AWS & Azure\n• Intelligent Workflow Automation (n8n, Make)\n\n📧 **Email:** dastgeerjutt8888@gmail.com\n💬 **WhatsApp:** +92 318 2460719\n🔗 **LinkedIn:** https://www.linkedin.com/in/muhammad-dastgeer",
  },
];

const fallback =
  "Ask me anything about Muhammad Dastgeer's **Stack**, **Projects**, **Experience**, or **Hiring**. Select a suggestion or reach Muhammad directly at **dastgeerjutt8888@gmail.com**.";

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (/(hi|hello|hey|salam|assalam)/.test(lower))
    return "Hello! 👋 I'm Muhammad Dastgeer's Portfolio Assistant. Select a topic below or ask about Muhammad's engineering stack!";
  if (/(skill|about|who|kaun|stack)/.test(lower)) return quickQuestions[0].answer;
  if (/(project|portfolio|work|demo)/.test(lower)) return quickQuestions[1].answer;
  if (/(experience|education|qualif|degree|certif|zeltrion|internship)/.test(lower))
    return quickQuestions[2].answer;
  if (/(contact|email|reach|hire|whatsapp|linkedin|role)/.test(lower)) return quickQuestions[3].answer;
  return fallback;
};

type Message = {
  role: "user" | "bot";
  text: string;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hi! I am Muhammad Dastgeer's AI Portfolio Assistant. Ask about his **Autonomous Agents**, **Machine Learning Deployments**, or **Availability**!",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botResponse: Message = { role: "bot", text: getResponse(text) };
    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");
  };

  const handleQuickClick = (q: QuickQuestion) => {
    sendMessage(q.question);
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\n)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part === "\n") {
        return <br key={i} />;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 md:right-8 w-[22rem] max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col border border-border"
          >
            {/* Header */}
            <div className="bg-surface border-b border-border p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Sparkles size={15} />
                </div>
                <div>
                  <span className="text-foreground font-heading font-semibold text-sm block leading-tight">
                    Portfolio Assistant
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white font-medium"
                        : "bg-surface border border-border text-foreground"
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="px-3.5 pb-2.5 flex-shrink-0 border-t border-border pt-2.5 bg-surface/40">
              <span className="text-[10px] text-muted-foreground font-medium block mb-1.5">
                Suggested Topics:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuickClick(q)}
                    className="text-[11px] px-2 py-0.5 rounded-md border border-border bg-surface text-foreground hover:border-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <div className="p-3 border-t border-border flex gap-2 flex-shrink-0 bg-surface">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about stack, architecture..."
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-border bg-surface text-foreground focus:outline-none focus:border-blue-600 placeholder:text-muted-foreground/60"
              />
              <button
                onClick={() => sendMessage(input)}
                className="btn-primary p-2 rounded-lg cursor-pointer"
                aria-label="Send message"
              >
                <Send size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 md:right-8 w-10 h-10 rounded-full flex items-center justify-center bg-blue-600 text-white shadow-md hover:bg-blue-700 z-50 transition-colors cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={17} /> : <MessageCircle size={17} />}
      </button>
    </>
  );
};

export default Chatbot;
