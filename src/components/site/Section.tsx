import type { ReactNode } from "react";

interface Props {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ id, index, title, subtitle, children }: Props) {
  return (
    <section
      id={id}
      className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32"
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-primary text-sm">{index}.</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {subtitle && (
        <p className="font-mono text-sm text-muted-foreground mb-8">{subtitle}</p>
      )}
      {children}
    </section>
  );
}
