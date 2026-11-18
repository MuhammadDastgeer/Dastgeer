import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FIRST_NAME = "MUHAMMAD".split("");
const LAST_NAME = "DASTGEER".split("");

export const NameIntroPreloader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2100);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="name-intro-preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            opacity: 0.9,
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#0B0F19] flex flex-col items-center justify-center px-6 overflow-hidden select-none"
        >
          {/* Ambient Cyan / Blue Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.35, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0,242,254,0.32) 0%, rgba(79,172,254,0.16) 45%, rgba(11,15,25,0) 72%)",
              filter: "blur(70px)",
            }}
          />

          {/* Subtle Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #00F2FE 1px, transparent 1px), linear-gradient(to bottom, #00F2FE 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
            {/* Top Monospace Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse shadow-[0_0_8px_#00F2FE]" />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#00F2FE]">
                Portfolio Loading
              </span>
            </motion.div>

            {/* Staggered Name Animation */}
            <h1 className="font-heading font-extrabold tracking-tight leading-none flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-5">
              {/* First Name */}
              <span className="flex overflow-hidden py-1">
                {FIRST_NAME.map((char, idx) => (
                  <motion.span
                    key={`first-${idx}`}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + idx * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-3xl sm:text-5xl md:text-6xl text-white inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>

              {/* Last Name with Gradient */}
              <span className="flex overflow-hidden py-1">
                {LAST_NAME.map((char, idx) => (
                  <motion.span
                    key={`last-${idx}`}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.5 + idx * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-3xl sm:text-5xl md:text-6xl text-cyan-purple-gradient inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="text-xs sm:text-sm md:text-base text-[#94A3B8] font-medium tracking-wide mb-8"
            >
              AI/ML Engineer · Generative & Agentic AI Specialist · AI Automation
            </motion.p>

            {/* Animated Progress Line */}
            <div className="w-56 sm:w-72 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-[#00F2FE] via-[#4FACFE] to-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.7)]"
              />
            </div>
          </div>

          {/* Subtle Skip Option */}
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setVisible(false)}
            className="absolute bottom-8 text-[11px] font-mono tracking-widest uppercase text-[#94A3B8] hover:text-[#00F2FE] transition-colors cursor-pointer"
          >
            Skip Intro →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NameIntroPreloader;
