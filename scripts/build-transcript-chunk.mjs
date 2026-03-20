#!/usr/bin/env node
/**
 * Downloads open KJV JSON (thiagobodruk/bible), expands curated refs from
 * data/curated-transcript-refs.json, and writes:
 *   src/data/verse-meta-transcript-generated.ts
 *   src/data/kjv-transcript-generated.ts
 *
 * Run: node scripts/build-transcript-chunk.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CURATED = path.join(ROOT, "data/curated-transcript-refs.json");
const OUT_META = path.join(ROOT, "src/data/verse-meta-transcript-generated.ts");
const OUT_KJV = path.join(ROOT, "src/data/kjv-transcript-generated.ts");
const KJV_URL =
  "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/en_kjv.json";

function escStr(s) {
  return JSON.stringify(s);
}

/** Strip KJV marginal notes like {was} for short titles only */
function stripMargins(t) {
  return t.replace(/\s*\{[^}]*\}/g, "").replace(/\s+/g, " ").trim();
}

function titleFromVerse(text) {
  const t = stripMargins(text);
  const words = t.split(/\s+/).slice(0, 8).join(" ");
  return words.length > 52 ? words.slice(0, 49) + "…" : words;
}

function parsePassage(spec) {
  const m = spec.match(/^(.+)\s+(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) throw new Error(`Bad passage: ${spec}`);
  const book = m[1].trim();
  const chapter = +m[2];
  const v0 = +m[3];
  const v1 = m[4] ? +m[4] : v0;
  return { book, chapter, v0, v1 };
}

function buildBookMaps(bible) {
  const byName = new Map();
  for (const b of bible) {
    byName.set(b.name.toLowerCase(), b);
  }
  const aliases = new Map([
    ["psalm", "psalms"],
    ["song of songs", "song of solomon"],
    ["canticles", "song of solomon"],
  ]);
  return { byName, aliases };
}

function resolveBook(name, { byName, aliases }) {
  const key = name.toLowerCase();
  if (aliases.has(key)) {
    return byName.get(aliases.get(key));
  }
  return byName.get(key);
}

function getVerseText(bibleRow, chapter, verse) {
  const ch = bibleRow.chapters[chapter - 1];
  if (!ch) throw new Error(`No chapter ${chapter} in ${bibleRow.name}`);
  const t = ch[verse - 1];
  if (!t) throw new Error(`No ${bibleRow.name} ${chapter}:${verse}`);
  return t;
}

function refLabel(bookName, chapter, verse) {
  return `${bookName} ${chapter}:${verse}`;
}

const WHOM_BY_BOOK = [
  ["romans", "believers at Rome"],
  ["1 corinthians", "church at Corinth"],
  ["2 corinthians", "Corinthian saints"],
  ["galatians", "churches of Galatia"],
  ["ephesians", "saints at Ephesus"],
  ["philippians", "believers at Philippi"],
  ["colossians", "church at Colossae"],
];

function whomFor(bookName) {
  const k = bookName.toLowerCase();
  for (const [b, w] of WHOM_BY_BOOK) {
    if (k === b) return w;
  }
  return "Paul's readers";
}

function explanationFor(ref, theme) {
  return `${ref} is cited in the study theme "${theme}." Paul's letter material shapes church conduct: unity in Christ, honoring conscience, building up others, and living unto Him who died and rose again.`;
}

async function main() {
  const raw = fs.readFileSync(CURATED, "utf8");
  const cfg = JSON.parse(raw);
  const startNumber = cfg.startNumber;
  const category = cfg.category;

  process.stderr.write("Fetching KJV JSON…\n");
  const res = await fetch(KJV_URL);
  if (!res.ok) throw new Error(`KJV fetch ${res.status}`);
  const bible = await res.json();
  const maps = buildBookMaps(bible);

  const seen = new Set();
  const rows = [];

  for (const block of cfg.blocks) {
    const theme = block.theme;
    for (const passage of block.passages) {
      const { book, chapter, v0, v1 } = parsePassage(passage);
      const row = resolveBook(book, maps);
      if (!row) throw new Error(`Unknown book: ${book}`);
      const canonName = row.name;
      for (let v = v0; v <= v1; v++) {
        const verseRef = refLabel(canonName, chapter, v);
        if (seen.has(verseRef)) continue;
        seen.add(verseRef);
        const text = getVerseText(row, chapter, v);
        const title = titleFromVerse(text);
        const subTitle =
          theme.length > 70 ? theme.slice(0, 67) + "…" : theme;
        rows.push({
          verseRef,
          text,
          theme,
          title,
          subTitle,
        });
      }
    }
  }

  let number = startNumber;
  const kjvEntries = {};
  const metaLines = [];

  for (const r of rows) {
    const ref = r.verseRef;
    kjvEntries[ref] = r.text;
    const refBook = ref.replace(/\s+\d+:\d+$/, "");
    const explanation = explanationFor(ref, r.theme);
    metaLines.push(`  {
    number: ${number++},
    category: ${escStr(category)},
    theme: ${escStr(r.theme)},
    title: ${escStr(r.title)},
    subTitle: ${escStr(r.subTitle)},
    who: "Paul",
    whom: ${escStr(whomFor(refBook))},
    why: "Equip the church for faith, unity, and godly liberty",
    when: "Church age",
    where: "Pauline epistle",
    verseRef: ${escStr(ref)},
    explanation: ${escStr(explanation)},
  }`);
  }

  const kjvBody = Object.keys(kjvEntries)
    .sort()
    .map((k) => `  ${escStr(k)}: ${escStr(kjvEntries[k])},`)
    .join("\n");

  const metaFile = `/* eslint-disable */
import type { VerseMeta } from "./verse-meta-types";

/**
 * Auto-generated by scripts/build-transcript-chunk.mjs from data/curated-transcript-refs.json
 * Numbers: ${startNumber}–${number - 1}. Re-run script after editing the JSON.
 */
export const VERSE_META_TRANSCRIPT_GENERATED: VerseMeta[] = [
${metaLines.join(",\n")}
];
`;

  const kjvFile = `/* eslint-disable */
/** Auto-generated — KJV for transcript chunk only (public domain, thiagobodruk/bible). */
export const KJV_TRANSCRIPT_GENERATED: Record<string, string> = {
${kjvBody}
};
`;

  fs.writeFileSync(OUT_META, metaFile, "utf8");
  fs.writeFileSync(OUT_KJV, kjvFile, "utf8");
  process.stderr.write(
    `Wrote ${rows.length} verses → #${startNumber}–${number - 1}\n`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
