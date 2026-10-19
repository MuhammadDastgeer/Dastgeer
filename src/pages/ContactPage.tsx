import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-14 border-b border-border bg-surface/30 backdrop-blur-md relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <span className="section-label mb-2 block">// DIRECT COMMUNICATIONS</span>
            <h1 className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              Get in Touch & <span className="text-gradient">Collaborate</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-[65ch] mx-auto leading-relaxed">
              Looking for an AI engineer, machine learning consultant, or technical partner? Send me a message or check the frequently asked questions below.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <main>
        <Contact />
        <FAQ />
      </main>

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
