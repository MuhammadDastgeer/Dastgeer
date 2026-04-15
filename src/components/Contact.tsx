import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:dastgeerjutt8888@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">GET IN TOUCH</p>
            <h2 className="section-title">Let's <span className="highlight-text">Connect</span></h2>
            <p className="text-muted-foreground mt-2">Ready to build something amazing together?</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal direction="left">
            <div>
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Let's work together</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need an AI system, a web app, or automation solutions — let's talk.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-purple-bg">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold">Email</p>
                    <p className="text-sm text-foreground">dastgeerjutt8888@gmail.com</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-blue">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-accent font-semibold">Location</p>
                    <p className="text-sm text-foreground">Pir Mahal, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
                <a href="https://www.linkedin.com/in/muhammad-dastgeer/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-cyan-accent text-primary-foreground hover:opacity-80 transition-opacity"><svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="https://www.kaggle.com/dastgeerjutt" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full gradient-purple-bg text-primary-foreground hover:opacity-80 transition-opacity font-bold text-sm flex items-center justify-center w-10 h-10">k</a>
                <a href="mailto:dastgeerjutt8888@gmail.com" className="p-3 rounded-full gradient-purple-bg text-primary-foreground hover:opacity-80 transition-opacity"><Mail size={18} /></a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  required
                />
              </div>
              <button type="submit" className="w-full gradient-purple-bg text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
