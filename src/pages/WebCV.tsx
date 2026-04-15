import { Link } from "react-router-dom";
import { MapPin, Mail, ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const education = [
  { title: "Matric — Computer Science", institution: "BISE Faisalabad", year: "2020" },
  { title: "Intermediate — ICS", institution: "BISE Faisalabad", year: "2022" },
  { title: "Data Science", institution: "Codanics", year: "2023" },
];

const experience = [
  { title: "ML Specialist / AI Engineer", company: "CodaAlpha", period: "2025 – Present" },
  { title: "ML Specialist", company: "Arch Technologies", period: "2025 – Present" },
  { title: "ML Engineer", company: "Codveda Technologies", period: "2025 – Present" },
  { title: "Computer Operator", company: "Johar Centre Pir Mahal", period: "2022" },
];

const skills = [
  "Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Keras",
  "scikit-learn", "NLP", "Computer Vision", "LangChain", "OpenAI", "Generative AI",
  "Pandas", "NumPy", "Data Visualization", "Plotly", "Tableau",
  "LangGraph", "CrewAI", "n8n", "Make.com", "FastAPI",
];

const certs = [
  "Six-Month AI & Data Science Mentorship — Codanics",
  "Python ka Chilla for Data Science — Codanics",
  "Tableau for Data Analytics — Codanics",
  "Machine Learning — InnoVista Learn Easy",
  "Python Course — InnoVista Learn Easy",
  "MCP (Model Context Protocol) — Hugging Face",
  "Machine Learning Explainability — Kaggle",
  "Deep Learning — Kaggle",
  "Computer Vision — Kaggle",
  "SQL, Python, Data Visualization, Data Cleaning — Kaggle",
  "🏆 Kaggle Grandmaster",
];

const projects = [
  { title: "AI Assistant", link: "https://ai-with-dastgeer.vercel.app/" },
  { title: "Real Estate Platform", link: "https://real-estate-two-silk.vercel.app/" },
  { title: "Token Optimization Engine", link: null },
  { title: "Full-Stack AI Platform", link: null },
];

const WebCV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-6">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <img src={profileImg} alt="Muhammad Dastgeer" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20" />
              <div className="text-center md:text-left">
                <h1 className="font-heading text-3xl font-bold text-foreground">Muhammad Dastgeer</h1>
                <p className="text-primary font-semibold">AI Engineer & Machine Learning Specialist</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin size={14} /> Pir Mahal, Punjab, Pakistan</span>
                  <span className="flex items-center gap-1"><Mail size={14} /> dastgeerjutt8888@gmail.com</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">GitHub</a>
                  <a href="https://www.linkedin.com/in/muhammad-dastgeer/" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">LinkedIn</a>
                  <a href="https://www.kaggle.com/dastgeerjutt" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Kaggle</a>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4 mb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dedicated AI Engineer specializing in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI & LLMs. Built 30+ AI agents and delivered 20+ ML projects. Kaggle Grandmaster with expertise in Agentic AI systems, Data Analysis, and AI Automation.
              </p>
            </div>

            <Section title="Professional Experience">
              {experience.map((exp, i) => (
                <div key={i} className="mb-3 last:mb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{exp.title}</h4>
                      <p className="text-xs text-primary">{exp.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                </div>
              ))}
            </Section>

            <Section title="Education">
              {education.map((edu, i) => (
                <div key={i} className="mb-2 last:mb-0 flex justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{edu.title}</h4>
                    <p className="text-xs text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{edu.year}</span>
                </div>
              ))}
            </Section>

            <Section title="Technical Skills">
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="px-2 py-1 text-xs border border-border rounded-md bg-secondary text-foreground">{s}</span>
                ))}
              </div>
            </Section>

            <Section title="Certifications">
              <ul className="space-y-1">
                {certs.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground">• {c}</li>
                ))}
              </ul>
            </Section>

            <Section title="Projects">
              {projects.map((p, i) => (
                <div key={i} className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{p.title}</span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 text-xs">
                      Visit <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </Section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-heading text-lg font-bold text-foreground mb-3 pb-1 border-b border-border">{title}</h3>
    {children}
  </div>
);

export default WebCV;
