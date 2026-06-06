import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="text-foreground">aman</span>
          <span className="text-muted-foreground">.dev</span>
          <span className="animate-blink text-primary">_</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary/60">0{i + 1}.</span> {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex font-mono text-xs px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
        >
          hire_me()
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-4 font-mono text-sm">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary"
              >
                <span className="text-primary/60">0{i + 1}.</span> {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
