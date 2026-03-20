# Importing your verse dataset (e.g. from Google Docs)

The app reads verses from **`src/data/verses.ts`**. To load **all** entries (no redundancy/omissions), the full list must exist as a file **in this project** or as structured data we can parse.

## Why the link alone doesn’t work

A normal **edit** link (`docs.google.com/.../edit?...`) usually requires **Google sign-in**. Automated tools and CI cannot open it unless the doc is published publicly or you export a copy into the repo.

## Option A — Download from Google Docs (recommended)

1. Open your doc in the browser.
2. **File → Download →**
   - **Plain Text (.txt)** or **Microsoft Word (.docx)**  
   - Or **File → Download → Web Page (.html, zipped)** if you need tables preserved.
3. Save the file into this repo, e.g.  
   `data/source/kjv-verses-dataset.txt`  
   (create the `data/source/` folder if needed).
4. Tell your editor/agent the **exact filename** so we can add an import script or convert it into `verses.ts` / JSON.

## Option B — “Publish to web” (public read-only HTML)

1. In Google Docs: **File → Share → Publish to web**.
2. Publish as **Web page** and copy the **published** URL (not the `/edit` URL).
3. That URL may be fetchable as public HTML; still, **downloading** into the repo is more reliable for repeated builds.

## Option C — Share copy in chat / paste

- Paste a **single chunk** of the pipe/table text into a message **or**  
- Add `data/source/full-dataset.txt` in the repo and commit it.

## What format we need for zero-guess imports

Ideal: one row per verse with stable fields, e.g. pipe-separated:

`No. | Category | Theme | Title | Sub-title | Who | Whom | Why | When | Where | Verse Chosen`

plus **KJV verse text**, optional **흠정역**, and **Explanation** (or separate columns).

If your Doc uses only “Verse Chosen” (e.g. `Isaiah 24:19`) **without** full KJV text in the cell, say so — we can either pull text from a bundled KJV file or you add a column for full KJV + Korean.

## Transcript source catalog (292 summaries)

- **Canonical text:** `data/transcript-catalog-source.txt` (numbered items 1–292).  
- **Google Docs–ready export:** run `npm run emit:transcript-doc` → `public/transcript-extractions-google-docs.txt`.  
- **In the app:** open `/transcripts` and use **Copy entire document** (or download the `.txt`).

## Beginning Faith — Parts A & B (Q&A + study notes)

- **Part A:** `data/beginning-faith-part-a-source.txt`.  
- **Part B:** `data/beginning-faith-part-b/chunk-01.txt` … `chunk-15.txt` (concatenated to `data/beginning-faith-part-b-source.txt` when you run the emit script).  
- **Google Docs–ready export:** run `npm run emit:beginning-faith-doc` → `public/beginning-faith-part-a-google-docs.txt` (combined A + B).  
- **In the app:** open `/beginning-faith` and use **Copy entire document** (or download the `.txt`).

## Automated Pauline / transcript-style chunk (already in repo)

If you don’t have a numbered eBook table yet, the project includes:

- **`data/curated-transcript-refs.json`** — passage ranges + themes (Body of Christ, liberty / weak brother, judgment seat, mystery & riches, etc.).
- **`scripts/build-transcript-chunk.mjs`** — downloads **public-domain KJV** (thiagobodruk JSON), expands ranges, and writes:
  - `src/data/verse-meta-transcript-generated.ts`
  - `src/data/kjv-transcript-generated.ts`
- **`npm run generate:transcript`** — runs that script.  
  Edit the JSON, re-run, commit the generated `.ts` files.  
  **Korean (흠정역)** is not auto-filled (licensing); add a `verseKr` field manually or extend the JSON + script if you have rights to the text.

## After the file is in the repo

We can:

1. Add `scripts/importVersesFromSource.ts` (or similar) to parse your export and emit **`src/data/verses.generated.ts`** or **`public/data/verses.json`**.
2. Run a **duplicate check** on `number` and `verseRef` so redundancy is caught before deploy.

---

**Your doc (for your reference):**  
`https://docs.google.com/document/d/1ZSHapXz_uSHAj9QqBGnbgsGmlK7ASqQWZvkKi7bxQgs/edit`

Next step: **download that doc into `data/source/`** (or publish publicly) and reply with the **filename** or the **published URL**.
