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
                <a href="https://github.com/MuhammadDastgeer" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-foreground text-background hover:opacity-80 transition-opacity"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/muhammad-dastgeer/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-cyan-accent text-primary-foreground hover:opacity-80 transition-opacity"><Linkedin size={18} /></a>
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
