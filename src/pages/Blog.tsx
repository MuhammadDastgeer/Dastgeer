import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import generativeAIBlogAsset from "@/assets/generative-ai-blog.png.asset.json";

const blogs = [
  {
    title: "Generative AI — The Complete Guide",
    desc: "A comprehensive Notion blog covering the journey from data to creation with generative AI: concepts, tools, and real-world applications.",
    tools: ["Generative AI", "Notion", "AI Writing", "LLMs"],
    gradient: "linear-gradient(135deg, hsl(200,85%,50%), hsl(260,85%,60%))",
    image: generativeAIBlogAsset.url,
    link: "https://app.notion.com/p/Generative-AI-3a7bb6b3c45c81a593ade28ad408502f?source=copy_link",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <div className="text-center mb-12">
              <p className="section-subtitle mb-2">WRITINGS</p>
              <h1 className="section-title"><span className="highlight-text">Blog</span></h1>
              <p className="text-muted-foreground mt-2">Deep dives into AI, ML, and modern engineering</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {blogs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover-card-lift group h-full">
                  <div className="h-1.5" style={{ background: b.gradient }} />
                  <div className="relative overflow-hidden aspect-[16/9] bg-secondary">
                    <img
                      src={b.image}
                      alt={`${b.title} thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{b.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {b.tools.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs border border-border rounded-md text-muted-foreground bg-secondary hover-badge">{t}</span>
                      ))}
                    </div>
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg gradient-purple-bg text-primary-foreground hover:opacity-90 transition-opacity hover:scale-105"
                    >
                      <ExternalLink size={14} /> Read on Notion
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
