import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";

const educationItems = [
  {
    title: "Intermediate in Computer Science (ICS)",
    institution: "BISE Faisalabad",
    period: "2020 – 2022",
    location: "Punjab, Pakistan",
    desc: "Advanced mathematics, computational foundations, object-oriented programming, and computer architecture.",
    tag: "Higher Secondary",
  },
  {
    title: "Matriculation (Computer Science)",
    institution: "BISE Faisalabad",
    period: "2018 – 2020",
    location: "Punjab, Pakistan",
    desc: "Core computer science fundamentals, algorithm logic, physics, and introductory programming.",
    tag: "Secondary School",
  },
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12">
          <span className="section-label mb-2 block">07. Academic Background</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Education & Academic Foundations
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base max-w-[65ch]">
            Formal foundations in computational sciences, mathematics, and analytical problem solving.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {educationItems.map((edu, i) => (
            <ScrollReveal key={edu.title} delay={i * 0.05}>
              <SpotlightCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.15)]">
                      <GraduationCap size={18} />
                    </div>
                    <span className="text-xs font-semibold text-[#00F2FE] px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                      {edu.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {edu.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] mb-3">
                    <span className="font-semibold text-white">{edu.institution}</span>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="tabular-nums">{edu.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {edu.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#00F2FE]" /> {edu.location}
                  </span>
                  <span className="text-[#00F2FE] font-medium text-xs flex items-center gap-1">
                    <Award size={12} /> Official Credential
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

export default Education;
