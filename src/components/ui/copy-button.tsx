"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel?: string;
  className?: string;
};

export function CopyButton({
  value,
  label,
  copiedLabel = "Copied",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timerRef.current) window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }, [value]);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-live="polite"
      className={`group inline-flex items-center justify-between gap-2 leading-none font-medium tracking-[-0.005em] transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] focus-visible:rounded-[var(--radius-sm)] bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] px-4 py-2.5 text-[14px] min-h-[44px] w-full ${className}`}
    >
      <span className="text-left">{copied ? copiedLabel : label}</span>
      <span aria-hidden="true" className="font-mono text-[12px]">
        {copied ? "✓" : "→"}
      </span>
      <span className="sr-only">{value}</span>
    </button>
  );
}
