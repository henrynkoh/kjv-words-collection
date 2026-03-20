#!/usr/bin/env node
/**
 * Builds public/beginning-faith-part-a-google-docs.txt from:
 * - data/beginning-faith-part-a-source.txt
 * - data/beginning-faith-part-b-source.txt (built from data/beginning-faith-part-b/chunk-*.txt)
 * - data/beginning-faith-part-c-source.txt (built from data/beginning-faith-part-c/chunk-*.txt)
 *
 * Run: node scripts/emit-beginning-faith-doc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_A = path.join(ROOT, "data/beginning-faith-part-a-source.txt");
const CHUNK_DIR_B = path.join(ROOT, "data/beginning-faith-part-b");
const SRC_B = path.join(ROOT, "data/beginning-faith-part-b-source.txt");
const CHUNK_DIR_C = path.join(ROOT, "data/beginning-faith-part-c");
const SRC_C = path.join(ROOT, "data/beginning-faith-part-c-source.txt");
const OUT = path.join(ROOT, "public/beginning-faith-part-a-google-docs.txt");

function buildFromChunks(chunkDir) {
  if (!fs.existsSync(chunkDir)) return "";
  const files = fs
    .readdirSync(chunkDir)
    .filter((f) => /^chunk-\d+\.txt$/.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/\d+/)[0], 10);
      const nb = parseInt(b.match(/\d+/)[0], 10);
      return na - nb;
    });
  if (files.length === 0) return "";
  return files
    .map((f) => fs.readFileSync(path.join(chunkDir, f), "utf8").trimEnd())
    .join("\n\n");
}

const partBFromChunks = buildFromChunks(CHUNK_DIR_B);
if (partBFromChunks) {
  fs.writeFileSync(SRC_B, `${partBFromChunks}\n`, "utf8");
}

const partCFromChunks = buildFromChunks(CHUNK_DIR_C);
if (partCFromChunks) {
  fs.writeFileSync(SRC_C, `${partCFromChunks}\n`, "utf8");
}

const HEADER = `BEGINNING FAITH — PARTS A, B & C (Google Docs)

Part A: Q&A (1a)–(24a) + study notes  
Part B: Q&A (1b)–(16b) + study notes (Les Feldick–style)  
Part C: Q&A (1c)–(16c) + study notes (“Complex Questions and Others”)

One-click copy: open /beginning-faith in the app and use “Copy entire document,” or select all text below and paste into Google Docs.

---

`;

const partA = fs.readFileSync(SRC_A, "utf8").trimEnd();
const partB = fs.existsSync(SRC_B)
  ? fs.readFileSync(SRC_B, "utf8").trimEnd()
  : "";
const partC = fs.existsSync(SRC_C)
  ? fs.readFileSync(SRC_C, "utf8").trimEnd()
  : "";

const dividerB = `

---

PART B — BUILDING FAITH

---

`;

const dividerC = `

---

PART C — COMPLEX QUESTIONS AND OTHERS

---

`;

let body = partA;
if (partB.length > 0) body = `${body}${dividerB}${partB}`;
if (partC.length > 0) body = `${body}${dividerC}${partC}`;

fs.writeFileSync(OUT, `${HEADER}${body}\n`, "utf8");

const na = (partA.match(/^\(\d+a\)/gm) || []).length;
const nb = (partB.match(/^\(\d+b\)/gm) || []).length;
const nc = (partC.match(/^\(\d+c\)/gm) || []).length;
const chunkBCount = partBFromChunks
  ? fs.readdirSync(CHUNK_DIR_B).filter((f) => /^chunk-\d+\.txt$/.test(f)).length
  : 0;
const chunkCCount = partCFromChunks
  ? fs.readdirSync(CHUNK_DIR_C).filter((f) => /^chunk-\d+\.txt$/.test(f)).length
  : 0;

console.error(
  "Wrote",
  OUT,
  "| line-start Q count A:",
  na,
  "B:",
  nb,
  "C:",
  nc,
  "| chunk files B:",
  chunkBCount,
  "C:",
  chunkCCount
);
