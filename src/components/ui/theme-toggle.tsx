"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  setTheme,
  subscribe,
  type Theme,
} from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`inline-flex items-center gap-1 text-[var(--text-tertiary)] ${className}`}
    >
      {(["dark", "light"] as const).map((opt: Theme) => {
        const active = theme === opt;
        return (
          <button
            key={opt}
            type="button"
            aria-pressed={active}
            onClick={() => setTheme(opt)}
            className={`px-2 py-1 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-[var(--radius-sm)] ${
              active
                ? "text-[var(--text)] underline underline-offset-4"
                : "hover:text-[var(--text-secondary)]"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
