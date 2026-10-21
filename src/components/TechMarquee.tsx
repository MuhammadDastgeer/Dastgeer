import React from "react";
import { Cpu, Terminal, Bot, Cloud, Database, Layers, Network } from "lucide-react";

const techItems = [
  { name: "Python 3.12", area: "Core Engine", icon: Terminal },
  { name: "PyTorch", area: "Deep Learning", icon: Cpu },
  { name: "LangGraph", area: "Agent Orchestration", icon: Bot },
  { name: "TensorFlow", area: "Neural Networks", icon: Layers },
  { name: "LangChain", area: "LLM Systems", icon: Network },
  { name: "CrewAI", area: "Multi-Agent AI", icon: Bot },
  { name: "AWS Cloud", area: "Infrastructure", icon: Cloud },
  { name: "Microsoft Azure", area: "Enterprise Cloud", icon: Cloud },
  { name: "Docker", area: "Containerization", icon: Layers },
  { name: "FastAPI", area: "Microservices", icon: Terminal },
  { name: "ChromaDB & FAISS", area: "Vector Stores", icon: Database },
  { name: "Scikit-Learn", area: "Predictive ML", icon: Cpu },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-4 border-y border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden relative">
      {/* Side gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...techItems, ...techItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 mx-6 text-xs text-[#94A3B8] hover:text-[#00F2FE] transition-colors cursor-default select-none"
            >
              <Icon size={14} className="text-[#00F2FE] opacity-90" />
              <span className="font-heading font-semibold text-white tracking-tight">{item.name}</span>
              <span className="text-[11px] opacity-60">/ {item.area}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechMarquee;
