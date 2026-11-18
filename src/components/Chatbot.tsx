import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react";
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
      "I'm **Muhammad Dastgeer** — **AI/ML Engineer | Generative AI & Agentic AI Specialist | AI Automation Engineer | Data Scientist** based in **Pir Mahal, Punjab, Pakistan** (Open to Remote).\n\n**Core Tech Stack:**\n• **Programming:** Python (Advanced), SQL, Linear Algebra, Calculus, Probability\n• **Generative & Agentic AI:** LangGraph, LangChain, CrewAI, AutoGen, LlamaIndex, MCP Servers, RAG, OpenAI, Gemini, Claude, Groq\n• **AI Automation:** n8n Workflows, Make.com, Zapier, Webhooks, FastAPI, Flask, Celery, Redis\n• **ML / DL / CV / NLP:** PyTorch, TensorFlow/Keras, Scikit-learn, XGBoost, LightGBM, YOLOv8, OpenCV, BERT, Hugging Face\n• **MLOps & Cloud:** AWS, Docker, MLflow, Weights & Biases, GitHub Actions, Streamlit, Gradio",
  },
  {
    id: "projects",
    label: "All Projects",
    question: "What projects have you built and where are the GitHub links?",
    answer:
      "I've built **30+ production AI systems** across 3 pillars (all GitHub repos linked in the Projects section):\n\n**1. Flagship & Agentic AI:**\n• RAG Showcase Platform (`RAG-Showcase.git`)\n• Medicall Healthcare AI (`Medicall-.git`)\n• AI Content Studio (`AI-Content-Generator.git`)\n• LeetMaster Coding Tutor (`LeetMaster-.git`)\n• Student Plan AI (`Student-Plan-Ai.git`)\n• MediNexus (`MediNexus.git`)\n• Voice Desk AI (`Voice-Desk-Ai.git`)\n• CODA-Ai Code Agent (`CODA-Ai-APP.git`)\n• Code Explainer (`code-explainer-app.git`) & AI File Summarizer (`AI-File-Summarizer.git`)\n• Travel Agent (`travel_agent_app.git`), Healthcare Agent (`Health_Care_app.git`), Support Bot (`Customer_Support_chatbot_app.git`), Auto Blog Writer (`Writes-Blogs-Automatically-Agent.git`), Chatbot With Tools (`Chatbot_With_Tools.git`)\n\n**2. Machine Learning Suite (8 Systems):**\nReal Estate Valuation, Weather Forecaster, Movie Recommender, Student Performance, YouTube Transcriber, Mental Health NLP, Code Smell AST Detector, Stock LSTM Forecaster → https://github.com/MuhammadDastgeer/Machine-Learning-Project.git\n\n**3. AI Workflows (7 n8n Automations):**\nWordPress PDF Flow, Discord Bot, HITL Email Drafter, Gmail-to-Sheets ETL, Drive RAG, WhatsApp RAG, Production RAG Starter → https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    id: "experience",
    label: "Experience",
    question: "Tell me about your professional experience",
    answer:
      "**Industrial Track Record:**\n• **Intern — Zeltrion Solutions** (Aug 2026 – Oct 2026 | Certificate ID: `ZS-0004`)\n• **Machine Learning Engineer — Codveda Technologies** (Apr 2025 – Present): End-to-end ML pipelines (~40% faster manual work), PyTorch/TF models, RAG & Agentic workflows, n8n/Make/Zapier automation, A/B testing\n• **Machine Learning Specialist — Arch Technologies** (Apr 2025 – Present): Predictive modeling with cross-validation F1 scores > 0.88\n• **Machine Learning Specialist — CodaAlpha** (Mar 2025 – Present): Structured data ML pipelines, staging deployments, drift monitoring\n• **Computer Operator — Johar Centre Pir Mahal** (2022 – 2023): Digital records & office automation",
  },
  {
    id: "certifications",
    label: "Certifications",
    question: "What certifications & courses do you hold?",
    answer:
      "**23+ Verifiable Certifications & Courses:**\n\n• **Anthropic:** Claude Code in Action (ID: `rq3po9kci9cz`) & Intro to Agent Skills (ID: `468m7vdx4qec`)\n• **Google & Kaggle:** 5-Day AI Agents Intensive Course with Google\n• **Hugging Face:** The MCP Course (Unit 1: Fundamentals of MCP)\n• **Codanics (Dr. Aammar Tufail):** 6-Month AI & Data Science Mentorship (`7c0b5ee721163f62`), 40-Day Python ka Chilla (`ee2cb003d9d2a8e2`), Tableau for Data Analytics (`061273d4959c5ccb`)\n• **Kaggle (11 Courses):** Intro to Deep Learning, ML Explainability, Computer Vision, Intermediate ML, Intro to ML, Advanced SQL, Data Viz, Data Cleaning, Pandas, Python, Intro to Programming\n• **InnoVista Learn Easy:** Machine Learning (`589-5943-98335`) & Python (`589-2222-98335`)\n• **Industry & Govt:** Zeltrion Solutions (`ZS-0004`), DigiSkills AI Using Python (`GUK3WTMMK`) & Cloud Computing (`GXAAAXHMK`)\n\nYou can view/preview all 23 PDFs & Images directly in the **Certifications** section!",
  },
  {
    id: "education",
    label: "Education & CV",
    question: "Tell me about education, languages, and CV",
    answer:
      "**Education:**\n• **Intermediate (ICS) — Computer Science** | BISE Faisalabad (2022)\n• **Matric — Computer Science** | BISE Faisalabad (2020)\n\n**Languages:**\n• English (Professional)\n• Urdu (Native)\n• Punjabi (Native)\n\n**Official CV:**\nClick **Resume (PDF)** in the Hero or visit the **Web CV** page to preview or download the latest 2-page official PDF CV.",
  },
  {
    id: "hire",
    label: "Contact & Hire",
    question: "How can I contact or hire Muhammad?",
    answer:
      "**Actively available for Full-Time, Remote, or Contract AI Engineering roles!**\n\n**Direct Contact:**\n• **Email:** dastgeerjutt8888@gmail.com\n• **Phone / WhatsApp:** +92 318 2460719\n• **Location:** Pir Mahal, Punjab, Pakistan (Open to Remote Worldwide)\n• **GitHub:** https://github.com/MuhammadDastgeer\n• **LinkedIn:** https://www.linkedin.com/in/muhammad-dastgeer\n• **Portfolio:** https://dastgeer.vercel.app",
  },
];

type KnowledgeRule = {
  keywords: RegExp;
  answer: string;
};

const knowledgeRules: KnowledgeRule[] = [
  {
    keywords: /\b(hi|hello|hey|salam|assalam|aoa|hy|greetings)\b/,
    answer:
      "Assalam-o-Alaikum / Hello! 👋 I'm **Muhammad Dastgeer's Portfolio Assistant**. Ask me anything about his **Projects, GitHub Repos, Tech Stack, Experience, Certifications, Education, CV, or Contact Details**!",
  },
  {
    keywords: /(anthropic|claude code|agent skills|rq3po9kci9cz|468m7vdx4qec|skilljar)/,
    answer:
      "**Anthropic Certifications:**\n• **Claude Code in Action** — Issued March 16, 2026 | ID: `rq3po9kci9cz` | Verify: https://verify.skilljar.com/c/rq3po9kci9cz\n• **Introduction to Agent Skills** — Issued March 2026 | ID: `468m7vdx4qec` | Verify: https://verify.skilljar.com/c/468m7vdx4qec\n\nBoth PDF certificates can be previewed inline in the **Certifications** section under **Agentic AI & LLMs**.",
  },
  {
    keywords: /(codanics|aammar|chilla|tableau|mentorship)/,
    answer:
      "**Codanics Certifications (Instructor: Dr. Muhammad Aammar Tufail):**\n• **Six Months of AI & Data Science Mentorship Program** (July 27, 2025 | ID: `7c0b5ee721163f62`)\n• **Python ka Chilla for Data Science — 40 Days** (July 28, 2025 | ID: `ee2cb003d9d2a8e2`)\n• **Tableau for Data Analytics** (July 29, 2025 | ID: `061273d4959c5ccb`)\n\nAll 3 PDF certificates are available in the **Certifications** section.",
  },
  {
    keywords: /(kaggle|deep learning|explainability|advanced sql|data cleaning|data visualization|pandas)/,
    answer:
      "**Kaggle & Google Accreditations (12 Verified Certificates):**\n• **5-Day AI Agents Intensive Course with Google** (Dec 2025)\n• **ML & Deep Learning:** Intro to Deep Learning, Machine Learning Explainability (SHAP), Computer Vision (CNNs), Intermediate ML (XGBoost), Intro to ML\n• **Data & Programming:** Advanced SQL, Data Visualization, Data Cleaning, Pandas, Python, Intro to Programming\n\nAll images can be viewed full-size in the **Certifications** section!",
  },
  {
    keywords: /(innovista|digiskills|ignite|hugging face|mcp|guk3wtmmk|gxaaaxhmk)/,
    answer:
      "**Additional Accredited Courses:**\n• **Hugging Face:** The MCP Course: Unit 1 — Fundamentals of Model Context Protocol (July 31, 2025)\n• **InnoVista Learn Easy:** Machine Learning Course (`589-5943-98335`) & Python Course (`589-2222-98335`)\n• **DigiSkills.pk (Ignite & Virtual University):** Artificial Intelligence Using Python (ID: `GUK3WTMMK`, July 2026) & Cloud Computing (ID: `GXAAAXHMK`, Nov 2026) — verify at https://digiskills.pk/verify",
  },
  {
    keywords: /(zeltrion|zs-0004|intern|internship)/,
    answer:
      "**Zeltrion Solutions — AI / ML Internship:**\n• **Period:** Aug 2026 – Oct 2026\n• **Credential ID:** `ZS-0004`\n• Successfully completed the industrial Internship Program demonstrating dedication, teamwork, innovation, and data-driven engineering.",
  },
  {
    keywords: /(codveda|arch|codaalpha|johar|company|companies|job|experience|career|work history)/,
    answer: quickQuestions[2].answer,
  },
  {
    keywords: /(rag showcase|medicall|leetmaster|student plan|medinexus|content studio|content generator|voice desk|coda-ai|code explainer|file summarizer|travel agent|blog writing|chatbot with tools|customer support)/,
    answer:
      "**Featured Agentic & GenAI GitHub Repositories:**\n• **RAG Showcase:** https://github.com/MuhammadDastgeer/RAG-Showcase.git\n• **Medicall AI:** https://github.com/MuhammadDastgeer/Medicall-.git\n• **AI Content Studio:** https://github.com/MuhammadDastgeer/AI-Content-Generator.git\n• **LeetMaster Tutor:** https://github.com/MuhammadDastgeer/LeetMaster-.git\n• **Student Plan AI:** https://github.com/MuhammadDastgeer/Student-Plan-Ai.git\n• **MediNexus:** https://github.com/MuhammadDastgeer/MediNexus.git\n• **Voice Desk AI:** https://github.com/MuhammadDastgeer/Voice-Desk-Ai.git\n• **CODA-Ai Code Agent:** https://github.com/MuhammadDastgeer/CODA-Ai-APP.git\n• **Code Explainer:** https://github.com/MuhammadDastgeer/code-explainer-app.git\n• **AI File Summarizer:** https://github.com/MuhammadDastgeer/AI-File-Summarizer.git\n• **Travel Agent:** https://github.com/MuhammadDastgeer/travel_agent_app.git\n• **Healthcare Agent:** https://github.com/MuhammadDastgeer/Health_Care_app.git\n• **Support Chatbot:** https://github.com/MuhammadDastgeer/Customer_Support_chatbot_app.git\n• **Auto Blog Agent:** https://github.com/MuhammadDastgeer/Writes-Blogs-Automatically-Agent.git\n• **Chatbot With Tools:** https://github.com/MuhammadDastgeer/Chatbot_With_Tools.git",
  },
  {
    keywords: /(n8n|make\.com|zapier|workflow|automation|wordpress|discord|gmail|whatsapp|etl|hitl)/,
    answer:
      "**AI Workflow Automation Stack & Projects:**\n• **Tools:** n8n, Make.com, Zapier, Webhooks, FastAPI, Celery, Redis\n• **7 Shipped n8n Systems:** WordPress PDF Flow, Discord AI Support Bot, HITL Email Drafter, Gmail-to-Sheets ETL, Google Drive Enterprise RAG, WhatsApp Knowledge Base RAG, Production RAG Starter\n• **GitHub Repository:** https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    keywords: /(machine learning|\bml\b|real estate|house price|weather|movie|student performance|youtube|mental health|code smell|stock|xgboost|lightgbm|scikit|lstm)/,
    answer:
      "**Machine Learning Projects & Competencies:**\n• **8 ML Systems:** Real Estate Valuation (92% R²), Weather Forecasting Engine, Movie Recommender, Student Performance Predictor, YouTube Whisper Transcriber, Mental Health Sentiment AI, AST Code Smell Detector, and Stock LSTM Forecaster.\n• **GitHub Repository:** https://github.com/MuhammadDastgeer/Machine-Learning-Project.git\n• **Benchmarks:** Cross-validation F1 > 0.88 at Arch Technologies & ~40% manual workflow reduction at Codveda.",
  },
  {
    keywords: /(yolo|opencv|computer vision|bert|nlp|sentiment|mlflow|docker|mlops|ci\/cd|github actions|object detection)/,
    answer:
      "**Deep Learning, Computer Vision, NLP & MLOps Highlights (from CV):**\n• **YOLOv8 Real-Time Object Detection:** Fine-tuned custom multi-class models achieving **mAP@0.5 of 0.91** with real-time OpenCV + Streamlit pipeline.\n• **BERT Text Classification & Sentiment AI:** Fine-tuned BERT/DistilBERT achieving **F1 > 0.91**, served via FastAPI.\n• **MLOps Pipeline:** MLflow experiment tracking & registry, Docker containers, statistical drift detection, automated retraining, and GitHub Actions CI/CD.",
  },
  {
    keywords: /(project|portfolio|repo|github|work|build|built|system|agentic|rag)/,
    answer: quickQuestions[1].answer,
  },
  {
    keywords: /(certif|course|training|credential|badge|accreditation|pdf|image)/,
    answer: quickQuestions[3].answer,
  },
  {
    keywords: /(education|ics|matric|bise|faisalabad|study|college|degree|qualification|language|urdu|english|punjabi)/,
    answer: quickQuestions[4].answer,
  },
  {
    keywords: /(cv|resume|download)/,
    answer:
      "**Muhammad Dastgeer's Official CV (2-Page PDF):**\n• Click the **Resume (PDF)** button in the top Hero section or **PDF Resume** in the Footer to download it directly.\n• Visit the **Web CV** page in the navigation bar to view the interactive CV or preview the official PDF inline.",
  },
  {
    keywords: /(skill|stack|tech|python|pytorch|tensorflow|langgraph|langchain|crewai|aws|azure|fastapi|sql|tool|competenc)/,
    answer: quickQuestions[0].answer,
  },
  {
    keywords: /(contact|email|phone|number|call|whatsapp|linkedin|hire|available|freelance|remote|contract|salary|rate|location|pir mahal|pakistan|reach)/,
    answer: quickQuestions[5].answer,
  },
  {
    keywords: /(about|who|kaun|intro|summary|dastgeer|name)/,
    answer: quickQuestions[0].answer,
  },
];

const fallback =
  "**Muhammad Dastgeer** is an **AI/ML Engineer, Generative & Agentic AI Specialist, and AI Automation Engineer**.\n\nYou can ask me about:\n• **Tech Stack & Skills** (Python, LangGraph, RAG, PyTorch, n8n, MLOps)\n• **30+ Projects & GitHub Links** (Agentic AI, Machine Learning, n8n Workflows)\n• **Experience** (Zeltrion Solutions, Codveda, Arch Technologies, CodaAlpha)\n• **23+ Certifications** (Anthropic, Google, Hugging Face, Kaggle, Codanics)\n• **Education, CV & Contact** (`dastgeerjutt8888@gmail.com` | `+92 318 2460719`)";

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase().trim();
  for (const rule of knowledgeRules) {
    if (rule.keywords.test(lower)) {
      return rule.answer;
    }
  }
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
      text: "Hi! 👋 I'm **Muhammad Dastgeer's Portfolio Assistant**. Ask me anything about his **Projects, GitHub Links, Tech Stack, Experience, Certifications, Education, CV, or Hiring**!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

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
    const parts = text.split(/(\*\*.*?\*\*|`.*?`|https?:\/\/[^\s)]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\n)/g);
    return parts.map((part, i) => {
      if (!part) return null;
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={i}
            className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-cyan-400/10 text-[#00F2FE] border border-cyan-400/20"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00F2FE] underline underline-offset-2 hover:text-white break-all"
          >
            {part}
          </a>
        );
      }
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-[#00F2FE] underline underline-offset-2 hover:text-white"
          >
            {part}
          </a>
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
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.22 }}
            data-lenis-prevent
            className="fixed bottom-24 right-4 md:right-8 w-[23rem] max-w-[calc(100vw-2rem)] bg-[#0E1424]/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_30px_rgba(0,242,254,0.12)] z-50 overflow-hidden flex flex-col border border-cyan-400/25"
          >
            {/* Header */}
            <div className="bg-white/[0.03] border-b border-white/10 p-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.35)]">
                  <Bot size={18} strokeWidth={2.2} />
                </div>
                <div>
                  <span className="text-white font-heading font-bold text-sm block leading-tight">
                    Portfolio Assistant
                  </span>
                  <span className="text-[11px] text-[#00F2FE] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse" />
                    Online · Full CV & Portfolio Data
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#94A3B8] hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div
              data-lenis-prevent
              className="h-80 overflow-y-auto p-4 space-y-3 bg-[#0B0F19]/60"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] font-semibold rounded-br-sm shadow-[0_4px_15px_rgba(0,242,254,0.25)]"
                        : "bg-white/[0.05] border border-white/10 text-[#CBD5E1] rounded-bl-sm"
                    }`}
                  >
                    {formatText(msg.text)}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-3.5 pb-2.5 pt-2.5 flex-shrink-0 border-t border-white/10 bg-white/[0.02]">
              <span className="text-[10px] text-[#94A3B8] font-medium block mb-1.5 uppercase tracking-wider">
                Quick Questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    type="button"
                    key={q.id}
                    onClick={() => handleQuickClick(q)}
                    className="text-[11px] px-2.5 py-1 rounded-lg border border-white/10 bg-white/[0.04] text-[#CBD5E1] hover:border-[#00F2FE]/50 hover:text-[#00F2FE] hover:bg-cyan-400/10 transition-colors cursor-pointer"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input form */}
            <div className="p-3 border-t border-white/10 flex gap-2 flex-shrink-0 bg-white/[0.03]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask anything about skills, projects, CV..."
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-white/10 bg-[#0B0F19]/80 text-white focus:outline-none focus:border-[#00F2FE]/60 placeholder:text-[#94A3B8]/60"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] hover:shadow-[0_0_15px_rgba(0,242,254,0.45)] transition-all cursor-pointer flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={14} strokeWidth={2.2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button - Matching Electric Cyan Theme */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[84px] right-5 md:right-9 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] shadow-[0_0_24px_rgba(0,242,254,0.45)] hover:shadow-[0_0_32px_rgba(0,242,254,0.7)] border-2 border-[#0B0F19] z-50 transition-shadow cursor-pointer"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X size={20} strokeWidth={2.4} />
        ) : (
          <div className="relative flex items-center justify-center">
            <MessageSquare size={20} strokeWidth={2.3} />
            <Sparkles
              size={10}
              className="absolute -top-1.5 -right-1.5 text-[#0B0F19] fill-[#0B0F19]"
            />
          </div>
        )}
      </motion.button>
    </>
  );
};

export default Chatbot;
