import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Bot, Code2, Brain, Sparkles, Cloud, Zap, ArrowUpRight } from "lucide-react";

const domains = [
  {
    icon: <Bot className="w-6 h-6 text-aurora-violet" />,
    badge: "CORE STRENGTH",
    title: "Autonomous Agentic AI",
    desc: "Building multi-agent systems that autonomously reason, leverage real-time external tools, coordinate sub-tasks, and execute complex workflows.",
    tools: ["LangGraph", "LangChain", "CrewAI", "MCP Architecture"],
    colSpan: "md:col-span-8",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-aurora-cyan" />,
    badge: "LLM PIPELINES",
    title: "Generative AI & RAG",
    desc: "Production Retrieval-Augmented Generation with hybrid vector search, chunk reranking, prompt engineering, and structured JSON parsing.",
    tools: ["OpenAI API", "Gemini 2.5", "Claude 3.7", "ChromaDB"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    badge: "DEEP LEARNING",
    title: "Neural Architectures & Vision",
    desc: "Designing and fine-tuning CNNs, RNNs, and Transformers for computer vision, image segmentation, OCR, and sequential time-series forecasting.",
    tools: ["PyTorch", "TensorFlow", "YOLOv8", "Hugging Face"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Cloud className="w-6 h-6 text-aurora-violet" />,
    badge: "INFRASTRUCTURE",
    title: "Cloud Computing & MLOps",
    desc: "Containerized model serving with Docker, low-latency microservices using FastAPI, and cloud deployment pipelines on AWS and Microsoft Azure.",
    tools: ["AWS (EC2, S3)", "Microsoft Azure", "Docker", "FastAPI"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Zap className="w-6 h-6 text-aurora-cyan" />,
    badge: "ORCHESTRATION",
    title: "AI Workflow Automation",
    desc: "Integrating intelligent LLM decision nodes into automated enterprise webhooks and low-code operational flows to eliminate repetitive manual work.",
    tools: ["n8n Workflows", "Make.com", "Zapier", "Webhooks"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Code2 className="w-6 h-6 text-aurora-violet" />,
    badge: "PREDICTIVE ML",
    title: "Classical Machine Learning",
    desc: "Supervised and unsupervised models for classification, regression, and ranking. Rigorous cross-validation, feature engineering, and model explainability.",
    tools: ["Scikit-learn", "XGBoost", "LightGBM", "Pandas"],
    colSpan: "md:col-span-12",
  },
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">// 02 — WHAT I DO</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Specialized AI Capabilities
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            End-to-end artificial intelligence engineering, from conceptual algorithm design to scalable production inference.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {domains.map((item, index) => (
            <SpotlightCard
              key={index}
              className={`${item.colSpan} p-6 sm:p-7 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <span className="mono-tag text-[10px] px-2.5 py-1 rounded-full border border-border bg-surface text-muted-foreground">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-2.5">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                {item.tools.map((t) => (
                  <span
                    key={t}
                    className="mono-tag text-[10px] px-2.5 py-1 rounded-lg border border-border/80 bg-surface/80 text-foreground/90"
                  >
                    {t}
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

export default Expertise;
