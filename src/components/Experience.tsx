import React from "react";
import { Briefcase, Building2, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "AI / Machine Learning Intern",
    company: "Zeltrion Solutions",
    period: "15 AUG 2026 – 15 OCT 2026",
    location: "Pakistan (Internship • Certificate ID: ZS-0004)",
    badge: "Certified • ZS-0004",
    tagline: "Where Strategy Meets Intelligence",
    desc: "Successfully completed an intensive industrial internship focused on practical AI/ML solutions. Demonstrated dedication, leadership, teamwork, innovation, and impact while building predictive models and intelligent automation pipelines.",
    skills: ["AI Pipelines", "Machine Learning", "Workflow Automation", "Model Evaluation"],
    highlight: true,
  },
  {
    title: "Machine Learning Engineer",
    company: "Codveda Technologies",
    period: "APR 2025 – PRESENT",
    location: "Pakistan (Part-Time / Contract)",
    desc: "Architecting and deploying end-to-end ML pipelines, deep learning models with PyTorch and TensorFlow, and LLM integrations utilizing LangGraph multi-agent orchestration and RAG.",
    skills: ["PyTorch", "TensorFlow", "LangGraph", "MLOps", "FastAPI"],
    highlight: false,
  },
  {
    title: "Machine Learning Specialist",
    company: "Arch Technologies",
    period: "APR 2025 – PRESENT",
    location: "Pakistan (Part-Time / Contract)",
    desc: "Developed predictive modeling algorithms achieving benchmark F1 scores exceeding 0.88. Executed comprehensive feature engineering and cloud deployment protocols.",
    skills: ["Predictive Modeling", "Feature Engineering", "Scikit-Learn", "Model Monitoring"],
    highlight: false,
  },
  {
    title: "Machine Learning Specialist",
    company: "CodaAlpha",
    period: "MAR 2025 – PRESENT",
    location: "Pakistan (Freelance / Contract)",
    desc: "Engineered structured tabular prediction pipelines and deployed containerized inference endpoints with live telemetry.",
    skills: ["Tabular Models", "Docker", "REST APIs", "Model Serving"],
    highlight: false,
  },
  {
    title: "Computer Operator",
    company: "Johar Centre Pir Mahal",
    period: "2022 – 2023",
    location: "Pir Mahal, Pakistan",
    desc: "Managed high-volume data operations, system automation, document integrity, and administrative software workflows.",
    skills: ["Data Operations", "Systems Administration", "Office Automation"],
    highlight: false,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-14">
          <span className="section-label mb-2 block">// 04 — EXPERIENCE</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Professional Track Record
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Production engineering roles, research internships, and commercial AI deployments built with rigorous standards.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10">
          {/* Animated vertical timeline line */}
          <div className="absolute left-0 sm:left-2 top-3 bottom-3 w-[2px] bg-gradient-to-b from-aurora-violet via-aurora-cyan to-transparent opacity-60" />

          <div className="space-y-8">
            {experiences.map((item, i) => (
              <ScrollReveal key={item.company + item.period} delay={i * 0.08}>
                <div className="relative group">
                  {/* Glowing timeline node dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full bg-surface border-2 border-aurora-violet shadow-[0_0_12px_rgba(124,92,255,0.6)] group-hover:scale-125 group-hover:border-aurora-cyan group-hover:shadow-[0_0_18px_rgba(34,211,238,0.8)] transition-all duration-300" />

                  {/* Card per role */}
                  <div
                    className={`bento-card p-6 sm:p-7 relative ${
                      item.highlight
                        ? "border-aurora-violet/40 bg-gradient-to-br from-card via-card to-aurora-violet/5 shadow-[0_10px_35px_-10px_rgba(124,92,255,0.2)]"
                        : ""
                    }`}
                  >
                    {/* Header Row: Title + Date in Mono Font */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-aurora-cyan transition-colors">
                        {item.title}
                      </h3>
                      <span className="mono-tag text-xs text-aurora-cyan px-3 py-1 rounded-full bg-aurora-cyan/10 border border-aurora-cyan/30 self-start sm:self-auto">
                        {item.period}
                      </span>
                    </div>

                    {/* Company Badge + Location */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="font-heading font-semibold text-sm text-foreground flex items-center gap-1.5">
                        <Building2 size={14} className="text-aurora-violet" />
                        {item.company}
                      </span>

                      {item.badge && (
                        <span className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 font-bold flex items-center gap-1">
                          <Sparkles size={10} /> {item.badge}
                        </span>
                      )}

                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin size={12} className="text-muted-foreground/70" />
                        {item.location}
                      </span>
                    </div>

                    {item.tagline && (
                      <p className="text-xs italic text-aurora-cyan/90 mb-3 font-mono">
                        "{item.tagline}"
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="mono-tag text-[10px] px-2.5 py-1 rounded-lg border border-border/70 bg-surface/80 text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;
