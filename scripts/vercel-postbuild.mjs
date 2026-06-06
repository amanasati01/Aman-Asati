#!/usr/bin/env node
/**
 * Vercel post-build script.
 *
 * The vite-tanstack-config pipeline outputs the Nitro build to `dist/` instead
 * of the expected `.vercel/output/` location. This script moves (or copies)
 * the already-structured Vercel Build Output API artifacts into the correct
 * place so Vercel can detect and deploy them.
 *
 * Run automatically via the `build:vercel` npm script.
 */

import { existsSync, mkdirSync, rmSync, cpSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const src = resolve(root, "dist");
const dest = resolve(root, ".vercel", "output");

if (!existsSync(src)) {
  console.error(`ERROR: Build output not found at ${src}`);
  console.error("Make sure `bun run build` has completed successfully first.");
  process.exit(1);
}

// Clean any previous .vercel/output
if (existsSync(dest)) {
  console.log(`Removing existing ${dest} …`);
  rmSync(dest, { recursive: true, force: true });
}

mkdirSync(dest, { recursive: true });

console.log(`Copying ${src} → ${dest} …`);
cpSync(src, dest, { recursive: true });

console.log("✅ Vercel output ready at .vercel/output/");
