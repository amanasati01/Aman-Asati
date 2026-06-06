import { Section } from "./Section";

const groups = [
  {
    title: "Languages",
    items: ["JavaScript (ES2022+)", "TypeScript", "Python", "HTML5/CSS3", "SQL", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js 18", "Next.js 14", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    title: "Backend & DB",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    title: "AI / ML",
    items: ["OpenAI GPT-4", "LangChain", "RAG", "Prompt Engineering"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "Render"],
  },
];

export function Skills() {
  return (
    <Section id="skills" index="03" title="skills" subtitle="// stack & tooling">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g) => (
          <div
            key={g.title}
            className="group p-5 rounded-lg border border-border bg-card hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-accent">▸</span>
              <h3 className="font-mono text-sm uppercase tracking-wider text-foreground">
                {g.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground border border-border/60 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
