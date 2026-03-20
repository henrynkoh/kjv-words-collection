"use client";

export function TranscriptTextArea({ value }: { value: string }) {
  return (
    <textarea
      readOnly
      spellCheck={false}
      value={value}
      className="mt-2 w-full min-h-[28rem] rounded-lg border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-900/80 p-4 font-mono text-xs text-stone-800 dark:text-stone-200 resize-y"
      onFocus={(e) => e.currentTarget.select()}
    />
  );
}
