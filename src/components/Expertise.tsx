import { Bot, Code, Brain, BarChart3, Sparkles, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const expertise = [
  {
    icon: <Bot className="w-8 h-8" style={{ color: "hsl(265, 89%, 50%)" }} />,
    stat: "30+", statLabel: "Agents Built",
    title: "Agentic AI",
    desc: "Building autonomous AI agents that make decisions, automate workflows, and adapt to complex scenarios.",
    tools: ["OpenAI SDK", "LangChain", "MCP", "n8n"],
    color: "hsl(265, 89%, 50%)",
  },
  {
    icon: <Code className="w-8 h-8" style={{ color: "hsl(217, 91%, 60%)" }} />,
    stat: "20+", statLabel: "Projects Shipped",
    title: "Machine Learning",
    desc: "Building and deploying ML models for prediction, classification, regression, and real-world data-driven solutions.",
    tools: ["Scikit-learn", "XGBoost", "LightGBM", "Python"],
    color: "hsl(217, 91%, 60%)",
  },
  {
    icon: <Brain className="w-8 h-8" style={{ color: "hsl(186, 94%, 42%)" }} />,
    stat: "10+", statLabel: "DL Models",
    title: "Deep Learning",
    desc: "Designing neural networks — CNNs, RNNs, Transformers — for computer vision, NLP, and complex AI tasks.",
    tools: ["PyTorch", "TensorFlow", "Keras", "Transfer Learning"],
    color: "hsl(186, 94%, 42%)",
  },
  {
    icon: <BarChart3 className="w-8 h-8" style={{ color: "hsl(142, 71%, 45%)" }} />,
    stat: "100%", statLabel: "Data-Driven",
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights through EDA, statistical analysis, and interactive dashboards.",
    tools: ["Pandas", "NumPy", "Plotly", "Tableau"],
    color: "hsl(142, 71%, 45%)",
  },
  {
    icon: <Sparkles className="w-8 h-8" style={{ color: "hsl(265, 89%, 50%)" }} />,
    stat: "LLMs", statLabel: "& RAG Systems",
    title: "Generative AI",
    desc: "Building LLM-powered applications with RAG pipelines, prompt engineering, and multi-modal AI capabilities.",
    tools: ["LangChain", "OpenAI", "Groq", "LlamaIndex"],
    color: "hsl(265, 89%, 50%)",
  },
  {
    icon: <Zap className="w-8 h-8" style={{ color: "hsl(25, 95%, 53%)" }} />,
    stat: "90%", statLabel: "Efficiency Gain",
    title: "AI Automation",
    desc: "Connecting intelligent systems with code and no-code tools to eliminate manual work and scale operations.",
    tools: ["n8n", "Make.com", "Zapier", "FastAPI"],
    color: "hsl(25, 95%, 53%)",
  },
];

const Expertise = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">EXPERTISE</p>
            <h2 className="section-title">What I <span className="highlight-text">Do</span></h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 border border-border hover-card-lift group cursor-default">
                <div className="h-1 rounded-full mb-4" style={{ background: item.color }} />
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-secondary hover-icon-glow">{item.icon}</div>
                  <div className="text-right">
                    <span className="text-xl font-bold" style={{ color: item.color }}>{item.stat}</span>
                    <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs border border-border rounded-md text-muted-foreground bg-secondary hover-badge">{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
