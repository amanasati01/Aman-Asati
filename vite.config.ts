import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          patterns: [/\.server(\.(ts|tsx|js|jsx))?$/],
        },
      },
      server: { entry: "server" },
    }),
  ];

  // Only run Nitro on build (for deployment)
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(
      nitro({
        preset: "vercel",
      }),
    );
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": "/src",
      },
      dedupe: ["react", "react-dom"],
    },
    server: {
      port: 3000,
    },
  };
});
