import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Bot, Cpu, Cloud } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">01. Profile & Focus</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Deterministic AI for Complex Production Workflows
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[55ch]">
            Engineering autonomous multi-agent pipelines and scalable cloud ML models with strict reliability guardrails.
          </p>
        </div>

        {/* Bento Grid with Glassmorphism Frost */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Profile Card (8 cols) */}
          <SpotlightCard className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[#00F2FE]">
                  Engineering Philosophy
                </span>
                <span className="meta-mono text-xs text-[#94A3B8]">
                  Production AI
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">
                Autonomous Agents, High-Throughput RAG & Cloud Scale
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                I build end-to-end production AI applications using LangGraph, PyTorch, and Docker.
                My focus centers on deterministic multi-agent architectures, enterprise knowledge retrieval, and low-latency deployments across AWS and Microsoft Azure.
              </p>
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-2 text-[#94A3B8]">
                <span className="font-semibold text-white">Core Toolchain:</span>
                <span>Python 3.12</span>
                <span aria-hidden="true">·</span>
                <span>PyTorch</span>
                <span aria-hidden="true">·</span>
                <span>LangGraph</span>
                <span aria-hidden="true">·</span>
                <span>Docker</span>
                <span aria-hidden="true">·</span>
                <span>AWS & Azure</span>
              </div>

              <Link
                to="/web-cv"
                className="font-semibold text-[#00F2FE] hover:underline flex items-center gap-1 group"
              >
                <span>Read Full CV</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </SpotlightCard>

          {/* Impact Snapshot Card (4 cols) */}
          <SpotlightCard className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#00F2FE] block mb-4">
                Industrial Impact
              </span>
              <div className="space-y-4">
                <div>
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-white tabular-nums">
                    30+
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Autonomous AI Agents</p>
                </div>
                <div>
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-cyan-purple-gradient tabular-nums">
                    20+
                  </div>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Production ML Deliveries</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#94A3B8]">
              <ShieldCheck size={14} className="text-[#00F2FE]" />
              <span>Certified by DigiSkills & Zeltrion</span>
            </div>
          </SpotlightCard>

          {/* 3 Architectural Pillars (12 cols) */}
          <SpotlightCard className="md:col-span-12 p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center mb-3">
                  <Bot size={16} />
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1.5">
                  01. Agent Guardrails
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Deterministic state graphs with LangGraph, strict Pydantic schemas, and human approval verification checkpoints.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-8 h-8 rounded-lg bg-purple-400/10 border border-purple-400/30 text-[#4FACFE] flex items-center justify-center mb-3">
                  <Cpu size={16} />
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1.5">
                  02. Model Observability
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Continuous LangSmith telemetry, latency tracking, token budgeting, and automated regression testing.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center mb-3">
                  <Cloud size={16} />
                </div>
                <h4 className="font-heading font-bold text-sm text-white mb-1.5">
                  03. Cloud Scalability
                </h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Containerized Docker microservices deployed on AWS (EC2 & S3) and Microsoft Azure for high-throughput inference.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default About;
