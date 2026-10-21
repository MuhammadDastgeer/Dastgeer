import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Code2, Mail } from "lucide-react";

export const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-14 border-b border-border bg-surface/30 backdrop-blur-md relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <ScrollReveal>
            <span className="section-label mb-2 block">Technical Stack</span>
            <h1 className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              Skills, Frameworks & Toolchains
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-[65ch] leading-relaxed">
              A comprehensive breakdown of technical proficiencies across Python, PyTorch, TensorFlow, LLMs, Multi-Agent Systems, and Cloud Platforms (AWS & Azure).
            </p>
          </ScrollReveal>
        </div>
      </div>

      <main>
        <Skills />
        <Expertise />
        <Certifications />

        {/* CTA */}
        <section className="py-20 border-t border-border bg-surface/40 relative">
          <div className="container max-w-[1200px] mx-auto px-6 text-center max-w-2xl relative z-10">
            <ScrollReveal>
              <span className="section-label mb-2 block">Applications</span>
              <h2 className="fluid-h2 font-heading font-bold text-foreground mb-4">
                See these capabilities in production
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Check out real-world projects featuring advanced LangChain, LangGraph multi-agent systems, computer vision, and NLP implementations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/projects" className="btn-primary">
                  <Code2 size={15} />
                  <span>Explore Projects</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  <Mail size={15} />
                  <span>Get In Touch</span>
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

export default SkillsPage;
