import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Download, Sparkles, Zap, ShieldCheck } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { CountUp } from "./CountUp";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Hero Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Interactive Badge */}
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-md text-xs font-semibold text-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
              <span className="text-white/90">Available for AI Engineering Roles</span>
            </div>

            {/* Dynamic Headline with Smooth Text Gradient */}
            <h1 className="fluid-h1 font-heading font-extrabold tracking-tight mb-5 text-balance">
              Architecting <span className="text-cyan-purple-gradient">Autonomous AI Systems</span> & Cloud ML.
            </h1>

            {/* Subtext */}
            <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-[52ch] mb-8">
              Specialized in multi-agent orchestration with LangGraph, deterministic enterprise RAG pipelines, and scalable cloud solutions on AWS & Azure.
            </p>

            {/* CTA Buttons with Hover Glow Effect */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link to="/projects" className="btn-gradient">
                <span>Explore Projects</span>
                <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                <span>Get In Touch</span>
              </Link>
              <a
                href="/Muhammad_Dastgeer_CV.pdf"
                download
                className="btn-ghost text-xs"
              >
                <Download size={14} className="text-[#00F2FE]" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <MapPin size={13} className="text-[#00F2FE]" />
              <span>Punjab, Pakistan</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Remote Worldwide Collaboration</span>
            </div>
          </div>

          {/* Right Column: Clean Glass Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Subtle ambient cyan/purple aura behind portrait */}
              <div className="absolute -inset-2 rounded-[24px] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden glass-card aspect-[4/5] shadow-2xl border border-white/10 group">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  width={512}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/80 via-transparent to-transparent pointer-events-none" />

                {/* Bottom glass tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="font-heading font-bold text-xs text-white block">
                      Muhammad Dastgeer
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      AI / ML Systems Engineer
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#00F2FE] px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                    Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Grid Row with Glassmorphism Frost */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl glass-card">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-white tabular-nums">
              <CountUp end={30} suffix="+" />
            </div>
            <p className="text-xs text-[#94A3B8] mt-1">Autonomous AI Agents</p>
          </div>
          <div className="p-4 rounded-xl glass-card">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-cyan-purple-gradient tabular-nums">
              <CountUp end={20} suffix="+" />
            </div>
            <p className="text-xs text-[#94A3B8] mt-1">Production ML Deployments</p>
          </div>
          <div className="p-4 rounded-xl glass-card">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-white tabular-nums">
              <CountUp end={88} suffix="%+" />
            </div>
            <p className="text-xs text-[#94A3B8] mt-1">Benchmark F1 Score</p>
          </div>
          <div className="p-4 rounded-xl glass-card">
            <div className="font-heading font-bold text-2xl sm:text-3xl text-cyan-purple-gradient tabular-nums">
              <CountUp end={100} suffix="%" />
            </div>
            <p className="text-xs text-[#94A3B8] mt-1">Delivery Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
