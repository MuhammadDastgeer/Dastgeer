import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const educationItems = [
  {
    title: "Intermediate — ICS (Computer Science)",
    institution: "BISE Faisalabad",
    year: "2020 – 2022",
    status: "Completed",
    focus: "Object-oriented programming, data structures, mathematics, statistics.",
  },
  {
    title: "Matriculation — Computer Science",
    institution: "BISE Faisalabad",
    year: "2018 – 2020",
    status: "Completed",
    focus: "Fundamental algorithmic logic, computing principles, sciences.",
  },
  {
    title: "Advanced Data Science & Machine Learning",
    institution: "Codanics Institute",
    year: "2023 – 2024",
    status: "Completed",
    focus: "Deep mentorship in predictive modeling, deep learning architectures, Python toolchains.",
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Left-aligned Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">// 07 — EDUCATION</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Academic Foundation
          </h2>
          <p className="text-muted-foreground text-base max-w-[65ch]">
            Formal computer science studies and advanced postgraduate-level technical specializations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {educationItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-surface border border-border flex items-center justify-center text-aurora-cyan">
                      <GraduationCap size={20} />
                    </div>
                    <span className="mono-tag text-[10px] px-2.5 py-0.5 rounded-full border border-border bg-surface text-muted-foreground">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-aurora-cyan flex items-center gap-1.5 mb-3">
                    <MapPin size={13} className="text-aurora-violet" />
                    {item.institution}
                  </p>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="mono-tag text-[10px] text-accent flex items-center gap-1">
                    <Award size={12} /> {item.status}
                  </span>
                  <span className="mono-tag text-[10px] text-muted-foreground">VERIFIED</span>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
