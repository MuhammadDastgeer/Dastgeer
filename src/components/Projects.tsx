import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Sparkles, Bot, Brain, Workflow, BookOpen } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

import generativeAIBlogAsset from "@/assets/generative-ai-blog.png.asset.json";
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
import ecommerceImg from "@/assets/project-ecommerce.jpg";
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

type Project = {
  title: string;
  desc: string;
  tools: string[];
  gradient: string;
  image: string;
  link?: string;
  github?: string;
};

const latestAgenticProjects: Project[] = [
  {
    title: "RAG Showcase",
    desc: "Intelligent RAG application demonstrating document retrieval, vector search, and context-aware AI question answering.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: ragShowcaseImg,
    link: "https://rag-showcase-tawny.vercel.app/",
  },
  {
    title: "Medicall - AI Medical Platform",
    desc: "AI-powered medical platform for healthcare assistance, symptom analysis, and intelligent patient support using advanced LLMs.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: medicallImg,
    link: "https://medicall-one.vercel.app/",
  },
  {
    title: "AI Content Generator",
    desc: "End-to-end AI content generation platform that creates blog posts, marketing copy, and creative content with smart prompts.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: contentGeneratorImg,
    link: "https://ai-content-generator-five-sandy.vercel.app/",
  },
  {
    title: "LeetMaster - AI Coding Assistant",
    desc: "Interactive coding interview prep assistant that explains LeetCode-style problems, hints, and solutions with AI tutoring.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #B6F24A, #22D3EE)",
    image: leetmasterImg,
    link: "https://leetmaster.onrender.com",
  },
  {
    title: "Student Plan AI",
    desc: "AI academic planner for students that builds schedules, suggests study plans, and tracks learning goals intelligently.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: studentPlanImg,
    link: "https://student-plan-ai.vercel.app/",
  },
  {
    title: "MediNexus - Healthcare AI",
    desc: "Healthcare AI system connecting medical knowledge with patients through conversational intelligence and real-time assistance.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: medinexusImg,
    link: "https://medinexus-a6k9.onrender.com",
  },
];

const oldAgenticProjects: Project[] = [
  {
    title: "CODA-Ai: AI Code Agent",
    desc: "An intelligent AI code agent that helps developers write, debug, and understand code using advanced LLM workflows.",
    tools: ["LangChain", "LangGraph", "OpenAI", "Streamlit"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: codaImg,
    link: "https://drive.google.com/file/d/1H6R29Poe0mZWGJ7y80UaWpyKaOuWf1Y3/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/CODA-Ai-APP.git",
  },
  {
    title: "AI Travel Agent",
    desc: "Smart travel planning assistant that builds personalized itineraries, suggests destinations, and handles travel queries.",
    tools: ["LangGraph", "Gemini", "LangSmith", "Streamlit"],
    gradient: "linear-gradient(135deg, #22D3EE, #B6F24A)",
    image: travelImg,
    link: "https://drive.google.com/file/d/1-jy0OY3TPaeg28Oxp3c5wj8KzglnG-W2/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/travel_agent_app.git",
  },
  {
    title: "Customer Support Chatbot",
    desc: "Automated customer support chatbot that handles user queries, resolves issues, and escalates complex cases intelligently.",
    tools: ["LangChain", "Groq", "LangSmith", "Streamlit"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: supportImg,
    link: "https://drive.google.com/file/d/1gQx-K7kRTdJXdcLhaP2Yux0dWA4-lgnu/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Customer_Support_chatbot_app.git",
  },
  {
    title: "Auto Blog Writer Agent",
    desc: "Autonomous AI agent that writes complete blog posts on any topic with research, structuring, and SEO optimization.",
    tools: ["LangGraph", "Gemini", "OpenAI", "Streamlit"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: blogImg,
    link: "https://drive.google.com/file/d/1yX4gcXZRLH7CjhIm957cNRONaxvl_ihk/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Writes-Blogs-Automatically-Agent.git",
  },
  {
    title: "AI Chatbot with MCP Client & Server",
    desc: "Intelligent AI chatbot built with MCP (Model Context Protocol) client and server architecture using LangGraph for advanced tool orchestration.",
    tools: ["LangGraph", "MCP", "OpenAI", "Python"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: mcpChatbotImg,
    link: "https://drive.google.com/file/d/1tkN89iD6S82oy_y-DpBN_HA-YKoYTbml/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Mcp-Client-Langgraph.git",
  },
  {
    title: "Code Explainer App",
    desc: "AI-powered app that explains complex code snippets in plain language, making programming easier for learners and devs.",
    tools: ["LangChain", "OpenAI", "Groq", "Streamlit"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: explainerImg,
    link: "https://drive.google.com/file/d/1umKkniooMV_BEOx_yiSuDAkNWVcYx_4f/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/code-explainer-app.git",
  },
  {
    title: "Doctor AI - Healthcare Chatbot",
    desc: "Healthcare chatbot that provides preliminary medical guidance, symptom analysis, and health-related Q&A.",
    tools: ["LangChain", "OpenAI", "MCP", "Streamlit"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: doctorImg,
    link: "https://drive.google.com/file/d/1o0-y7ON2jY8rlAw66NQUTcV7W-r8Wgg4/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Health_Care_app.git",
  },
  {
    title: "Real Estate Platform",
    desc: "A full-stack real estate platform with property listings, search, and modern UI for buying, selling, and renting properties.",
    tools: ["Next.js", "React", "Vercel", "REST APIs"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: realestateImg,
    link: "https://drive.google.com/file/d/15bDLE7-kCGwcjmnMEu2uUaTG5IABZ8yF/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Real_Estate_Project.git",
  },
];

const mlProjects: Project[] = [
  {
    title: "Extreme Weather Analysis",
    desc: "In-depth analysis of extreme weather events using historical climate data, identifying patterns and trends.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: weatherImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Movies Recommendation System",
    desc: "Content-based and collaborative filtering recommendation system that suggests movies based on user preferences.",
    tools: ["Python", "Scikit-learn", "Pandas", "NLP"],
    gradient: "linear-gradient(135deg, #22D3EE, #B6F24A)",
    image: moviesImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Student Performance Analysis",
    desc: "Data-driven analysis of student academic performance with insights into factors influencing grades and outcomes.",
    tools: ["Python", "Pandas", "Plotly", "EDA"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: studentImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "YouTube Trending Analysis",
    desc: "Comprehensive analysis of trending YouTube videos identifying patterns in views, engagement, and content categories.",
    tools: ["Python", "Pandas", "Matplotlib", "EDA"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: youtubeImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Social Media Mental Health Analysis",
    desc: "Statistical analysis exploring the relationship between social media usage and mental health indicators.",
    tools: ["Python", "Pandas", "Seaborn", "Statistics"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: mentalImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Code Smells Refactoring Analysis",
    desc: "Data analysis of code smells and refactoring patterns in software repositories to improve code quality.",
    tools: ["Python", "Pandas", "Matplotlib", "EDA"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: codeSmellsImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Stock Market Analysis",
    desc: "Time-series analysis of stock market data with technical indicators, trend detection, and visualization.",
    tools: ["Python", "Pandas", "Plotly", "Time Series"],
    gradient: "linear-gradient(135deg, #B6F24A, #22D3EE)",
    image: stockImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
  {
    title: "Ecommerce Behavior Analysis",
    desc: "Customer behavior analytics for ecommerce platforms uncovering buying patterns and conversion funnels.",
    tools: ["Python", "Pandas", "Seaborn", "EDA"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: ecommerceImg,
    github: "https://github.com/MuhammadDastgeer/Machine-Learning-Project.git",
  },
];

const automationProjects: Project[] = [
  {
    title: "WordPress Content from PDF + Gmail HITL",
    desc: "Automated WordPress publishing from PDF documents with human-in-the-loop Gmail verification step.",
    tools: ["n8n", "WordPress", "Gmail", "OpenAI"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: wpPdfImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Discord AI-Powered Bot",
    desc: "Intelligent Discord assistant responding dynamically to queries with context-aware natural language understanding.",
    tools: ["n8n", "Discord", "OpenAI", "Webhooks"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: discordBotImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Human-in-the-Loop Email Response",
    desc: "Intelligent IMAP email triage pipeline drafting AI answers with required human sign-off before dispatch.",
    tools: ["n8n", "IMAP", "OpenAI", "Email"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: emailHitlImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Bulk Gmail from Google Sheets",
    desc: "Personalized bulk email dispatch pipeline reading live Google Sheets rows with dynamic variable interpolation.",
    tools: ["n8n", "Gmail", "Google Sheets", "Automation"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: gmailSheetsImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "RAG Chatbot with Google Drive + Gemini",
    desc: "Enterprise document RAG indexing Google Drive directories for rapid semantic question-answering with Gemini.",
    tools: ["n8n", "Google Drive", "Gemini", "RAG"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: ragDriveImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "WhatsApp AI Chatbot (Multimodal RAG)",
    desc: "Multimodal customer assistant handling voice, images, PDFs, and conversational text over WhatsApp.",
    tools: ["n8n", "WhatsApp", "OpenAI", "RAG"],
    gradient: "linear-gradient(135deg, #B6F24A, #22D3EE)",
    image: whatsappRagImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "RAG Starter Template",
    desc: "Modular starter architecture using high-speed vector embeddings and form-based query triggers.",
    tools: ["n8n", "Vector Store", "OpenAI", "Forms"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: ragStarterImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Full Authentication System",
    desc: "Complete user authentication lifecycle with token handling, verification webhooks, and secure sessions in n8n.",
    tools: ["n8n", "Auth", "Email", "Webhooks"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: authSystemImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
];

const ProjectCard: React.FC<{ project: Project; i: number }> = ({ project, i }) => {
  return (
    <ScrollReveal delay={i * 0.05}>
      <div className="bento-card group flex flex-col justify-between h-full overflow-hidden p-3.5 sm:p-4 transition-all duration-300">
        <div>
          {/* 16:10 Image container on top with 8px inner radius */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-surface border border-border/60 mb-4 group/img">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              width={640}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
            />
            {/* Soft dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Hover overlay with 'View Project ->' */}
            <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="mono-tag text-xs text-white bg-black/70 px-4 py-2 rounded-full border border-white/20 shadow-xl flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                View Project <ArrowUpRight size={13} className="text-aurora-cyan" />
              </span>
            </div>
          </div>

          {/* Tags as mono pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full border border-border/80 bg-surface/80 text-muted-foreground transition-all duration-200 group-hover:border-aurora-violet/40 group-hover:text-foreground"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 4 && (
              <span className="mono-tag text-[10px] px-2 py-0.5 rounded-full border border-border/50 text-muted-foreground/75">
                +{project.tools.length - 4}
              </span>
            )}
          </div>

          {/* Title in Sora */}
          <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-aurora-cyan transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* 2-line description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {project.desc}
          </p>
        </div>

        {/* 2 Buttons: Live Demo (primary) + GitHub (ghost) */}
        <div className="pt-3 border-t border-border/60 flex items-center gap-2.5">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-xs py-2 px-3.5 rounded-full flex-1 justify-center"
            >
              <ExternalLink size={13} />
              <span>{project.link.includes("drive.google.com") ? "Watch Demo" : "Live Demo"}</span>
            </a>
          ) : (
            <a
              href={project.github || "https://github.com/MuhammadDastgeer"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-xs py-2 px-3.5 rounded-full flex-1 justify-center"
            >
              <ExternalLink size={13} />
              <span>Explore Code</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-3.5 rounded-full"
              title="GitHub Repository"
            >
              <GithubIcon size={14} />
              <span className="hidden sm:inline">Code</span>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"agentic" | "ml" | "automation">("agentic");

  const tabs = [
    { id: "agentic" as const, label: "Agentic AI & RAG", icon: <Bot size={14} />, count: latestAgenticProjects.length + oldAgenticProjects.length },
    { id: "ml" as const, label: "Machine Learning", icon: <Brain size={14} />, count: mlProjects.length },
    { id: "automation" as const, label: "AI Automation", icon: <Workflow size={14} />, count: automationProjects.length },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-10">
          <span className="section-label mb-2 block">// 03 — PROJECTS</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Selected AI Systems & Deployments
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Production AI agents, retrieval-augmented generation architectures, real-time computer vision, and high-throughput automations.
          </p>
        </div>

        {/* Filter tabs with animated pill indicator */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="glass-pill p-1.5 rounded-full inline-flex items-center gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-full font-heading text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="projectActiveTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-aurora-violet to-aurora-cyan shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                  <span
                    className={`mono-tag text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content based on selected tab */}
        <AnimatePresence mode="wait">
          {activeTab === "agentic" && (
            <motion.div
              key="agentic-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {/* Flagship Tier */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-aurora-cyan" />
                  <span className="mono-tag text-xs text-foreground font-bold">// FLAGSHIP & RECENT DEPLOYMENTS</span>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestAgenticProjects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} i={i} />
                  ))}
                </div>
              </div>

              {/* Additional Agentic Applications */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-aurora-violet" />
                  <span className="mono-tag text-xs text-foreground font-bold">// AUTONOMOUS AGENTS & MCP PROTOCOLS</span>
                </div>
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {automationProjects.map((p, i) => (
                <ProjectCard key={p.title} project={p} i={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
