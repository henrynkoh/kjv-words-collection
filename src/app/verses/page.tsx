import type { Category } from "@/types/verse";
import {
  getVersesByCategoryAndTheme,
  getSections,
} from "@/data/sections";
import { VerseCard } from "@/components/VerseCard";

interface PageProps {
  searchParams: Promise<{ category?: string; theme?: string }>;
}

const VALID_CATEGORIES: Category[] = [
  "Prophecy (1st Coming)",
  "Prophecy (2nd Coming)",
  "Fulfillment",
  "Mystery Revealed to Paul",
  "Rapture",
];

function decodeCategory(s?: string): Category | undefined {
  if (!s) return undefined;
  const decoded = decodeURIComponent(s);
  return VALID_CATEGORIES.includes(decoded as Category) ? (decoded as Category) : undefined;
}

export default async function VersesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const category = decodeCategory(params.category);
  const themeId = params.theme;
  const verses = getVersesByCategoryAndTheme(category, themeId);
  const sections = getSections();

  const currentSection = category
    ? sections.find((s) => s.category === category)
    : null;
  const currentTheme =
    themeId && currentSection
      ? currentSection.themes.find((t) => t.id === themeId)
      : null;

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-stone-950/95 backdrop-blur border-b border-stone-200 dark:border-stone-800 px-6 py-4">
        <h1 className="text-xl font-bold text-stone-900 dark:text-white">
          {currentTheme
            ? `${currentSection?.label} → ${currentTheme.label}`
            : category
              ? currentSection?.label ?? "Verses"
              : "All verses"}
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
          {verses.length} verse{verses.length !== 1 ? "s" : ""}
          {currentTheme && currentSection && ` in ${currentSection.label}`}
        </p>
      </div>

      <div className="px-6 py-6 max-w-4xl mx-auto">
        {verses.length === 0 ? (
          <p className="text-stone-500 dark:text-stone-400">
            No verses match the selected section. Choose a category and theme from the left navigation.
          </p>
        ) : (
          <ul className="space-y-6">
            {verses.map((verse) => (
              <li key={verse.number}>
                <VerseCard verse={verse} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
