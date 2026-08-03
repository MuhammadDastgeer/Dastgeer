import { Award, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certs = [
  { title: "Six-Month AI & Data Science Mentorship", org: "Codanics", color: "hsl(0,0%,100%)" },
  { title: "Python ka Chilla for Data Science", org: "Codanics", color: "hsl(0,0%,100%)" },
  { title: "Tableau for Data Analytics", org: "Codanics", color: "hsl(0,0%,100%)" },
  { title: "Machine Learning", org: "InnoVista Learn Easy", color: "hsl(45,93%,90%)" },
  { title: "Python Course", org: "InnoVista Learn Easy", color: "hsl(45,93%,90%)" },
  { title: "MCP (Model Context Protocol)", org: "Hugging Face", color: "hsl(45,93%,90%)" },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">ACHIEVEMENTS</p>
            <h2 className="section-title">My <span className="highlight-text">Certifications</span></h2>
            <p className="text-muted-foreground mt-2">Courses and credentials earned along the way</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="rounded-xl p-4 border border-border flex items-center gap-3 hover-card-lift" style={{ backgroundColor: cert.color }}>
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{cert.title}</h4>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary">{cert.org}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
