import type { VerseEntry, Category } from "@/types/verse";
import type { VerseMeta } from "./verse-meta-types";
import { KJV_PART_A } from "./kjv-part-a";
import { KJV_PART_B } from "./kjv-part-b";
import { KJV_TRANSCRIPT_GENERATED } from "./kjv-transcript-generated";
import { VERSE_META_CHUNK3 } from "./verse-meta-chunk3";
import { VERSE_META_CHUNK4 } from "./verse-meta-chunk4";
import { VERSE_META_TRANSCRIPT_GENERATED } from "./verse-meta-transcript-generated";

const KJV_BY_REF: Record<string, string> = {
  ...KJV_PART_A,
  ...KJV_PART_B,
  ...KJV_TRANSCRIPT_GENERATED,
};

function metaToVerse(m: VerseMeta): VerseEntry {
  const verseKjv = KJV_BY_REF[m.verseRef];
  if (!verseKjv) {
    throw new Error(
      `[verses] Missing KJV text for reference "${m.verseRef}" (entry #${m.number}). Add it to src/data/kjv-part-a.ts or kjv-part-b.ts.`
    );
  }
  return {
    number: m.number,
    category: m.category as Category,
    theme: m.theme,
    title: m.title,
    subTitle: m.subTitle,
    who: m.who,
    whom: m.whom,
    why: m.why,
    when: m.when,
    where: m.where,
    verseRef: m.verseRef,
    verseKjv,
    ...(m.verseKr ? { verseKr: m.verseKr } : {}),
    explanation: m.explanation,
  };
}

/**
 * **Chunk 3** (#1001–1069) + **Chunk 4** (#1501–1564) + **Transcript** (#1070–1211 auto-generated).
 * Regenerate transcript data: `npm run generate:transcript`.
 */
export const verses: VerseEntry[] = [
  ...VERSE_META_CHUNK3,
  ...VERSE_META_TRANSCRIPT_GENERATED,
  ...VERSE_META_CHUNK4,
]
  .map(metaToVerse)
  .sort((a, b) => a.number - b.number);
