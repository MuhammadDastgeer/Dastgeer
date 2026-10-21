import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-10">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5 mb-3 group">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/40 shadow-[0_0_10px_rgba(0,242,254,0.3)] flex-shrink-0 transition-transform group-hover:scale-105">
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-base tracking-tight text-white">
                Muhammad <span className="text-cyan-purple-gradient">Dastgeer</span>
              </span>
            </Link>
            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-[42ch] mb-4">
              AI / ML Systems Engineer specializing in Autonomous Multi-Agent Workflows (LangGraph, CrewAI), Enterprise RAG, and Cloud Infrastructure (AWS & Azure).
            </p>
            <p className="text-xs text-[#94A3B8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
              <span>Available for Global Remote Roles & Consulting</span>
            </p>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-xs font-semibold text-white block mb-3">
                Navigation
              </span>
              <ul className="space-y-2 text-[#94A3B8]">
                <li><Link to="/" className="hover:text-[#00F2FE] transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#00F2FE] transition-colors">About</Link></li>
                <li><Link to="/projects" className="hover:text-[#00F2FE] transition-colors">Projects</Link></li>
                <li><Link to="/skills" className="hover:text-[#00F2FE] transition-colors">Skills</Link></li>
              </ul>
            </div>
            <div>
              <span className="text-xs font-semibold text-white block mb-3">
                Resources
              </span>
              <ul className="space-y-2 text-[#94A3B8]">
                <li><Link to="/web-cv" className="hover:text-[#00F2FE] transition-colors">Web CV</Link></li>
                <li><Link to="/blog" className="hover:text-[#00F2FE] transition-colors">AI Blog</Link></li>
                <li><Link to="/contact" className="hover:text-[#00F2FE] transition-colors">Contact</Link></li>
                <li>
                  <a href="/Muhammad_Dastgeer_CV.pdf" download className="hover:text-[#00F2FE] transition-colors flex items-center gap-1">
                    <span>PDF Resume</span>
                    <ArrowUpRight size={11} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold text-white block mb-3">
              Connect With Me
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://github.com/MuhammadDastgeer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] flex items-center justify-center transition-all"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-dastgeer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] flex items-center justify-center transition-all"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="mailto:dastgeerjutt8888@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-[#94A3B8] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 hover:shadow-[0_0_12px_rgba(0,242,254,0.25)] flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} Muhammad Dastgeer. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              <span>Engineered with React 18 & Tailwind</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
