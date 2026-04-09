import { LanguageSwitcher } from "@/components/portfolio/language-switcher";
import { PanelCard } from "@/components/portfolio/ui";
import type { Locale } from "@/lib/portfolio-content";
import { intro, translate } from "@/lib/portfolio-content";

type PortfolioHeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function PortfolioHeader({
  locale,
  onLocaleChange,
}: PortfolioHeaderProps) {
  return (
    <PanelCard className="relative z-10 rounded-[22px] bg-[#ffffff05] px-4 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] sm:px-5 md:rounded-[26px] md:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[1.02rem] font-bold tracking-[0.08em] text-white sm:text-[1.06rem]">
            Gustavo Bispo
          </p>
          <p className="mt-1 max-w-[26rem] text-sm leading-6 text-white/58">
            {translate(locale, intro.status)}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:justify-end">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/gustavolbs"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/68 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gbispo-santos/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/68 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
          <div className="w-full sm:w-auto">
            <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
