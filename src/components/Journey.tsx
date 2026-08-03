import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const timeline = [
  { year: "2020", text: "Matric (Computer Science) — BISE Faisalabad", color: "hsl(217, 91%, 60%)" },
  { year: "2022", text: "Intermediate ICS — BISE Faisalabad", color: "hsl(142, 71%, 45%)" },
  { year: "2022", text: "Computer Operator at Johar Centre Pir Mahal — first professional role", color: "hsl(25, 95%, 53%)" },
  { year: "2023", text: "Started Data Science journey — enrolled at Codanics", color: "hsl(265, 89%, 50%)" },
  { year: "2024", text: "Completed 6-month AI & Data Science Mentorship at Codanics", color: "hsl(186, 94%, 42%)" },
  { year: "2025", text: "Joined CodaAlpha, Arch Technologies & Codveda Technologies as ML Specialist/Engineer", color: "hsl(330, 80%, 60%)" },
  { year: "Now", text: "Building production-grade AI systems — 30+ agents & 20+ ML projects delivered", color: "hsl(265, 89%, 50%)", isNow: true },
];

const Journey = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">My AI <span className="highlight-text">Journey</span></h2>
            <p className="text-muted-foreground mt-2">From learning to building at scale</p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-[72px] md:left-[88px] top-0 bottom-0 w-0.5 bg-border" />

          {timeline.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`flex-shrink-0 px-3 py-1 rounded-lg text-sm font-semibold ${item.isNow ? "text-primary-foreground" : "text-foreground bg-card border border-border"}`}
                  style={item.isNow ? { background: item.color } : {}}
                >
                  {item.year}
                </div>
                <div className="relative flex-shrink-0 mt-2">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    viewport={{ once: true }}
                    className="w-3 h-3 rounded-full border-2 bg-card"
                    style={{ borderColor: item.color }}
                  />
                </div>
                <div className="bg-card border border-border rounded-lg p-4 flex-1 hover-card-lift">
                  <p className="text-sm text-foreground">{item.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
