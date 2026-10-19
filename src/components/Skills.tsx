import React from "react";
import { Terminal, Cpu, Brain, MessageSquare, Sparkles, Bot, Cloud, Workflow, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const skillCategories = [
  {
    title: "Python & Core Engineering",
    icon: <Terminal className="w-6 h-6 text-aurora-cyan" />,
    badge: "CORE STACK",
    tools: ["Python 3.12", "OOP Architecture", "Asynchronous Programming", "FastAPI", "Poetry", "PyTest"],
    colSpan: "md:col-span-8",
  },
  {
    title: "Autonomous Agentic AI",
    icon: <Bot className="w-6 h-6 text-aurora-violet" />,
    badge: "PRIMARY FOCUS",
    tools: ["LangGraph", "LangChain", "CrewAI", "MCP Architecture", "LangSmith Tracing", "Human-in-the-Loop"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Deep Learning & Neural Nets",
    icon: <Brain className="w-6 h-6 text-accent" />,
    badge: "FOUNDATIONAL",
    tools: ["PyTorch", "TensorFlow", "Transformers", "CNNs / RNNs", "Transfer Learning", "CUDA Optimization"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Generative AI & LLM Systems",
    icon: <Sparkles className="w-6 h-6 text-aurora-cyan" />,
    badge: "PRODUCTION",
    tools: ["OpenAI GPT-4o", "Google Gemini 2.5", "Anthropic Claude", "ChromaDB", "FAISS", "Advanced RAG"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Cloud Computing & MLOps",
    icon: <Cloud className="w-6 h-6 text-aurora-violet" />,
    badge: "INFRASTRUCTURE",
    tools: ["AWS (EC2, S3, IAM)", "Microsoft Azure", "Docker Containers", "Microservices", "CI/CD", "Render/Vercel"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Predictive Machine Learning",
    icon: <Cpu className="w-6 h-6 text-aurora-cyan" />,
    badge: "DATA SCIENCE",
    tools: ["Scikit-Learn", "XGBoost", "LightGBM", "CatBoost", "Hyperparameter Tuning", "Cross-Validation"],
    colSpan: "md:col-span-4",
  },
  {
    title: "AI Workflow Automation",
    icon: <Workflow className="w-6 h-6 text-accent" />,
    badge: "OPERATIONS",
    tools: ["n8n Enterprise", "Make.com", "Zapier Webhooks", "REST APIs", "Event Triggers", "Scheduled Crons"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Data Analytics & Intelligence",
    icon: <BarChart3 className="w-6 h-6 text-aurora-violet" />,
    badge: "VISUALIZATION",
    tools: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Statistical Testing"],
    colSpan: "md:col-span-4",
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">// 06 — SKILLS</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Technical Capabilities
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Rigorous machine learning frameworks, enterprise LLM orchestrators, multi-cloud platforms (AWS & Azure), and low-latency production pipelines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {skillCategories.map((item, index) => (
            <SpotlightCard
              key={item.title}
              className={`${item.colSpan} p-6 sm:p-7 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  {/* Icon in tinted rounded square */}
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <span className="mono-tag text-[10px] px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                  {item.title}
                </h3>
              </div>

              {/* Tech chips below */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="mono-tag text-[10px] px-2.5 py-1 rounded-lg border border-border/70 bg-surface/80 text-foreground/80 hover:border-aurora-violet/50 hover:text-foreground transition-all duration-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
