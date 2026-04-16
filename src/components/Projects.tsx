import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "AI Assistant",
    desc: "An autonomous AI assistant built with OpenAI SDK and LangChain that handles customer queries and automates support workflows.",
    tools: ["OpenAI SDK", "LangChain", "React", "FastAPI"],
    gradient: "linear-gradient(135deg, hsl(25,95%,53%), hsl(265,89%,50%))",
    link: "https://ai-with-dastgeer.vercel.app/",
    github: "https://github.com/MuhammadDastgeer/Chatbot-app-google.git",
  },
  {
    title: "Real Estate",
    desc: "A full-stack real estate platform with property listings, search, and modern UI for buying, selling, and renting properties.",
    tools: ["Next.js", "React", "Vercel", "REST APIs"],
    gradient: "linear-gradient(135deg, hsl(186,94%,42%), hsl(217,91%,60%))",
    link: "https://real-estate-two-silk.vercel.app/",
    github: "https://github.com/MuhammadDastgeer/Real_Estate_Project.git",
  },
  {
    title: "Token Optimization Engine",
    desc: "Proprietary system that reduced LLM token consumption by 90% through intelligent context compression.",
    tools: ["OpenAI", "RAG", "Vector DBs", "TypeScript"],
    gradient: "linear-gradient(135deg, hsl(25,95%,53%), hsl(0,84%,60%))",
    link: null,
    github: null,
  },
  {
    title: "Full-Stack AI Platform",
    desc: "Scalable web platform integrating multiple AI models with real-time data processing capabilities.",
    tools: ["Next.js", "PostgreSQL", "Docker", "AWS"],
    gradient: "linear-gradient(135deg, hsl(142,71%,45%), hsl(186,94%,42%))",
    link: null,
    github: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">PORTFOLIO</p>
            <h2 className="section-title"><span className="highlight-text">Projects</span></h2>
            <p className="text-muted-foreground mt-2">Real-world AI solutions that deliver measurable results</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover-card-lift group">
                <div className="h-1.5 rounded-t-xl" style={{ background: project.gradient }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs border border-border rounded-md text-muted-foreground bg-secondary hover-badge">{t}</span>
                    ))}
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-primary hover:underline">
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
