import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  { title: "Matric — Computer Science", institution: "BISE Faisalabad", status: "Completed" },
  { title: "Intermediate — ICS", institution: "BISE Faisalabad", status: "Completed" },
  { title: "Data Science", institution: "Codaincs", status: "Completed" },
];

const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">BACKGROUND</p>
            <h2 className="section-title">My <span className="highlight-text">Education</span></h2>
            <p className="text-muted-foreground mt-2">Academic foundation that shaped my journey</p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-4">
          {education.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-4 hover-card-lift">
                <div className="p-3 rounded-xl bg-blue-accent/10">
                  <GraduationCap className="w-6 h-6 text-blue-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">📍 {item.institution}</p>
                </div>
                <span className="text-green-badge text-sm font-semibold">{item.status}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
