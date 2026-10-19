import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />

      {/* Editorial Page Header */}
      <div className="pt-32 pb-14 border-b border-border bg-surface/30 backdrop-blur-md relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <ScrollReveal>
            <span className="section-label mb-2 block">// 01 — BACKGROUND & CREDENTIALS</span>
            <h1 className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              AI Engineer & <span className="text-gradient">ML Specialist</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-[65ch] leading-relaxed">
              Explore my background, hands-on industrial track record, core areas of expertise, academic qualifications, and verified credentials.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <main>
        <About />
        <Expertise />
        <Experience />
        <Journey />
        <Education />
        <Certifications />

        {/* Next Step CTA */}
        <section className="py-20 border-t border-border bg-surface/40 relative">
          <div className="container max-w-[1200px] mx-auto px-6 text-center max-w-2xl relative z-10">
            <ScrollReveal>
              <span className="section-label mb-2 block">// WHAT'S NEXT</span>
              <h2 className="fluid-h2 font-heading font-bold text-foreground mb-4">
                Ready to explore projects or collaborate?
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Discover 30+ shipped AI agents and machine learning applications, or reach out directly for contract or full-time engagements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/projects" className="btn-gradient">
                  <Briefcase size={15} />
                  <span>View Projects</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  <Mail size={15} />
                  <span>Contact Me</span>
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

export default AboutPage;
