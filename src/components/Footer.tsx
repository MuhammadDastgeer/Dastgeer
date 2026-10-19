import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImg from "@/assets/profile.png";

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-border bg-surface/60 backdrop-blur-md relative overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 pb-10 border-b border-border/60">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-aurora-violet/50">
              <img
                src={profileImg}
                alt="Muhammad Dastgeer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-foreground tracking-tight block">
                Muhammad Dastgeer
              </span>
              <span className="mono-tag text-[10px] text-aurora-cyan flex items-center gap-1 font-semibold">
                <Sparkles size={11} className="text-aurora-violet" /> AI / ML Systems Engineer
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/skills" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link to="/projects" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link to="/web-cv" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Web CV
            </Link>
            <Link to="/contact" className="text-xs font-heading font-semibold text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MuhammadDastgeer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-aurora-cyan transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-dastgeer/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-aurora-violet transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href="mailto:dastgeerjutt8888@gmail.com"
              className="w-9 h-9 rounded-full border border-border bg-surface flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-aurora-cyan transition-all"
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Dastgeer. All rights reserved.</p>
          <p className="mono-tag text-[10px] text-muted-foreground/80">
            ENGINEERED FOR <span className="text-aurora-cyan font-bold">AUTONOMOUS INTELLIGENCE</span> & MLOPS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
