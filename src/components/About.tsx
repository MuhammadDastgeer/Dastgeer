import React from "react";
import { motion } from "framer-motion";
import { SpotlightCard } from "./SpotlightCard";
import { CountUp } from "./CountUp";
import { Terminal, Cpu, Award, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">// 01 — ABOUT ME</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Engineering Autonomous Intelligence
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Bridging fundamental machine learning research with industrial-grade AI agents and scalable cloud execution.
          </p>
        </div>

        {/* Bento Grid Layout (12 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Bento Tile 1: Primary Narrative (col-span-8) */}
          <SpotlightCard className="md:col-span-8 p-7 md:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-aurora-cyan" />
                <span className="mono-tag text-muted-foreground text-xs">BIOGRAPHY & VISION</span>
              </div>
              <h3 className="fluid-h3 font-heading font-bold text-foreground mb-4">
                Designing deterministic pipelines for non-deterministic models.
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-[65ch]">
                I'm Muhammad Dastgeer, a specialized AI Engineer based in Pakistan. My engineering focus lies at
                the intersection of multi-agent orchestration, fine-tuned foundational models, and low-latency cloud inference.
                From building complex RAG architectures with LangGraph to training specialized vision models, I build systems
                that operate autonomously with verified guardrails.
              </p>
            </div>

            <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "LangGraph", "Docker", "AWS"].map((tag) => (
                  <span
                    key={tag}
                    className="mono-tag text-[10px] px-3 py-1 rounded-full border border-border bg-surface text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/web-cv"
                className="text-xs font-semibold text-aurora-cyan hover:text-aurora-violet transition-colors flex items-center gap-1 group"
              >
                <span>Read Full Resume</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </SpotlightCard>

          {/* Bento Tile 2: Key Numerical Impact (col-span-4) */}
          <SpotlightCard className="md:col-span-4 p-7 flex flex-col justify-between bg-gradient-to-br from-surface to-card">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="mono-tag text-xs text-muted-foreground">// IMPACT METRICS</span>
                <Cpu size={18} className="text-aurora-violet" />
              </div>
              <div className="space-y-6">
                <div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-gradient">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Autonomous Multi-Agent Systems built</p>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Production ML & Data Science projects shipped</p>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl md:text-4xl text-aurora-cyan">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Codebase deliverability & client satisfaction</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border/60">
              <span className="mono-tag text-[10px] text-accent flex items-center gap-1.5">
                <ShieldCheck size={13} /> VERIFIED ACCREDITATIONS
              </span>
            </div>
          </SpotlightCard>

          {/* Bento Tile 3: Philosophy / Quote (col-span-4) */}
          <SpotlightCard className="md:col-span-4 p-7 flex flex-col justify-between">
            <div>
              <span className="mono-tag text-xs text-muted-foreground block mb-3">// ARCHITECTURE PHILOSOPHY</span>
              <p className="font-heading text-lg font-semibold text-foreground leading-snug">
                "Engineering intelligence into every system, one line of code at a time."
              </p>
            </div>
            <div className="mt-6">
              <span className="text-xs text-muted-foreground block">Muhammad Dastgeer</span>
              <span className="mono-tag text-[10px] text-aurora-violet">Lead AI Engineer</span>
            </div>
          </SpotlightCard>

          {/* Bento Tile 4: Engineering Workflow (col-span-8) */}
          <SpotlightCard className="md:col-span-8 p-7 flex flex-col justify-between">
            <div>
              <span className="mono-tag text-xs text-muted-foreground block mb-3">// PRODUCTION STANDARDS</span>
              <h4 className="font-heading font-bold text-base md:text-lg text-foreground mb-4">
                Enterprise AI Readiness Framework
              </h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50">
                  <span className="mono-tag text-[10px] text-aurora-violet block mb-1">01 / ROBUSTNESS</span>
                  <p className="text-xs text-muted-foreground">Deterministic fallback chains and agent guardrails.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50">
                  <span className="mono-tag text-[10px] text-aurora-cyan block mb-1">02 / OBSERVABILITY</span>
                  <p className="text-xs text-muted-foreground">LangSmith tracing, telemetry, latency profiling.</p>
                </div>
                <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50">
                  <span className="mono-tag text-[10px] text-accent block mb-1">03 / SCALABILITY</span>
                  <p className="text-xs text-muted-foreground">Containerized endpoints with Docker and Cloud hosting.</p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default About;
