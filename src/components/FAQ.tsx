import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, MessageSquare, ArrowRight, Zap, CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const faqs = [
  {
    q: "What specialized AI services do you offer?",
    a: "I build end-to-end production AI applications, multi-agent architectures (LangGraph/CrewAI), deep learning model fine-tuning, computer vision pipelines, and intelligent automated workflows on AWS & Azure.",
  },
  {
    q: "What technical stack and frameworks do you use?",
    a: "My primary toolchain includes Python, PyTorch, TensorFlow, LangChain, LangGraph, OpenAI & Gemini APIs, Hugging Face Transformers, Docker, FastAPI, and Cloud Platforms (AWS EC2/S3 & Microsoft Azure).",
  },
  {
    q: "Are you available for freelance work or full-time roles?",
    a: "Yes! I am available for full-time AI Engineering roles, contract projects, and strategic technical consulting worldwide (remote or distributed teams).",
  },
  {
    q: "How do you ensure deterministic reliability in autonomous agents?",
    a: "I implement strict state graph validations with LangGraph, human-in-the-loop verification steps, deterministic schema parsing with Pydantic, and comprehensive latency & prompt observability using LangSmith.",
  },
  {
    q: "What is your experience with Autonomous AI Agents?",
    a: "I have built 30+ autonomous AI agents using LangGraph, LangSmith, CrewAI, and MCP (Model Context Protocol) for document intelligence, healthcare diagnostics, code generation, and automated business workflows.",
  },
  {
    q: "Do you offer post-deployment maintenance and MLOps?",
    a: "Yes, I provide continuous monitoring for model drift, inference latency optimization, vector database maintenance, and prompt iteration to keep production systems operating at peak performance.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Centered Section Header as per spec ("Only Contact and FAQ headings centered") */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-2 block">// 09 — FAQ</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base">
            Everything you need to know about working together, project delivery, and engineering standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* FAQ Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="bento-card overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="mono-tag text-aurora-cyan text-xs">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading font-semibold text-foreground text-sm sm:text-base">
                          {faq.q}
                        </span>
                      </div>

                      {/* + icon that rotates 45 deg to x */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-aurora-violet text-white"
                            : "bg-surface border border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Plus size={16} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed pl-12 border-t border-border/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Callout Card (4 cols) */}
          <div className="lg:col-span-4">
            <ScrollReveal direction="right">
              <SpotlightCard className="p-7 flex flex-col justify-between h-full bg-gradient-to-br from-card via-card to-aurora-violet/10">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-aurora-violet/15 border border-aurora-violet/30 text-aurora-violet flex items-center justify-center mb-5">
                    <MessageSquare size={22} />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 leading-snug">
                    Have a Bespoke Challenge?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                    Have a proprietary dataset, custom model architecture, or an urgent production deadline? Reach out directly.
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-border/60">
                    <p className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
                      <Zap size={14} className="text-aurora-cyan flex-shrink-0" /> Response within 24 hours
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
                      <CheckCircle2 size={14} className="text-accent flex-shrink-0" /> Direct 1-on-1 developer review
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
                      <Sparkles size={14} className="text-aurora-violet flex-shrink-0" /> Free architectural scoping
                    </p>
                  </div>
                </div>

                <Link to="/contact" className="btn-gradient w-full py-3 text-center">
                  <span>Start Conversation</span>
                  <ArrowRight size={15} />
                </Link>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
