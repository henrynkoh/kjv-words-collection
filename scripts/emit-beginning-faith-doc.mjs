#!/usr/bin/env node
/**
 * Builds public/beginning-faith-part-a-google-docs.txt from:
 * - data/beginning-faith-part-a-source.txt
 * - data/beginning-faith-part-b-source.txt (built from data/beginning-faith-part-b/chunk-*.txt)
 *
 * Run: node scripts/emit-beginning-faith-doc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_A = path.join(ROOT, "data/beginning-faith-part-a-source.txt");
const CHUNK_DIR = path.join(ROOT, "data/beginning-faith-part-b");
const SRC_B = path.join(ROOT, "data/beginning-faith-part-b-source.txt");
const OUT = path.join(ROOT, "public/beginning-faith-part-a-google-docs.txt");

function buildPartBFromChunks() {
  if (!fs.existsSync(CHUNK_DIR)) return "";
  const files = fs
    .readdirSync(CHUNK_DIR)
    .filter((f) => /^chunk-\d+\.txt$/.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0], 10);
      const nb = parseInt(b.match(/\d+/)[0], 10);
      return na - nb;
    });
  if (files.length === 0) return "";
  return files
    .map((f) => fs.readFileSync(path.join(CHUNK_DIR, f), "utf8").trimEnd())
    .join("\n\n");
}

const partBFromChunks = buildPartBFromChunks();
if (partBFromChunks) {
  fs.writeFileSync(SRC_B, `${partBFromChunks}\n`, "utf8");
}

const HEADER = `BEGINNING FAITH — PART A & PART B (Google Docs)

Part A: Q&A (1a)–(24a) + study notes  
Part B: Q&A (1b)–(16b) + study notes (Les Feldick–style)

One-click copy: open /beginning-faith in the app and use “Copy entire document,” or select all text below and paste into Google Docs.

---

`;

const partA = fs.readFileSync(SRC_A, "utf8").trimEnd();
const partB = fs.existsSync(SRC_B)
  ? fs.readFileSync(SRC_B, "utf8").trimEnd()
  : "";

const divider = `

---

PART B — BUILDING FAITH

---

`;

const body =
  partB.length > 0 ? `${partA}${divider}${partB}` : partA;

fs.writeFileSync(OUT, `${HEADER}${body}\n`, "utf8");

const na = (partA.match(/^\(\d+a\)/gm) || []).length;
const nb = (partB.match(/^\(\d+b\)/gm) || []).length;
console.error(
  "Wrote",
  OUT,
  "| line-start (1a)/(2a)… count A:",
  na,
  "B:",
  nb,
  "| part B chunk files:",
  partBFromChunks
    ? fs.readdirSync(CHUNK_DIR).filter((f) => /^chunk-\d+\.txt$/.test(f)).length
    : 0
);
