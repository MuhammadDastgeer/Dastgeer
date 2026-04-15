import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const botResponses = {
  "hello": "Hello! 👋 I'm Muhammad Dastgeer's AI assistant. How can I help you?",
  "hi": "Hi there! 👋 Welcome! Ask me anything about Muhammad's work, skills, or how to get in touch.",
  "services": "Muhammad offers: AI/ML Development, Deep Learning, Agentic AI Systems, Data Analytics, Generative AI, and AI Automation. Want to know more about any?",
  "skills": "Muhammad is skilled in Python, TensorFlow, PyTorch, LangChain, OpenAI, scikit-learn, Pandas, and many more AI/ML tools!",
  "contact": "You can reach Muhammad at dastgeerjutt8888@gmail.com or connect on LinkedIn. He responds within 24 hours!",
  "experience": "Muhammad has worked as ML Specialist at CodaAlpha, Arch Technologies & Codveda Technologies. He's built 30+ AI agents and 20+ ML projects!",
  "projects": "Muhammad has built AI Assistants, Real Estate platforms, Token Optimization Engines, and Full-Stack AI Platforms. Check the Projects section!",
  "hire": "Muhammad is currently available for hire! Fill out the contact form or email dastgeerjutt8888@gmail.com to discuss your project.",
  "kaggle": "Muhammad is a Kaggle Grandmaster! Check his profile: kaggle.com/dastgeerjutt 🏆",
};

const getResponse = (msg) => {
  const lower = msg.toLowerCase();
  for (const [key, val] of Object.entries(botResponses)) {
    if (lower.includes(key)) return val;
  }
  return "Thanks for your message! For detailed inquiries, please email dastgeerjutt8888@gmail.com or fill the contact form. I can help with: services, skills, contact, experience, projects, hire, kaggle.";
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 I'm Muhammad's AI assistant. Ask me about his skills, projects, or how to get in touch!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    const botMsg = { role: "bot", text: getResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 md:right-8 w-80 bg-card border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="gradient-purple-bg p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="text-primary-foreground" size={20} />
                <span className="text-primary-foreground font-semibold text-sm">Chat with AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
                <X size={18} />
              </button>
            </div>

            <div className="h-72 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs ${msg.role === "user" ? "gradient-purple-bg text-primary-foreground" : "bg-secondary text-foreground"}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 text-xs rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button onClick={handleSend} className="gradient-purple-bg text-primary-foreground p-2 rounded-lg hover:opacity-90">
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
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </>
  );
};

export default Chatbot;
