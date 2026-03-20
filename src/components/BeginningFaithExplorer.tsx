"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { BeginningFaithPartGroup } from "@/lib/beginning-faith-parse";

type Props = {
  parts: BeginningFaithPartGroup[];
};

export function BeginningFaithExplorer({ parts }: Props) {
  const allIds = useMemo(
    () => parts.flatMap((p) => p.sections.map((s) => s.id)),
    [parts]
  );
  const firstId = parts[0]?.sections[0]?.id ?? "";

  const [activeId, setActiveId] = useState(firstId);
  const [copyLabel, setCopyLabel] = useState("Copy this section");
  const activeBtnRef = useRef<HTMLButtonElement | null>(null);

  const active = useMemo(() => {
    for (const part of parts) {
      const section = part.sections.find((s) => s.id === activeId);
      if (section) return { part, section };
    }
    return null;
  }, [parts, activeId]);

  useLayoutEffect(() => {
    const h = window.location.hash.replace(/^#/, "").trim();
    if (h && allIds.includes(h)) setActiveId(h);
  }, [allIds]);

  useEffect(() => {
    if (!activeId || !allIds.includes(activeId)) {
      if (firstId) setActiveId(firstId);
    }
  }, [activeId, allIds, firstId]);

  useEffect(() => {
    activeBtnRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeId]);

  const select = useCallback(
    (id: string) => {
      setActiveId(id);
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${id}`);
      }
    },
    []
  );

  const copySection = useCallback(async () => {
    if (!active?.section?.content) return;
    try {
      await navigator.clipboard.writeText(active.section.content);
      setCopyLabel("Copied!");
      setTimeout(() => setCopyLabel("Copy this section"), 2000);
    } catch {
      setCopyLabel("Copy failed");
      setTimeout(() => setCopyLabel("Copy this section"), 2000);
    }
  }, [active?.section?.content]);

  if (parts.length === 0) {
    return (
      <p className="text-stone-500 dark:text-stone-400 text-sm">
        No sections could be parsed from Beginning Faith sources.
      </p>
    );
  }

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(260px,34%)_1fr] lg:items-start">
      {/* Navigation */}
      <nav
        aria-label="Beginning Faith questions"
        className="space-y-4 lg:max-h-[min(70vh,calc(100vh-8rem))] lg:overflow-y-auto lg:pr-2 lg:sticky lg:top-4"
      >
        <p className="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
          Click a title to show its full content
        </p>
        {parts.map((part) => (
          <div key={part.partKey} className="rounded-xl border border-stone-200/90 bg-stone-50/80 dark:border-stone-700/80 dark:bg-stone-900/50 overflow-hidden">
            <h2 className="px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200 bg-amber-100/70 dark:bg-amber-950/50 border-b border-amber-200/50 dark:border-amber-900/40">
              {part.heading}
            </h2>
            <ul className="p-2 space-y-0.5 max-h-[min(48vh,28rem)] overflow-y-auto lg:max-h-none">
              {part.sections.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      ref={isActive ? activeBtnRef : undefined}
                      onClick={() => select(s.id)}
                      className={`w-full text-left rounded-lg px-2.5 py-2 text-sm transition-colors ${
                        isActive
                          ? "bg-amber-600 text-white shadow-md shadow-amber-900/20 dark:bg-amber-500 dark:text-stone-950"
                          : "text-stone-700 hover:bg-amber-50 dark:text-stone-300 dark:hover:bg-stone-800/80"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="font-mono text-[11px] opacity-90">{s.id}</span>
                      {": "}
                      <span className="font-medium leading-snug">
                        {s.title || "—"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Content */}
      <div className="min-w-0 rounded-2xl border-2 border-amber-500/25 dark:border-amber-600/35 bg-white dark:bg-stone-950/80 shadow-lg shadow-amber-900/5 dark:shadow-none">
        {active ? (
          <>
            <div className="flex flex-col gap-3 border-b border-stone-200 dark:border-stone-700 px-4 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                  {active.part.heading}
                </p>
                <h3 className="mt-1 text-lg font-bold text-stone-900 dark:text-white leading-snug">
                  ({active.section.id}) {active.section.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={copySection}
                className="shrink-0 rounded-xl border border-amber-600/40 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100 dark:border-amber-500/40 dark:bg-amber-950/60 dark:text-amber-100 dark:hover:bg-amber-900/50"
              >
                {copyLabel}
              </button>
            </div>
            <div
              className="max-h-[min(70vh,800px)] overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-stone-800 dark:text-stone-200 whitespace-pre-wrap break-words"
              tabIndex={0}
            >
              {active.section.content}
            </div>
          </>
        ) : (
          <p className="p-6 text-stone-500">Select a question from the list.</p>
        )}
      </div>
    </div>
  );
}
