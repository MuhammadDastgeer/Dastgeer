import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    title: "Python",
    emoji: "🐍",
    tools: ["Core Language", "OOP", "Scripting", "Automation"],
    bg: "hsl(265,70%,95%)",
  },
  {
    title: "Machine Learning",
    emoji: "🤖",
    tools: ["scikit-learn", "XGBoost", "LightGBM"],
    bg: "hsl(142,50%,93%)",
  },
  {
    title: "Deep Learning",
    emoji: "🧠",
    tools: ["TensorFlow", "Keras", "PyTorch"],
    bg: "hsl(217,70%,93%)",
  },
  {
    title: "Natural Language Processing",
    emoji: "💬",
    tools: ["Hugging Face Transformers", "NLTK"],
    bg: "hsl(265,70%,95%)",
  },
  {
    title: "Data Analytics",
    emoji: "📊",
    tools: ["Pandas", "NumPy", "Excel"],
    bg: "hsl(142,50%,93%)",
  },
  {
    title: "Generative AI",
    emoji: "✨",
    tools: ["OpenAI API", "Hugging Face", "LangChain"],
    bg: "hsl(217,70%,93%)",
  },
  {
    title: "Data Visualization",
    emoji: "📈",
    tools: ["Matplotlib", "Seaborn", "Plotly"],
    bg: "hsl(330,60%,93%)",
  },
  {
    title: "Agentic AI",
    emoji: "⚡",
    tools: ["LangGraph", "LangSmith", "CrewAI"],
    bg: "hsl(142,50%,93%)",
  },
  {
    title: "AI Automation",
    emoji: "🔄",
    tools: ["N8N", "Make.com", "Zapier"],
    bg: "hsl(45,93%,90%)",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Technical <span className="highlight-text">Skills</span></h2>
            <p className="text-muted-foreground mt-2">Technologies I work with every day</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} delay={i * 0.05}>
              <div className="rounded-xl p-5 border border-border hover:shadow-md transition-shadow" style={{ backgroundColor: skill.bg }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{skill.emoji}</span>
                  <h3 className="font-heading font-bold text-foreground">{skill.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-md bg-card border border-border text-primary font-medium">{t}</span>
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

export default Skills;
