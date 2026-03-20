import fs from "fs";
import path from "path";
import Link from "next/link";
import { CopyTranscriptButton } from "@/components/CopyTranscriptButton";
import { TranscriptTextArea } from "@/components/TranscriptTextArea";
import { BeginningFaithExplorer } from "@/components/BeginningFaithExplorer";
import { buildPartGroups } from "@/lib/beginning-faith-parse";

const HEADER = `BEGINNING FAITH — PARTS A, B, C & D (Google Docs)

Part A: Q&A (1a)–(24a) + study notes  
Part B: Q&A (1b)–(16b) + study notes  
Part C: Q&A (1c)–(16c) + study notes  
Part D: Q&A (1d)–(17d) + study notes

One-click copy: use the button below, then paste into Google Docs (Cmd/Ctrl+V). You can also download the same text as a file from /beginning-faith-part-a-google-docs.txt

---

`;

const DIVIDER_B = `

---

PART B — BUILDING FAITH

---

`;

const DIVIDER_C = `

---

PART C — COMPLEX QUESTIONS AND OTHERS

---

`;

const DIVIDER_D = `

---

PART D — THE END TIMES

---

`;

const PART_A_PATH = path.join(
  process.cwd(),
  "data/beginning-faith-part-a-source.txt"
);
const PART_B_PATH = path.join(
  process.cwd(),
  "data/beginning-faith-part-b-source.txt"
);
const PART_C_PATH = path.join(
  process.cwd(),
  "data/beginning-faith-part-c-source.txt"
);
const PART_D_PATH = path.join(
  process.cwd(),
  "data/beginning-faith-part-d-source.txt"
);

function loadBeginningFaithText(): string {
  const partA = fs.readFileSync(PART_A_PATH, "utf8").trimEnd();
  let out = `${HEADER}${partA}`;

  if (fs.existsSync(PART_B_PATH)) {
    const partB = fs.readFileSync(PART_B_PATH, "utf8").trimEnd();
    out = `${out}${DIVIDER_B}${partB}`;
  }
  if (fs.existsSync(PART_C_PATH)) {
    const partC = fs.readFileSync(PART_C_PATH, "utf8").trimEnd();
    out = `${out}${DIVIDER_C}${partC}`;
  }
  if (fs.existsSync(PART_D_PATH)) {
    const partD = fs.readFileSync(PART_D_PATH, "utf8").trimEnd();
    out = `${out}${DIVIDER_D}${partD}`;
  }
  return `${out}\n`;
}

function loadPartSourcesForExplorer() {
  return {
    a: fs.readFileSync(PART_A_PATH, "utf8"),
    b: fs.existsSync(PART_B_PATH)
      ? fs.readFileSync(PART_B_PATH, "utf8")
      : undefined,
    c: fs.existsSync(PART_C_PATH)
      ? fs.readFileSync(PART_C_PATH, "utf8")
      : undefined,
    d: fs.existsSync(PART_D_PATH)
      ? fs.readFileSync(PART_D_PATH, "utf8")
      : undefined,
  };
}

export default function BeginningFaithPage() {
  const fullText = loadBeginningFaithText();
  const parts = buildPartGroups(loadPartSourcesForExplorer());

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
        <Link
          href="/"
          className="text-amber-700 dark:text-amber-300 hover:underline"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        Beginning Faith — Parts A, B, C &amp; D
      </p>
      <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
        Beginning Faith — Parts A, B, C &amp; D
      </h1>
      <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">
        Part A (1a–24a), Part B (1b–16b), Part C (1c–16c), and Part D (1d–17d):
        click any question to view that answer. Full document still available
        below for Google Docs.{" "}
        <a
          href="/beginning-faith-part-a-google-docs.txt"
          className="text-amber-700 dark:text-amber-300 hover:underline"
          download
        >
          Download .txt
        </a>
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <CopyTranscriptButton text={fullText} />
        <span className="text-xs text-stone-500 dark:text-stone-400">
          Tip: share a direct link with{" "}
          <code className="rounded bg-stone-200/80 px-1 dark:bg-stone-800">
            #12b
          </code>{" "}
          (question id) in the URL.
        </span>
      </div>

      <BeginningFaithExplorer parts={parts} />

      <details className="mt-12 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-900/30 open:shadow-md">
        <summary className="cursor-pointer select-none px-4 py-3 text-sm font-semibold text-stone-800 dark:text-stone-200 hover:bg-stone-100/80 dark:hover:bg-stone-800/40 rounded-xl">
          Full plain text (select all / copy entire document)
        </summary>
        <div className="border-t border-stone-200 dark:border-stone-700 px-4 pb-4 pt-2">
          <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
            Click the box and it will select all for manual copy.
          </p>
          <TranscriptTextArea value={fullText} />
        </div>
      </details>
    </div>
  );
}
