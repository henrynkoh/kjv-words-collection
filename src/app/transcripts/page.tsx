import fs from "fs";
import path from "path";
import Link from "next/link";
import { CopyTranscriptButton } from "@/components/CopyTranscriptButton";
import { TranscriptTextArea } from "@/components/TranscriptTextArea";

const HEADER = `COMPLETE TRANSCRIPT CATALOG — Sources 1–292

One-click copy: use the button below, then paste into Google Docs (Cmd/Ctrl+V). You can also download the same text as a file from /transcript-extractions-google-docs.txt

---

`;

function loadCatalogText(): string {
  const fullPath = path.join(
    process.cwd(),
    "data/transcript-catalog-source.txt"
  );
  const body = fs.readFileSync(fullPath, "utf8").trimEnd();
  return `${HEADER}${body}\n`;
}

export default function TranscriptsPage() {
  const fullText = loadCatalogText();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-2">
        <Link href="/" className="text-amber-700 dark:text-amber-300 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        Transcript catalog
      </p>
      <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-2">
        Transcript extractions (Sources 1–292)
      </h1>
      <p className="text-stone-600 dark:text-stone-400 text-sm mb-6">
        Compiled list for Google Docs.{" "}
        <a
          href="/transcript-extractions-google-docs.txt"
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
