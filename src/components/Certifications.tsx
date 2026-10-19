import React from "react";
import { Award, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const certifications = [
  {
    name: "Artificial Intelligence using Python",
    issuer: "DigiSkills.pk",
    year: "2026",
    highlight: true,
    category: "AI & ML",
  },
  {
    name: "Cloud Computing (AWS)",
    issuer: "DigiSkills.pk",
    year: "2026",
    highlight: true,
    category: "Cloud",
  },
  {
    name: "6-Month AI & Data Science Mentorship",
    issuer: "Codanics Institute",
    year: "2024",
    highlight: false,
    category: "Data Science",
  },
  {
    name: "Python ka Chilla for Data Science",
    issuer: "Codanics",
    year: "2023",
    highlight: false,
    category: "Python",
  },
  {
    name: "Tableau for Advanced Data Analytics",
    issuer: "Codanics",
    year: "2023",
    highlight: false,
    category: "Analytics",
  },
  {
    name: "Applied Machine Learning Foundations",
    issuer: "InnoVista Learn Easy",
    year: "2023",
    highlight: false,
    category: "ML",
  },
  {
    name: "Professional Python Course",
    issuer: "InnoVista Learn Easy",
    year: "2022",
    highlight: false,
    category: "Programming",
  },
  {
    name: "Model Context Protocol (MCP) Specialization",
    issuer: "Hugging Face / Open Source",
    year: "2025",
    highlight: false,
    category: "Agentic AI",
  },
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">// 08 — CERTIFICATIONS</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Verified Accreditations
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Rigorous technical certifications across foundational artificial intelligence, AWS cloud computing, and advanced data science.
          </p>
        </div>

        {/* Compact horizontal cards in 2-column / 4-column responsive grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.04}>
              <SpotlightCard
                className={`p-4 sm:p-5 flex flex-col justify-between h-full ${
                  cert.highlight
                    ? "border-aurora-violet/40 bg-gradient-to-br from-card via-card to-aurora-violet/5"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    {/* Issuer Logo badge */}
                    <div className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-aurora-violet">
                      <Award size={18} />
                    </div>
                    <span className="mono-tag text-[10px] px-2 py-0.5 rounded-full border border-border bg-surface text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  {/* Certification Name */}
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1.5 leading-snug">
                    {cert.name}
                  </h4>

                  {/* Issuer */}
                  <p className="text-xs text-aurora-cyan font-medium">
                    {cert.issuer}
                  </p>
                </div>

                {/* Footer status */}
                <div className="pt-3 mt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="mono-tag text-[9px] px-2 py-0.5 rounded bg-muted/60 text-muted-foreground">
                    {cert.category}
                  </span>
                  <span className="mono-tag text-[9px] text-accent flex items-center gap-1 font-semibold">
                    <ShieldCheck size={11} /> Verified
                  </span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
