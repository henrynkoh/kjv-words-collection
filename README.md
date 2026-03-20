# KJV Words Collection

> A visual, topic-based index of KJV Bible prophecies — with Korean 흠정역 — covering Christ’s comings, the dispensation of grace, and the blessed hope of the Rapture.

---

## 🔎 At a glance

- **KJV** verses with **Korean 흠정역** where available  
- Verses presented **without redundancy or omissions**, organized by **category** and **theme**  
- **Left-side scrollable navigation** (in the app) for fast movement between sections/subsections  
- **Transcript catalog** (`/transcripts`) — all **292** source summaries in one block; **one-click copy** for Google Docs (same text in `public/transcript-extractions-google-docs.txt`)  
- **Beginning Faith — Parts A, B & C** (`/beginning-faith`) — Q&A **(1a)–(24a)**, **(1b)–(16b)**, and **(1c)–(16c)** plus study notes; **one-click copy** for Google Docs (`public/beginning-faith-part-a-google-docs.txt`; sources: Part A file + Part B / Part C chunk dirs → `*-part-b-source.txt` / `*-part-c-source.txt`; refresh with `npm run emit:beginning-faith-doc`)  
- Modern, responsive UI built with **Next.js 16 + App Router + Tailwind CSS**  

On GitHub, you can use the table of contents in the left sidebar to jump to any section of this README.

---

## 🧭 Table of contents

- [KJV Words Collection](#kjv-words-collection)
  - [🔎 At a glance](#-at-a-glance)
  - [📚 Documentation](#-documentation)
  - [🎨 Visual layout & sections](#-visual-layout--sections)
  - [📂 Data model](#-data-model)
  - [▶️ Run locally](#️-run-locally)
  - [🚀 Build & deploy](#-build--deploy)
  - [📣 Ads, posts \u0026 outreach](#-ads-posts--outreach)
  - [🔗 GitHub / Back to top](#-github--back-to-top)

---

## 📚 Documentation

All docs live under `docs/`:

| Doc | Description |
|-----|--------------|
| [**Quick Start**](docs/QUICKSTART.md) | Get the app running in under 2 minutes |
| [**Manual**](docs/MANUAL.md) | Full user & maintainer guide |
| [**Tutorial**](docs/TUTORIAL.md) | Step-by-step: run app, add a verse, build \u0026 deploy |
| [**Ads \u0026 marketing**](docs/ads/README.md) | Copy for Facebook, Instagram, Threads, Blogger, Naver Blog, Tistory, WordPress, newsletter, and email |
| [**Import dataset**](docs/IMPORT_DATASET.md) | How to bring your full Google Doc / export into the app (no sign-in required for builds) |

Use the GitHub sidebar TOC to scroll between these sections quickly.

---

## 🎨 Visual layout & sections

### Landing page (`/`)

The app home page acts as a visual landing page:

- **Hero:**  
  - Title: “A Comprehensive Theological Exploration”  
  - Subtitle: Biblical prophecies of Christ’s comings, the dispensation of grace, and the blessed hope of the Rapture  
- **Overview:** inerrant prophetic tapestry, purpose of prophecy and revelation  
- **Core themes (cards):**  
  1. Jesus’ First Coming — Prophecy Fulfilled (≈300 verses)  
  2. Jesus’ Second Coming — Glory, Judgment, Eternal Kingdom (≈1,475 verses)  
  3. Gospel of Grace Revealed to Paul (≈10 verses)  
  4. The Rapture — Believers Caught Up (7 core verses)  
- **Conclusion:** living in light of prophetic certainty  
- **CTAs:** “Browse all verses” and “Read overview”

### Left-side navigation (in the app)

The app itself has a scrollable left nav (desktop) that mirrors this README’s structure:

- “KJV Words Collection” (back to home)
- “All verses”
- **Categories**:
  - Prophecy (1st Coming)
  - Prophecy (2nd Coming)
  - Fulfillment
  - Mystery Revealed to Paul
  - Rapture
- Under each category, **themes** (e.g. Judgment, Jesus’ Return, Signs, Worship, Israel’s Restoration, New Jerusalem, Glory, Messiah’s Birth/Suffering/Ministry…) with verse counts.

Clicking a theme scrolls the verses view to that filtered subset; you can scroll the left nav up/down to reach every sub-section.

### Verses page (`/verses`)

- Header shows current **category → theme** and total verse count  
- Cards for each verse show:
  - Number, Category, Theme, Title, Sub-title  
  - Who, Whom, Why, When, Where  
  - KJV text and (when present) 흠정역 Korean  
  - Explanation of prophetic / doctrinal significance  

---

## 📂 Data model

Verses and sections are data-driven; you don’t edit the sidebar manually.

- **Type definitions:** `src/types/verse.ts` (`VerseEntry`, `Category`, etc.)  
- **Verses:** `src/data/verses.ts` — single `verses` array  
- **Sections \u0026 filters:** `src/data/sections.ts` — builds category + theme list and filtering logic  

### Adding verses

Edit `src/data/verses.ts` and append objects to the `verses` array. Each verse must match the `VerseEntry` type in `src/types/verse.ts`:

- `number`, `category`, `theme`, `title`, `subTitle`, `who`, `whom`, `why`, `when`, `where`  
- `verseRef` (e.g. `"Isaiah 24:19"`), `verseKjv`, optional `verseKr`, `explanation`

Categories (must match exactly):

- `"Prophecy (1st Coming)"`
- `"Prophecy (2nd Coming)"`
- `"Fulfillment"`
- `"Mystery Revealed to Paul"`
- `"Rapture"`

The left nav and verse list are derived from this data; new categories/themes appear automatically as soon as you add verses that use them.

---

## ▶️ Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

For a guided version, see **[docs/QUICKSTART.md](docs/QUICKSTART.md)** or **[docs/TUTORIAL.md](docs/TUTORIAL.md)**.

---

## 🚀 Build & deploy

```bash
npm run build
npm start
```

This runs the production build locally on port 3000.  
You can deploy to any Next.js-capable host (e.g. Vercel, Netlify, or your own server) using `next build` + `next start`.

---

## 📣 Ads, posts & outreach

Ready-to-use ad and post copy (replace `[YOUR_URL]` with your live site):

- **Social:**  
  - [docs/ads/facebook.md](docs/ads/facebook.md)  
  - [docs/ads/instagram.md](docs/ads/instagram.md)  
  - [docs/ads/threads.md](docs/ads/threads.md)  
- **Blogs:**  
  - [docs/ads/blogger.md](docs/ads/blogger.md)  
  - [docs/ads/naver-blog.md](docs/ads/naver-blog.md)  
  - [docs/ads/tistory.md](docs/ads/tistory.md)  
  - [docs/ads/wordpress.md](docs/ads/wordpress.md)  
- **Mail:**  
  - [docs/ads/newsletter.md](docs/ads/newsletter.md)  
  - [docs/ads/email.md](docs/ads/email.md)

---

## 🔗 GitHub / Back to top

- **Repository:** `https://github.com/henrynkoh/kjv-words-collection`  
- **Back to top:** [↑ Scroll to top](#kjv-words-collection)

On GitHub’s web UI, this README acts as a visual landing page, and the automatic left-hand table of contents lets you scroll to each sub-section quickly. Use the link above any time you want to jump back to the top.
