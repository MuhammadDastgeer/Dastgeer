import { useState } from "react";
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
    label: "👤 About me & skills",
    question: "Tell me about yourself and your skills",
    answer:
      "I'm **Muhammad Dastgeer** — an AI/ML Engineer specializing in **Agentic AI, Generative AI, Machine Learning, Deep Learning, and AI Automation**.\n\n**Core skills:**\n• Python, TensorFlow, PyTorch, scikit-learn\n• LangChain, LangGraph, LangSmith, MCP\n• OpenAI, Gemini, Groq APIs\n• RAG, Vector Stores, Prompt Engineering\n• n8n Automation, Streamlit, Pandas, NumPy\n• Data Analysis & Visualization (Matplotlib, Seaborn, Plotly)",
  },
  {
    id: "projects",
    label: "🚀 Show projects",
    question: "What projects have you built?",
    answer:
      "I've built **30+ projects** across 3 categories:\n\n**🤖 Agentic & GenAI (8):**\nCODA-Ai Code Agent, Code Explainer, AI Travel Agent, Doctor AI, Customer Support Bot, Auto Blog Writer, Real Estate Platform, MCP Client Chatbot\n\n**📊 Machine Learning (8):**\nExtreme Weather Analysis, Movies Recommendation, Student Performance, YouTube Trending, Mental Health Analysis, Code Smells, Stock Market, Ecommerce Behavior\n\n**⚙️ AI Automation (8):**\nWordPress+PDF, Discord Bot, Email HITL, Bulk Gmail, RAG with Drive+Gemini, WhatsApp RAG, RAG Starter, Full Auth System\n\n👉 Check the **Projects** section above for live demos & GitHub links!",
  },
  {
    id: "experience",
    label: "🎓 Experience & education",
    question: "Tell me about your experience and education",
    answer:
      "**💼 Experience:**\n• ML Specialist @ **CodaAlpha**\n• ML Engineer @ **Arch Technologies**\n• Data Science Intern @ **Codveda Technologies**\n\n**🎓 Education:**\n• BS in Computer Science\n• Specialization in AI & Machine Learning\n\n**🏆 Achievements:**\n• 30+ AI agents built\n• 20+ ML projects on Kaggle\n• Multiple certifications in AI, ML, and Data Science\n\n👉 See the **Experience**, **Education** & **Certifications** sections for full details!",
  },
  {
    id: "certifications",
    label: "🏅 Certifications",
    question: "What certifications do you have?",
    answer:
      "**🏅 My Certifications:**\n\n**Codanics:**\n• Six-Month AI & Data Science Mentorship\n• Python ka Chilla for Data Science\n• Tableau for Data Analytics\n\n**InnoVista Learn Easy:**\n• Machine Learning\n• Python Course\n\n**Hugging Face:**\n• MCP (Model Context Protocol)\n\n**Kaggle:**\n• Machine Learning Explainability\n• Deep Learning\n• Computer Vision\n• SQL, Python, Data Visualization, Data Cleaning\n\n🏆 **Kaggle Grandmaster** — Top competitive rank globally!",
  },
  {
    id: "hire",
    label: "💼 Hire me",
    question: "Are you available for hire?",
    answer:
      "**💼 Yes, I'm available for hire!**\n\n**Services I offer:**\n• AI/ML Development & Consulting\n• Agentic AI & GenAI Solutions\n• Machine Learning Model Development\n• AI Automation (n8n, Make.com)\n• RAG Systems & Chatbots\n• Data Science & Analytics\n\n**Experience:**\n• ML Specialist @ CodaAlpha\n• ML Engineer @ Arch Technologies\n• Data Science Intern @ Codveda Technologies\n\n📧 **Email:** dastgeerjutt8888@gmail.com\n💬 **WhatsApp:** Button se contact karein!\n\n**Project-based, full-time, ya freelance** — sab options available hain!",
  },
  {
    id: "kaggle",
    label: "🏆 Kaggle",
    question: "What's your Kaggle profile?",
    answer:
      "**🏆 Kaggle Grandmaster Profile**\n\n**Profile:** kaggle.com/dastgeerjutt\n\n**Certifications Earned:**\n• Machine Learning Explainability\n• Deep Learning\n• Computer Vision\n• SQL, Python, Data Visualization, Data Cleaning\n\n**Competition Rank:** Top competitive rank globally\n\n**Notebooks & Datasets:** Multiple contributions to the Kaggle community\n\n👉 **Visit my Kaggle:** kaggle.com/dastgeerjutt",
  },
];

const fallback =
  "Main aapke sawal ka jawab in topics mein de sakta hoon: **About & Skills**, **Projects**, **Experience & Education**, ya **Contact**. Niche diye buttons par click karein, ya direct email karein: **dastgeerjutt8888@gmail.com**";

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  if (/(hi|hello|hey|salam|assalam)/.test(lower))
    return "Hello! 👋 I'm Muhammad Dastgeer's assistant. Niche diye quick buttons par click karein ya apna sawal type karein!";
  if (/(skill|about|who|kaun|tumhar|aap kaun)/.test(lower)) return quickQuestions[0].answer;
  if (/(project|portfolio|kaam|work)/.test(lower)) return quickQuestions[1].answer;
  if (/(experience|education|qualif|degree|certif|tajurba)/.test(lower)) return quickQuestions[2].answer;
  if (/(contact|email|reach|hire|whatsapp|linkedin|rabta)/.test(lower)) return quickQuestions[3].answer;
  if (/(thank|shukr)/.test(lower)) return "You're welcome! 😊 Koi aur sawal ho to puchein.";
  return fallback;
};

type Message = { role: "user" | "bot"; text: string };

const formatText = (text: string) => {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {parts.map((p, j) =>
          p.startsWith("**") && p.endsWith("**") ? (
            <strong key={j} className="font-semibold">{p.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{p}</span>
          )
        )}
        <br />
      </span>
    );
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text:
        "Hi! 👋 I'm Muhammad's assistant. Quick sawal ke liye niche buttons par click karein, ya apna sawal type karein!",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botMsg: Message = { role: "bot", text: getResponse(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleQuickClick = (q: QuickQuestion) => {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: q.question },
      { role: "bot", text: q.answer },
    ]);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 md:right-8 w-[22rem] max-w-[calc(100vw-2rem)] bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="gradient-purple-bg p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <MessageCircle className="text-primary-foreground" size={20} />
                <span className="text-primary-foreground font-semibold text-sm">
                  Chat with AI Assistant
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "gradient-purple-bg text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="px-3 pb-2 flex-shrink-0 border-t border-border pt-2">
              <div className="flex items-center gap-1 mb-2">
                <Sparkles size={12} className="text-primary" />
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Quick questions
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleQuickClick(q)}
                    className="text-[11px] px-2.5 py-1.5 rounded-full border border-border bg-secondary text-foreground hover:gradient-purple-bg hover:text-primary-foreground hover:border-transparent transition-all"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 border-t border-border flex gap-2 flex-shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={() => sendMessage(input)}
                className="gradient-purple-bg text-primary-foreground p-2 rounded-lg hover:opacity-90"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-4 md:right-8 gradient-purple-bg text-primary-foreground p-4 rounded-full shadow-lg z-50"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  );
};

export default Chatbot;
