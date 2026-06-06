import { Section } from "./Section";

const stats = [
  { value: "3", label: "Shipped Apps" },
  { value: "300+", label: "LeetCode Solved", href: "https://leetcode.com/u/amanasati123/" },
  { value: "85%+", label: "Test Coverage" },
  { value: "0", label: "Booking Conflicts @ 200 users" },
];

export function About() {
  return (
    <Section id="about" index="01" title="about">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-2">
          <div className="group relative rounded-lg overflow-hidden border border-border bg-card hover:border-primary/60 transition-all">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 0%, oklch(0.88 0.22 155 / 0.25), transparent 70%)",
              }}
            />
            <img
              src="/aman-asati.png"
              alt="Aman Asati — Full Stack Developer"
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
              <p className="font-mono text-xs text-primary">
                <span className="text-muted-foreground">$</span> ./aman --status
              </p>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                <span className="text-accent">●</span> available for work
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            I'm a <span className="text-foreground">Full Stack Developer</span> based in Indore, India,
            with <span className="text-primary">3 shipped applications</span> built on{" "}
            <span className="text-foreground">React 18, Next.js 14, Node.js,</span> and{" "}
            <span className="text-foreground">PostgreSQL</span>.
          </p>
          <p>
            I work across <span className="text-foreground">AI integrations</span> (OpenAI GPT-4,
            Google Gemini), microservices, event-driven systems, and CI/CD pipelines —
            the boring, reliable stuff that makes products actually ship.
          </p>
          <p>
            I care about <span className="text-accent">latency budgets</span>,{" "}
            <span className="text-accent">test coverage</span>, and{" "}
            <span className="text-accent">observability</span> — not just demos.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {stats.map((s) => {
              const inner = (
                <>
                  <div className="font-display text-3xl font-bold text-gradient">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </div>
                  {"href" in s && (
                    <span className="mt-2 font-mono text-[10px] text-primary/60 group-hover:text-primary transition-colors block">
                      ↗ view profile
                    </span>
                  )}
                </>
              );
              return "href" in s ? (
                <a
                  key={s.label}
                  href={(s as typeof s & { href: string }).href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-5 rounded-lg border border-border bg-card hover:border-primary/60 hover:shadow-[0_0_30px_-8px_oklch(0.88_0.22_155_/_0.4)] transition-all block"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={s.label}
                  className="group relative p-5 rounded-lg border border-border bg-card hover:border-primary/60 transition-all"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
