# KJV Words Collection — User Manual

Complete guide to using and maintaining the KJV Words Collection app.

---

## 1. Overview

**KJV Words Collection** is a web app that presents King James Version (KJV) Bible verses—with Korean 흠정역 where available—organized by theological category and theme. It is built for:

- Studying biblical prophecies (1st Coming, 2nd Coming, Gospel of Grace, Rapture).
- Finding verses by section/topic with no redundancy or omission.
- Sharing and teaching “words of truth” by audience, situation, and context.

---

## 2. Using the app

### 2.1 Landing page (Home)

- **URL:** `/` (e.g. `https://yoursite.com/`)
- **Content:**
  - Hero title and subtitle (prophecies, dispensation of grace, rapture).
  - Overview of the inerrant prophetic tapestry of Scripture.
  - Summary of the four core themes with short descriptions.
  - Conclusion and links to the verse index.

Use the **“Browse all verses”** or **“Open verse index”** button to go to the verses page.

### 2.2 Left-side navigation

- **Sticky sidebar** on desktop; collapses or scrolls on small screens.
- **“KJV Words Collection”** — links to Home.
- **“All verses”** — shows every verse with no filter.
- **Categories** (e.g. Prophecy 1st Coming, Prophecy 2nd Coming, Fulfillment, Mystery Revealed to Paul, Rapture).
- **Under each category:** theme links (e.g. Judgment, Jesus’ Return, Signs, Worship) with **verse counts**.

Clicking a theme filters the verse list to that category + theme. The current section is highlighted.

### 2.3 Verses page

- **URL:** `/verses` or `/verses?category=...&theme=...`
- **Header:** Shows current filter (e.g. “Prophecy (2nd Coming) → Judgment”) and total verse count.
- **List:** One card per verse. Each card includes:
  - **Number** (e.g. #1001)
  - **Category & theme**
  - **Title** and **Sub-title**
  - **Who, Whom, Why, When, Where**
  - **KJV** — reference and full text
  - **흠정역 (Korean)** — when available
  - **Explanation** — significance of the verse

Scrolling is continuous; no pagination. Use the left nav to change section or theme.

---

## 3. Maintaining content

### 3.1 Where data lives

- **Verses:** `src/data/verses.ts` — single `verses` array.
- **Types:** `src/types/verse.ts` — `VerseEntry`, `Category`, etc.
- **Sections/nav:** Built automatically from `verses` in `src/data/sections.ts` (no separate nav config).

### 3.2 Adding a verse

1. Open `src/data/verses.ts`.
2. Add a new object to the `verses` array with these fields:

| Field        | Type   | Required | Example                          |
|-------------|--------|----------|----------------------------------|
| `number`    | number | Yes      | `1001`                           |
| `category`  | string | Yes      | `"Prophecy (2nd Coming)"`        |
| `theme`     | string | Yes      | `"Judgment"`                     |
| `title`     | string | Yes      | `"Earth Reels"`                  |
| `subTitle`  | string | Yes      | `"God's Wrath"`                  |
| `who`       | string | Yes      | `"Isaiah"`                       |
| `whom`      | string | Yes      | `"Nations"`                      |
| `why`       | string | Yes      | `"Warn of upheaval"`             |
| `when`      | string | Yes      | `"End Times"`                    |
| `where`     | string | Yes      | `"Earth"`                        |
| `verseRef`  | string | Yes      | `"Isaiah 24:19"`                 |
| `verseKjv`  | string | Yes      | Full KJV text                    |
| `verseKr`   | string | No       | 흠정역 Korean text (optional)     |
| `explanation` | string | Yes    | Short explanation                |

3. Save the file. In development, the app will hot-reload; the new verse appears in the list and in the nav (theme count updates).

### 3.3 Valid categories

Use exactly one of:

- `"Prophecy (1st Coming)"`
- `"Prophecy (2nd Coming)"`
- `"Fulfillment"`
- `"Mystery Revealed to Paul"`
- `"Rapture"`

### 3.4 Avoiding duplicates

- Each verse should have a **unique `number`**.
- The app does not merge or deduplicate; keep one entry per verse and reuse the same `number` only if you intentionally replace an entry.

---

## 4. Technical reference

### 4.1 Scripts

| Command          | Description                    |
|------------------|--------------------------------|
| `npm run dev`    | Start dev server (port 3000)   |
| `npm run build`  | Production build               |
| `npm start`      | Run production server          |
| `npm run lint`   | Run ESLint                     |

### 4.2 Key files

| Path                    | Purpose                          |
|-------------------------|----------------------------------|
| `src/app/page.tsx`      | Landing page                     |
| `src/app/verses/page.tsx` | Verses list (filtered by URL)  |
| `src/app/layout.tsx`    | Root layout + sidebar            |
| `src/components/SideNav.tsx` | Left navigation              |
| `src/components/VerseCard.tsx` | Single verse card            |
| `src/data/verses.ts`    | Verse data                       |
| `src/data/sections.ts`  | Section/theme and filtering logic |
| `src/types/verse.ts`    | TypeScript types                 |

### 4.3 Deployment

- Build: `npm run build`.
- Run: `npm start` (or use a platform like Vercel/Netlify that runs `next build` and serves the output).
- Set **base URL** in your host’s config if the app is not at the root (e.g. `yoursite.com/kjv-words`).

---

## 5. Troubleshooting

- **Verses or nav not updating:** Ensure you saved `src/data/verses.ts` and that the dev server is running; hard-refresh the browser (Ctrl+F5 / Cmd+Shift+R) if needed.
- **New theme not showing:** Themes are derived from the `theme` field of verses. Add at least one verse with that `theme`; the nav updates automatically.
- **Sidebar not scrollable:** On small screens the sidebar may be shortened; scroll within the sidebar area or expand the window.
- **Build errors:** Run `npm run build` and fix any TypeScript or lint errors reported; ensure every new verse object matches `VerseEntry` in `src/types/verse.ts`.

---

**See also:** [Quick Start](QUICKSTART.md) · [Tutorial](TUTORIAL.md) · [README](../README.md)
