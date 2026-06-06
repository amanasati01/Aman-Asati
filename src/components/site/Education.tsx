import { GraduationCap, Award } from "lucide-react";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="04" title="education & certs">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {[
            {
              title: "B.E. Computer Science & Engineering",
              place: "RKDF University, Bhopal",
              date: "Graduated June 2025",
            },
            {
              title: "12th Science (PCM)",
              place: "St. Thomas Convent Sr. Sec. School",
              date: "2021",
            },
          ].map((e) => (
            <div
              key={e.title}
              className="p-5 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <GraduationCap className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{e.place}</p>
                  <p className="font-mono text-xs text-primary mt-2">{e.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {[
            { title: "Full Stack Developer Certificate", meta: "Certified" },
            {
              title: "LeetCode — 300+ Problems Solved",
              meta: "arrays · graphs · DP · system design",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="p-5 rounded-lg border border-border bg-card hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Award className="text-accent mt-1" size={20} />
                <div>
                  <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground mt-2">
                    {c.meta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
