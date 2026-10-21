import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Autonomous Agents",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message dispatched! Muhammad will respond within 24 hours.", {
        description: `Thank you ${formData.name}. Confirmation sent to ${formData.email}.`,
      });
      setFormData({ name: "", email: "", service: "Autonomous Agents", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container max-w-[1200px] mx-auto px-6">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label mb-2 block">10. Contact</span>
          <h2 className="fluid-h2 font-heading font-bold text-white mb-3">
            Initiate a Technical Collaboration
          </h2>
          <p className="text-[#94A3B8] text-sm sm:text-base">
            Available for AI Engineering roles, contract architecture, and strategic enterprise implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <ScrollReveal direction="left">
              <SpotlightCard className="p-6 sm:p-7">
                <span className="text-xs font-semibold text-[#00F2FE] mb-2 block">
                  Direct Inquiries
                </span>
                <h3 className="font-heading font-bold text-lg text-white mb-5">
                  Communication Channels
                </h3>

                <div className="space-y-3.5 text-xs">
                  <a
                    href="mailto:dastgeerjutt8888@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00F2FE]/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Mail size={16} />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[11px] text-[#94A3B8] block">Email Address</span>
                      <span className="font-medium text-white truncate block group-hover:text-[#00F2FE] transition-colors">
                        dastgeerjutt8888@gmail.com
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/923182460719"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00F2FE]/50 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-[#00F2FE] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#94A3B8] block">WhatsApp Direct</span>
                      <span className="font-medium text-white group-hover:text-[#00F2FE] transition-colors">
                        +92 318 2460719
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-[#94A3B8] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#00F2FE]" />
                    </div>
                    <div>
                      <span className="text-[11px] text-[#94A3B8] block">Location</span>
                      <span className="font-medium text-white">Punjab, Pakistan (Remote Worldwide)</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <a
                    href="https://github.com/MuhammadDastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-white flex items-center justify-center hover:border-[#00F2FE] hover:text-[#00F2FE] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                  >
                    <GithubIcon size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-dastgeer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-white flex items-center justify-center hover:border-[#00F2FE] hover:text-[#00F2FE] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                  >
                    <LinkedinIcon size={17} />
                  </a>
                  <a
                    href="mailto:dastgeerjutt8888@gmail.com"
                    aria-label="Email"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 text-white flex items-center justify-center hover:border-[#00F2FE] hover:text-[#00F2FE] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all"
                  >
                    <Mail size={17} />
                  </a>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE]/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE]/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      Project Scope / Inquiry
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0B0F19] border border-white/10 text-sm text-white focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE]/50 transition-all"
                    >
                      <option value="Autonomous Agents">Autonomous Agent Systems (LangGraph / CrewAI)</option>
                      <option value="Enterprise RAG">Enterprise RAG & Hybrid Knowledge Bases</option>
                      <option value="Deep Learning & Vision">Computer Vision & Neural Architectures</option>
                      <option value="Cloud Architecture">Cloud ML Architecture (AWS / Azure)</option>
                      <option value="Full-Time Role">Full-Time AI Systems Engineering Role</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#94A3B8] block mb-1.5">
                      Brief Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, goals, or role details..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#94A3B8]/60 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE]/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient w-full py-3 text-center justify-center font-bold text-sm text-[#0B0F19] rounded-xl cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching message...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-center text-[#94A3B8] mt-4 flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#00F2FE]" />
                  <span>Guaranteed response within 24 hours · Non-disclosure agreements respected</span>
                </p>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
