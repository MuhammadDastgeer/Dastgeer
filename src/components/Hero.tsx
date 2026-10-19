import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Mail, Sparkles, Terminal, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { CountUp } from "./CountUp";

const rotatingRoles = [
  "Agentic AI Architect",
  "Generative AI & LLMs",
  "Deep Learning Specialist",
  "Computer Vision Expert",
  "Production MLOps Engineer",
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Left-aligned Hero text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Monospace Section Tag */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="section-label flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
                // 00 — AI/ML SPECIALIST
              </span>
            </motion.div>

            {/* Fluid Hero Name: One word with gradient text fill */}
            <motion.h1 variants={itemVariants} className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              <span className="text-gradient">Muhammad</span>
              <br />
              Dastgeer
            </motion.h1>

            {/* Rotating Role Pill */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 h-9">
              <span className="mono-tag text-xs text-muted-foreground">// FOCUS:</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={rotatingRoles[roleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="px-3.5 py-1 rounded-full border border-aurora-violet/40 bg-aurora-violet/10 text-aurora-cyan font-mono text-xs font-semibold tracking-wide flex items-center gap-1.5"
                >
                  <Sparkles size={12} className="text-aurora-violet" />
                  {rotatingRoles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Brief Introduction max-w-[65ch] */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-[65ch] mb-8"
            >
              AI/ML Engineer with hands-on expertise building production-grade autonomous agent systems,
              fine-tuned LLM architectures, real-time computer vision pipelines, and scalable cloud solutions on AWS & Azure.
            </motion.p>

            {/* CTAs with magnetic hover styling */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
              <Link to="/contact" className="btn-gradient group">
                <span>Start a Project</span>
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/projects" className="btn-ghost">
                <span>View Selected Work</span>
              </Link>
              <a
                href="/Muhammad_Dastgeer_CV.pdf"
                download
                className="btn-ghost text-xs py-2.5 px-4"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Meta tags */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 text-xs text-muted-foreground pt-4 border-t border-border/50">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-aurora-cyan" />
                Punjab, Pakistan (Remote Global)
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5 text-accent font-mono">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Available Q4 2026
              </span>
            </motion.div>
          </div>

          {/* Right Column: Profile Photo inside Gradient-Ring with Floating Chips */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Soft Aurora Glow Ring */}
              <div className="absolute -inset-2.5 rounded-[32px] bg-gradient-to-tr from-aurora-violet via-aurora-cyan to-aurora-lime opacity-75 blur-md -z-10 animate-aurora-1" />

              {/* Main Portrait Container */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] rounded-[28px] overflow-hidden bg-surface border border-white/10 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  width={512}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Stat Chip 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-10 glass-pill px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
              >
                <div className="w-9 h-9 rounded-xl bg-aurora-violet/20 border border-aurora-violet/40 flex items-center justify-center text-aurora-violet font-mono font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <div className="font-heading font-extrabold text-lg text-foreground leading-none">
                    <CountUp end={30} suffix="+" />
                  </div>
                  <span className="mono-tag text-[10px] text-muted-foreground">AI Agents Shipped</span>
                </div>
              </motion.div>

              {/* Floating Stat Chip 2 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 glass-pill px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-border"
              >
                <div className="w-9 h-9 rounded-xl bg-aurora-cyan/20 border border-aurora-cyan/40 flex items-center justify-center text-aurora-cyan font-mono font-bold text-sm">
                  🤖
                </div>
                <div>
                  <div className="font-heading font-extrabold text-lg text-foreground leading-none">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <span className="mono-tag text-[10px] text-muted-foreground">Production ML Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
