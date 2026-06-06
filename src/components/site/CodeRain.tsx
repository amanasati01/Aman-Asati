import { useEffect, useState } from "react";

const SNIPPETS = [
  "const ship = () => prod;",
  "git push origin main",
  "docker compose up -d",
  "SELECT * FROM users;",
  "async/await",
  "useState<T>()",
  "npm run build",
  "if (bug) fix();",
  "200 OK",
  "POST /api/v1",
  "type Result<T,E>",
  "Redis.get(key)",
  "JWT.verify(token)",
  "psql -U dev",
  "kubectl apply -f",
  "{ status: 'ok' }",
  "fetch('/health')",
  "console.log('🚀')",
];

interface Snip {
  id: number;
  text: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
}

export function CodeRain() {
  const [snips, setSnips] = useState<Snip[]>([]);

  useEffect(() => {
    const arr: Snip[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      text: SNIPPETS[i % SNIPPETS.length],
      left: Math.random() * 100,
      duration: 12 + Math.random() * 14,
      delay: Math.random() * 12,
      size: 10 + Math.random() * 4,
    }));
    setSnips(arr);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      {snips.map((s) => (
        <span
          key={s.id}
          className="absolute font-mono text-primary/70 whitespace-nowrap animate-float-up"
          style={{
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
