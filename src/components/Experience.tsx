import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experience = [
  {
    title: "Machine Learning Engineer",
    company: "Codveda Technologies",
    period: "Apr 2025 – Present",
    location: "Pakistan (Part-Time/Contract)",
    desc: "Designed and deployed end-to-end ML pipelines, built deep learning models using PyTorch and TensorFlow, and led LLM integration projects with RAG pipelines and Agentic workflows.",
  },
  {
    title: "Machine Learning Specialist",
    company: "Arch Technologies",
    period: "Apr 2025 – Present",
    location: "Pakistan (Part-Time/Contract)",
    desc: "Developed ML models for predictive modeling with F1 scores above 0.88. Performed data preprocessing, feature engineering, and model evaluation.",
  },
  {
    title: "Machine Learning Specialist",
    company: "CodaAlpha",
    period: "Mar 2025 – Present",
    location: "Pakistan (Freelance/Contract)",
    desc: "Built ML models for structured data prediction and deployed models to staging environments with live inference monitoring.",
  },
  {
    title: "Computer Operator",
    company: "Johar Centre Pir Mahal",
    period: "2022 – 2023",
    location: "Pir Mahal, Pakistan",
    desc: "Managed data entry, document processing, office automation, and client-facing administrative tasks.",
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
              <div className="bg-card border border-border rounded-xl p-6 hover-card-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-purple-bg flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-heading font-bold text-foreground">{item.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">{item.period}</span>
                    </div>
                    <p className="text-sm highlight-text font-semibold">{item.company}</p>
                    <p className="text-xs text-muted-foreground mb-2">{item.location}</p>
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
