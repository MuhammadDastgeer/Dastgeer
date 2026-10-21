import React from "react";
import { SpotlightCard } from "./SpotlightCard";
import { Bot, Sparkles, Brain, Cloud, Zap, Cpu } from "lucide-react";

const domains = [
  {
    icon: <Bot className="w-5 h-5 text-[#00F2FE]" />,
    label: "Core Specialization",
    title: "Autonomous Agentic AI",
    desc: "Multi-agent systems using LangGraph and CrewAI with tool calling, persistent state memory, and human approval verification checkpoints.",
    tools: ["LangGraph", "LangChain", "CrewAI", "MCP Protocol", "LangSmith"],
    colSpan: "md:col-span-8",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#4FACFE]" />,
    label: "LLM Engineering",
    title: "Generative AI & Enterprise RAG",
    desc: "Hybrid semantic search, dense vector retrieval, contextual reranking, and structured JSON output generation.",
    tools: ["OpenAI", "Gemini 2.5", "Claude", "ChromaDB", "FAISS"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Brain className="w-5 h-5 text-[#00F2FE]" />,
    label: "Deep Learning",
    title: "Computer Vision & Neural Nets",
    desc: "Custom PyTorch and TensorFlow models for object detection (YOLO), image segmentation, and feature extraction.",
    tools: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "Hugging Face"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Cloud className="w-5 h-5 text-[#4FACFE]" />,
    label: "Cloud & Ops",
    title: "Cloud Infrastructure & MLOps",
    desc: "Docker containerization and low-latency microservices deployed on AWS (EC2, S3) and Microsoft Azure.",
    tools: ["AWS Cloud", "Microsoft Azure", "Docker", "FastAPI", "CI/CD"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#00F2FE]" />,
    label: "Automation",
    title: "Intelligent Workflow Automation",
    desc: "Automating enterprise webhooks and multi-step operational flows with integrated LLM decision nodes.",
    tools: ["n8n Workflows", "Make.com", "Zapier", "REST Webhooks"],
    colSpan: "md:col-span-4",
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#4FACFE]" />,
    label: "Predictive ML",
    title: "Classical Machine Learning",
    desc: "Tabular classification, gradient boosted regression, and rigorous cross-validation achieving >0.88 F1 scores.",
    tools: ["Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy"],
    colSpan: "md:col-span-12",
  },
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">02. Services & Disciplines</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Core Engineering Capabilities
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[50ch]">
            From conceptual algorithmic research to robust production deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {domains.map((item, index) => (
            <SpotlightCard
              key={index}
              className={`${item.colSpan} p-6 sm:p-7 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#00F2FE]">
                    {item.label}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              {/* Clean unboxed tool text */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                {item.tools.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="font-medium text-white/90">{t}</span>
                    {idx < item.tools.length - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
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

export default Expertise;
