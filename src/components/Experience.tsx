import React from "react";
import { Building2, MapPin, CheckCircle2, Award, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "AI / Machine Learning Intern",
    company: "Zeltrion Solutions",
    period: "15 Aug 2026 – 15 Oct 2026",
    location: "Pakistan",
    badge: "Industrial Internship · ID: ZS-0004",
    highlights: [
      "Engineered automated predictive modeling pipelines and end-to-end data preprocessing workflows.",
      "Delivered production evaluation metrics with cross-validation and feature importance analysis.",
      "Awarded official Certificate of Completion (Certificate ID: ZS-0004) for dedication and innovative impact.",
    ],
    skills: ["AI Pipelines", "Machine Learning", "Workflow Automation", "Model Evaluation"],
    highlight: true,
  },
  {
    title: "Machine Learning Engineer",
    company: "Codveda Technologies",
    period: "Apr 2025 – Present",
    location: "Pakistan (Part-Time / Contract)",
    badge: "Production ML",
    highlights: [
      "Deploying deep learning architectures with PyTorch & TensorFlow for commercial clients.",
      "Architecting LangGraph multi-agent orchestration for enterprise knowledge retrieval.",
    ],
    skills: ["PyTorch", "TensorFlow", "LangGraph", "MLOps", "FastAPI"],
    highlight: false,
  },
  {
    title: "Machine Learning Specialist",
    company: "Arch Technologies",
    period: "Apr 2025 – Present",
    location: "Pakistan (Part-Time / Contract)",
    badge: "Predictive Analytics",
    highlights: [
      "Engineered tabular classification & regression models achieving benchmark F1 > 0.88.",
      "Built automated feature selection pipelines deployed as low-latency REST endpoints.",
    ],
    skills: ["Predictive ML", "Feature Engineering", "Scikit-Learn", "FastAPI"],
    highlight: false,
  },
  {
    title: "Machine Learning Specialist",
    company: "CodaAlpha",
    period: "Mar 2025 – Present",
    location: "Pakistan (Freelance / Contract)",
    badge: "Model Serving",
    highlights: [
      "Deployed containerized Docker inference microservices with live health checks.",
      "Optimized model inference latency by 35% through structured batching.",
    ],
    skills: ["Docker", "REST APIs", "Model Serving", "Inference Tuning"],
    highlight: false,
  },
  {
    title: "Computer Operator",
    company: "Johar Centre Pir Mahal",
    period: "2022 – 2023",
    location: "Pir Mahal, Pakistan",
    badge: "Operations",
    highlights: [
      "Supervised large-scale data integrity, system records, and office workflow automations.",
    ],
    skills: ["Data Integrity", "Systems Administration", "Operations"],
    highlight: false,
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-14">
          <span className="section-label mb-2 block">05. Career Track</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Industrial & Engineering Experience
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            Production engineering roles, research internships, and commercial AI deployments built with rigorous standards.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8">
          {/* Vertical hairline line with Cyan accent */}
          <div className="absolute left-0 sm:left-2 top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#00F2FE]/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((item, i) => (
              <ScrollReveal key={item.company + item.period} delay={i * 0.05}>
                <div className="relative group">
                  {/* Glowing timeline node */}
                  <div
                    className={`absolute -left-[28px] sm:-left-[30px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-transform group-hover:scale-125 ${
                      item.highlight
                        ? "bg-[#00F2FE] border-[#00F2FE] shadow-[0_0_12px_#00F2FE]"
                        : "bg-[#0B0F19] border-cyan-400/50"
                    }`}
                  />

                  {/* Role Card */}
                  <div
                    className={`glass-card p-6 sm:p-7 relative transition-all duration-300 ${
                      item.highlight
                        ? "border-[#00F2FE]/40 shadow-[0_0_20px_rgba(0,242,254,0.1)]"
                        : ""
                    }`}
                  >
                    {/* Header: Title + Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-heading font-bold text-lg text-white">
                          {item.title}
                        </h3>
                        <span className="text-xs text-[#00F2FE] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                          {item.badge}
                        </span>
                      </div>
                      <span className="meta-mono text-xs text-[#94A3B8] tabular-nums">
                        {item.period}
                      </span>
                    </div>

                    {/* Company + Location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] mb-4">
                      <span className="font-semibold text-white">{item.company}</span>
                      <span aria-hidden="true" className="text-white/20">·</span>
                      <span>{item.location}</span>
                    </div>

                    {/* Punchy bullet points */}
                    <div className="space-y-2 mb-4">
                      {item.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          <CheckCircle2 size={14} className="text-[#00F2FE] flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean unboxed tools text */}
                    <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                      {item.skills.map((skill, sIdx) => (
                        <React.Fragment key={skill}>
                          <span className="font-medium text-white/90">{skill}</span>
                          {sIdx < item.skills.length - 1 && <span aria-hidden="true" className="text-white/20">·</span>}
                        </React.Fragment>
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
