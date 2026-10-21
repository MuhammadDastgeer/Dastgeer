import React from "react";
import { Terminal, Cpu, Brain, Sparkles, Bot, Cloud, Workflow, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const skillCategories = [
  {
    title: "Python & Core Architecture",
    icon: <Terminal className="w-5 h-5 text-[#00F2FE]" />,
    badge: "Core Stack",
    level: 95,
    tools: ["Python 3.12", "FastAPI", "AsyncIO", "OOP Architecture", "PyTest", "Poetry"],
    colSpan: "md:col-span-8",
  },
  {
    title: "Autonomous Agentic AI",
    icon: <Bot className="w-5 h-5 text-[#4FACFE]" />,
    badge: "Specialization",
    level: 92,
    tools: ["LangGraph", "LangChain", "CrewAI", "MCP Protocol", "LangSmith", "HITL"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Deep Learning & Vision",
    icon: <Brain className="w-5 h-5 text-[#00F2FE]" />,
    badge: "Neural Nets",
    level: 88,
    tools: ["PyTorch", "TensorFlow", "YOLOv8", "Transformers", "CUDA", "CNNs"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Generative AI & RAG",
    icon: <Sparkles className="w-5 h-5 text-[#4FACFE]" />,
    badge: "Production",
    level: 94,
    tools: ["OpenAI GPT-4o", "Google Gemini 2.5", "ChromaDB", "FAISS", "Hybrid Search"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud className="w-5 h-5 text-[#00F2FE]" />,
    badge: "Cloud & Ops",
    level: 86,
    tools: ["AWS (EC2, S3, IAM)", "Microsoft Azure", "Docker", "Microservices", "CI/CD"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Predictive ML & Stats",
    icon: <Cpu className="w-5 h-5 text-[#4FACFE]" />,
    badge: "Machine Learning",
    level: 90,
    tools: ["Scikit-Learn", "XGBoost", "LightGBM", "CatBoost", "Cross-Validation"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Workflow Automation",
    icon: <Workflow className="w-5 h-5 text-[#00F2FE]" />,
    badge: "Automation",
    level: 89,
    tools: ["n8n Enterprise", "Make.com", "Zapier Webhooks", "REST APIs"],
    colSpan: "md:col-span-4",
  },
  {
    title: "Data Analytics & Viz",
    icon: <BarChart3 className="w-5 h-5 text-[#4FACFE]" />,
    badge: "Analytics",
    level: 88,
    tools: ["Pandas", "NumPy", "Plotly", "Seaborn", "Data Cleaning"],
    colSpan: "md:col-span-4",
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">03. Skills & Technologies</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Technical Stack & Toolchains
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            Rigorous machine learning frameworks, enterprise LLM orchestrators, multi-cloud platforms (AWS & Azure), and low-latency production pipelines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {skillCategories.map((item) => (
            <SpotlightCard
              key={item.title}
              className={`${item.colSpan} p-6 sm:p-7 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#00F2FE]">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-heading font-bold text-base text-white">
                    {item.title}
                  </h3>
                  <span className="meta-mono text-xs font-semibold text-[#00F2FE] tabular-nums">
                    {item.level}%
                  </span>
                </div>

                {/* Clean Progress Bar with Cyan/Purple Gradient */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-4">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE]"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>

              {/* Unboxed tech chips */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                {item.tools.map((tool, tIdx) => (
                  <React.Fragment key={tool}>
                    <span className="font-medium text-white/90">{tool}</span>
                    {tIdx < item.tools.length - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
                  </React.Fragment>
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
