import { useState } from "react";
import { ChevronDown, MessageCircle, Zap, CheckCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  { q: "What services do you offer?", a: "I offer AI/ML development, deep learning model training, agentic AI systems, data analytics, generative AI solutions, and AI automation services." },
  { q: "What technologies do you specialize in?", a: "Python, TensorFlow, PyTorch, LangChain, OpenAI, scikit-learn, and various data science and automation tools." },
  { q: "Are you available for freelance work?", a: "Yes, I'm currently available for freelance projects and collaborations. Feel free to reach out!" },
  { q: "How do you approach a new project?", a: "I start with understanding the problem, then research, prototype, iterate, and deliver production-ready solutions." },
  { q: "What is your experience with AI agents?", a: "I've built 30+ autonomous AI agents using LangChain, OpenAI SDK, and custom frameworks for various business use cases." },
  { q: "Do you offer ongoing support after project delivery?", a: "Yes, I provide post-delivery support, maintenance, and optimization services for all my projects." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">FAQ</p>
            <h2 className="section-title">Frequently Asked <span className="highlight-text">Questions</span></h2>
            <div className="w-12 h-1 gradient-purple-bg rounded-full mx-auto mt-4" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover-card-lift">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center gap-3 p-4 text-left"
                  >
                    <span className="text-sm font-bold highlight-text">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-medium text-foreground text-sm">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-4 pb-4 text-sm text-muted-foreground pl-12">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="right">
            <div className="gradient-purple-bg rounded-2xl p-6 text-primary-foreground">
              <MessageCircle className="w-10 h-10 mb-4 opacity-80" />
              <h3 className="font-heading text-xl font-bold mb-2">Have More Questions?</h3>
              <p className="text-sm opacity-80 mb-4">Can't find the answer you're looking for? Reach out directly — I'm always happy to chat.</p>
              <div className="space-y-2 mb-6">
                <p className="flex items-center gap-2 text-sm"><Zap size={14} /> &lt; 24h response time</p>
                <p className="flex items-center gap-2 text-sm"><CheckCircle size={14} /> 100% reply rate</p>
                <p className="flex items-center gap-2 text-sm"><MessageSquare size={14} /> Free consultation</p>
              </div>
              <a
                href="/#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-block px-6 py-2 bg-card text-foreground rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
              >
                Ask Me Directly →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
