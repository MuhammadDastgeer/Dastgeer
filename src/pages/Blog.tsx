import React from "react";
import { ExternalLink, ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import generativeAIBlog from "@/assets/generative-ai-blog-new.jpg";
import blogNeural from "@/assets/blog-neural-networks.jpg";
import blogTransformer from "@/assets/blog-transformer.jpg";
import blogNlp from "@/assets/blog-nlp.jpg";
import blogPrompt from "@/assets/blog-prompt-engineering.jpg";
import blogLlm from "@/assets/blog-llm.jpg";
import blogModels from "@/assets/blog-ai-models.jpg";
import blogLangchain from "@/assets/blog-langchain.jpg";
import blogModalities from "@/assets/blog-modalities.jpg";
import blogContext from "@/assets/blog-context-engineering.jpg";
import blogLcModels from "@/assets/blog-langchain-models.jpg";
import blogLoaders from "@/assets/blog-document-loaders.jpg";

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
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: generativeAIBlog,
    link: "https://app.notion.com/p/Generative-AI-3a7bb6b3c45c81a593ade28ad408502f?source=copy_link",
  },
  {
    title: "Neural Network Architectures — From Perceptrons to GANs",
    desc: "Deep dive into neural network architectures: perceptrons, MLPs, CNNs, RNNs, autoencoders and GANs — how they work and where they're used.",
    tools: ["Deep Learning", "CNN", "RNN", "GANs"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: blogNeural,
    link: "https://app.notion.com/p/1_Neural-Network-Architectures-From-Perceptrons-to-GANs-3a9bb6b3c45c819cbb28f7f7f14c3501?source=copy_link",
  },
  {
    title: "Transformer Architecture",
    desc: "How transformers work end-to-end: self-attention, multi-head attention, positional encoding, encoder-decoder stacks and why they changed AI.",
    tools: ["Transformers", "Attention", "Deep Learning"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: blogTransformer,
    link: "https://app.notion.com/p/2_Transformer-Architecture-3a8bb6b3c45c8104abfed387dbe1710f?source=copy_link",
  },
  {
    title: "Natural Language Processing (NLP) — Core Concepts and Tasks",
    desc: "Core NLP concepts and tasks: tokenization, embeddings, classification, NER, summarization, translation and modern LLM-based pipelines.",
    tools: ["NLP", "Embeddings", "Text Processing"],
    gradient: "linear-gradient(135deg, #B6F24A, #22D3EE)",
    image: blogNlp,
    link: "https://app.notion.com/p/3_Natural-Language-Processing-NLP-Core-Concepts-and-Tasks-3a9bb6b3c45c81cc858be089cb349659?source=copy_link",
  },
  {
    title: "Prompt Engineering",
    desc: "Practical prompt engineering: patterns, zero/few-shot prompting, chain-of-thought, structured outputs and reliability techniques.",
    tools: ["Prompt Engineering", "LLMs", "RAG"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: blogPrompt,
    link: "https://app.notion.com/p/4_Prompt-Engineering-3a8bb6b3c45c81ec8120cc1d560bb3ad?source=copy_link",
  },
  {
    title: "Large Language Models (LLMs) — Under the Hood",
    desc: "Understanding pretraining, instruction tuning, RLHF, context windows, and modern alignment techniques in modern LLMs.",
    tools: ["LLMs", "RLHF", "Pretraining"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: blogLlm,
    link: "https://app.notion.com/p/5_Large-Language-Models-LLMs-3a8bb6b3c45c814db50ee4007f382a32?source=copy_link",
  },
  {
    title: "Major AI Models Overview",
    desc: "A comparative deep dive across top foundation models: GPT-4o, Gemini 1.5/2.0, Claude 3.5, Llama 3, Mistral, and DeepSeek.",
    tools: ["Model Benchmarking", "OpenAI", "Anthropic", "DeepSeek"],
    gradient: "linear-gradient(135deg, #7C5CFF, #B6F24A)",
    image: blogModels,
    link: "https://app.notion.com/p/6_AI-Models-3a8bb6b3c45c81aa99c4c15e3aa2ec13?source=copy_link",
  },
  {
    title: "LangChain Overview & Architecture",
    desc: "Mastering the LangChain ecosystem: chains, expression language (LCEL), callbacks, and orchestrating complex multi-step reasoning.",
    tools: ["LangChain", "LCEL", "Orchestration"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: blogLangchain,
    link: "https://app.notion.com/p/7_LangChain-3a8bb6b3c45c812cbf7af3c46a6f1943?source=copy_link",
  },
  {
    title: "Modalities in Modern Generative AI",
    desc: "Text, vision, audio, code, and multimodal fusion: how cross-attention and projection layers bridge multiple data types.",
    tools: ["Multimodal", "Computer Vision", "Audio AI"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: blogModalities,
    link: "https://app.notion.com/p/8_Modalities-3a8bb6b3c45c81c1aa79e6189ef0cbcf?source=copy_link",
  },
  {
    title: "Context Engineering & In-Context Learning",
    desc: "Maximizing recall in large context windows: KV caching, needle-in-a-haystack analysis, and dynamic context compaction.",
    tools: ["Context Engineering", "KV Cache", "RAG"],
    gradient: "linear-gradient(135deg, #B6F24A, #22D3EE)",
    image: blogContext,
    link: "https://app.notion.com/p/9_Context-Engineering-3a8bb6b3c45c813bbd8de7d58fa6c5da?source=copy_link",
  },
  {
    title: "Models in LangChain — Chat, Embedding, & LLM Interfaces",
    desc: "A developer guide to initializing, swapping, and benchmarking chat models, embeddings, and structured outputs in LangChain.",
    tools: ["LangChain", "ChatModels", "Embeddings"],
    gradient: "linear-gradient(135deg, #7C5CFF, #22D3EE)",
    image: blogLcModels,
    link: "https://app.notion.com/p/10_Models-in-LangChain-3a8bb6b3c45c812282e0df40bf7fa357?source=copy_link",
  },
  {
    title: "Document Loaders in LangChain",
    desc: "Ingesting PDFs, Web pages, Notion databases, CSVs, and code repositories into clean vector stores with metadata preservation.",
    tools: ["Document Loaders", "RAG", "Data Ingestion"],
    gradient: "linear-gradient(135deg, #22D3EE, #7C5CFF)",
    image: blogLoaders,
    link: "https://app.notion.com/p/11_Document-Loaders-in-LangChain-3a8bb6b3c45c81dd8bc8e612959dd8ae?source=copy_link",
  },
];

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative z-10">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-14 border-b border-border bg-surface/30 backdrop-blur-md relative overflow-hidden">
        <div className="container max-w-[1200px] mx-auto px-6 text-left relative z-10">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="btn-ghost text-xs py-2 px-4">
                <ArrowLeft size={14} /> Back to Portfolio
              </Link>
            </div>

            <span className="section-label mb-2 block">Technical Writings & Research</span>
            <h1 className="fluid-h1 font-heading font-extrabold text-foreground mb-4">
              AI Engineering <span className="text-gradient">Chronicles</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-[65ch] leading-relaxed">
              In-depth technical writeups on neural architectures, LLMs, prompt engineering, and agent frameworks published on Notion.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <main className="py-20">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.04}>
                <div className="bento-card group flex flex-col justify-between h-full p-4 transition-all duration-300">
                  <div>
                    {/* 16:10 Thumbnail */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface border border-border mb-4">
                      {b.image ? (
                        <img
                          src={b.image}
                          alt={b.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center bg-surface"
                        >
                          <BookOpen className="text-blue-600 dark:text-blue-400" size={36} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Unboxed tools with separators */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground mb-2.5">
                      {b.tools.map((t, idx) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {idx < b.tools.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3 className="font-heading font-bold text-base text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {b.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {b.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/60">
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-4 w-full justify-center rounded-lg"
                    >
                      <ExternalLink size={13} /> Read on Notion
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
