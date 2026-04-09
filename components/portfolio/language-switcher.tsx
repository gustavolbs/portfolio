"use client";

import { locales, type Locale } from "@/lib/portfolio-content";

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
  const activeIndex = locales.indexOf(locale);

  return (
    <div className="relative grid w-full grid-cols-5 rounded-full border border-white/10 bg-white/5 p-1 sm:w-auto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-1 left-1 rounded-full bg-[#ffb15d] shadow-[0_10px_24px_rgba(255,177,93,0.28)] transition-transform duration-300 ease-out"
        style={{
          width: "calc((100% - 0.5rem) / 5)",
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />
      {locales.map((nextLocale) => {
        const label = labels[nextLocale];
        const isActive = locale === nextLocale;

        return (
          <button
            key={nextLocale}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(nextLocale)}
            className={[
              "relative z-10 rounded-full px-2 py-2 text-[10px] font-semibold tracking-[0.18em] transition-colors duration-300 sm:px-3 sm:text-[11px] sm:tracking-[0.22em]",
              isActive ? "text-[#180f22]" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
