import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Asati — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Full Stack Developer from Indore, India. Three shipped apps using React, Next.js, Node.js, PostgreSQL, and AI integrations (GPT-4, Gemini).",
      },
      { property: "og:title", content: "Aman Asati — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content: "I ship products. Three live apps. Real users. Real metrics.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
