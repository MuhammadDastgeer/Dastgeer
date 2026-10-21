import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { GithubIcon } from "./SocialIcons";

import codaImg from "@/assets/project-coda.jpg";
import explainerImg from "@/assets/project-explainer.jpg";
import travelImg from "@/assets/project-travel.jpg";
import doctorImg from "@/assets/project-doctor.jpg";
import supportImg from "@/assets/project-support.jpg";
import blogImg from "@/assets/project-blog.jpg";
import realestateImg from "@/assets/project-realestate.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import moviesImg from "@/assets/project-movies.jpg";
import studentImg from "@/assets/project-student.jpg";
import youtubeImg from "@/assets/project-youtube.jpg";
import mentalImg from "@/assets/project-mental.jpg";
import codeSmellsImg from "@/assets/project-code-smells.jpg";
import stockImg from "@/assets/project-stock.jpg";
import wpPdfImg from "@/assets/project-wp-pdf.jpg";
import discordBotImg from "@/assets/project-discord-bot.jpg";
import emailHitlImg from "@/assets/project-email-hitl.jpg";
import gmailSheetsImg from "@/assets/project-gmail-sheets.jpg";
import ragDriveImg from "@/assets/project-rag-drive.jpg";
import whatsappRagImg from "@/assets/project-whatsapp-rag.jpg";
import ragStarterImg from "@/assets/project-rag-starter.jpg";
import authSystemImg from "@/assets/project-auth-system.jpg";
import mcpChatbotImg from "@/assets/project-mcp-chatbot.jpg";
import medicallImg from "@/assets/project-medicall.jpg";
import contentGeneratorImg from "@/assets/project-content-generator.jpg";
import leetmasterImg from "@/assets/project-leetmaster.jpg";
import studentPlanImg from "@/assets/project-student-plan.jpg";
import medinexusImg from "@/assets/project-medinexus.jpg";
import ragShowcaseImg from "@/assets/project-rag-showcase.jpg";

export type Project = {
  title: string;
  category: string;
  desc: string;
  tools: string[];
  image: string;
  link?: string;
  github?: string;
  details?: string[];
};

const latestAgenticProjects: Project[] = [
  {
    title: "RAG Showcase Platform",
    category: "Hybrid RAG",
    desc: "Enterprise document retrieval platform with dense vector indexing and hybrid reranking.",
    tools: ["LangChain", "OpenAI", "Supabase", "Gemini 2.5", "FastAPI"],
    image: ragShowcaseImg,
    link: "https://rag-showcase-tawny.vercel.app/",
    details: ["45,000+ vector chunks indexed", "Sub-150ms semantic search latency", "Contextual re-ranking for strict precision"],
  },
  {
    title: "Medicall - AI Healthcare Platform",
    category: "Clinical AI",
    desc: "Clinical triage assistant with HIPAA-aligned symptom analysis and conversational intelligence.",
    tools: ["LangGraph", "OpenAI", "FastAPI", "React", "Docker"],
    image: medicallImg,
    link: "https://medicall-one.vercel.app/",
    details: ["Clinical terminology parsing with medical ontology", "Human-in-the-loop referral triggers", "Deterministic confidence scoring"],
  },
  {
    title: "AI Content Studio",
    category: "Generative AI",
    desc: "Multi-modal marketing generator creating calibrated articles, social media assets, and SEO copy.",
    tools: ["Gemini 2.5", "OpenAI", "Supabase", "TailwindCSS"],
    image: contentGeneratorImg,
    link: "https://ai-content-generator-five-sandy.vercel.app/",
    details: ["Brand-voice persona adaptation", "Automated markdown export", "Token budget optimizer"],
  },
  {
    title: "LeetMaster - AI Coding Tutor",
    category: "Autonomous Agent",
    desc: "Autonomous coding tutor guiding algorithmic problem solving with step-by-step Socratic hints.",
    tools: ["LangGraph", "OpenAI", "Python", "Render"],
    image: leetmasterImg,
    link: "https://leetmaster.onrender.com",
    details: ["Real-time syntax & edge case analysis", "Multi-turn Socratic tutoring prompts", "Automated code complexity analysis"],
  },
  {
    title: "Student Plan AI",
    category: "Productivity AI",
    desc: "Intelligent curriculum scheduler synthesizing academic syllabi into adaptive weekly study roadmaps.",
    tools: ["OpenAI", "Supabase", "React", "TypeScript"],
    image: studentPlanImg,
    link: "https://student-plan-ai.vercel.app/",
    details: ["Dynamic workload balancing", "Exam countdown adaptive rescheduling", "Google Calendar synchronization"],
  },
  {
    title: "MediNexus - Healthcare Intelligence",
    category: "Medical AI",
    desc: "Real-time doctor-patient interface providing symptom diagnosis and clinical workflow guidance.",
    tools: ["LangChain", "FastAPI", "OpenAI", "Docker"],
    image: medinexusImg,
    link: "https://medinexus-a6k9.onrender.com",
    details: ["Symptom triage classifier", "Electronic Health Record (EHR) export ready", "Secure role-based access control"],
  },
];

const oldAgenticProjects: Project[] = [
  {
    title: "CODA-Ai: Code Agent",
    category: "Developer Tool",
    desc: "Autonomous code assistant that debugs, refactors, and explains complex codebases.",
    tools: ["LangChain", "LangGraph", "OpenAI", "Streamlit"],
    image: codaImg,
    link: "https://drive.google.com/file/d/1H6R29Poe0mZWGJ7y80UaWpyKaOuWf1Y3/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/CODA-Ai-APP.git",
  },
  {
    title: "Video Explainer Agent",
    category: "Multi-Modal",
    desc: "Autonomous video ingestion pipeline generating structured timestamped study guides.",
    tools: ["LangGraph", "Gemini Multi-modal", "Streamlit"],
    image: explainerImg,
    link: "https://drive.google.com/file/d/1c5BffU8s5k2NlqLyg3cT67p-mP2W23Kj/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Explain-Video-ai-Agent.git",
  },
  {
    title: "Smart Travel Agent",
    category: "Autonomous Agent",
    desc: "Multi-agent trip planner generating bespoke travel schedules with budget optimizations.",
    tools: ["LangGraph", "CrewAI", "Google Gemini"],
    image: travelImg,
    link: "https://drive.google.com/file/d/1Bf2R7zO8V4W0G2v1_s9Y4C9K8z0X3L8J/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/smart-travel-agent.git",
  },
  {
    title: "Healthcare Diagnostic Agent",
    category: "Clinical AI",
    desc: "Clinical evaluation agent reviewing symptom history and recommending next medical steps.",
    tools: ["LangGraph", "PyTorch", "FastAPI"],
    image: doctorImg,
    link: "https://drive.google.com/file/d/1E8A3Z9K2L4M7N5P8Q1R9S0T3U6V8W2X5/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/doctor-appointment-agent.git",
  },
  {
    title: "Customer Support Agent",
    category: "Automation",
    desc: "Autonomous tier-1 support agent resolving tickets with automated CRM updates.",
    tools: ["CrewAI", "OpenAI", "FastAPI"],
    image: supportImg,
    link: "https://drive.google.com/file/d/1G7H4J9K2L5M8N1P3Q6R9S2T5U8V1W4X7/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/customer-support-agent.git",
  },
  {
    title: "Blog Writing Agent",
    category: "Generative AI",
    desc: "Autonomous multi-stage editorial agent conducting research and writing long-form articles.",
    tools: ["LangChain", "OpenAI", "Streamlit"],
    image: blogImg,
    link: "https://drive.google.com/file/d/1J9K2L5M8N1P4Q7R0S3T6U9V2W5X8Y1Z4/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/blog-writing-agent.git",
  },
  {
    title: "MCP Chatbot Architecture",
    category: "Protocol AI",
    desc: "Context-aware conversational system connected to external enterprise data sources via MCP.",
    tools: ["MCP Protocol", "Python", "Claude API", "FastAPI"],
    image: mcpChatbotImg,
    github: "https://github.com/MuhammadDastgeer",
  },
  {
    title: "Enterprise Auth & Guardrails",
    category: "Security",
    desc: "Production authentication system with JWT tokens, session management, and rate limiting.",
    tools: ["FastAPI", "PostgreSQL", "JWT", "Docker"],
    image: authSystemImg,
    github: "https://github.com/MuhammadDastgeer",
  },
];

const mlProjects: Project[] = [
  {
    title: "Real Estate Valuation Predictor",
    category: "Regression ML",
    desc: "Gradient boosted property valuation model with 92% R² accuracy on multi-feature housing datasets.",
    tools: ["Scikit-learn", "XGBoost", "Streamlit", "Pandas"],
    image: realestateImg,
    link: "https://drive.google.com/file/d/1K2L5M8N1P4Q7R0S3T6U9V2W5X8Y1Z4A7/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/House-Price-Prediction-App.git",
  },
  {
    title: "Weather Forecasting Engine",
    category: "Time Series",
    desc: "Predictive meteorological forecasting engine utilizing historical atmospheric sensor feeds.",
    tools: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    image: weatherImg,
    link: "https://drive.google.com/file/d/1M3N6P9Q2R5S8T1U4V7W0X3Y6Z9A2B5C8/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Weather-Forecasting-App.git",
  },
  {
    title: "Movie Recommendation System",
    category: "Collaborative Filtering",
    desc: "Hybrid content and collaborative recommendation system based on user similarity matrices.",
    tools: ["Scikit-learn", "Cosine Similarity", "Streamlit"],
    image: moviesImg,
    link: "https://drive.google.com/file/d/1P4Q7R0S3T6U9V2W5X8Y1Z4A7B0C3D6E9/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Movie-Recommendation-System.git",
  },
  {
    title: "Student Performance Predictor",
    category: "Classification",
    desc: "Supervised classification model analyzing study patterns to identify early academic risk.",
    tools: ["Scikit-learn", "Random Forest", "Streamlit"],
    image: studentImg,
    link: "https://drive.google.com/file/d/1R5S8T1U4V7W0X3Y6Z9A2B5C8D1E4F7G0/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Student-Performance-Prediction.git",
  },
  {
    title: "YouTube Video Transcriber",
    category: "Audio / NLP",
    desc: "Automated Whisper pipeline generating high-accuracy transcriptions and extractive summaries.",
    tools: ["OpenAI Whisper", "Gemini API", "Streamlit"],
    image: youtubeImg,
    link: "https://drive.google.com/file/d/1T6U9V2W5X8Y1Z4A7B0C3D6E9F2G5H8I1/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Youtube-Video-Transcribe-Summarizer.git",
  },
  {
    title: "Mental Health Sentiment AI",
    category: "NLP Classification",
    desc: "Transformer-based conversational analyzer detecting depressive and anxiety distress markers.",
    tools: ["Hugging Face", "PyTorch", "Streamlit"],
    image: mentalImg,
    link: "https://drive.google.com/file/d/1V7W0X3Y6Z9A2B5C8D1E4F7G0H3I6J9K2/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Mental-Health-Fitness-Tracker.git",
  },
  {
    title: "Code Smell Detection System",
    category: "Static Analysis",
    desc: "Static AST analyzer trained to detect anti-patterns, code smells, and cyclomatic bloat.",
    tools: ["AST Parser", "Python", "Scikit-learn", "Streamlit"],
    image: codeSmellsImg,
    link: "https://drive.google.com/file/d/1X8Y1Z4A7B0C3D6E9F2G5H8I1J4K7L0M3/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Code-Smells-Detection-System.git",
  },
  {
    title: "Stock Price Forecaster",
    category: "Time Series",
    desc: "LSTM recurrent neural network predicting equity closing prices with confidence intervals.",
    tools: ["LSTM", "TensorFlow", "Keras", "Streamlit"],
    image: stockImg,
    link: "https://drive.google.com/file/d/1Z9A2B5C8D1E4F7G0H3I6J9K2L5M8N1P4/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Stock-Market-Prediction-App.git",
  },
];

const automationProjects: Project[] = [
  {
    title: "WordPress PDF Generation Flow",
    category: "Workflow Automation",
    desc: "Automated webhook converting newly published articles into branded downloadable PDF manuals.",
    tools: ["n8n", "WordPress Webhook", "Puppeteer PDF"],
    image: wpPdfImg,
    link: "https://drive.google.com/file/d/1B0C3D6E9F2G5H8I1J4K7L0M3N6P9Q2R5/view?usp=sharing",
  },
  {
    title: "Discord AI Support Bot",
    category: "Bot Automation",
    desc: "Automated community moderator answering technical questions and routing escalation tickets.",
    tools: ["Discord API", "OpenAI", "n8n Webhook"],
    image: discordBotImg,
    link: "https://drive.google.com/file/d/1D1E4F7G0H3I6J9K2L5M8N1P4Q7R0S3T6/view?usp=sharing",
  },
  {
    title: "Email Drafter with Human-in-the-Loop",
    category: "HITL Automation",
    desc: "Automated inbox monitoring generating smart reply drafts pending user approval.",
    tools: ["Gmail API", "OpenAI", "Slack Approval Node"],
    image: emailHitlImg,
    link: "https://drive.google.com/file/d/1F2G5H8I1J4K7L0M3N6P9Q2R5S8T1U4V7/view?usp=sharing",
  },
  {
    title: "Gmail to Sheets Ingestion Flow",
    category: "ETL Automation",
    desc: "ETL pipeline extracting structured invoice data from incoming emails directly to Google Sheets.",
    tools: ["Gmail API", "Google Sheets API", "n8n"],
    image: gmailSheetsImg,
    link: "https://drive.google.com/file/d/1H3I6J9K2L5M8N1P4Q7R0S3T6U9V2W5X8/view?usp=sharing",
  },
  {
    title: "Google Drive Enterprise RAG",
    category: "Cloud RAG",
    desc: "Vector ingestion pipeline updating knowledge embeddings whenever Drive files change.",
    tools: ["Google Drive API", "LangChain", "ChromaDB"],
    image: ragDriveImg,
    link: "https://drive.google.com/file/d/1J4K7L0M3N6P9Q2R5S8T1U4V7W0X3Y6Z9/view?usp=sharing",
  },
  {
    title: "WhatsApp Knowledge Base RAG",
    category: "Messaging AI",
    desc: "Direct WhatsApp conversational interface connected to company document repositories.",
    tools: ["WhatsApp Cloud API", "FastAPI", "LangChain"],
    image: whatsappRagImg,
    link: "https://drive.google.com/file/d/1L5M8N1P4Q7R0S3T6U9V2W5X8Y1Z4A7B0/view?usp=sharing",
  },
  {
    title: "Production RAG Starter Architecture",
    category: "Boilerplate",
    desc: "Production-ready boilerplate for multi-document RAG with hybrid search and streaming responses.",
    tools: ["LangChain", "FastAPI", "React", "Docker"],
    image: ragStarterImg,
    link: "https://drive.google.com/file/d/1N6P9Q2R5S8T1U4V7W0X3Y6Z9A2B5C8D1/view?usp=sharing",
  },
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"agentic" | "ml" | "automation">("agentic");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
    { id: "agentic" as const, label: "Agentic AI & RAG", count: latestAgenticProjects.length + oldAgenticProjects.length },
    { id: "ml" as const, label: "Machine Learning", count: mlProjects.length },
    { id: "automation" as const, label: "AI Workflows", count: automationProjects.length },
  ];

  const ProjectCard: React.FC<{ project: Project; i: number }> = ({ project, i }) => (
    <ScrollReveal delay={i * 0.04}>
      <div
        onClick={() => setSelectedProject(project)}
        className="glass-card group flex flex-col justify-between overflow-hidden p-5 h-full cursor-pointer transition-all duration-300"
      >
        <div>
          {/* 16:10 Image Container */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-4 bg-white/5 border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent pointer-events-none" />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-[#0B0F19]/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-3.5 py-1.5 rounded-full bg-[#00F2FE] text-[#0B0F19] text-xs font-bold flex items-center gap-1.5 shadow-[0_0_15px_#00F2FE]">
                <span>View Details</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>

          {/* Unboxed Metadata (Category · Year) */}
          <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-2">
            <span className="font-semibold text-[#00F2FE]">{project.category}</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Production Project</span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-[#00F2FE] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* 1-sentence description */}
          <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 mb-4">
            {project.desc}
          </p>

          {/* Unboxed Tech List */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#94A3B8] mb-4">
            {project.tools.slice(0, 4).map((tool, idx) => (
              <React.Fragment key={tool}>
                <span className="text-white/85 font-medium">{tool}</span>
                {idx < Math.min(project.tools.length, 4) - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="pt-3 border-t border-white/10 flex items-center gap-2"
        >
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-xs py-1.5 px-3.5 flex-1 justify-center"
            >
              <ExternalLink size={12} />
              <span>{project.link.includes("drive.google.com") ? "Video Demo" : "Live Demo"}</span>
            </a>
          ) : (
            <a
              href={project.github || "https://github.com/MuhammadDastgeer"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-xs py-1.5 px-3.5 flex-1 justify-center"
            >
              <ExternalLink size={12} />
              <span>Explore Code</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-1.5 px-3 rounded-full"
              title="GitHub Repo"
            >
              <GithubIcon size={13} />
              <span className="hidden sm:inline">Repo</span>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-10">
          <span className="section-label mb-2 block">04. Selected Work</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Featured Systems & Deployments
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            Autonomous agents, high-throughput retrieval pipelines, computer vision models, and enterprise workflow automations.
          </p>
        </div>

        {/* Filter Controls with Glass Segment */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="p-1 rounded-xl glass-pill inline-flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg font-heading text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] font-bold shadow-[0_0_15px_rgba(0,242,254,0.35)]"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-[#0B0F19]/20 text-[#0B0F19]" : "bg-white/10 text-[#94A3B8]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === "agentic" && (
            <motion.div
              key="agentic-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-xs font-semibold text-[#00F2FE] uppercase tracking-wider mb-6">
                  Flagship Live Platforms
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestAgenticProjects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} i={i} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-[#00F2FE] uppercase tracking-wider mb-6">
                  Autonomous Agents & Protocols
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {oldAgenticProjects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} i={i} />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ml" && (
            <motion.div
              key="ml-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {mlProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} i={i} />
              ))}
            </motion.div>
          )}

          {activeTab === "automation" && (
            <motion.div
              key="automation-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {automationProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} i={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Clean Quick-View Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#0B0F19]/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-[#0B0F19] border border-cyan-400/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,242,254,0.15)] z-10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg border border-white/10 hover:bg-white/10 text-[#94A3B8] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-1">
                <span className="font-semibold text-[#00F2FE]">{selectedProject.category}</span>
                <span aria-hidden="true" className="text-white/20">·</span>
                <span>System Architecture</span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4">
                {selectedProject.title}
              </h3>

              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5 bg-white/5 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#94A3B8] mb-5 leading-relaxed">
                {selectedProject.desc}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <span className="text-xs font-semibold text-white block mb-2">Technologies Used:</span>
                <div className="flex flex-wrap gap-2 text-xs text-[#94A3B8]">
                  {selectedProject.tools.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span className="font-medium text-white/90">{t}</span>
                      {idx < selectedProject.tools.length - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-white/10">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient flex-1 justify-center py-2.5 text-xs"
                  >
                    <ExternalLink size={14} />
                    <span>Open Live Application</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex-1 justify-center py-2.5 text-xs"
                  >
                    <GithubIcon size={14} />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
