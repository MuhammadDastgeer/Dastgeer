import profileImg from "@/assets/profile.png";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  "Machine Learning", "Deep Learning", "Computer Vision",
  "Generative AI & LLMs", "Agentic AI", "Data Analysis & Visualization",
  "NLP", "AI Automation"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                  <img src={profileImg} alt="Muhammad Dastgeer" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -left-6 bg-card rounded-xl shadow-lg px-4 py-2 text-center"
                >
                  <span className="text-xl font-bold text-foreground">20+</span>
                  <p className="text-xs text-muted-foreground">Projects Shipped</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-4 -right-6 bg-card rounded-xl shadow-lg px-4 py-2 text-center"
                >
                  <span className="text-xl font-bold text-foreground">30+</span>
                  <p className="text-xs text-muted-foreground">AI Agents Built</p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground mb-4">
                <span className="w-2 h-2 rounded-full bg-green-badge" />
                Available for Hire
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-3xl font-bold mb-1">Muhammad Dastgeer</h2>
              <p className="highlight-text font-semibold mb-4">AI Engineer & Machine Learning Specialist</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm Muhammad Dastgeer, a dedicated AI Engineer from Pir Mahal, Punjab, Pakistan. I specialize in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI & LLMs. My expertise spans Agentic AI systems, Data Analysis & Visualization, and AI Automation to drive real-world impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-l-4 border-primary bg-card rounded-r-lg p-4 mb-6">
                <p className="italic text-primary">"Engineering intelligence into every system, one line of code at a time."</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 border border-border rounded-full text-sm text-foreground bg-card">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
