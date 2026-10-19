import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Mail } from "lucide-react";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-14 border-b border-border bg-surface/30 backdrop-blur-md relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <ScrollReveal>
            <span className="section-label mb-2 block">// PORTFOLIO ARCHIVE</span>
            <h1 className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              Featured AI & <span className="text-gradient">ML Deployments</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-[65ch] leading-relaxed">
              A comprehensive showcase of deployed AI agents, RAG pipelines, healthcare diagnostic assistants, full-stack applications, and automated workflows.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <main>
        <Projects />

        {/* CTA */}
        <section className="py-20 border-t border-border bg-surface/40 relative">
          <div className="container max-w-[1200px] mx-auto px-6 text-center max-w-2xl relative z-10">
            <ScrollReveal>
              <span className="section-label mb-2 block">// READY TO COMMENCE?</span>
              <h2 className="fluid-h2 font-heading font-bold text-foreground mb-4">
                Have an AI project or architecture in mind?
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Whether you need end-to-end AI agent development, fine-tuning, or workflow automation, I'm available for full-time roles and contract projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-gradient">
                  <Mail size={15} />
                  <span>Contact Me Today</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/web-cv" className="btn-ghost">
                  <span>View Web CV</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
