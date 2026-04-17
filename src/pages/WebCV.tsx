import { Link } from "react-router-dom";
import { MapPin, Mail, ExternalLink, ArrowLeft, Phone } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const WebCV = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <img src={profileImg} alt="Muhammad Dastgeer" className="w-24 h-24 rounded-full object-cover border-4 border-primary/20" />
              <div className="text-center md:text-left">
                <h1 className="font-heading text-3xl font-bold text-foreground">MUHAMMAD DASTGEER</h1>
                <p className="text-primary font-semibold text-sm">Kaggle Grandmaster • AI/ML Engineer • Generative AI Specialist • Data Scientist</p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Phone size={12} /> +92 318 2460719</span>
                  <span className="flex items-center gap-1"><Mail size={12} /> dastgeerjutt8888@gmail.com</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> Pir Mahal, Punjab, Pakistan</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a href="https://linkedin.com/in/muhammad-dastgeer" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">LinkedIn</a>
                  <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">GitHub</a>
                  <a href="https://www.kaggle.com/dastgeerjutt" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Kaggle</a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <Section title="Professional Summary">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kaggle Grandmaster and AI/ML Engineer with deep hands-on expertise across the complete AI/ML spectrum — from classical machine learning to cutting-edge Generative AI and Agentic systems. Proficient in Python, PyTorch, TensorFlow, and the full data science pipeline. Passionate about building intelligent, scalable AI systems and automating complex real-world workflows. Currently contributing to multiple ML engineering roles, continuously advancing expertise in LLMs, Computer Vision, NLP, and Autonomous AI Agents.
              </p>
            </Section>

            {/* Core Competencies */}
            <Section title="Core AI/ML Competencies">
              <div className="space-y-2">
                {[
                  { area: "Programming & Math", skills: "Python (Advanced), Mathematics & Statistics for AI, Linear Algebra, Calculus, Probability" },
                  { area: "Data & Analysis", skills: "Data Analysis, Data Processing & Visualization, Pandas, NumPy, Matplotlib, Seaborn, Plotly" },
                  { area: "Machine Learning", skills: "Supervised & Unsupervised Learning, Feature Engineering, Model Evaluation, Scikit-learn, XGBoost, LightGBM" },
                  { area: "Deep Learning", skills: "Neural Networks, CNNs, RNNs, Transformers, PyTorch, TensorFlow/Keras, Transfer Learning, Fine-tuning" },
                  { area: "Generative AI", skills: "LLMs, RAG Systems, Prompt Engineering, LangChain, LlamaIndex, Groq API, Gemini API, Anthropic Claude API" },
                  { area: "Agentic AI", skills: "Multi-Agent Systems, LangGraph, CrewAI, AutoGen, MCP Servers, Autonomous Workflows" },
                  { area: "AI Automation", skills: "n8n Workflows, FastAPI, Flask, Celery, Redis, Webhooks, API Integrations, CI/CD for ML" },
                  { area: "MLOps", skills: "Model Deployment, Monitoring, A/B Testing, MLflow, Weights & Biases, Docker" },
                  { area: "NLP", skills: "Text Classification, NER, Sentiment Analysis, BERT, Seq2Seq, Summarization, Hugging Face" },
                  { area: "Computer Vision", skills: "Image Classification, YOLO Object Detection, Segmentation, OCR, Video Processing, OpenCV" },
                  { area: "Time Series", skills: "ARIMA, Prophet, LSTM Forecasting, Anomaly Detection, Trend Analysis" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="font-semibold text-foreground min-w-[140px] flex-shrink-0">{item.area}</span>
                    <span className="text-muted-foreground">{item.skills}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Professional Experience */}
            <Section title="Professional Experience">
              <ExperienceItem
                title="Machine Learning Engineer"
                company="Codveda Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Part-Time/Contract)"
                bullets={[
                  "Designed and deployed end-to-end ML pipelines for real-world data analysis and prediction tasks, reducing manual processing time by ~40%.",
                  "Built and optimized deep learning models using PyTorch and TensorFlow achieving production-grade performance across classification and regression tasks.",
                  "Led LLM integration projects incorporating RAG pipelines, prompt engineering, and Agentic workflows for client-facing AI applications.",
                  "Conducted model evaluation, A/B testing, and performance monitoring for deployed AI systems.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="Arch Technologies"
                period="Apr 2025 – Present"
                location="Pakistan (Part-Time/Contract)"
                bullets={[
                  "Developed and tested ML models for predictive modeling tasks with cross-validation F1 scores consistently above 0.88.",
                  "Performed comprehensive data preprocessing, feature engineering, and model training workflows on structured datasets.",
                  "Evaluated model performance using precision/recall metrics and business KPIs aligned with client requirements.",
                ]}
              />
              <ExperienceItem
                title="Machine Learning Specialist"
                company="CodaAlpha"
                period="Mar 2025 – Present"
                location="Pakistan (Freelance/Contract)"
                bullets={[
                  "Built ML models for structured data prediction with hands-on preprocessing and performance evaluation pipelines.",
                  "Deployed models to staging environments and monitored live inference pipelines for reliability and drift detection.",
                ]}
              />
              <ExperienceItem
                title="Computer Operator"
                company="Johar Centre Pir Mahal"
                period="2022 – 2023"
                location="Pir Mahal, Pakistan"
                bullets={[
                  "Managed data entry, document processing, and office automation using MS Office suite.",
                  "Handled client-facing administrative tasks and maintained accurate digital records.",
                ]}
              />
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Intermediate (ICS) — Computer Science</h4>
                    <p className="text-xs text-muted-foreground">BISE Faisalabad</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2022</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Matric — Computer Science</h4>
                    <p className="text-xs text-muted-foreground">BISE Faisalabad</p>
                  </div>
                  <span className="text-xs text-muted-foreground">2020</span>
                </div>
              </div>
            </Section>

            {/* Certifications */}
            <Section title="Certifications & Training">
              <div className="grid md:grid-cols-2 gap-1">
                {[
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
                  "🏆 Kaggle Grandmaster — Top competitive rank globally",
                ].map((c, i) => (
                  <p key={i} className="text-sm text-muted-foreground">• {c}</p>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Projects">
              {[
                { title: "CODA-Ai: AI Code Agent", link: "https://drive.google.com/file/d/1H6R29Poe0mZWGJ7y80UaWpyKaOuWf1Y3/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/CODA-Ai-APP.git" },
                { title: "Code Explainer App", link: "https://drive.google.com/file/d/1umKkniooMV_BEOx_yiSuDAkNWVcYx_4f/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/code-explainer-app.git" },
                { title: "AI Travel Agent", link: "https://drive.google.com/file/d/1-jy0OY3TPaeg28Oxp3c5wj8KzglnG-W2/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/travel_agent_app.git" },
                { title: "Doctor AI - Healthcare Chatbot", link: "https://drive.google.com/file/d/1o0-y7ON2jY8rlAw66NQUTcV7W-r8Wgg4/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/Health_Care_app.git" },
                { title: "Customer Support Chatbot", link: "https://drive.google.com/file/d/1gQx-K7kRTdJXdcLhaP2Yux0dWA4-lgnu/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/Customer_Support_chatbot_app.git" },
                { title: "Auto Blog Writer Agent", link: "https://drive.google.com/file/d/1yX4gcXZRLH7CjhIm957cNRONaxvl_ihk/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/Writes-Blogs-Automatically-Agent.git" },
                { title: "Real Estate Platform", link: "https://drive.google.com/file/d/15bDLE7-kCGwcjmnMEu2uUaTG5IABZ8yF/view?usp=sharing", github: "https://github.com/MuhammadDastgeer/Real_Estate_Project.git" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{p.title}</span>
                  <div className="flex gap-3">
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 text-xs">
                        Live <ExternalLink size={12} />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline text-xs">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </Section>

            {/* Languages */}
            <Section title="Languages">
              <div className="flex gap-4 text-sm">
                <span className="text-foreground"><strong>English</strong> (Professional)</span>
                <span className="text-foreground"><strong>Urdu</strong> (Native)</span>
                <span className="text-foreground"><strong>Punjabi</strong> (Native)</span>
              </div>
            </Section>

            <p className="text-xs text-muted-foreground text-center mt-4">References available upon request.</p>
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

const ExperienceItem = ({ title, company, period, location, bullets }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
      <div>
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <p className="text-xs text-primary">{company} • <span className="text-muted-foreground">{location}</span></p>
      </div>
      <span className="text-xs text-muted-foreground italic">{period}</span>
    </div>
    <ul className="space-y-1 ml-4">
      {bullets.map((b, i) => (
        <li key={i} className="text-xs text-muted-foreground list-disc">{b}</li>
      ))}
    </ul>
  </div>
);

export default WebCV;
