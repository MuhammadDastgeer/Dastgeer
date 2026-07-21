import { ExternalLink } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
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

type Project = {
  title: string;
  desc: string;
  tools: string[];
  gradient: string;
  image: string;
  link?: string;
  github?: string;
  kaggle?: string;
};

const latestAgenticProjects: Project[] = [
  {
    title: "Medicall - AI Medical Platform",
    desc: "AI-powered medical platform for healthcare assistance, symptom analysis, and intelligent patient support using advanced LLMs.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, hsl(186,94%,42%), hsl(217,91%,60%))",
    image: medicallImg,
    link: "https://medicall-one.vercel.app/",
  },
  {
    title: "AI Content Generator",
    desc: "End-to-end AI content generation platform that creates blog posts, marketing copy, and creative content with smart prompts.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(186,94%,42%))",
    image: contentGeneratorImg,
    link: "https://ai-content-generator-five-sandy.vercel.app/",
  },
  {
    title: "LeetMaster - AI Coding Assistant",
    desc: "Interactive coding interview prep assistant that explains LeetCode-style problems, hints, and solutions with AI tutoring.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(160,84%,45%))",
    image: leetmasterImg,
    link: "https://leetmaster.onrender.com",
  },
  {
    title: "Student Plan AI",
    desc: "AI academic planner for students that builds schedules, suggests study plans, and tracks learning goals intelligently.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, hsl(25,95%,53%), hsl(0,84%,60%))",
    image: studentPlanImg,
    link: "https://student-plan-ai.vercel.app/",
  },
  {
    title: "MediNexus - Healthcare AI",
    desc: "Healthcare AI system connecting medical knowledge with patients through conversational intelligence and real-time assistance.",
    tools: ["Google AI Studio", "OpenAI", "Supabase", "LangChain", "LangGraph", "Gemini"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(186,94%,42%))",
    image: medinexusImg,
    link: "https://medinexus-a6k9.onrender.com",
  },
];

const oldAgenticProjects: Project[] = [
  {
    title: "CODA-Ai: AI Code Agent",
    desc: "An intelligent AI code agent that helps developers write, debug, and understand code using advanced LLM workflows.",
    tools: ["LangChain", "LangGraph", "OpenAI", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(25,95%,53%), hsl(265,89%,50%))",
    image: codaImg,
    link: "https://drive.google.com/file/d/1H6R29Poe0mZWGJ7y80UaWpyKaOuWf1Y3/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/CODA-Ai-APP.git",
  },
  {
    title: "AI Travel Agent",
    desc: "Smart travel planning assistant that builds personalized itineraries, suggests destinations, and handles travel queries.",
    tools: ["LangGraph", "Gemini", "LangSmith", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(186,94%,42%))",
    image: travelImg,
    link: "https://drive.google.com/file/d/1-jy0OY3TPaeg28Oxp3c5wj8KzglnG-W2/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/travel_agent_app.git",
  },
  {
    title: "Customer Support Chatbot",
    desc: "Automated customer support chatbot that handles user queries, resolves issues, and escalates complex cases intelligently.",
    tools: ["LangChain", "Groq", "LangSmith", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(217,91%,60%))",
    image: supportImg,
    link: "https://drive.google.com/file/d/1gQx-K7kRTdJXdcLhaP2Yux0dWA4-lgnu/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Customer_Support_chatbot_app.git",
  },
  {
    title: "Auto Blog Writer Agent",
    desc: "Autonomous AI agent that writes complete blog posts on any topic with research, structuring, and SEO optimization.",
    tools: ["LangGraph", "Gemini", "OpenAI", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(186,94%,42%), hsl(142,71%,45%))",
    image: blogImg,
    link: "https://drive.google.com/file/d/1yX4gcXZRLH7CjhIm957cNRONaxvl_ihk/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Writes-Blogs-Automatically-Agent.git",
  },
  {
    title: "AI Chatbot with MCP Client & Server",
    desc: "Intelligent AI chatbot built with MCP (Model Context Protocol) client and server architecture using LangGraph for advanced tool orchestration.",
    tools: ["LangGraph", "MCP", "OpenAI", "Python"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(186,94%,42%))",
    image: mcpChatbotImg,
    link: "https://drive.google.com/file/d/1tkN89iD6S82oy_y-DpBN_HA-YKoYTbml/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Mcp-Client-Langgraph.git",
  },
  {
    title: "Code Explainer App",
    desc: "AI-powered app that explains complex code snippets in plain language, making programming easier for learners and devs.",
    tools: ["LangChain", "OpenAI", "Groq", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(186,94%,42%), hsl(217,91%,60%))",
    image: explainerImg,
    link: "https://drive.google.com/file/d/1umKkniooMV_BEOx_yiSuDAkNWVcYx_4f/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/code-explainer-app.git",
  },
  {
    title: "Doctor AI - Healthcare Chatbot",
    desc: "Healthcare chatbot that provides preliminary medical guidance, symptom analysis, and health-related Q&A.",
    tools: ["LangChain", "OpenAI", "MCP", "Streamlit"],
    gradient: "linear-gradient(135deg, hsl(0,84%,60%), hsl(25,95%,53%))",
    image: doctorImg,
    link: "https://drive.google.com/file/d/1o0-y7ON2jY8rlAw66NQUTcV7W-r8Wgg4/view?usp=sharing",
    github: "https://github.com/MuhammadDastgeer/Health_Care_app.git",
  },
  {
    title: "Real Estate Platform",
    desc: "A full-stack real estate platform with property listings, search, and modern UI for buying, selling, and renting properties.",
    tools: ["Next.js", "React", "Vercel", "REST APIs"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,50%))",
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
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(25,95%,53%))",
    image: weatherImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/extreme-weather-analysis",
  },
  {
    title: "Movies Recommendation System",
    desc: "Content-based and collaborative filtering recommendation system that suggests movies based on user preferences.",
    tools: ["Python", "Scikit-learn", "Pandas", "NLP"],
    gradient: "linear-gradient(135deg, hsl(0,84%,60%), hsl(45,93%,47%))",
    image: moviesImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/movies-recommendation-system",
  },
  {
    title: "Student Performance Analysis",
    desc: "Data-driven analysis of student academic performance with insights into factors influencing grades and outcomes.",
    tools: ["Python", "Pandas", "Plotly", "EDA"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(217,91%,60%))",
    image: studentImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/student-performance-analysis",
  },
  {
    title: "YouTube Trending Analysis",
    desc: "Comprehensive analysis of trending YouTube videos identifying patterns in views, engagement, and content categories.",
    tools: ["Python", "Pandas", "Matplotlib", "EDA"],
    gradient: "linear-gradient(135deg, hsl(0,84%,60%), hsl(0,0%,15%))",
    image: youtubeImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/youtube-trending-analysis",
  },
  {
    title: "Social Media Mental Health Analysis",
    desc: "Statistical analysis exploring the relationship between social media usage and mental health indicators.",
    tools: ["Python", "Pandas", "Seaborn", "Statistics"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(330,81%,60%))",
    image: mentalImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/social-media-mental-health-analysis",
  },
  {
    title: "Code Smells Refactoring Analysis",
    desc: "Data analysis of code smells and refactoring patterns in software repositories to improve code quality.",
    tools: ["Python", "Pandas", "Matplotlib", "EDA"],
    gradient: "linear-gradient(135deg, hsl(186,94%,42%), hsl(25,95%,53%))",
    image: codeSmellsImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/code-smells-refactoring-analysis",
  },
  {
    title: "Stock Market Analysis",
    desc: "Time-series analysis of stock market data with technical indicators, trend detection, and visualization.",
    tools: ["Python", "Pandas", "Plotly", "Time Series"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(0,0%,15%))",
    image: stockImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/stock-market-analysis",
  },
  {
    title: "Ecommerce Behavior Analysis",
    desc: "Customer behavior analytics for ecommerce platforms uncovering buying patterns and conversion funnels.",
    tools: ["Python", "Pandas", "Seaborn", "EDA"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,50%))",
    image: ecommerceImg,
    kaggle: "https://www.kaggle.com/code/dastgeerjutt/ecommerce-behavior-analysis",
  },
];

const automationProjects: Project[] = [
  {
    title: "WordPress Content from PDF + Gmail HITL",
    desc: "Easy WordPress content creation from PDF docs with a human-in-the-loop Gmail approval step before publishing.",
    tools: ["n8n", "WordPress", "Gmail", "OpenAI"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(25,95%,53%))",
    image: wpPdfImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Discord AI-Powered Bot",
    desc: "AI-powered Discord bot that responds intelligently to messages and automates server interactions.",
    tools: ["n8n", "Discord", "OpenAI", "Webhooks"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(235,89%,60%))",
    image: discordBotImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Human-in-the-Loop Email Response",
    desc: "Simple AI-powered email response system using IMAP with human approval before replies are sent.",
    tools: ["n8n", "IMAP", "OpenAI", "Email"],
    gradient: "linear-gradient(135deg, hsl(160,84%,45%), hsl(217,91%,60%))",
    image: emailHitlImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Bulk Gmail from Google Sheets",
    desc: "Send multiple personalized emails directly from Google Sheets via Gmail with automated workflows.",
    tools: ["n8n", "Gmail", "Google Sheets", "Automation"],
    gradient: "linear-gradient(135deg, hsl(0,84%,60%), hsl(142,71%,45%))",
    image: gmailSheetsImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "RAG Chatbot with Google Drive + Gemini",
    desc: "Retrieval-augmented chatbot for company documents stored on Google Drive, powered by Gemini.",
    tools: ["n8n", "Google Drive", "Gemini", "RAG"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(45,93%,47%))",
    image: ragDriveImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "WhatsApp AI Chatbot (Multimodal RAG)",
    desc: "AI-powered WhatsApp chatbot supporting text, voice, images and PDFs with retrieval-augmented generation.",
    tools: ["n8n", "WhatsApp", "OpenAI", "RAG"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(186,94%,42%))",
    image: whatsappRagImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "RAG Starter Template",
    desc: "Reusable RAG starter using simple vector stores, a form trigger and OpenAI for fast prototyping.",
    tools: ["n8n", "Vector Store", "OpenAI", "Forms"],
    gradient: "linear-gradient(135deg, hsl(265,89%,50%), hsl(186,94%,42%))",
    image: ragStarterImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
  {
    title: "Full Authentication System",
    desc: "End-to-end authentication workflow with sign up, login, email verification and logout built using n8n automation.",
    tools: ["n8n", "Auth", "Email", "Webhooks"],
    gradient: "linear-gradient(135deg, hsl(217,91%,60%), hsl(265,89%,50%))",
    image: authSystemImg,
    github: "https://github.com/MuhammadDastgeer/N8N_WORKFLOW.git",
  },
];

const KaggleIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358"/>
  </svg>
);

const ProjectCard = ({ project, i }: { project: Project; i: number }) => (
  <ScrollReveal key={project.title} delay={i * 0.05}>
    <div className="bg-card border border-border rounded-xl overflow-hidden hover-card-lift group h-full">
      <div className="h-1.5" style={{ background: project.gradient }} />
      <div className="relative overflow-hidden aspect-[16/9] bg-secondary">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          loading="lazy"
          width={1024}
          height={576}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((t) => (
            <span key={t} className="px-2 py-1 text-xs border border-border rounded-md text-muted-foreground bg-secondary hover-badge">{t}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg gradient-purple-bg text-primary-foreground hover:opacity-90 transition-opacity hover:scale-105">
              <ExternalLink size={14} /> {project.link.includes("drive.google.com") ? "Demo Video" : "Live Demo"}
            </a>
          )}
          {project.kaggle && (
            <a href={project.kaggle} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg gradient-purple-bg text-primary-foreground hover:opacity-90 transition-opacity hover:scale-105">
              <KaggleIcon /> View on Kaggle
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-secondary transition-colors hover:scale-105">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"agentic" | "ml" | "automation">("agentic");

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="section-subtitle mb-2">PORTFOLIO</p>
            <h2 className="section-title"><span className="highlight-text">Projects</span></h2>
            <p className="text-muted-foreground mt-2">Real-world AI & ML solutions that deliver measurable results</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center p-1 bg-secondary border border-border rounded-full">
              <button
                onClick={() => setActiveTab("agentic")}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105 ${
                  activeTab === "agentic"
                    ? "gradient-purple-bg text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Agentic AI
              </button>
              <button
                onClick={() => setActiveTab("ml")}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105 ${
                  activeTab === "ml"
                    ? "gradient-purple-bg text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Machine Learning
              </button>
              <button
                onClick={() => setActiveTab("automation")}
                className={`px-5 py-2 text-sm font-semibold rounded-full transition-all hover:scale-105 ${
                  activeTab === "automation"
                    ? "gradient-purple-bg text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                AI Automation
              </button>
            </div>
          </div>
        </ScrollReveal>

        {activeTab === "agentic" ? (
          <div className="max-w-5xl mx-auto space-y-14">
            <div key="latest">
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                  Latest
                </h3>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {latestAgenticProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} i={i} />
                ))}
              </div>
            </div>
            <div key="old">
              <ScrollReveal>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6 border-l-4 border-muted-foreground pl-4">
                  Old
                </h3>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {oldAgenticProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} i={i} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div key={activeTab} className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {(activeTab === "ml" ? mlProjects : automationProjects).map((project, i) => (
              <ProjectCard key={project.title} project={project} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
