import { Github, Linkedin, Mail, Download, ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { CodeRain } from "./CodeRain";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
      <CodeRain />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, oklch(0.88 0.22 155 / 0.12), transparent 70%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <p className="font-mono text-sm text-primary mb-6 animate-reveal">
          <span className="text-muted-foreground">$ whoami</span>
          <span className="animate-blink ml-2">_</span>
        </p>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.95] animate-reveal" style={{ animationDelay: "0.1s" }}>
          Aman <span className="text-gradient">Asati</span>
        </h1>
        <h2 className="mt-4 font-mono text-lg sm:text-2xl text-muted-foreground animate-reveal" style={{ animationDelay: "0.2s" }}>
          <span className="text-accent">&gt;</span> Full Stack Developer
          <span className="text-primary"> & </span>
          AI Engineer
        </h2>

        <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed animate-reveal" style={{ animationDelay: "0.3s" }}>
          I build <span className="text-foreground font-medium">production-grade web apps</span> with{" "}
          <span className="text-foreground font-medium">React, Next.js, Node.js & PostgreSQL</span> —
          shipping <span className="text-primary font-medium">AI-powered features</span>,
          event-driven backends, and sub-200ms experiences real users rely on.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl animate-reveal" style={{ animationDelay: "0.35s" }}>
          {[
            { v: "3", l: "Shipped Apps", href: "#projects" },
            { v: "<200ms", l: "API Latency" },
            { v: "300+", l: "DSA Solved", href: "https://leetcode.com/u/amanasati123/", external: true },
            { v: "85%+", l: "Test Coverage" },
          ].map((m) => {
            const inner = (
              <>
                <div className="font-display text-lg font-bold text-gradient">{m.v}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.l}</div>
              </>
            );
            const cls = "border border-border rounded-md px-3 py-2 bg-card/40 backdrop-blur-sm transition-all";
            if (m.href) {
              return (
                <a
                  key={m.l}
                  href={m.href}
                  {...(m.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`${cls} hover:border-primary/60 hover:bg-card/70 cursor-pointer`}
                >
                  {inner}
                </a>
              );
            }
            return <div key={m.l} className={cls}>{inner}</div>;
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 animate-reveal" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium rounded-md hover:glow-primary transition-all"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download="Aman_Asati_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 border border-primary/40 text-primary font-mono text-sm rounded-md hover:bg-primary/10 hover:border-primary transition-all"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground font-mono text-sm rounded-md hover:border-accent hover:text-accent transition-all"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center gap-5 animate-reveal" style={{ animationDelay: "0.5s" }}>
          <a href="https://github.com/amanasati01" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aman-asati-b42250255/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/amanasati123/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LeetCode">
            <Code2 size={20} />
          </a>
          <a href="mailto:asatiaman38@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://github.com/amanasati01" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-mono text-xs">
            live portfolio <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
