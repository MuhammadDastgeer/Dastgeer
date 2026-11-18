import React, { useState, useMemo, useEffect } from "react";
import {
  Award,
  CheckCircle,
  Cloud,
  Cpu,
  Sparkles,
  ExternalLink,
  Eye,
  FileText,
  Image as ImageIcon,
  AlertCircle,
  X,
  Filter,
  Calendar,
  Database,
  Terminal,
  ShieldCheck,
  Copy,
  Check,
  Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { PdfViewer } from "./PdfViewer";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  instructor?: string;
  date: string;
  year: string;
  credentialId?: string;
  category: "agents" | "ml" | "data" | "python" | "industry";
  skills: string;
  assetType?: "pdf" | "image";
  assetUrl?: string;
  verificationUrl?: string;
  featured?: boolean;
}

const certificationsData: Certification[] = [
  // 1. Agentic AI & LLMs
  {
    id: "anthropic-claude-code",
    name: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 16, 2026",
    year: "2026",
    credentialId: "rq3po9kci9cz",
    category: "agents",
    skills: "Claude Code CLI, Agentic Coding, Subagents, Architecture Planning, Tool Integration",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/certificate-rq3po9kci9cz-1773730081_0429d0ea.pdf",
    verificationUrl: "https://verify.skilljar.com/c/rq3po9kci9cz",
    featured: true,
  },
  {
    id: "anthropic-agent-skills",
    name: "Introduction to Agent Skills",
    issuer: "Anthropic",
    date: "March 2026",
    year: "2026",
    credentialId: "468m7vdx4qec",
    category: "agents",
    skills: "Agentic Tool Use, Multi-Step Orchestration, Autonomous Workflows, System Prompts",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/certificate-468m7vdx4qec-1773590183_56a5026a.pdf",
    verificationUrl: "https://verify.skilljar.com/c/468m7vdx4qec",
    featured: true,
  },
  {
    id: "google-ai-agents",
    name: "5-Day AI Agents Intensive Course with Google",
    issuer: "Google & Kaggle",
    date: "Dec 18, 2025",
    year: "2025",
    credentialId: "KAGGLE-GOOGLE-AGENT-2025",
    category: "agents",
    skills: "Google AI Agents, Gemini 2.5, Agentic Orchestration, Function Calling, Multi-Agent Swarms",
    assetType: "image",
    assetUrl: "/assets/aistudio/5-Day_AI_Agents_Intensive_Course_with_Google_0f4c1b6d.png",
    featured: true,
  },
  {
    id: "hf-mcp-unit1",
    name: "The MCP Course: Unit 1 - Fundamentals of MCP",
    issuer: "Hugging Face",
    date: "July 31, 2025",
    year: "2025",
    credentialId: "HF-MCP-FUNDAMENTALS",
    category: "agents",
    skills: "Model Context Protocol (MCP), Client-Server Architecture, Tool Servers, Context Streaming",
    assetType: "image",
    assetUrl: "/assets/aistudio/image_faacd92d.webp",
    featured: true,
  },

  // 2. Machine Learning & Deep Learning
  {
    id: "kaggle-deep-learning",
    name: "Intro to Deep Learning",
    issuer: "Kaggle",
    date: "July 30, 2025",
    year: "2025",
    credentialId: "KAGGLE-DEEP-LEARNING",
    category: "ml",
    skills: "TensorFlow, Keras, Dense Neural Nets, Overfitting & Early Stopping, Dropout Regularization",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Intro_to_Deep_Learning_83d4d467.png",
    featured: true,
  },
  {
    id: "kaggle-ml-explainability",
    name: "Machine Learning Explainability",
    issuer: "Kaggle",
    date: "Aug 12, 2025",
    year: "2025",
    credentialId: "KAGGLE-ML-EXPLAIN",
    category: "ml",
    skills: "Permutation Importance, Partial Dependence Plots, SHAP Values, Model Interpretability",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Machine_Learning_Explainability_8cea5f79.png",
    featured: false,
  },
  {
    id: "kaggle-computer-vision",
    name: "Computer Vision",
    issuer: "Kaggle",
    date: "Aug 10, 2025",
    year: "2025",
    credentialId: "KAGGLE-CV-SPEC",
    category: "ml",
    skills: "Convolutional Neural Networks (CNNs), Feature Extraction, Transfer Learning, Data Augmentation",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Computer_Vision_7c22243e.png",
    featured: false,
  },
  {
    id: "innovista-machine-learning",
    name: "Machine Learning Course",
    issuer: "InnoVista Learn Easy",
    date: "Sept 17, 2025",
    year: "2025",
    credentialId: "589-5943-98335",
    category: "ml",
    skills: "Supervised & Unsupervised Learning, Regression, Classification, Model Evaluation",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/5943_98335_41dbc40f.pdf",
    featured: false,
  },
  {
    id: "kaggle-intermediate-ml",
    name: "Intermediate Machine Learning",
    issuer: "Kaggle",
    date: "Aug 2, 2025",
    year: "2025",
    credentialId: "KAGGLE-INTER-ML",
    category: "ml",
    skills: "Missing Values Imputation, Categorical Encoding, Pipelines, Cross-Validation, XGBoost Tuning",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Intermediate_Machine_Learning_5f2570ff.png",
    featured: false,
  },
  {
    id: "kaggle-intro-ml",
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "July 30, 2025",
    year: "2025",
    credentialId: "KAGGLE-INTRO-ML",
    category: "ml",
    skills: "Decision Trees, Random Forests, Train-Test Validation, Underfitting & Overfitting Control",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Intro_to_Machine_Learning_7e2b5deb.png",
    featured: false,
  },

  // 3. Data Science & Analytics
  {
    id: "codanics-six-month-mentorship",
    name: "Six Months of AI & Data Science Mentorship Program",
    issuer: "Codanics",
    instructor: "Dr. Muhammad Aammar Tufail",
    date: "July 27, 2025",
    year: "2025",
    credentialId: "7c0b5ee721163f62",
    category: "data",
    skills: "End-to-End AI Lifecycle, Production ML, Exploratory Data Analysis, Deep Learning, MLOps",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/Certificate_for__9f26b7f7.pdf",
    featured: true,
  },
  {
    id: "codanics-tableau",
    name: "Tableau for Data Analytics",
    issuer: "Codanics",
    instructor: "Dr. Muhammad Aammar Tufail",
    date: "July 29, 2025",
    year: "2025",
    credentialId: "061273d4959c5ccb",
    category: "data",
    skills: "Interactive Dashboards, Visual Analytics, KPI Reporting, BI Data Modeling, Storytelling",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/Tableau_for_Data_Analytics_4ed0e5d0.pdf",
    featured: false,
  },
  {
    id: "kaggle-advanced-sql",
    name: "Advanced SQL",
    issuer: "Kaggle",
    date: "Aug 9, 2025",
    year: "2025",
    credentialId: "KAGGLE-ADV-SQL",
    category: "data",
    skills: "Window Functions, Analytic Queries, Complex JOINs, Nested Subqueries, BigQuery Partitioning",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Advanced_SQL_ed868df6.png",
    featured: true,
  },
  {
    id: "kaggle-data-viz",
    name: "Data Visualization",
    issuer: "Kaggle",
    date: "Aug 6, 2025",
    year: "2025",
    credentialId: "KAGGLE-DATA-VIZ",
    category: "data",
    skills: "Seaborn, Matplotlib, Scatter Plots, Heatmaps, Distributions, Custom Visual Styling",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Data_Visualization_b3efee08.png",
    featured: false,
  },
  {
    id: "kaggle-data-cleaning",
    name: "Data Cleaning",
    issuer: "Kaggle",
    date: "Aug 5, 2025",
    year: "2025",
    credentialId: "KAGGLE-DATA-CLEAN",
    category: "data",
    skills: "Missing Value Imputation, Scaling & Normalization, Date Parsing, Character Encoding",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Data_Cleaning_77b3f59f.png",
    featured: false,
  },
  {
    id: "kaggle-pandas",
    name: "Pandas",
    issuer: "Kaggle",
    date: "July 29, 2025",
    year: "2025",
    credentialId: "KAGGLE-PANDAS",
    category: "data",
    skills: "DataFrames, Indexing & Selecting, Grouping & Aggregating, Renaming & Combining, Data Types",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Pandas_bd971224.png",
    featured: false,
  },

  // 4. Python & Core Programming
  {
    id: "codanics-python-chilla",
    name: "Python ka Chilla for Data Science (40 Days)",
    issuer: "Codanics",
    instructor: "Dr. Muhammad Aammar Tufail",
    date: "July 28, 2025",
    year: "2025",
    credentialId: "ee2cb003d9d2a8e2",
    category: "python",
    skills: "Python 3, Scientific Computing, Statistical Inference, Exploratory Analysis, NumPy",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/Python_ka_Chilla_for_Data_Science_b4fa5d34.pdf",
    featured: true,
  },
  {
    id: "innovista-python",
    name: "Python Course",
    issuer: "InnoVista Learn Easy",
    date: "Sept 16, 2025",
    year: "2025",
    credentialId: "589-2222-98335",
    category: "python",
    skills: "Python Core, Object-Oriented Programming (OOP), Data Structures, Modular Code Design",
    assetType: "pdf",
    assetUrl: "/assets/aistudio/2222_98335_95bc78a5.pdf",
    featured: false,
  },
  {
    id: "kaggle-python",
    name: "Python",
    issuer: "Kaggle",
    date: "July 29, 2025",
    year: "2025",
    credentialId: "KAGGLE-PYTHON-CORE",
    category: "python",
    skills: "Python Syntax, Functions, Booleans & Conditionals, Lists & Loops, Dictionaries, Modules",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Python_53236099.png",
    featured: false,
  },
  {
    id: "kaggle-intro-prog",
    name: "Intro to Programming",
    issuer: "Kaggle",
    date: "July 30, 2025",
    year: "2025",
    credentialId: "KAGGLE-INTRO-PROG",
    category: "python",
    skills: "Arithmetic, Variables, Functions, Conditionals, Algorithmic Thinking",
    assetType: "image",
    assetUrl: "/assets/aistudio/Muhammad__Dastgeer_-_Intro_to_Programming_17cf4c73.png",
    featured: false,
  },

  // 5. Industry & Cloud
  {
    id: "zeltrion-internship",
    name: "AI / Machine Learning Engineering Internship",
    issuer: "Zeltrion Solutions",
    date: "15 Aug 2026 – 15 Oct 2026",
    year: "2026",
    credentialId: "ZS-0004",
    category: "industry",
    skills: "Enterprise AI Development, Data Pipelines, Innovation, Leadership, Teamwork, Impact",
    assetType: "image",
    assetUrl: "/assets/aistudio/WhatsApp_Image_2026-10-01_at_2.36.17_PM_7bc30895.jpeg",
    featured: true,
  },
  {
    id: "digiskills-ai-python",
    name: "Artificial Intelligence with Python",
    issuer: "DigiSkills.pk (Govt of Pakistan / Ignite)",
    date: "2024",
    year: "2024",
    credentialId: "DS-AI-PY",
    category: "industry",
    skills: "Python, AI Algorithms, Neural Networks, Computer Vision, Govt Certified",
    featured: false,
  },
  {
    id: "digiskills-aws-cloud",
    name: "AWS Cloud Computing",
    issuer: "DigiSkills.pk (Govt of Pakistan / Ignite)",
    date: "2024",
    year: "2024",
    credentialId: "DS-AWS-CLOUD",
    category: "industry",
    skills: "EC2, S3, IAM, Cloud Security, Microservices Architecture",
    featured: false,
  },
];

const categoryTabs = [
  { id: "all", label: "All Accreditations", count: 23 },
  { id: "agents", label: "Agentic AI & LLMs", count: 4, icon: Sparkles },
  { id: "ml", label: "Machine Learning & DL", count: 6, icon: Cpu },
  { id: "data", label: "Data Science & SQL", count: 6, icon: Database },
  { id: "python", label: "Python & Programming", count: 4, icon: Terminal },
  { id: "industry", label: "Industry & Cloud", count: 3, icon: Cloud },
];

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCerts = useMemo(() => {
    if (activeTab === "all") return certificationsData;
    return certificationsData.filter((cert) => cert.category === activeTab);
  }, [activeTab]);

  useEffect(() => {
    if (!selectedCert) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCert]);

  const handleCopyId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getIssuerBadgeStyle = (issuer: string) => {
    if (issuer.includes("Anthropic")) {
      return "bg-amber-400/10 text-amber-300 border-amber-400/30";
    }
    if (issuer.includes("Google") || issuer.includes("Kaggle")) {
      return "bg-cyan-400/10 text-cyan-300 border-cyan-400/30";
    }
    if (issuer.includes("Hugging Face")) {
      return "bg-yellow-400/10 text-yellow-300 border-yellow-400/30";
    }
    if (issuer.includes("Codanics")) {
      return "bg-emerald-400/10 text-emerald-300 border-emerald-400/30";
    }
    if (issuer.includes("Zeltrion")) {
      return "bg-purple-400/10 text-purple-300 border-purple-400/30";
    }
    return "bg-blue-400/10 text-blue-300 border-blue-400/30";
  };

  const getCategoryIcon = (category: Certification["category"]) => {
    switch (category) {
      case "agents":
        return Sparkles;
      case "ml":
        return Cpu;
      case "data":
        return Database;
      case "python":
        return Terminal;
      case "industry":
        return ShieldCheck;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="container max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-label mb-2 block">07. Credentials & Accreditations</span>
              <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
                Certifications & Specialized Courses
              </h2>
              <p className="text-[#94A3B8] text-sm sm:text-base max-w-[68ch]">
                Formally verified credentials across Autonomous Agents (Anthropic & Google), Deep Learning, Advanced SQL, Data Science Mentorship, and Industrial ML Engineering.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                <div className="text-left">
                  <span className="block text-xs font-heading font-bold text-white">23+ Accreditations</span>
                  <span className="block text-[10px] text-[#94A3B8]">100% Verifiable</span>
                </div>
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-cyan-400/10 border border-cyan-400/20 backdrop-blur-md flex items-center gap-2">
                <Sparkles size={14} className="text-[#00F2FE]" />
                <span className="text-xs font-heading font-semibold text-[#00F2FE]">Anthropic & Google Agents</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Buttons - Fully visible, wrapped, no scroll */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 pb-5 border-b border-white/10">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] shadow-[0_0_20px_rgba(0,242,254,0.35)] scale-[1.02]"
                    : "bg-white/[0.04] text-[#94A3B8] hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                {TabIcon && (
                  <TabIcon
                    size={14}
                    className={isActive ? "text-[#0B0F19]" : "text-[#00F2FE]"}
                  />
                )}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    isActive
                      ? "bg-black/25 text-[#0B0F19] font-bold"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCerts.map((cert, i) => {
            const Icon = getCategoryIcon(cert.category);
            const badgeClass = getIssuerBadgeStyle(cert.issuer);

            return (
              <ScrollReveal key={cert.id} delay={(i % 6) * 0.04}>
                <SpotlightCard
                  onClick={() => setSelectedCert(cert)}
                  className="p-6 flex flex-col justify-between h-full group hover:border-[#00F2FE]/40 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Top row: Category/Issuer and Date */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[#00F2FE] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all">
                          <Icon size={16} />
                        </div>
                        <div>
                          <span className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-md border ${badgeClass}`}>
                            {cert.issuer}
                          </span>
                        </div>
                      </div>
                      <span className="meta-mono text-xs text-[#94A3B8] tabular-nums flex items-center gap-1">
                        <Calendar size={11} className="text-[#94A3B8]/60" />
                        {cert.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-white mb-1.5 leading-snug group-hover:text-[#00F2FE] transition-colors">
                      {cert.name}
                    </h3>

                    {/* Instructor if available */}
                    {cert.instructor && (
                      <p className="text-xs text-[#94A3B8] mb-2 font-mono">
                        Instructor: <span className="text-white/80">{cert.instructor}</span>
                      </p>
                    )}

                    {/* Key skills covered */}
                    <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2 mb-4">
                      {cert.skills}
                    </p>
                  </div>

                  {/* Card Footer: Credential ID, Verification, and Preview CTA */}
                  <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-xs">
                      {cert.credentialId ? (
                        <div className="flex items-center gap-1.5">
                          <span className="meta-mono text-[10px] text-white/50 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/5">
                            ID: {cert.credentialId}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyId(cert.credentialId!, e)}
                            title="Copy ID"
                            className="text-[#94A3B8] hover:text-[#00F2FE] transition-colors p-0.5"
                          >
                            {copiedId === cert.credentialId ? (
                              <Check size={11} className="text-emerald-400" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] text-white/40">Accredited</span>
                      )}

                      {cert.assetUrl ? (
                        <span className="text-[#00F2FE] font-medium text-[11px] flex items-center gap-1">
                          {cert.assetType === "pdf" ? (
                            <>
                              <FileText size={11} /> PDF Ready
                            </>
                          ) : (
                            <>
                              <ImageIcon size={11} /> Image Ready
                            </>
                          )}
                        </span>
                      ) : (
                        <span className="text-amber-300/80 font-medium text-[11px] flex items-center gap-1">
                          <AlertCircle size={11} /> No File
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div
                      className="flex items-center gap-2 pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {cert.assetUrl ? (
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 hover:border-[#00F2FE]/40 border border-white/10 text-xs font-heading font-medium text-white hover:text-[#00F2FE] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Eye size={12} className="text-[#00F2FE]" />
                          <span>View Certificate</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="flex-1 py-1.5 px-3 rounded-lg bg-amber-400/5 hover:bg-amber-400/10 border border-amber-400/20 text-[11px] text-amber-200/80 text-center font-mono transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <AlertCircle size={12} className="text-amber-300" />
                          <span>File Not Uploaded Yet</span>
                        </button>
                      )}

                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Official Verification Portal"
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-[#00F2FE]/15 border border-white/10 text-[#94A3B8] hover:text-[#00F2FE] transition-colors"
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {filteredCerts.length === 0 && (
          <div className="text-center py-16 bg-white/[0.02] rounded-2xl border border-white/5">
            <Filter size={32} className="mx-auto text-[#94A3B8] mb-3 opacity-40" />
            <h4 className="font-heading font-bold text-white text-base mb-1">No credentials in this category</h4>
            <p className="text-xs text-[#94A3B8] mb-4">
              Switch category tabs to explore all credentials.
            </p>
            <button
              onClick={() => setActiveTab("all")}
              className="btn-ghost text-xs py-1.5 px-4 rounded-lg cursor-pointer"
            >
              Show All Credentials
            </button>
          </div>
        )}
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1322] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[#00F2FE]">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                      {selectedCert.name}
                    </h3>
                    <p className="text-xs text-[#00F2FE] font-mono">
                      {selectedCert.issuer} · Issued {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCert.assetUrl && (
                    <a
                      href={selectedCert.assetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-[#00F2FE]/20 text-[#94A3B8] hover:text-[#00F2FE] transition-colors"
                      title="Download Certificate"
                    >
                      <Download size={16} />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-rose-500/20 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Body / Viewer */}
              <div
                data-lenis-prevent
                className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B0F19] flex flex-col items-center justify-start min-h-[340px]"
              >
                {selectedCert.assetType === "image" && selectedCert.assetUrl && (
                  <div className="max-w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 my-auto">
                    <img
                      src={selectedCert.assetUrl}
                      alt={selectedCert.name}
                      referrerPolicy="no-referrer"
                      className="max-h-[68vh] w-auto object-contain mx-auto"
                    />
                  </div>
                )}

                {selectedCert.assetType === "pdf" && selectedCert.assetUrl && (
                  <PdfViewer
                    url={selectedCert.assetUrl}
                    title={selectedCert.name}
                  />
                )}

                {!selectedCert.assetUrl && (
                  <div className="my-auto max-w-md w-full text-center p-8 rounded-2xl bg-white/[0.03] border border-amber-400/20">
                    <AlertCircle size={36} className="mx-auto text-amber-300 mb-3" />
                    <h4 className="font-heading font-bold text-white text-base mb-2">
                      Certificate PDF / Image Not Uploaded Yet
                    </h4>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      Is credential ka digital PDF ya image file abhi portfolio mein upload nahi hua. Aap iska official certificate file upload kar sakte hain.
                    </p>
                    <div className="text-xs text-white/80 bg-white/[0.04] rounded-xl p-3 border border-white/10 text-left space-y-1">
                      <p><span className="text-[#94A3B8]">Issuer:</span> {selectedCert.issuer}</p>
                      <p><span className="text-[#94A3B8]">Credential ID:</span> {selectedCert.credentialId || "N/A"}</p>
                      <p><span className="text-[#94A3B8]">Skills:</span> {selectedCert.skills}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#94A3B8]">
                  <span>Recipient: <strong className="text-white">Muhammad Dastgeer</strong></span>
                  {selectedCert.credentialId && (
                    <span className="font-mono bg-white/[0.05] px-2 py-0.5 rounded border border-white/10 text-white/80">
                      ID: {selectedCert.credentialId}
                    </span>
                  )}
                  {selectedCert.instructor && (
                    <span>Instructor: <strong className="text-white">{selectedCert.instructor}</strong></span>
                  )}
                </div>

                <div className="flex items-center gap-2.5">
                  {selectedCert.verificationUrl && (
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient text-xs py-2 px-4 rounded-lg flex items-center gap-1.5"
                    >
                      <ExternalLink size={13} />
                      <span>Verify on {selectedCert.issuer}</span>
                    </a>
                  )}
                  {selectedCert.assetUrl && (
                    <a
                      href={selectedCert.assetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost text-xs py-2 px-4 rounded-lg flex items-center gap-1.5"
                    >
                      <FileText size={13} />
                      <span>Open Full Document</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
