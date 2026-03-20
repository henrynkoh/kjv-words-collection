#!/usr/bin/env node
/**
 * Builds public/transcript-extractions-google-docs.txt from
 * data/transcript-catalog-source.txt (single source of truth).
 *
 * Run: node scripts/emit-transcript-google-doc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "data/transcript-catalog-source.txt");
const OUT = path.join(ROOT, "public/transcript-extractions-google-docs.txt");

const HEADER = `COMPLETE TRANSCRIPT CATALOG — Sources 1–292

One-click copy: open /transcripts in the app and use “Copy entire document,” or select all text below and paste into Google Docs.

---

`;

const body = fs.readFileSync(SRC, "utf8").trimEnd();
fs.writeFileSync(OUT, `${HEADER}${body}\n`, "utf8");

const n = body.split(/\n/).filter((l) => /^\d+\./.test(l)).length;
console.error("Wrote", OUT, "| numbered entries:", n);
