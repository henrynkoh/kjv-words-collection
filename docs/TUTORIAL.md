# KJV Words Collection — Tutorial

Step-by-step guide: from zero to a running app and your first custom verse.

---

## Part 1: Run the app (5 minutes)

### Step 1.1 — Check Node.js

Open a terminal and run:

```bash
node -v
```

You should see v18 or higher (e.g. `v20.10.0`). If not, install Node from [nodejs.org](https://nodejs.org).

### Step 1.2 — Go to the project folder

```bash
cd /path/to/kjv-words-collection
```

(Replace with your actual path.)

### Step 1.3 — Install dependencies

```bash
npm install
```

Wait until it finishes without errors.

### Step 1.4 — Start the dev server

```bash
npm run dev
```

You should see something like: `Ready on http://localhost:3000`.

### Step 1.5 — Open in the browser

1. Open **http://localhost:3000**.
2. You should see the landing page (“A Comprehensive Theological Exploration”).
3. Click **“Browse all verses”** or **“Open verse index”**.
4. In the left sidebar, click **“All verses”** to see every verse, or click a category (e.g. “Prophecy (2nd Coming)”) and then a theme (e.g. “Judgment”) to filter.

**Checkpoint:** You can move between Home and Verses and change filters from the sidebar.

---

## Part 2: Add your first verse (10 minutes)

### Step 2.1 — Open the verse data file

In your editor, open:

**`src/data/verses.ts`**

You’ll see an array named `verses` with several objects.

### Step 2.2 — Copy an existing verse

1. Find the last verse in the array (e.g. the one with `number: 1563`).
2. Copy the **entire object** (from `{` to `},`).
3. Paste it **after** the last comma, **before** the closing `];`.

### Step 2.3 — Edit the copy

Change at least these so it’s clearly your test verse:

- `number` — use a new number (e.g. `2001`).
- `title` — e.g. `"My First Added Verse"`.
- `subTitle` — e.g. `"Tutorial"`.
- `verseRef` — e.g. `"John 3:16"`.
- `verseKjv` — e.g. `"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."`
- `explanation` — e.g. `"Added in the tutorial to verify the workflow."`

You can leave `verseKr` as-is or clear it; other fields (who, whom, why, when, where, category, theme) can stay or match your chosen verse.

### Step 2.4 — Save and check

1. Save `src/data/verses.ts`.
2. In the browser, go to **http://localhost:3000/verses**.
3. Click **“All verses”** in the sidebar (or the category/theme you used).
4. Find your new verse by number or title.

**Checkpoint:** Your new verse appears in the list and the theme’s verse count in the sidebar increases by one.

---

## Part 3: Add a new theme (5 minutes)

Themes are **not** configured in a separate file. They come from the `theme` field of verses.

### Step 3.1 — Use a new theme name

In `src/data/verses.ts`, add another verse (or edit the one you added) and set:

```ts
theme: "New Theme Name",
```

Use a name that doesn’t exist yet (e.g. `"Comfort"` or `"Hope"`).

### Step 3.2 — Save and check

1. Save the file.
2. In the app, open the verses page and look at the left sidebar under the same **category** as your verse.
3. You should see **“New Theme Name”** with count 1 (or more if you have several verses with that theme).

**Checkpoint:** New themes appear automatically; no extra config.

---

## Part 4: Build for production (3 minutes)

### Step 4.1 — Build

```bash
npm run build
```

Fix any errors that appear (usually TypeScript or missing fields in verse objects).

### Step 4.2 — Run production server

```bash
npm start
```

Open **http://localhost:3000** again. The app should behave the same as in dev, but optimized for production.

### Step 4.3 — Deploy (optional)

- **Vercel:** Connect your Git repo; Vercel will run `next build` and serve the app.
- **Netlify:** Same idea: build command `npm run build`, publish directory `.next` (or use Next runtime).
- **Other hosts:** Run `npm run build` and then `npm start`, or follow your host’s Next.js instructions.

**Checkpoint:** You can run the app locally in production mode and know how to deploy it.

---

## Summary

| Step | What you did |
|------|----------------|
| 1    | Installed deps, ran `npm run dev`, opened the app in the browser. |
| 2    | Added a new verse in `src/data/verses.ts` and saw it on the verses page. |
| 3    | Used a new `theme` value and saw it appear in the sidebar. |
| 4    | Ran `npm run build` and `npm start` for production. |

**Next:** Use the [Manual](MANUAL.md) for full reference, or the [Quick Start](QUICKSTART.md) for the shortest run instructions.

**See also:** [README](../README.md)
