import React from "react";
import { Sparkles, Milestone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const timeline = [
  { year: "2020", text: "Matric (Computer Science) — BISE Faisalabad", highlight: "Academic Foundation", color: "#22D3EE" },
  { year: "2022", text: "Intermediate ICS (Computer Science) — BISE Faisalabad", highlight: "Core CS", color: "#7C5CFF" },
  { year: "2022", text: "Computer Operator at Johar Centre Pir Mahal — initial professional IT exposure", highlight: "Systems Experience", color: "#B6F24A" },
  { year: "2023", text: "Commenced Data Science journey with intensive algorithmic training at Codanics", highlight: "Data Science", color: "#22D3EE" },
  { year: "2024", text: "Completed rigorous 6-Month AI & Data Science Mentorship at Codanics", highlight: "Advanced AI", color: "#7C5CFF" },
  { year: "2025", text: "Joined CodaAlpha, Arch Technologies & Codveda Technologies as ML Specialist / Engineer", highlight: "Commercial ML", color: "#B6F24A" },
  { year: "2026", text: "Completed AI & Machine Learning Internship at Zeltrion Solutions (15 Aug – 15 Oct 2026 • Certificate ID: ZS-0004)", highlight: "Zeltrion Solutions", color: "#7C5CFF", isZeltrion: true },
  { year: "2026", text: "Completed DigiSkills certifications in Artificial Intelligence using Python and Cloud Computing (AWS)", highlight: "Cloud & AI", color: "#22D3EE" },
  { year: "NOW", text: "Engineering production-grade AI systems — 30+ agents & 20+ ML projects shipped globally", highlight: "Active Engineering", color: "#B6F24A", isNow: true },
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-14">
          <span className="section-label mb-2 block">// 05 — MILESTONES</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Evolution & AI Journey
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            From computer science fundamentals in Faisalabad to architecting autonomous multi-agent systems and enterprise RAG pipelines.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8">
          {/* Subtle vertical glow line */}
          <div className="absolute left-10 sm:left-14 top-4 bottom-6 w-[2px] bg-gradient-to-b from-aurora-violet via-aurora-cyan to-aurora-lime opacity-40" />

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 sm:gap-5 relative group">
                  {/* Year Tag */}
                  <div
                    className={`flex-shrink-0 w-16 sm:w-20 text-center py-1.5 rounded-full mono-tag text-xs font-bold transition-all ${
                      item.isNow
                        ? "bg-gradient-to-r from-aurora-violet to-aurora-cyan text-white shadow-lg"
                        : "bg-surface border border-border text-foreground group-hover:border-aurora-cyan/60"
                    }`}
                  >
                    {item.year}
                  </div>

                  {/* Node Dot */}
                  <div className="relative flex-shrink-0 mt-2 z-10">
                    <div
                      className="w-3.5 h-3.5 rounded-full bg-background border-2 transition-transform duration-300 group-hover:scale-125"
                      style={{ borderColor: item.color, boxShadow: `0 0 10px ${item.color}80` }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={`bento-card p-4 sm:p-5 flex-1 ${
                      item.isNow
                        ? "border-aurora-violet/50 bg-gradient-to-r from-card to-aurora-violet/10"
                        : item.isZeltrion
                        ? "border-aurora-cyan/40 bg-gradient-to-r from-card to-aurora-cyan/5"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span
                        className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full border border-border bg-surface font-semibold"
                        style={{ color: item.color }}
                      >
                        {item.highlight}
                      </span>
                      {item.isNow && (
                        <span className="mono-tag text-[10px] text-aurora-cyan flex items-center gap-1 font-bold">
                          <Sparkles size={11} className="text-aurora-violet" /> Current Focus
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
