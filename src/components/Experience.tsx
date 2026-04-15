import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experience = [
  {
    title: "ML Specialist / AI Engineer",
    company: "CodaAlpha",
    period: "2025 – Present",
    desc: "Building production-grade ML models and deploying AI solutions for real-world business problems.",
  },
  {
    title: "ML Specialist",
    company: "Arch Technologies",
    period: "2025 – Present",
    desc: "Developing machine learning pipelines and agentic AI systems for enterprise clients.",
  },
  {
    title: "ML Engineer",
    company: "Codveda Technologies",
    period: "2025 – Present",
    desc: "Working on deep learning models, computer vision tasks, and NLP applications.",
  },
  {
    title: "Computer Operator",
    company: "Johar Centre Pir Mahal",
    period: "2022",
    desc: "First professional role — managing data entry, system operations, and technical support.",
  },
];

const Experience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">CAREER</p>
            <h2 className="section-title">Professional <span className="highlight-text">Experience</span></h2>
            <p className="text-muted-foreground mt-2">My professional journey and roles</p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-purple-bg flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{item.period}</span>
                    </div>
                    <p className="text-sm highlight-text font-semibold mb-2">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
