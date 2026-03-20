import fs from "fs";
import path from "path";
import Link from "next/link";
import { CopyTranscriptButton } from "@/components/CopyTranscriptButton";
import { TranscriptTextArea } from "@/components/TranscriptTextArea";

const HEADER = `BEGINNING FAITH — PARTS A, B & C (Google Docs)

Part A: Q&A (1a)–(24a) + study notes  
Part B: Q&A (1b)–(16b) + study notes  
Part C: Q&A (1c)–(16c) + study notes

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

function loadBeginningFaithText(): string {
  const partAPath = path.join(
    process.cwd(),
    "data/beginning-faith-part-a-source.txt"
  );
  const partBPath = path.join(
    process.cwd(),
    "data/beginning-faith-part-b-source.txt"
  );
  const partCPath = path.join(
    process.cwd(),
    "data/beginning-faith-part-c-source.txt"
  );
  const partA = fs.readFileSync(partAPath, "utf8").trimEnd();
  let out = `${HEADER}${partA}`;

  if (fs.existsSync(partBPath)) {
    const partB = fs.readFileSync(partBPath, "utf8").trimEnd();
    out = `${out}${DIVIDER_B}${partB}`;
  }
  if (fs.existsSync(partCPath)) {
    const partC = fs.readFileSync(partCPath, "utf8").trimEnd();
    out = `${out}${DIVIDER_C}${partC}`;
  }
  return `${out}\n`;
}

export default function BeginningFaithPage() {
  const fullText = loadBeginningFaithText();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
        <Link href="/" className="text-amber-700 dark:text-amber-300 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        Beginning Faith — Parts A, B &amp; C
      </p>
      <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
        Beginning Faith — Parts A, B &amp; C
      </h1>
      <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">
        Part A (1a–24a), Part B (1b–16b), and Part C (1c–16c): full Q&amp;A blocks and study notes for
        Google Docs.{" "}
        <a
          href="/beginning-faith-part-a-google-docs.txt"
          className="text-amber-700 dark:text-amber-300 hover:underline"
          download
        >
          Download .txt
        </a>
      </p>

      <CopyTranscriptButton text={fullText} />

      <label className="block mt-8 text-sm font-medium text-stone-700 dark:text-stone-300">
        Full document (select all here if needed)
      </label>
      <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
        Tip: click the box and it will select all for manual copy.
      </p>
      <TranscriptTextArea value={fullText} />
    </div>
  );
}
