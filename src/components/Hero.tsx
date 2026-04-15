import { motion } from "framer-motion";
import { MapPin, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
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
              <h2 className="font-heading text-xl font-bold text-foreground mb-2">Deep Learning</h2>
              <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                <MapPin size={14} /> Pir Mahal, Punjab, Pakistan
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Muhammad Dastgeer is an AI Engineer specializing in Machine Learning, Deep Learning, and Agentic AI systems. Based in Pir Mahal, Punjab, Pakistan, he has delivered 50+ real-world AI projects across Computer Vision, NLP, and Generative AI.
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
                <a href="#" className="border border-border text-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors flex items-center gap-2">
                  ↓ Download CV
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-4">
                <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/muhammad-dastgeer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></a>
                <a href="https://www.kaggle.com/dastgeerjutt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-bold text-lg">k</a>
                <a href="mailto:dastgeerjutt8888@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail size={20} /></a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl">
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
