import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import profileImg from "@/assets/profile.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
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
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 rounded-full glass-pill shadow-xl transition-all duration-300 ${
            scrolled ? "py-2 px-4 sm:px-6 shadow-2xl scale-[0.98]" : "py-2.5 px-5 sm:px-7"
          }`}
        >
          {/* Brand Profile Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-aurora-violet/60 transition-transform group-hover:scale-105">
              <img
                src={profileImg}
                alt="Muhammad Dastgeer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-sm tracking-tight text-foreground hidden sm:inline">
              Dastgeer<span className="text-aurora-cyan">.ai</span>
            </span>
          </Link>

          {/* Desktop Nav Links with Sliding Indicator */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                    active
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="nav-sliding-pill"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/30 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    >
                      <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-aurora-violet to-aurora-cyan rounded-full" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle + Hire Me Gradient Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light or dark theme"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link to="/contact" className="btn-gradient text-xs py-1.5 px-4 hidden sm:inline-flex">
              Hire Me
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-full text-foreground md:hidden hover:bg-muted/60 transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Glass Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 bg-background/95 flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 font-heading font-bold text-base text-foreground"
              >
                <img
                  src={profileImg}
                  alt="Muhammad Dastgeer"
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-aurora-violet"
                />
                Muhammad Dastgeer
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2 rounded-full border border-border text-foreground"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full border border-border text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4 my-auto py-8">
              <span className="section-label">// NAVIGATION</span>
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-heading text-2xl font-bold transition-all flex items-center justify-between ${
                      active ? "text-gradient pl-2" : "text-foreground hover:pl-2"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={18} className="opacity-40" />
                  </Link>
                );
              })}
            </div>

            <div className="space-y-3 pt-6 border-t border-border">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-gradient w-full text-center justify-center py-3 text-sm"
              >
                Hire Me Today
              </Link>
              <p className="mono-tag text-[10px] text-center text-muted-foreground">
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
