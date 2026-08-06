import { ExternalLink, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import generativeAIBlogAsset from "@/assets/generative-ai-blog.png.asset.json";

const blogs: {
  title: string;
  desc: string;
  tools: string[];
  gradient: string;
  image?: string;
  link: string;
}[] = [
  {
    title: "Generative AI — From Data to Creation",
    desc: "A comprehensive Notion blog covering the journey from data to creation with generative AI: concepts, tools, and real-world applications.",
    tools: ["Generative AI", "Notion", "AI Writing", "LLMs"],
    gradient: "linear-gradient(135deg, hsl(200,85%,50%), hsl(260,85%,60%))",
    image: generativeAIBlogAsset.url,
    link: "https://app.notion.com/p/Generative-AI-3a7bb6b3c45c81a593ade28ad408502f?source=copy_link",
  },
  {
    title: "Neural Network Architectures — From Perceptrons to GANs",
    desc: "Deep dive into neural network architectures: perceptrons, MLPs, CNNs, RNNs, autoencoders and GANs — how they work and where they're used.",
    tools: ["Deep Learning", "CNN", "RNN", "GANs"],
    gradient: "linear-gradient(135deg, hsl(260,85%,60%), hsl(320,80%,55%))",
    link: "https://app.notion.com/p/1_Neural-Network-Architectures-From-Perceptrons-to-GANs-3a9bb6b3c45c819cbb28f7f7f14c3501?source=copy_link",
  },
  {
    title: "Transformer Architecture",
    desc: "How transformers work end-to-end: self-attention, multi-head attention, positional encoding, encoder-decoder stacks and why they changed AI.",
    tools: ["Transformers", "Attention", "Deep Learning"],
    gradient: "linear-gradient(135deg, hsl(190,85%,50%), hsl(230,85%,60%))",
    link: "https://app.notion.com/p/2_Transformer-Architecture-3a8bb6b3c45c8104abfed387dbe1710f?source=copy_link",
  },
  {
    title: "Natural Language Processing (NLP) — Core Concepts and Tasks",
    desc: "Core NLP concepts and tasks: tokenization, embeddings, classification, NER, summarization, translation and modern LLM-based pipelines.",
    tools: ["NLP", "Embeddings", "Text Processing"],
    gradient: "linear-gradient(135deg, hsl(150,70%,45%), hsl(200,85%,55%))",
    link: "https://app.notion.com/p/3_Natural-Language-Processing-NLP-Core-Concepts-and-Tasks-3a9bb6b3c45c81cc858be089cb349659?source=copy_link",
  },
  {
    title: "Prompt Engineering",
    desc: "Practical prompt engineering: patterns, zero/few-shot prompting, chain-of-thought, structured outputs and reliability techniques.",
    tools: ["Prompting", "LLMs", "Best Practices"],
    gradient: "linear-gradient(135deg, hsl(35,90%,55%), hsl(0,80%,60%))",
    link: "https://app.notion.com/p/4_Prompt-Engineering-3a8bb6b3c45c8144a12fda5e8c539311?source=copy_link",
  },
  {
    title: "Large Language Models (LLMs)",
    desc: "What LLMs are, how they're trained, scaling laws, fine-tuning vs RAG, and how to choose the right model for a task.",
    tools: ["LLMs", "Fine-tuning", "RAG"],
    gradient: "linear-gradient(135deg, hsl(280,80%,60%), hsl(200,85%,55%))",
    link: "https://app.notion.com/p/5_Large-Language-Models-LLMs-3a8bb6b3c45c813b82c0cf64806abc5e?source=copy_link",
  },
  {
    title: "Models and Types of AI Models — A Complete Guide",
    desc: "A complete map of AI model families: discriminative, generative, multimodal, foundation models and their practical trade-offs.",
    tools: ["AI Models", "ML", "Guide"],
    gradient: "linear-gradient(135deg, hsl(220,80%,55%), hsl(160,70%,45%))",
    link: "https://app.notion.com/p/6_Model-and-Types-of-AI-Models-A-Complete-Guide-3a8bb6b3c45c81ef8ac6fba3c8fe80d0?source=copy_link",
  },
  {
    title: "LangChain — The Complete Deep Dive",
    desc: "LangChain from the ground up: chains, agents, tools, memory, retrievers and building production-ready LLM applications.",
    tools: ["LangChain", "Agents", "RAG"],
    gradient: "linear-gradient(135deg, hsl(160,70%,45%), hsl(260,85%,60%))",
    link: "https://app.notion.com/p/6_LangChain-The-Complete-Deep-Dive-3afbb6b3c45c81c1ab7fc65a469761f3?source=copy_link",
  },
  {
    title: "Generative AI Across Modalities",
    desc: "Generative AI beyond text — image, video, audio, music and code generation, plus the models powering each modality.",
    tools: ["Multimodal", "Image", "Audio", "Video"],
    gradient: "linear-gradient(135deg, hsl(320,80%,58%), hsl(35,90%,55%))",
    link: "https://app.notion.com/p/7_Generative-AI-Across-Modalities-Text-Image-Video-Audio-Music-and-Code-3a9bb6b3c45c819db335c74e8f901cdb?source=copy_link",
  },
  {
    title: "Context Engineering — Managing What an AI Model Actually Sees",
    desc: "Context engineering techniques: context windows, chunking, retrieval, compression and memory to control what the model actually sees.",
    tools: ["Context", "RAG", "Memory"],
    gradient: "linear-gradient(135deg, hsl(200,85%,50%), hsl(150,70%,45%))",
    link: "https://app.notion.com/p/8_Context-Engineering-Managing-What-an-AI-Model-Actually-Sees-3a9bb6b3c45c81359cf6c7517e59fce9?source=copy_link",
  },
  {
    title: "Models in LangChain — The Complete Guide",
    desc: "Working with models in LangChain: chat models, LLMs, embeddings, providers, streaming, structured output and configuration.",
    tools: ["LangChain", "Models", "Embeddings"],
    gradient: "linear-gradient(135deg, hsl(250,85%,60%), hsl(190,85%,50%))",
    link: "https://app.notion.com/p/9_Models-in-LangChain-The-Complete-Guide-3b2bb6b3c45c8120b974caebc2e1b378?source=copy_link",
  },
  {
    title: "Document Loaders in LangChain — The Complete Guide",
    desc: "Every LangChain document loader explained: PDFs, web pages, CSVs, databases and building reliable ingestion pipelines.",
    tools: ["LangChain", "Loaders", "Data Ingestion"],
    gradient: "linear-gradient(135deg, hsl(15,85%,58%), hsl(280,80%,60%))",
    link: "https://app.notion.com/p/9-1-_Document-Loaders-in-LangChain-The-Complete-Guide-3b0bb6b3c45c81ada4d9e0b97cf3c06b?source=copy_link",
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
