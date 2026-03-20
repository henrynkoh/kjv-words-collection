"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getSections } from "@/data/sections";
import { useMemo } from "react";

export function SideNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sections = useMemo(() => getSections(), []);
  const activeTheme = pathname === "/verses" ? searchParams.get("theme") : null;
  const hasFilters =
    pathname === "/verses" &&
    (searchParams.get("category") || searchParams.get("theme"));
  const isAllVersesActive = pathname === "/verses" && !hasFilters;

  return (
    <nav
      className="flex flex-col h-full overflow-y-auto border-r border-stone-200/80 bg-stone-50/80 dark:bg-stone-900/50 dark:border-stone-700/50"
      aria-label="Verse sections"
    >
      <div className="sticky top-0 z-10 bg-stone-50/95 dark:bg-stone-900/95 backdrop-blur py-3 px-4 border-b border-stone-200/80 dark:border-stone-700/50">
        <Link
          href="/"
          className="text-sm font-semibold text-amber-800 dark:text-amber-200 hover:text-amber-900 dark:hover:text-amber-100 transition-colors"
        >
          KJV Words Collection
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-2 min-h-0">
        <div className="px-4 py-2">
          <Link
            href="/verses"
            className={`text-sm rounded-r-md transition-colors block px-4 py-2 ${
              isAllVersesActive
                ? "bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 font-medium border-l-2 border-amber-600"
                : "text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-700/40"
            }`}
          >
            All verses
          </Link>
          <Link
            href="/transcripts"
            className={`text-sm rounded-r-md transition-colors block px-4 py-2 mt-1 ${
              pathname === "/transcripts"
                ? "bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 font-medium border-l-2 border-amber-600"
                : "text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-700/40"
            }`}
          >
            Transcript catalog (1–292)
          </Link>
          <Link
            href="/beginning-faith"
            className={`text-sm rounded-r-md transition-colors block px-4 py-2 mt-1 ${
              pathname === "/beginning-faith"
                ? "bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 font-medium border-l-2 border-amber-600"
                : "text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-700/40"
            }`}
          >
            Beginning Faith (A, B, C & D)
          </Link>
        </div>
        {sections.map((section) => (
          <div key={section.id} className="mb-2">
            <div className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              {section.label}
            </div>
            <ul className="space-y-0.5">
              {section.themes.map((theme) => {
                const href = `/verses?category=${encodeURIComponent(section.category)}&theme=${theme.id}`;
                const isActive = activeTheme === theme.id;
                return (
                  <li key={theme.id}>
                    <Link
                      href={href}
                      className={`block px-4 py-2 text-sm rounded-r-md transition-colors ${
                        isActive
                          ? "bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 font-medium border-l-2 border-amber-600"
                          : "text-stone-700 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-700/40"
                      }`}
                    >
                      <span className="block truncate">{theme.label}</span>
                      <span className="text-xs text-stone-500 dark:text-stone-400">
                        {theme.verseCount} verse{theme.verseCount !== 1 ? "s" : ""}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
