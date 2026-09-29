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

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-10 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Stack & Arsenal
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Skills, Frameworks & <span className="highlight-text">Competencies</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              A detailed breakdown of my technical proficiencies across Python, PyTorch, TensorFlow, LLMs, Agentic AI architectures, and production MLOps workflows.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Skills />
      <Expertise />
      <Certifications />

      {/* Next Step Call to Action */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              See these skills put into action
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Check out real-world projects featuring advanced LangChain, LangGraph multi-agent systems, computer vision, and NLP implementations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="gradient-purple-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Code2 size={16} /> Explore Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Mail size={16} /> Get In Touch
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

export default SkillsPage;
