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

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <div className="pt-28 pb-10 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              About Muhammad Dastgeer
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              AI Engineer & <span className="highlight-text">Machine Learning</span> Specialist
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              Explore my background, hands-on professional journey, core areas of expertise, academic qualifications, and verified credentials.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <About />
      <Expertise />
      <Experience />
      <Journey />
      <Education />
      <Certifications />

      {/* Next Step Call to Action */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Ready to explore my work or discuss a project?
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Discover over 30+ shipped AI agents and machine learning applications, or reach out directly for collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/projects"
                className="gradient-purple-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Briefcase size={16} /> View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Mail size={16} /> Contact Me
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

export default AboutPage;
