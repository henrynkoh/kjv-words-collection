# KJV Words Collection — Quick Start

Get the app running in under 2 minutes.

## Prerequisites

- **Node.js** 18+ ([nodejs.org](https://nodejs.org))
- **npm** (included with Node)

## 1. Install

```bash
cd kjv-words-collection
npm install
```

## 2. Run

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

## 3. What you’ll see

- **Home** — Overview of the four themes (1st Coming, 2nd Coming, Grace, Rapture).
- **Left sidebar** — Sections and themes; click any to filter verses.
- **“All verses”** — View every verse with no filter.

## 4. Build for production

```bash
npm run build
npm start
```

Then open **http://localhost:3000** (default port 3000).

## 5. Add your own verses

1. Open `src/data/verses.ts`.
2. Add a new object to the `verses` array (copy an existing one and edit).
3. Save; the dev server will reload and the new verse appears in the list and nav.

---

**Next:** [Manual](MANUAL.md) · [Tutorial](TUTORIAL.md) · [README](../README.md)
