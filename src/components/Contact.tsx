import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:dastgeerjutt8888@gmail.com?subject=AI Portfolio Inquiry from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(
      form.name
    )} (${encodeURIComponent(form.email)})`;

    toast.success("Preparing your message...", {
      description: "Opening your default email client to send to dastgeerjutt8888@gmail.com",
    });

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-2 block">// 10 — CONTACT</span>
          <h2 className="fluid-h2 font-heading font-bold text-foreground mb-3">
            Initiate Collaboration
          </h2>
          <p className="text-muted-foreground text-base">
            Discuss an AI architecture, autonomous agent pipeline, contract engagement, or technical advisory.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left">
              <SpotlightCard className="p-7">
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  Let's Engineer Together
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Available for engineering roles, technical consulting, and multi-agent AI implementation worldwide.
                </p>

                <div className="space-y-4 mb-7">
                  {/* Email Box */}
                  <a
                    href="mailto:dastgeerjutt8888@gmail.com"
                    className="p-4 rounded-2xl border border-border bg-surface/80 hover:border-aurora-violet transition-all group flex items-center gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-aurora-violet/15 border border-aurora-violet/30 text-aurora-violet flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="mono-tag text-[10px] text-aurora-cyan font-bold block">DIRECT EMAIL</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground group-hover:text-aurora-violet transition-colors">
                        dastgeerjutt8888@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Location Box */}
                  <div className="p-4 rounded-2xl border border-border bg-surface/80 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-aurora-cyan/15 border border-aurora-cyan/30 text-aurora-cyan flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="mono-tag text-[10px] text-muted-foreground font-bold block">BASE & AVAILABILITY</span>
                      <span className="text-xs sm:text-sm font-semibold text-foreground">
                        Punjab, Pakistan • Remote Worldwide
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social icons: scale 1.1 + rotate 6deg + glow */}
                <div className="pt-5 border-t border-border/60">
                  <span className="mono-tag text-[10px] text-muted-foreground block mb-3">
                    PROFESSIONAL PROFILES:
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/MuhammadDastgeer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-aurora-cyan hover:text-aurora-cyan hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-dastgeer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-border bg-surface flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-aurora-violet hover:text-aurora-violet hover:shadow-[0_0_20px_rgba(124,92,255,0.4)]"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon size={18} />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Glass Form with Floating Label Inputs (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="glass-pill rounded-[24px] p-7 sm:p-9 border border-border shadow-2xl relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Floating label input: Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-surface/60 text-foreground text-sm focus:border-aurora-violet focus:ring-2 focus:ring-aurora-violet/20 focus:outline-none transition-all"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-aurora-cyan"
                    >
                      Your Full Name
                    </label>
                  </div>

                  {/* Floating label input: Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-surface/60 text-foreground text-sm focus:border-aurora-violet focus:ring-2 focus:ring-aurora-violet/20 focus:outline-none transition-all"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-aurora-cyan"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Floating label input: Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 rounded-2xl border border-border bg-surface/60 text-foreground text-sm focus:border-aurora-violet focus:ring-2 focus:ring-aurora-violet/20 focus:outline-none resize-none transition-all"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-muted-foreground/60 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-aurora-cyan"
                    >
                      Project Details, Architecture, or Inquiries
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-4 rounded-full font-heading font-semibold text-sm cursor-pointer shadow-lg hover:shadow-xl transition-all"
                  >
                    <span>{isSubmitting ? "Routing to Client..." : "Dispatch Message"}</span>
                    <Send size={15} />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
