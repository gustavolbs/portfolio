import type { Locale } from "@/lib/portfolio-content";
import { heroCards, intro, translate } from "@/lib/portfolio-content";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  return (
    <section className="grid gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,#1d1328_0%,#120b19_100%)] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:px-8 md:py-10 xl:grid-cols-[minmax(0,1.15fr)_360px] xl:items-end">
      <div className="max-w-4xl">
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
          Interactive Portfolio
        </span>
        <h1 className="mt-5 max-w-[10ch] text-[clamp(3.5rem,8vw,6.4rem)] font-medium leading-[0.88] tracking-[-0.08em] text-white">
          {translate(locale, intro.title)}
        </h1>
        <p className="mt-6 max-w-3xl text-[clamp(1rem,1.4vw,1.18rem)] leading-8 text-white/72">
          {translate(locale, intro.body)}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#chapters"
            className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffb15d_0%,#ff8f72_58%,#fff0d3_100%)] px-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#180f22] shadow-[0_18px_40px_rgba(255,150,93,0.24)] transition hover:translate-y-[-1px]"
          >
            {translate(locale, intro.cta)}
          </a>

          <div className="flex flex-wrap gap-3 text-sm text-white/58">
            {intro.roleLine[locale].map((item) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <aside className="grid gap-4">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_100%_0%,rgba(255,177,93,0.18),transparent_28%),linear-gradient(180deg,#2d1c3c_0%,#1d1228_100%)] p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
            {translate(locale, heroCards.positioning.label)}
          </span>
          <h2 className="mt-3 text-[1.42rem] font-semibold leading-tight text-white">
            {heroCards.positioning.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/72">
            {translate(locale, heroCards.positioning.body)}
          </p>
          <ul className="mt-5 grid gap-2 text-sm text-white/88">
            {heroCards.positioning.bullets[locale].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#ffb15d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
              {translate(locale, heroCards.base.label)}
            </span>
            <p className="mt-3 text-lg font-semibold text-white">
              {heroCards.base.value}
            </p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
              {translate(locale, heroCards.availability.label)}
            </span>
            <p className="mt-3 text-lg font-semibold text-white">
              {translate(locale, heroCards.availability.value)}
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
