import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Mail } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-10 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Portfolio Showcase
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured AI & <span className="highlight-text">Machine Learning</span> Projects
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              A comprehensive showcase of deployed AI agents, RAG pipelines, healthcare diagnostic assistants, full-stack applications, and automation systems.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Projects />

      {/* Next Step Call to Action */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Have an AI project or idea in mind?
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Whether you need end-to-end AI agent development, fine-tuning, or workflow automation, I'm available for full-time roles and contract projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="gradient-purple-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Mail size={16} /> Contact Me Today <ArrowRight size={16} />
              </Link>
              <Link
                to="/web-cv"
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors"
              >
                🌐 View Web CV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
