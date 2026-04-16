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
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs border border-border rounded-md text-muted-foreground bg-secondary hover-badge">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg gradient-purple-bg text-primary-foreground hover:opacity-90 transition-opacity">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-secondary transition-colors">
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> GitHub
                      </a>
                    )}
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

export default Projects;
