import React from "react";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  {
    year: "2020",
    title: "Computer Science Foundation",
    sub: "Matric (Computer Science) — BISE Faisalabad",
    desc: "Achieved foundational core in algorithms, computational thinking, and software logic.",
    badge: "Academic",
  },
  {
    year: "2022",
    title: "Advanced CS & Applied Mathematics",
    sub: "Intermediate (ICS) — BISE Faisalabad",
    desc: "Rigorous focus on advanced discrete mathematics, object-oriented programming, and computer systems.",
    badge: "Academic",
  },
  {
    year: "2024",
    title: "Machine Learning & Neural Nets",
    sub: "Deep Learning & Applied R&D",
    desc: "Trained vision models, neural networks with PyTorch/TensorFlow, and statistical tabular predictors.",
    badge: "Specialization",
  },
  {
    year: "2025",
    title: "Autonomous Agent Architectures",
    sub: "LangGraph, CrewAI & MCP Systems",
    desc: "Pioneered production multi-agent workflows, state graph validations, and tool calling pipelines.",
    badge: "Production",
  },
  {
    year: "2026",
    title: "Industrial Deployment & Scale",
    sub: "Zeltrion Solutions & Enterprise Cloud",
    desc: "Awarded industrial internship credential (ZS-0004); delivering cloud AI systems across AWS & Azure.",
    badge: "Current Focus",
    current: true,
  },
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">06. Trajectory</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Milestones & Engineering Evolution
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            From theoretical computer science foundations to building autonomous AI architectures.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {timeline.map((item, i) => (
            <ScrollReveal key={item.year} delay={i * 0.04}>
              <div
                className={`glass-card p-5 h-full flex flex-col justify-between ${
                  item.current
                    ? "border-[#00F2FE]/50 shadow-[0_0_20px_rgba(0,242,254,0.15)] bg-white/[0.07]"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-xl text-white tabular-nums">
                      {item.year}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.current
                        ? "bg-cyan-400/20 text-[#00F2FE] border border-cyan-400/40"
                        : "text-[#94A3B8] bg-white/5"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#00F2FE]/80 mb-2 font-medium">
                    {item.sub}
                  </p>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#94A3B8] flex items-center justify-between">
                  <span>Phase {String(i + 1).padStart(2, "0")}</span>
                  {item.current && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-pulse" />
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
