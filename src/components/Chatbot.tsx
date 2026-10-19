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
    label: "👤 About & Skills",
    question: "Tell me about yourself and your skills",
    answer:
      "I'm **Muhammad Dastgeer** — an AI/ML Engineer specializing in **Autonomous Agentic AI, Generative AI & RAG, Deep Learning, and Cloud Computing**.\n\n**Core Stack:**\n• Python 3.12, PyTorch, TensorFlow, Scikit-Learn\n• LangGraph, LangChain, CrewAI, MCP Architecture\n• AWS (EC2, S3) & Microsoft Azure\n• Hybrid Vector RAG, ChromaDB, FastAPI, Docker",
  },
  {
    id: "projects",
    label: "🚀 Show Projects",
    question: "What projects have you built?",
    answer:
      "I've built **30+ AI systems** across three core pillars:\n\n**🤖 Agentic & GenAI:**\nRAG Showcase, Medicall Healthcare Platform, CODA-Ai Code Agent, Code Explainer, AI Travel Agent, Auto Blog Writer, MCP Chatbot\n\n**📊 Machine Learning:**\nExtreme Weather Analysis, Movies Recommendation, Student Performance, Stock Market Analysis, Code Smells Refactoring\n\n**⚙️ AI Automation:**\nWhatsApp Multimodal RAG, Full Auth Workflow, Discord Bot, Email HITL, Bulk Gmail & Google Sheets automation\n\n👉 Check out the **Projects** section for live interactive demos!",
  },
  {
    id: "experience",
    label: "🎓 Experience & Track Record",
    question: "Tell me about your experience and background",
    answer:
      "**💼 Professional Experience:**\n• AI/ML Intern @ **Zeltrion Solutions** (15 Aug – 15 Oct 2026 • Certificate ID: ZS-0004)\n• ML Engineer @ **Codveda Technologies**\n• ML Specialist @ **Arch Technologies**\n• ML Specialist @ **CodaAlpha**\n\n**🎓 Education & Training:**\n• Intermediate ICS (Computer Science) — BISE Faisalabad\n• Certified in AI using Python & AWS Cloud by DigiSkills\n• 6-Month AI Mentorship — Codanics\n\n👉 See the **About** and **Web CV** pages for verified credentials!",
  },
  {
    id: "hire",
    label: "💼 Hire Me",
    question: "Are you available for hire?",
    answer:
      "**💼 Yes, I am actively available for Q4 2026 roles!**\n\n**Areas of Collaboration:**\n• Autonomous AI Multi-Agent Architecture\n• Custom LLM Fine-Tuning & RAG Pipelines\n• Predictive ML Model Training & Telemetry\n• Enterprise Workflow Automation (n8n, Make)\n• Cloud AI Deployment on AWS & Azure\n\n📧 **Email:** dastgeerjutt8888@gmail.com\n💬 **WhatsApp:** Available on the floating green button\n\nAvailable for full-time, contract, and advisory engagements worldwide!",
  },
];

const fallback =
  "You can ask me about **About & Skills**, **Projects**, **Experience**, or **Hiring**. Click any suggested chip below or reach Muhammad directly at **dastgeerjutt8888@gmail.com**.";

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (/(hi|hello|hey|salam|assalam)/.test(lower))
    return "Hello! 👋 I'm Muhammad Dastgeer's AI Portfolio Assistant. Select a topic below or ask me any question about Muhammad's engineering stack!";
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

const formatText = (text: string) => {
  return text.split("\n").map((line, i) => {
    let formatted: React.ReactNode = line;
    if (line.startsWith("• ")) {
      formatted = <span className="block ml-2">{line}</span>;
    }
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts: (string | React.ReactNode)[] = [];
    let lastIndex = 0;
    let match;
    const str = typeof formatted === "string" ? formatted : line;
    while ((match = boldRegex.exec(str)) !== null) {
      if (match.index > lastIndex) {
        parts.push(str.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="text-aurora-cyan font-bold">
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < str.length) {
      parts.push(str.substring(lastIndex));
    }
    return (
      <span key={i} className="block mb-1">
        {parts.length > 0 ? parts : formatted}
      </span>
    );
  });
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hi there! I'm Muhammad Dastgeer's AI Assistant. Ask me about his autonomous AI agents, machine learning experience, or availability!",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botReply: Message = { role: "bot", text: getResponse(text) };
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  const handleQuickClick = (q: QuickQuestion) => {
    sendMessage(q.question);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 md:right-8 w-[23rem] max-w-[calc(100vw-2rem)] glass-pill rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col border border-border"
          >
            {/* Header */}
            <div className="bg-surface/80 border-b border-border p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-aurora-violet/15 border border-aurora-violet/30 text-aurora-violet flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <span className="text-foreground font-heading font-bold text-sm block leading-tight">
                    AI Assistant
                  </span>
                  <span className="mono-tag text-[10px] text-aurora-cyan flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Live Agent
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white font-medium shadow-md"
                        : "bg-surface border border-border text-foreground"
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Suggestions */}
            <div className="px-3.5 pb-2.5 flex-shrink-0 border-t border-border pt-2.5 bg-surface/40">
              <div className="flex items-center gap-1 mb-2">
                <Sparkles size={11} className="text-aurora-violet" />
                <span className="mono-tag text-[9px] text-muted-foreground">
                  Quick inquiries
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuickClick(q)}
                    className="mono-tag text-[10px] px-2.5 py-1 rounded-full border border-border bg-surface text-foreground hover:border-aurora-violet hover:text-aurora-cyan transition-all cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <div className="p-3 border-t border-border flex gap-2 flex-shrink-0 bg-surface/60">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask about AI stack, architecture..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-border bg-surface text-foreground focus:outline-none focus:border-aurora-violet focus:ring-1 focus:ring-aurora-violet/30 placeholder:text-muted-foreground/60"
              />
              <button
                onClick={() => sendMessage(input)}
                className="btn-gradient p-2.5 rounded-xl cursor-pointer"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 md:right-8 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-aurora-violet to-aurora-cyan text-white shadow-lg hover:shadow-aurora-violet/50 z-50 transition-all cursor-pointer border border-white/20"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </motion.button>
    </>
  );
};

export default Chatbot;
