import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, ExternalLink, ArrowLeft, Phone, Download, Sparkles, Building2, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

export const WebCV: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Top navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link to="/" className="btn-ghost text-xs py-2 px-4">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <a
              href="/Muhammad_Dastgeer_CV.pdf"
              download
              className="btn-gradient text-xs py-2 px-5"
            >
              <Download size={14} /> Download Official PDF
            </a>
          </div>

          {/* Main CV Card */}
          <div className="bento-card p-6 sm:p-10 border border-border shadow-2xl mb-8">
            {/* Header / Bio */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-aurora-violet/50 shadow-xl flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-1">
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    Muhammad <span className="text-gradient">Dastgeer</span>
                  </h1>
                  <span className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-bold">
                    AVAILABLE Q4 2026
                  </span>
                </div>

                <p className="text-aurora-cyan font-heading font-semibold text-xs sm:text-sm tracking-wide mb-3">
                  AI/ML Engineer • Generative AI & Multi-Agent Architect
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1.5"><Phone size={13} className="text-aurora-cyan" /> +92 318 2460719</span>
                  <span className="flex items-center gap-1.5"><Mail size={13} className="text-aurora-violet" /> dastgeerjutt8888@gmail.com</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-aurora-cyan" /> Pir Mahal, Punjab, Pakistan</span>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://linkedin.com/in/muhammad-dastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-tag text-[11px] text-aurora-cyan hover:underline"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="text-border">•</span>
                  <a
                    href="https://github.com/MuhammadDastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-tag text-[11px] text-aurora-violet hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <Section title="Professional Summary">
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI/ML Engineer with deep hands-on expertise across the complete AI/ML lifecycle — from classical predictive modeling to cutting-edge Generative AI, RAG, and autonomous agent orchestration. Proficient in Python, PyTorch, TensorFlow, and full-stack MLOps containerization. Experienced delivering production systems with verifiable guardrails across multiple ML contract engagements.
              </p>
            </Section>

            {/* Core Competencies */}
            <Section title="Core AI/ML Competencies">
              <div className="space-y-2.5">
                {[
                  { area: "Programming & Math", skills: "Python (Advanced), Applied Mathematics & Statistics for AI, Linear Algebra, Calculus, Probability" },
                  { area: "Data Science & Viz", skills: "Data Processing, Feature Engineering, Pandas, NumPy, Matplotlib, Seaborn, Plotly" },
                  { area: "Machine Learning", skills: "Supervised & Unsupervised Learning, Cross-Validation, Scikit-learn, XGBoost, LightGBM, CatBoost" },
                  { area: "Deep Learning", skills: "Neural Architectures, CNNs, RNNs, Transformers, PyTorch, TensorFlow/Keras, Transfer Learning" },
                  { area: "Generative AI & RAG", skills: "LLMs, Hybrid RAG, Prompt Engineering, LangChain, ChromaDB, OpenAI, Gemini 2.5, Claude 3.7" },
                  { area: "Agentic AI", skills: "Multi-Agent Workflows, LangGraph State Machines, CrewAI, MCP Architecture, Human-in-the-Loop" },
                  { area: "AI Automation", skills: "n8n Enterprise Pipelines, FastAPI, Microservices, Webhooks, API Integrations" },
                  { area: "Cloud & MLOps", skills: "AWS (EC2, S3, IAM), Microsoft Azure, Docker Containers, Inference Telemetry, CI/CD" },
                  { area: "Computer Vision", skills: "YOLO Object Detection, Segmentation, OCR, Image Processing, OpenCV" },
                  { area: "NLP", skills: "Text Classification, NER, Sentiment Analysis, Tokenization, Hugging Face Hub" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-xs sm:text-sm py-1 border-b border-border/40 last:border-none">
                    <span className="font-heading font-semibold text-foreground sm:min-w-[160px] flex-shrink-0 text-aurora-cyan">
                      {item.area}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item.skills}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Professional Experience */}
            <Section title="Professional Experience">
              <ExperienceItem
                title="AI / Machine Learning Intern"
                company="Zeltrion Solutions"
                period="15 Aug 2026 – 15 Oct 2026"
                location="Pakistan (Internship • Certificate ID: ZS-0004)"
                bullets={[
                  "Successfully completed the industrial AI Internship Program at Zeltrion Solutions ('Where Strategy Meets Intelligence').",
                  "Demonstrated dedication, leadership, teamwork, innovation, and impact in engineering data-driven systems.",
                  "Collaborated with technical leads on model evaluations, feature validation, and intelligent workflow automation.",
                  "Awarded Certificate of Internship Completion (Certificate ID: ZS-0004) signed by Founder & CEO Nimra Akbar.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Engineer"
                company="Codveda Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Part-Time / Contract)"
                bullets={[
                  "Designed and deployed end-to-end ML pipelines for production predictive systems, reducing manual workflows by 40%.",
                  "Built deep learning models using PyTorch and TensorFlow achieving production performance across classification & regression.",
                  "Spearheaded LLM integration projects incorporating RAG pipelines, prompt engineering, and Agentic workflows with LangGraph.",
                  "Conducted rigorous model evaluation, drift monitoring, and latency profiling.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="Arch Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Part-Time / Contract)"
                bullets={[
                  "Developed and validated predictive models with benchmark cross-validation F1 scores exceeding 0.88.",
                  "Performed end-to-end preprocessing, feature engineering, and model training on structured high-dimensional datasets.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="CodaAlpha"
                period="Mar 2025 – Present"
                location="Pakistan (Freelance / Contract)"
                bullets={[
                  "Engineered structured data prediction pipelines and deployed models to staging environments with real-time inference telemetry.",
                ]}
              />
              <ExperienceItem
                title="Computer Operator"
                company="Johar Centre Pir Mahal"
                period="2022 – 2023"
                location="Pir Mahal, Pakistan"
                bullets={[
                  "Managed administrative software workflows, data entry, digital archiving, and office system automation.",
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Intermediate (ICS) — Computer Science</h4>
                    <p className="text-xs text-muted-foreground">BISE Faisalabad</p>
                  </div>
                  <span className="mono-tag text-xs text-muted-foreground">2020 – 2022</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Matriculation — Computer Science</h4>
                    <p className="text-xs text-muted-foreground">BISE Faisalabad</p>
                  </div>
                  <span className="mono-tag text-xs text-muted-foreground">2018 – 2020</span>
                </div>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certifications & Accreditations">
              <div className="grid md:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                {[
                  "Artificial Intelligence using Python — DigiSkills",
                  "Cloud Computing (AWS) — DigiSkills",
                  "Six-Month AI & Data Science Mentorship — Codanics",
                  "Python ka Chilla for Data Science — Codanics",
                  "Tableau for Data Analytics — Codanics",
                  "Applied Machine Learning — InnoVista Learn Easy",
                  "Python Programming Course — InnoVista Learn Easy",
                  "Model Context Protocol (MCP) — Hugging Face",
                ].map((c, i) => (
                  <p key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-aurora-cyan" />
                    {c}
                  </p>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div className="flex gap-6 text-xs sm:text-sm">
                <span className="text-foreground"><strong className="text-aurora-cyan">English</strong> (Professional Working)</span>
                <span className="text-foreground"><strong className="text-aurora-violet">Urdu</strong> (Native)</span>
                <span className="text-foreground"><strong className="text-accent">Punjabi</strong> (Native)</span>
              </div>
            </Section>

            <p className="mono-tag text-[10px] text-muted-foreground text-center mt-8 pt-4 border-t border-border/50">
              REFERENCES & CERTIFICATE VERIFICATION CODES AVAILABLE UPON REQUEST
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-border">
      <div className="w-1.5 h-4 bg-gradient-to-b from-aurora-violet to-aurora-cyan rounded-full" />
      <h3 className="font-heading text-base sm:text-lg font-bold text-foreground tracking-tight">{title}</h3>
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
        <h4 className="font-heading font-bold text-foreground text-sm sm:text-base">{title}</h4>
        <p className="text-xs text-aurora-cyan font-medium">{company} • <span className="text-muted-foreground">{location}</span></p>
      </div>
      <span className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full bg-surface border border-border text-muted-foreground">
        {period}
      </span>
    </div>
    <ul className="space-y-1.5 ml-4 mt-2">
      {bullets.map((b, i) => (
        <li key={i} className="text-xs text-muted-foreground list-disc leading-relaxed">{b}</li>
      ))}
    </ul>
  </div>
);

export default WebCV;
