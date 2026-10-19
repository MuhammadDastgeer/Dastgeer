import React from "react";

const techItems = [
  { name: "Python", category: "Core" },
  { name: "PyTorch", category: "Deep Learning" },
  { name: "TensorFlow", category: "Deep Learning" },
  { name: "LangGraph", category: "Agentic AI" },
  { name: "LangChain", category: "LLM Orchestration" },
  { name: "CrewAI", category: "Multi-Agent" },
  { name: "Hugging Face", category: "Transformers" },
  { name: "AWS Cloud", category: "Infrastructure" },
  { name: "Microsoft Azure", category: "Cloud AI" },
  { name: "Docker", category: "MLOps" },
  { name: "FastAPI", category: "API Backend" },
  { name: "OpenCV", category: "Computer Vision" },
  { name: "Scikit-Learn", category: "Machine Learning" },
  { name: "n8n Automation", category: "Workflows" },
  { name: "Vector DBs", category: "RAG" },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-8 border-y border-border/40 bg-surface/40 backdrop-blur-sm overflow-hidden relative group">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...techItems, ...techItems, ...techItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-4 px-4 py-2 rounded-full border border-border/60 bg-card/60 backdrop-blur-md text-sm text-foreground/85 hover:border-aurora-violet/50 hover:text-aurora-cyan transition-all cursor-default select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-violet" />
            <span className="font-heading font-semibold text-xs tracking-tight">{item.name}</span>
            <span className="mono-tag text-[9px] text-muted-foreground/75 px-1.5 py-0.5 rounded bg-muted/60">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
