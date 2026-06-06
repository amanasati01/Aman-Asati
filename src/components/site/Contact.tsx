import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact" index="05" title="contact" subtitle="// let's build something">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            Open to{" "}
            <span className="text-primary">full-time roles</span>,{" "}
            <span className="text-accent">contract work</span>, and interesting
            collaborations. Based in Indore — open to relocation.
          </p>

          <div className="space-y-3 font-mono text-sm">
            <a
              href="mailto:asatiaman38@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} className="text-primary" /> asatiaman38@gmail.com
            </a>
            <a
              href="tel:+918305796599"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={16} className="text-primary" /> +91 8305796599
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={16} className="text-primary" /> Indore, MP, India
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://github.com/amanasati01"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-asati-b42250255/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:asatiaman38@gmail.com"
              className="p-2.5 rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const name = data.get("name");
            const email = data.get("email");
            const message = data.get("message");
            const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
            window.location.href = `mailto:asatiaman38@gmail.com?subject=${encodeURIComponent(
              `Portfolio contact from ${name}`
            )}&body=${body}`;
            setSent(true);
          }}
          className="p-6 rounded-xl border border-border bg-card space-y-4"
        >
          <div>
            <label className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> name
            </label>
            <input
              name="name"
              required
              className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2.5 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2.5 font-mono text-sm focus:border-primary focus:outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground">
              <span className="text-primary">$</span> message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full bg-background border border-border rounded-md px-3 py-2.5 font-mono text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell me about the project..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded-md hover:glow-primary transition-all"
          >
            <Send size={14} /> {sent ? "opening mail client..." : "send message"}
          </button>
        </form>
      </div>

      <footer className="mt-24 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span>
          <span className="text-primary">©</span> 2026 Aman Asati · built with React + Tailwind
        </span>
        <span className="text-accent">// keep shipping_</span>
      </footer>
    </Section>
  );
}
