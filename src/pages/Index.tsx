import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Tech Marquee infinite ribbon */}
        <TechMarquee />

        {/* About (bento) */}
        <About />

        {/* What I Do (bento / Expertise) */}
        <Expertise />

        {/* Projects (filter tabs with animated pill indicator) */}
        <Projects />

        {/* Experience (vertical timeline) */}
        <Experience />

        {/* Milestones / AI Journey */}
        <Journey />

        {/* Technical Skills (bento) */}
        <Skills />

        {/* Education */}
        <Education />

        {/* Certifications */}
        <Certifications />

        {/* FAQ (smooth accordion, + rotates to x) */}
        <FAQ />

        {/* Contact (glass form + floating label inputs, toast feedback) */}
        <Contact />
      </main>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
