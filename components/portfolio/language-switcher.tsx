"use client";

import type { Locale } from "@/lib/portfolio-content";

const labels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
  fr: "FR",
  it: "IT",
};

type LanguageSwitcherProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageSwitcher({
  locale,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {Object.entries(labels).map(([key, label]) => {
        const nextLocale = key as Locale;
        const isActive = locale === nextLocale;

        return (
          <button
            key={key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(nextLocale)}
            className={[
              "rounded-full px-3 py-2 text-[11px] font-semibold tracking-[0.22em] transition",
              isActive
                ? "bg-[#ffb15d] text-[#180f22]"
                : "text-white/70 hover:bg-white/8 hover:text-white",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
