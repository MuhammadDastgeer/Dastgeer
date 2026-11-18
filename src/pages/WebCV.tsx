import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowLeft, Phone, Download, Globe, FileText, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/images/profile_studio_midnight_1794993185171.jpg";
import { PdfViewer } from "@/components/PdfViewer";

const CV_PDF_URL = "/assets/aistudio/Muhammad_Dastgeer_CV_456271b5.pdf";

export const WebCV: React.FC = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <div className="min-h-screen bg-transparent relative z-10 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Top navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <Link to="/" className="btn-ghost text-xs py-2 px-4 rounded-lg">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => setShowPdfModal(true)}
                className="btn-ghost text-xs py-2 px-4 rounded-lg cursor-pointer"
              >
                <Eye size={14} className="text-[#00F2FE]" /> Preview Official PDF
              </button>
              <a
                href={CV_PDF_URL}
                download="Muhammad_Dastgeer_CV.pdf"
                className="btn-gradient text-xs py-2 px-5 rounded-lg"
              >
                <Download size={14} /> Download Official PDF
              </a>
            </div>
          </div>

          {/* Main CV Card */}
          <div className="glass-card p-6 sm:p-10 border border-white/10 shadow-2xl mb-8">
            {/* Header / Bio */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-white/10">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_20px_rgba(0,242,254,0.15)] flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-1.5">
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Muhammad Dastgeer
                  </h1>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-[#00F2FE] font-semibold border border-cyan-400/30">
                    OPEN TO REMOTE
                  </span>
                </div>

                <p className="text-[#00F2FE] font-heading font-semibold text-xs sm:text-sm tracking-wide mb-3">
                  AI/ML Engineer | Generative AI & Agentic AI Specialist | AI Automation Engineer | Data Scientist
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#94A3B8] mb-3">
                  <a href="tel:+923182460719" className="flex items-center gap-1.5 hover:text-[#00F2FE] transition-colors">
                    <Phone size={13} className="text-[#00F2FE]" /> +92 318 2460719
                  </a>
                  <a href="mailto:dastgeerjutt8888@gmail.com" className="flex items-center gap-1.5 hover:text-[#00F2FE] transition-colors">
                    <Mail size={13} className="text-[#00F2FE]" /> dastgeerjutt8888@gmail.com
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#00F2FE]" /> Pir Mahal, Punjab, Pakistan
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://dastgeer.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#00F2FE] hover:underline flex items-center gap-1"
                  >
                    <Globe size={12} /> dastgeer.vercel.app ↗
                  </a>
                  <span className="text-white/20">·</span>
                  <a
                    href="https://www.linkedin.com/in/muhammad-dastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#00F2FE] hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="text-white/20">·</span>
                  <a
                    href="https://github.com/MuhammadDastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#00F2FE] hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <Section title="Professional Summary">
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                AI/ML Engineer with hands-on expertise across classical Machine Learning, Generative AI, Agentic AI and AI Automation. Proficient in Python, PyTorch, TensorFlow, LangChain, LlamaIndex and the complete MLOps pipeline. Skilled in building end-to-end AI workflow automations with n8n, Make.com and Zapier, integrating LLMs, RAG systems and autonomous AI agents into real-world business processes. Experienced across multiple ML engineering roles with deep knowledge of LLMs, Computer Vision and NLP.
              </p>
            </Section>

            {/* Core Competencies */}
            <Section title="Core Competencies">
              <div className="space-y-2">
                {[
                  { area: "Programming", skills: "Python (Advanced), SQL, Mathematics & Statistics, Linear Algebra, Calculus, Probability" },
                  { area: "AI Automation", skills: "n8n Workflows, Make.com, Zapier, Webhooks, API Integrations, Lovable, Bolt.new, FastAPI, Flask, Celery, Redis, CI/CD for ML" },
                  { area: "Generative AI", skills: "LLMs, RAG Systems, Prompt Engineering, LangChain, LlamaIndex, Groq API, Gemini API, Google AI Studio, Anthropic Claude API" },
                  { area: "Agentic AI", skills: "Multi-Agent Systems, LangGraph, CrewAI, AutoGen, MCP Servers, Autonomous Workflows" },
                  { area: "Machine Learning", skills: "Supervised & Unsupervised Learning, Feature Engineering, Scikit-learn, XGBoost, LightGBM" },
                  { area: "Deep Learning", skills: "Neural Networks, CNNs, RNNs, Transformers, PyTorch, TensorFlow/Keras, Transfer Learning, Fine-tuning" },
                  { area: "NLP", skills: "Text Classification, NER, Sentiment Analysis, BERT, Seq2Seq, Summarization, Hugging Face" },
                  { area: "Computer Vision", skills: "Image Classification, YOLO Object Detection, Segmentation, OCR, Video Processing, OpenCV" },
                  { area: "Time Series", skills: "ARIMA, Prophet, LSTM Forecasting, Anomaly Detection, Trend Analysis" },
                  { area: "MLOps", skills: "Model Deployment, Monitoring, A/B Testing, MLflow, Weights & Biases, Docker" },
                  { area: "Data & Analysis", skills: "Pandas, NumPy, Matplotlib, Seaborn, Plotly, Data Processing & Visualization" },
                  { area: "Tools & Cloud", skills: "AWS, Git, GitHub, VS Code, Jupyter, Google Colab, Linux, REST APIs, Streamlit, Gradio" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-xs sm:text-sm py-1.5 border-b border-white/10 last:border-none">
                    <span className="font-heading font-semibold text-white sm:min-w-[155px] flex-shrink-0">
                      {item.area}
                    </span>
                    <span className="text-[#94A3B8] leading-relaxed">{item.skills}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Professional Experience */}
            <Section title="Professional Experience">
              <ExperienceItem
                title="Intern"
                company="Zeltrion Solutions"
                period="Aug 2026 – Oct 2026"
                location="Certificate ID: ZS-0004"
                bullets={[
                  "Successfully completed the Internship Program at Zeltrion Solutions, demonstrating dedication, eagerness to learn and a strong commitment to professional growth (Certificate ID: ZS-0004).",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Engineer"
                company="Codveda Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Remote/Contract)"
                bullets={[
                  "Designed and deployed end-to-end ML pipelines for real-world data analysis and prediction tasks, reducing manual processing time by ~40%.",
                  "Built and optimized deep learning models using PyTorch and TensorFlow, achieving production-grade performance across classification and regression tasks.",
                  "Led LLM integration projects incorporating RAG pipelines, prompt engineering and Agentic workflows for client-facing AI applications.",
                  "Automated recurring reporting and data-sync workflows using n8n, Make.com and Zapier, cutting manual handoffs between systems.",
                  "Conducted model evaluation, A/B testing and performance monitoring for deployed AI systems.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="Arch Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Remote/Contract)"
                bullets={[
                  "Developed and tested ML models for predictive modeling tasks with cross-validation F1 scores consistently above 0.88.",
                  "Performed data preprocessing, feature engineering and model training workflows on structured datasets.",
                  "Evaluated model performance using precision/recall metrics and business KPIs aligned with client requirements.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="CodaAlpha"
                period="Mar 2025 – Present"
                location="Pakistan (Freelance/Contract)"
                bullets={[
                  "Built ML models for structured data prediction with preprocessing and performance evaluation pipelines.",
                  "Deployed models to staging environments and monitored live inference pipelines for reliability and drift detection.",
                ]}
              />
              <ExperienceItem
                title="Computer Operator"
                company="Johar Centre Pir Mahal"
                period="2022 – 2023"
                location="Pir Mahal, Pakistan"
                bullets={[
                  "Managed data entry, document processing and office automation using MS Office suite.",
                  "Handled client-facing administrative tasks and maintained accurate digital records.",
                ]}
              />
            </Section>

            {/* Key Projects */}
            <Section title="Key Projects">
              <div className="space-y-5">
                {[
                  {
                    title: "Multi-Agent AI Workflow Automation System",
                    stack: "Python, CrewAI, LangGraph, n8n, Make.com, Zapier, Groq API, FastAPI",
                    bullets: [
                      "Designed a multi-agent pipeline with specialized agents (Researcher, Writer, Reviewer, Publisher) that autonomously complete complex content and data tasks.",
                      "Integrated n8n, Make.com and Zapier for trigger-based automation (webhooks, email, Google Sheets) and Groq API for low-latency LLM inference.",
                      "Reduced a 4-hour manual research-to-publish workflow to under 12 minutes with human-in-the-loop review checkpoints.",
                    ],
                  },
                  {
                    title: "Agentic RAG System with Multi-Source Retrieval",
                    stack: "Python, LangChain, LlamaIndex, ChromaDB, FastAPI, Anthropic Claude API",
                    bullets: [
                      "Built a production-grade RAG system with multi-source document ingestion (PDFs, URLs, databases) and semantic chunking.",
                      "Implemented agentic query routing using LangGraph, allowing the AI to decide between vector search, web search and structured SQL queries.",
                      "Achieved sub-2-second response latency with 92%+ answer relevance on internal benchmarks; deployed via FastAPI with a Gradio frontend.",
                    ],
                  },
                  {
                    title: "YOLO-Based Real-Time Object Detection & Tracking Pipeline",
                    stack: "Python, YOLOv8, OpenCV, PyTorch, Streamlit",
                    bullets: [
                      "Trained and fine-tuned YOLOv8 models on custom datasets for multi-class object detection, achieving mAP@0.5 of 0.91.",
                      "Built a real-time OpenCV video pipeline (webcam and uploaded video) and deployed it as an interactive Streamlit app.",
                    ],
                  },
                  {
                    title: "BERT-Based Text Classification & Sentiment Analysis System",
                    stack: "Python, PyTorch, Hugging Face Transformers, BERT, Scikit-learn",
                    bullets: [
                      "Fine-tuned BERT and DistilBERT models on sentiment analysis, intent detection and topic categorization tasks.",
                      "Achieved F1 scores above 0.91 on benchmark datasets; implemented efficient batching and mixed-precision training.",
                      "Packaged as a reusable FastAPI inference API supporting single-text and batch classification.",
                    ],
                  },
                  {
                    title: "MLOps Pipeline with MLflow & Docker",
                    stack: "Python, MLflow, Docker, FastAPI, Weights & Biases, GitHub Actions",
                    bullets: [
                      "Built a complete MLOps pipeline with experiment tracking (MLflow), model registry, containerized deployment (Docker) and CI/CD via GitHub Actions.",
                      "Implemented model drift detection and automated retraining triggers using statistical tests on production data distributions.",
                      "Reduced deployment cycle from a manual process to fully automated 1-click promotion from staging to production.",
                    ],
                  },
                ].map((proj, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/10 last:border-none last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-heading font-bold text-white text-sm sm:text-base">{proj.title}</h4>
                    </div>
                    <p className="text-xs text-[#00F2FE] font-mono mb-2">{proj.stack}</p>
                    <ul className="space-y-1 ml-4">
                      {proj.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="text-xs text-[#94A3B8] list-disc leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-white">Intermediate (ICS) – Computer Science</h4>
                    <p className="text-xs text-[#94A3B8]">BISE Faisalabad</p>
                  </div>
                  <span className="text-xs text-[#94A3B8] tabular-nums">2022</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-white">Matric – Computer Science</h4>
                    <p className="text-xs text-[#94A3B8]">BISE Faisalabad</p>
                  </div>
                  <span className="text-xs text-[#94A3B8] tabular-nums">2020</span>
                </div>
              </div>
            </Section>

            {/* Certifications & Training */}
            <Section title="Certifications & Training">
              <div className="grid md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                {[
                  "Internship Completion Certificate – Zeltrion Solutions (Aug 2026 – Oct 2026)",
                  "Amazon Web Services (AWS) Course – DigiSkills",
                  "Artificial Intelligence Course – DigiSkills",
                  "Six-Month AI & Data Science Mentorship – Codanics",
                  "Python ka Chilla for Data Science – Codanics",
                  "Tableau for Data Analytics – Codanics",
                  "Machine Learning & Python Course – InnoVista Learn Easy",
                  "MCP (Model Context Protocol) – Hugging Face",
                ].map((c, i) => (
                  <p key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] mt-1.5 flex-shrink-0" />
                    <span>{c}</span>
                  </p>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div className="flex flex-wrap gap-6 text-xs sm:text-sm">
                <span className="text-white">
                  <strong className="text-[#00F2FE]">English</strong> (Professional)
                </span>
                <span className="text-white">
                  <strong>Urdu</strong> (Native)
                </span>
                <span className="text-white">
                  <strong>Punjabi</strong> (Native)
                </span>
              </div>
            </Section>

            <p className="text-[11px] text-[#94A3B8] text-center mt-8 pt-4 border-t border-white/10">
              References available upon request.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Official PDF Preview Modal */}
      <AnimatePresence>
        {showPdfModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPdfModal(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              data-lenis-prevent
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1322] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[#00F2FE]">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                      Muhammad Dastgeer — Official CV (PDF)
                    </h3>
                    <p className="text-xs text-[#00F2FE] font-mono">
                      2 Pages · AI/ML & Agentic AI Engineer
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CV_PDF_URL}
                    download="Muhammad_Dastgeer_CV.pdf"
                    className="btn-gradient text-xs py-1.5 px-3 rounded-lg"
                  >
                    <Download size={14} />
                    <span>Download PDF</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowPdfModal(false)}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-rose-500/20 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div data-lenis-prevent className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#0B0F19]">
                <PdfViewer url={CV_PDF_URL} title="Muhammad Dastgeer Official CV" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-white/10">
      <div className="w-1.5 h-4 bg-gradient-to-b from-[#00F2FE] to-[#4FACFE] rounded-full" />
      <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">{title}</h3>
    </div>
    {children}
  </div>
);

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}> = ({ title, company, period, location, bullets }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex flex-wrap items-start justify-between gap-1 mb-1.5">
      <div>
        <h4 className="font-heading font-bold text-white text-sm sm:text-base">{title}</h4>
        <p className="text-xs text-[#00F2FE] font-medium">
          {company} · <span className="text-[#94A3B8]">{location}</span>
        </p>
      </div>
      <span className="text-xs text-[#94A3B8] tabular-nums">{period}</span>
    </div>
    <ul className="space-y-1.5 ml-4 mt-2">
      {bullets.map((b, i) => (
        <li key={i} className="text-xs text-[#94A3B8] list-disc leading-relaxed">
          {b}
        </li>
      ))}
    </ul>
  </div>
);

export default WebCV;
