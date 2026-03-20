# KJV words collection — data tasks

## Plan
- Prophecy eBook chunks: meta + KJV maps (`verse-meta-chunk3/4`, `kjv-part-a/b`).
- Transcript / Pauline themes: curated JSON + `npm run generate:transcript` → generated TS merged in `verses.ts`.

## Checklist
- [x] Transcript automation (`data/curated-transcript-refs.json`, generator script, `#1070–1211`).
- [ ] Full eBook ranges: 1–1000, 1212–1500, 1565–2117 (when source rows exist).
- [ ] Optional: 흠정역 column in JSON + generator `verseKr` support (if licensed).

## Review
- **2025-03-19:** Added automated KJV fetch + 142-verse Pauline chunk at #1070–1211; `verses.ts` merges chunk3, transcript, chunk4; `npm run build` OK.
- **2025-03-19:** Stored 292 transcript source summaries in `data/transcript-catalog-source.txt`; `/transcripts` one-click copy; `public/transcript-extractions-google-docs.txt`; `npm run emit:transcript-doc` to refresh public file.
- **2025-03-19:** Part A “Beginning Faith” in `data/beginning-faith-part-a-source.txt`; `/beginning-faith` page + `public/beginning-faith-part-a-google-docs.txt`; `npm run emit:beginning-faith-doc` to refresh.
- **2025-03-19:** Part B “Building Faith” `(1b)–(16b)` in `data/beginning-faith-part-b/` chunks; emit concatenates A+B into public `.txt` and `beginning-faith-part-b-source.txt`.
