"use client";

import { useCallback, useState } from "react";

export function CopyTranscriptButton({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "ok" | "err">("idle");

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("ok");
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("err");
      setTimeout(() => setState("idle"), 4000);
    }
  }, [text]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-500 transition-colors"
      >
        Copy entire document (for Google Docs)
      </button>
      {state === "ok" && (
        <span className="text-sm text-emerald-600 dark:text-emerald-400">
          Copied — paste into Docs (Cmd/Ctrl+V)
        </span>
      )}
      {state === "err" && (
        <span className="text-sm text-red-600 dark:text-red-400">
          Copy failed — select the text area below and copy manually.
        </span>
      )}
    </div>
  );
}
