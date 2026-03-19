import type { Category } from "@/types/verse";
import { verses } from "./verses";

export interface SectionGroup {
  id: string;
  label: string;
  category: Category;
  themes: { id: string; label: string; verseCount: number }[];
}

function getThemeId(theme: string): string {
  return theme.toLowerCase().replace(/\s+/g, "-").replace(/[’']/g, "");
}

export function getSections(): SectionGroup[] {
  const byCategory = new Map<
    Category,
    Map<string, { label: string; count: number }>
  >();
  for (const v of verses) {
    if (!byCategory.has(v.category)) {
      byCategory.set(v.category, new Map());
    }
    const themes = byCategory.get(v.category)!;
    const id = getThemeId(v.theme);
    if (!themes.has(id)) {
      themes.set(id, { label: v.theme, count: 0 });
    }
    const t = themes.get(id)!;
    t.count += 1;
  }
  const categoryOrder: Category[] = [
    "Prophecy (1st Coming)",
    "Fulfillment",
    "Prophecy (2nd Coming)",
    "Mystery Revealed to Paul",
    "Rapture",
  ];
  return categoryOrder
    .filter((c) => byCategory.has(c))
    .map((category) => {
      const themesMap = byCategory.get(category)!;
      const themes = Array.from(themesMap.entries())
        .map(([id, { label, count }]) => ({ id, label, verseCount: count }))
        .sort((a, b) => b.verseCount - a.verseCount);
      const categoryId = category
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[()]/g, "")
        .replace(/1st/g, "1st")
        .replace(/2nd/g, "2nd");
      return {
        id: categoryId,
        label: category,
        category,
        themes,
      };
    });
}

export function getVersesByCategoryAndTheme(
  category?: Category,
  themeId?: string
) {
  return verses.filter((v) => {
    if (category && v.category !== category) return false;
    if (themeId && getThemeId(v.theme) !== themeId) return false;
    return true;
  });
}

export function getVerseByNumber(number: number) {
  return verses.find((v) => v.number === number);
}
