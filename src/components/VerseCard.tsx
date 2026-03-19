import type { VerseEntry } from "@/types/verse";

interface VerseCardProps {
  verse: VerseEntry;
}

export function VerseCard({ verse }: VerseCardProps) {
  return (
    <article
      id={`verse-${verse.number}`}
      className="rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center rounded-md bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 text-xs font-medium text-amber-800 dark:text-amber-200">
            #{verse.number}
          </span>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            {verse.category} · {verse.theme}
          </span>
        </div>
        <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-1">
          {verse.title}
          {verse.subTitle && (
            <span className="text-amber-700 dark:text-amber-300 font-normal">
              {" "}
              — {verse.subTitle}
            </span>
          )}
        </h2>
        <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
          {verse.who} → {verse.whom} · {verse.when} · {verse.where}
        </p>

        <div className="space-y-3">
          <div>
            <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
              KJV — {verse.verseRef}
            </p>
            <p className="text-stone-800 dark:text-stone-200 leading-relaxed">
              {verse.verseKjv}
            </p>
          </div>
          {verse.verseKr && (
            <div>
              <p className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                흠정역 (Korean)
              </p>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                {verse.verseKr}
              </p>
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800">
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {verse.explanation}
          </p>
        </div>
      </div>
    </article>
  );
}
