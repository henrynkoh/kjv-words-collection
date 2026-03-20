#!/usr/bin/env node
/**
 * Builds public/beginning-faith-part-a-google-docs.txt from
 * data/beginning-faith-part-a-source.txt (single source of truth).
 *
 * Run: node scripts/emit-beginning-faith-doc.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "data/beginning-faith-part-a-source.txt");
const OUT = path.join(ROOT, "public/beginning-faith-part-a-google-docs.txt");

const HEADER = `PART A — BEGINNING FAITH (Q&A 1a–24a + study notes)

One-click copy: open /beginning-faith in the app and use “Copy entire document,” or select all text below and paste into Google Docs.

---

`;

const body = fs.readFileSync(SRC, "utf8").trimEnd();
fs.writeFileSync(OUT, `${HEADER}${body}\n`, "utf8");

const n = (body.match(/^\(\d+a\)/gm) || []).length;
console.error("Wrote", OUT, "| lines like (1a)…(24a) at line start:", n);
