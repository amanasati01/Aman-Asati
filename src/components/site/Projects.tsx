import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  metrics: string[];
  badges: string[];
  github: string;
  live: string | null;
};

const projects: Project[] = [
  {
    name: "DevPulse",
    tagline: "AI Engineering Intelligence Platform",
    description:
      "DORA metrics dashboard processing 500+ GitHub webhook events/day. GPT-4 PR risk scoring across 3 tiers. Sub-200ms responses via an event-driven pipeline.",
    stack: ["Next.js 14", "OpenAI GPT-4", "BullMQ", "Redis", "PostgreSQL", "Docker", "GitHub Actions"],
    metrics: ["~4 hrs/week saved", "30% fewer incidents", "70% faster releases"],
    badges: ["AI", "Full Stack", "Production"],
    github: "https://github.com/amanasati01/devpulse",
    live: "https://devpulse-rxd6.onrender.com",
  },
  {
    name: "Wealth",
    tagline: "Personal Finance Management",
    description:
      "Automated receipt parsing with Gemini Vision AI, RBAC auth, and Core Web Vitals compliance from day one.",
    stack: ["Next.js 14", "Clerk", "Prisma", "PostgreSQL", "Gemini Vision", "Zod"],
    metrics: ["~90% parse accuracy", "FCP < 1.2s", "XSS-safe endpoints"],
    badges: ["AI", "SaaS", "Full Stack"],
    github: "https://github.com/amanasati01/Finance-tracker",
    live: "https://finance-tracker-rouge-three.vercel.app/",
  },
  {
    name: "Movie Ticket Booking",
    tagline: "Concurrency-safe Reservation System",
    description:
      "Seat reservations with PostgreSQL advisory locks and real-time seat sync via WebSockets. Built for correctness under load.",
    stack: ["React 18", "TypeScript", "Node.js", "Express", "PostgreSQL", "WebSockets", "Jest"],
    metrics: ["0 conflicts / 200 users", "<500ms WS latency", "85%+ test coverage"],
    badges: ["Full Stack", "Realtime", "Open Source"],
    github: "https://github.com/amanasati01/movie-booking-app",
    live: null,
  },
];

function CardLink({ p, i }: { p: Project; i: number }) {
  const href = p.live ?? p.github;
  const isLive = Boolean(p.live);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${p.name} — open ${isLive ? "live demo" : "GitHub repo"} in a new tab`}
      className="group relative block p-6 sm:p-8 rounded-xl border border-border bg-card hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_0_60px_-12px_oklch(0.88_0.22_155_/_0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-300"
    >
      {/* subtle gradient sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(80% 60% at 0% 0%, oklch(0.88 0.22 155 / 0.08), transparent 60%)",
        }}
      />

      <div className="relative flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
            <span
              className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                isLive
                  ? "border-primary/40 text-primary bg-primary/5"
                  : "border-border text-muted-foreground"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isLive ? "bg-primary animate-pulse" : "bg-muted-foreground"
                }`}
              />
              {isLive ? "live demo" : "source only"}
            </span>
            {p.badges.map((b) => (
              <span
                key={b}
                className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-accent/30 text-accent bg-accent/5"
              >
                {b}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold flex items-center gap-2">
            {p.name}
            <ArrowUpRight
              size={20}
              className="text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            />
          </h3>
          <p className="font-mono text-sm text-primary mt-1">{p.tagline}</p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs shrink-0">
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(p.github, "_blank", "noopener,noreferrer");
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                window.open(p.github, "_blank", "noopener,noreferrer");
              }
            }}
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Github size={14} /> code
          </span>
          {p.live && (
            <span className="flex items-center gap-1 text-accent">
              <ExternalLink size={14} /> Live Demo ↗
            </span>
          )}
        </div>
      </div>

      <p className="relative mt-5 text-muted-foreground leading-relaxed max-w-3xl">
        {p.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {p.metrics.map((m) => (
          <span
            key={m}
            className="font-mono text-xs px-2.5 py-1 rounded border border-primary/30 bg-primary/5 text-primary"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
        {p.stack.map((s) => (
          <span key={s}>
            <span className="text-accent/60">·</span> {s}
          </span>
        ))}
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="02" title="projects" subtitle="// click any card to open the live build">
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <CardLink key={p.name} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
