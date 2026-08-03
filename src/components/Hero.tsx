import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.png";
import ScrollReveal from "./ScrollReveal";

const roles = [
  "Deep Learning",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
  "NLP Expert",
  "Agentic AI",
  "Data Scientist",
  "AI Automation",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-6">
                <span className="w-2 h-2 rounded-full bg-green-badge" />
                Available for Hire
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground text-lg mb-1">Hello, I'm</p>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
                <span className="highlight-text">Muhammad</span> Dastgeer
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="font-heading text-xl font-bold text-foreground mb-2 h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block highlight-text"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </h2>
              <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin size={14} /> Pir Mahal, Punjab, Pakistan
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                AI/ML Engineer with deep hands-on expertise across the complete AI/ML spectrum — from classical machine learning to cutting-edge Generative AI and Agentic systems. Proficient in Python, PyTorch, TensorFlow, and the full data science pipeline.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="/#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="gradient-purple-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                  Get In Touch
                </a>
                <Link to="/web-cv" className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/5 transition-colors flex items-center gap-2">
                  🌐 Web CV
                </Link>
                <a href="/Muhammad_Dastgeer_CV.pdf" download className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors flex items-center gap-2">
                  ↓ Download CV
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-4">
                <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
                <a href="https://www.linkedin.com/in/muhammad-dastgeer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="mailto:dastgeerjutt8888@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                  <img src={profileImg} alt="Muhammad Dastgeer" className="w-full h-full object-cover" width={512} height={512} />
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-8 bg-card rounded-xl shadow-lg px-4 py-2 text-center"
                >
                  <span className="text-2xl font-bold highlight-text">10+</span>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 -left-12 bg-card rounded-xl shadow-lg px-4 py-2 text-center"
                >
                  <span className="text-2xl font-bold highlight-text">20+</span>
                  <p className="text-xs text-muted-foreground">Projects Shipped</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-4 -right-8 bg-card rounded-xl shadow-lg px-4 py-2 text-center"
                >
                  <span className="text-2xl font-bold highlight-text">30+</span>
                  <p className="text-xs text-muted-foreground">AI Agents Built</p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
