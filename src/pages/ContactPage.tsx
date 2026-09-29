import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-28 pb-10 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
              <span className="w-2 h-2 rounded-full bg-green-badge" />
              Available for New Opportunities
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Get in Touch & <span className="highlight-text">Collaborate</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base">
              Looking for an AI engineer, machine learning consultant, or technical partner? Send me a message or check the frequently asked questions below.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <Contact />
      <FAQ />

      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
