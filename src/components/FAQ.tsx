import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, MessageSquare, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const faqs = [
  {
    q: "What specialized AI services do you build?",
    a: "I build production multi-agent systems (LangGraph & CrewAI), enterprise RAG pipelines, fine-tuned ML models, and containerized cloud services on AWS & Azure.",
  },
  {
    q: "What is your primary technical stack?",
    a: "Python 3.12, PyTorch, TensorFlow, LangGraph, FastAPI, Docker, ChromaDB/FAISS, and cloud infrastructure (AWS EC2/S3 & Microsoft Azure).",
  },
  {
    q: "Are you available for contract or full-time roles?",
    a: "Yes! I am available for full-time AI Engineering roles, contract deployments, and technical consulting worldwide (remote or distributed teams).",
  },
  {
    q: "How do you ensure reliability in autonomous agents?",
    a: "I enforce deterministic state machines with LangGraph, schema validation with Pydantic, human-in-the-loop checkpoints, and full LangSmith latency tracing.",
  },
  {
    q: "Do you offer post-deployment maintenance and MLOps?",
    a: "Yes, including model drift tracking, inference latency tuning, vector index optimization, and continuous prompt refinement.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-2 block">09. Common Inquiries</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base">
            Essential details regarding collaboration, engineering methodology, and technical delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* FAQ Accordion List (8 cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="bento-card overflow-hidden transition-all duration-200">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-4">
                        <span className="meta-mono text-[#00F2FE] text-xs font-semibold tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-heading font-semibold text-white text-sm sm:text-base">
                          {faq.q}
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-[#0B0F19] font-bold shadow-[0_0_12px_rgba(0,242,254,0.4)]"
                            : "bg-white/[0.04] border border-white/10 text-[#94A3B8]"
                        }`}
                      >
                        <Plus size={14} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#94A3B8] leading-relaxed pl-12 border-t border-white/10">
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
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center mb-5 shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                    <MessageSquare size={18} />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                    Have a Bespoke Project?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mb-6 leading-relaxed">
                    Have a proprietary dataset, custom agent architecture, or an urgent production deadline? Reach out directly.
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-white/10 text-xs text-[#94A3B8]">
                    <p className="flex items-center gap-2">
                      <Zap size={14} className="text-[#00F2FE] flex-shrink-0" /> Response within 24 hours
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[#00F2FE] flex-shrink-0" /> Direct technical scoping
                    </p>
                  </div>
                </div>

                <Link to="/contact" className="btn-gradient w-full py-2.5 text-center justify-center text-xs rounded-xl">
                  <span>Start Conversation</span>
                  <ArrowRight size={14} />
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
