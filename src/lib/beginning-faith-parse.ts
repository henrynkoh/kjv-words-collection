/**
 * Parse Les Feldick-style Beginning Faith part files:
 * TOC lists (1x)…(Nx), then body repeats (1x) and runs full answers.
 * We locate the *second* "(1x)" line and split on subsequent "(Nx)" headings.
 */

export type BeginningFaithSection = {
  /** e.g. "1a", "16b" */
  id: string;
  /** Short title after "(Na) " */
  title: string;
  /** Full block including the question line */
  content: string;
};

export type BeginningFaithPartGroup = {
  partKey: "a" | "b" | "c" | "d";
  heading: string;
  sections: BeginningFaithSection[];
};

export const BEGINNING_FAITH_PART_HEADINGS: Record<
  BeginningFaithPartGroup["partKey"],
  string
> = {
  a: "Part A — Beginning Faith",
  b: "Part B — Building Faith",
  c: "Part C — Complex Questions and Others",
  d: "Part D — The End Times",
};

function findSecondIndexOfQuestionOne(
  lines: string[],
  letter: string
): number {
  const re = new RegExp(`^\\(1${letter}\\)\\s`);
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (re.test(lines[i])) {
      count++;
      if (count === 2) return i;
    }
  }
  return -1;
}

function splitBodyIntoSections(
  lines: string[],
  letter: string
): BeginningFaithSection[] {
  const headingRe = new RegExp(`^\\((\\d+)${letter}\\)\\s*(.*)$`);
  const sections: BeginningFaithSection[] = [];
  let buf: string[] = [];
  let currentId: string | null = null;
  let currentTitle = "";

  const flush = () => {
    if (currentId != null) {
      const content = buf.join("\n").trimEnd();
      sections.push({
        id: currentId,
        title: currentTitle,
        content,
      });
    }
    buf = [];
  };

  for (const line of lines) {
    const m = line.match(headingRe);
    if (m) {
      flush();
      currentId = `${m[1]}${letter}`;
      currentTitle = (m[2] ?? "").trim();
      buf.push(line);
    } else {
      buf.push(line);
    }
  }
  flush();
  return sections;
}

export function parseBeginningFaithPart(
  raw: string,
  partKey: BeginningFaithPartGroup["partKey"]
): BeginningFaithSection[] {
  const letter = partKey;
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const bodyStart = findSecondIndexOfQuestionOne(lines, letter);
  if (bodyStart < 0) return [];
  const bodyLines = lines.slice(bodyStart);
  return splitBodyIntoSections(bodyLines, letter);
}

export function buildPartGroups(
  sources: Partial<
    Record<BeginningFaithPartGroup["partKey"], string | undefined>
  >
): BeginningFaithPartGroup[] {
  const order: BeginningFaithPartGroup["partKey"][] = ["a", "b", "c", "d"];
  const out: BeginningFaithPartGroup[] = [];
  for (const key of order) {
    const raw = sources[key];
    if (raw == null || raw.trim() === "") continue;
    const sections = parseBeginningFaithPart(raw, key);
    if (sections.length === 0) continue;
    out.push({
      partKey: key,
      heading: BEGINNING_FAITH_PART_HEADINGS[key],
      sections,
    });
  }
  return out;
}
