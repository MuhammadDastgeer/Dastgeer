import React from "react";
import { Award, CheckCircle, Cloud, Cpu, Brain, Sparkles, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const certifications = [
  {
    name: "Artificial Intelligence with Python",
    issuer: "DigiSkills.pk",
    year: "2024",
    id: "DS-AI-PY",
    skills: "Python, AI Algorithms, Neural Networks, Computer Vision",
    icon: Brain,
  },
  {
    name: "AWS Cloud Computing",
    issuer: "DigiSkills.pk",
    year: "2024",
    id: "DS-AWS-CLOUD",
    skills: "EC2, S3, IAM, Cloud Security, Microservices Architecture",
    icon: Cloud,
  },
  {
    name: "Deep Learning & Neural Networks",
    issuer: "DeepLearning.AI",
    year: "2024",
    id: "DL-NN-SPEC",
    skills: "CNNs, RNNs, Backpropagation, Transfer Learning",
    icon: Cpu,
  },
  {
    name: "Autonomous AI Agents with LangGraph",
    issuer: "LangChain Academy",
    year: "2025",
    id: "LC-AGENT-PRO",
    skills: "State Graphs, Tool Orchestration, Multi-Agent Swarms",
    icon: Sparkles,
  },
  {
    name: "Production Machine Learning & MLOps",
    issuer: "DataCamp",
    year: "2024",
    id: "DC-MLOPS-ENG",
    skills: "Model CI/CD, Docker Containerization, API Serving",
    icon: Award,
  },
  {
    name: "Prompt Engineering & Generative AI",
    issuer: "Vanderbilt / Coursera",
    year: "2024",
    id: "GENAI-PROMPT-01",
    skills: "Few-Shot Prompting, Chain-of-Thought, System Guardrails",
    icon: Award,
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">08. Credentials</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Industry Certifications & Accreditations
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            Formally certified in Artificial Intelligence, AWS Cloud Computing, and Autonomous Agent Architecture.
          </p>
        </div>

        {/* Compact Horizontal Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.name} delay={i * 0.04}>
                <SpotlightCard className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                        <Icon size={18} />
                      </div>
                      <span className="meta-mono text-xs text-[#94A3B8] tabular-nums">
                        {cert.year}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base text-white mb-1 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#00F2FE] mb-3">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {cert.skills}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
                    <span className="meta-mono text-[10px] text-white/40">{cert.id}</span>
                    <span className="text-[#00F2FE] font-medium text-xs flex items-center gap-1">
                      <CheckCircle size={12} /> Verified
                    </span>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
