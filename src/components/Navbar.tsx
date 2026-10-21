import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.png";

const navLinks = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Web CV", path: "/web-cv" },
  { name: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path.startsWith("/#")) return false;
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-6 sm:gap-8 rounded-full glass-pill shadow-xl transition-all duration-300 ${
            scrolled ? "py-2 px-5 sm:px-6 shadow-2xl scale-[0.98]" : "py-2.5 px-6 sm:px-7"
          }`}
        >
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/40 shadow-[0_0_10px_rgba(0,242,254,0.3)] flex-shrink-0 transition-transform group-hover:scale-105">
              <img
                src={profileImg}
                alt="Muhammad Dastgeer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white whitespace-nowrap shrink-0">
                Muhammad <span className="text-cyan-purple-gradient">Dastgeer</span>
              </span>
              <span className="meta-mono text-[9px] text-[#94A3B8] hidden sm:block">
                AI / ML Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#94A3B8]">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    active ? "text-white font-semibold" : "hover:text-[#00F2FE]"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="cyan-nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] rounded-full shadow-[0_0_8px_#00F2FE]"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Vibrant Gradient "Hire Me" Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/contact"
              className="btn-gradient text-xs py-1.5 px-4 hidden sm:inline-flex"
            >
              <Sparkles size={13} className="text-[#0B0F19]" />
              <span>Hire Me</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="p-1.5 text-white md:hidden hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B0F19]/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 font-heading font-bold text-base text-white"
              >
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-8 h-8 rounded-full object-cover border border-cyan-400/50"
                />
                Muhammad Dastgeer
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-xl border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-4 my-auto py-8">
              <span className="text-xs text-[#00F2FE] uppercase tracking-wider font-semibold">Navigation</span>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-2xl font-bold text-white hover:text-[#00F2FE] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-[#94A3B8]" />
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-gradient w-full text-center justify-center py-3 text-sm font-bold"
              >
                Hire Me Today
              </Link>
              <p className="text-center text-xs text-[#94A3B8]">
                dastgeerjutt8888@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
