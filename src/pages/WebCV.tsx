import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowLeft, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

export const WebCV: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Top navigation row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link to="/" className="btn-ghost text-xs py-2 px-4 rounded-lg">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
            <a
              href="/Muhammad_Dastgeer_CV.pdf"
              download
              className="btn-primary text-xs py-2 px-5 rounded-lg"
            >
              <Download size={14} /> Download Official PDF
            </a>
          </div>

          {/* Main CV Card */}
          <div className="bento-card p-6 sm:p-10 border border-border shadow-md mb-8">
            {/* Header / Bio */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b border-border">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border border-border shadow-sm flex-shrink-0">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center md:text-left flex-1">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-1.5">
                  <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    Muhammad Dastgeer
                  </h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/20">
                    AVAILABLE FOR ROLES
                  </span>
                </div>

                <p className="text-[#00F2FE] font-heading font-semibold text-xs sm:text-sm tracking-wide mb-3">
                  AI/ML Systems Engineer • Autonomous Multi-Agent Architect
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#94A3B8] mb-3">
                  <a href="tel:+923182460719" className="flex items-center gap-1.5 hover:text-[#00F2FE] transition-colors"><Phone size={13} className="text-[#00F2FE]" /> +92 318 2460719</a>
                  <a href="mailto:dastgeerjutt8888@gmail.com" className="flex items-center gap-1.5 hover:text-[#00F2FE] transition-colors"><Mail size={13} className="text-[#00F2FE]" /> dastgeerjutt8888@gmail.com</a>
                  <span className="flex items-center gap-1.5"><MapPin size={13} className="text-[#00F2FE]" /> Punjab, Pakistan (Remote Worldwide)</span>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
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
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI/ML Engineer with hands-on expertise building production systems across the machine learning lifecycle: from classical tabular algorithms and PyTorch deep learning models to cutting-edge Generative AI, RAG architectures, and autonomous multi-agent systems with LangGraph. Experienced in cloud microservices and Docker containerization across AWS and Microsoft Azure.
              </p>
            </Section>

            {/* Core Competencies */}
            <Section title="Core AI/ML Competencies">
              <div className="space-y-2.5">
                {[
                  { area: "Programming & Math", skills: "Python 3.12, Applied Mathematics, Probability, Linear Algebra, AsyncIO, FastAPI" },
                  { area: "Data Science & Viz", skills: "Feature Engineering, Data Cleaning, Pandas, NumPy, Matplotlib, Seaborn, Plotly" },
                  { area: "Machine Learning", skills: "Supervised & Unsupervised Learning, Cross-Validation, Scikit-learn, XGBoost, LightGBM" },
                  { area: "Deep Learning", skills: "Neural Architectures, CNNs, RNNs, Transformers, PyTorch, TensorFlow, Transfer Learning" },
                  { area: "Generative AI & RAG", skills: "LLMs, Hybrid RAG, Prompt Engineering, LangChain, ChromaDB, OpenAI, Gemini 2.5, Claude" },
                  { area: "Agentic AI", skills: "Multi-Agent Workflows, LangGraph State Machines, CrewAI, MCP Architecture, Human-in-the-Loop" },
                  { area: "AI Automation", skills: "n8n Enterprise Pipelines, FastAPI Microservices, REST Webhooks, Workflow Nodes" },
                  { area: "Cloud & MLOps", skills: "AWS (EC2, S3, IAM), Microsoft Azure, Docker Containers, Telemetry, CI/CD" },
                  { area: "Computer Vision", skills: "YOLO Object Detection, Segmentation, OCR, Image Processing, OpenCV" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-xs sm:text-sm py-1.5 border-b border-border/40 last:border-none">
                    <span className="font-heading font-semibold text-foreground sm:min-w-[160px] flex-shrink-0">
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
                  <span className="text-xs text-muted-foreground tabular-nums">2020 – 2022</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">Matriculation — Computer Science</h4>
                    <p className="text-xs text-muted-foreground">BISE Faisalabad</p>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums">2018 – 2020</span>
                </div>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certifications & Accreditations">
              <div className="grid md:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-foreground">
                {[
                  "Artificial Intelligence using Python — DigiSkills.pk",
                  "Cloud Computing (AWS) — DigiSkills.pk",
                  "Six-Month AI & Data Science Mentorship — Codanics",
                  "Python ka Chilla for Data Science — Codanics",
                  "Tableau for Data Analytics — Codanics",
                  "Applied Machine Learning — InnoVista Learn Easy",
                  "Python Programming Course — InnoVista Learn Easy",
                  "Model Context Protocol (MCP) — Hugging Face",
                ].map((c, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                    <span>{c}</span>
                  </p>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div className="flex gap-6 text-xs sm:text-sm">
                <span className="text-foreground"><strong className="text-blue-600 dark:text-blue-400">English</strong> (Professional Working)</span>
                <span className="text-foreground"><strong className="text-foreground">Urdu</strong> (Native)</span>
                <span className="text-foreground"><strong className="text-foreground">Punjabi</strong> (Native)</span>
              </div>
            </Section>

            <p className="text-[11px] text-muted-foreground text-center mt-8 pt-4 border-t border-border">
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
    <div className="flex items-center gap-2 mb-3.5 pb-2 border-b border-border">
      <div className="w-1.5 h-4 bg-blue-600 dark:bg-blue-400 rounded-full" />
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
        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{company} · <span className="text-muted-foreground">{location}</span></p>
      </div>
      <span className="text-xs text-muted-foreground tabular-nums">
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
