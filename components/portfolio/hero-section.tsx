import { PanelCard, SectionEyebrow, SurfaceCard } from "@/components/portfolio/ui";
import type { Locale } from "@/lib/portfolio-content";
import { heroMeta, intro, translate } from "@/lib/portfolio-content";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  return (
    <PanelCard className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(180deg,#181021_0%,#120b19_100%)] px-5 py-6 sm:px-6 sm:py-7 md:rounded-[38px] md:px-8 md:py-9">
      <div className="pointer-events-none absolute right-[-4rem] top-[-3rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,168,99,0.14),transparent_72%)] blur-3xl sm:h-56 sm:w-56" />
      <div className="pointer-events-none absolute bottom-[-4rem] left-[-3rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(102,204,255,0.12),transparent_72%)] blur-3xl sm:h-56 sm:w-56" />

      <div className="relative grid gap-6 lg:gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-end">
        <div className="min-w-0 max-w-[56rem]">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <SectionEyebrow>
              {translate(locale, heroMeta.eyebrow)}
            </SectionEyebrow>
            <span className="max-w-[30rem] text-sm leading-6 text-white/42">
              {translate(locale, heroMeta.kicker)}
            </span>
          </div>

          <h1 className="mt-5 max-w-[9ch] text-[clamp(2.7rem,13vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.085em] text-white sm:mt-6">
            {translate(locale, intro.title)}
          </h1>

          <p className="mt-4 max-w-[38rem] text-[0.98rem] leading-7 text-white/66 sm:mt-5 sm:text-[1.02rem] sm:leading-8">
            {translate(locale, intro.body)}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#chapters"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffb15d_0%,#ff8f72_58%,#fff0d3_100%)] px-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#180f22] shadow-[0_18px_40px_rgba(255,150,93,0.24)] transition hover:-translate-y-0.5 sm:min-h-14 sm:w-auto sm:px-6"
            >
              {translate(locale, intro.cta)}
            </a>

            <div className="hidden flex-wrap gap-2.5 sm:flex">
              {intro.roleLine[locale].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-white/8 px-3 py-2 text-sm text-white/54"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          <PanelCard className="rounded-[28px] bg-[linear-gradient(145deg,#2f1936_0%,#18101d_100%)] p-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                {translate(locale, heroMeta.valueLabel)}
              </div>
              <div className="mt-3 text-[1.3rem] font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-[1.45rem]">
                {translate(locale, heroMeta.valueValue)}
              </div>
          </PanelCard>

          <div className="grid gap-3 sm:grid-cols-1">
            <SurfaceCard className="p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                {translate(locale, heroMeta.locationLabel)}
              </div>
              <div className="mt-3 text-lg font-semibold tracking-[-0.04em] text-white">
                {translate(locale, heroMeta.locationValue)}
              </div>
            </SurfaceCard>
            <SurfaceCard className="p-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                {translate(locale, heroMeta.availabilityLabel)}
              </div>
              <div className="mt-3 text-lg font-semibold tracking-[-0.04em] text-white">
                {translate(locale, heroMeta.availabilityValue)}
              </div>
            </SurfaceCard>
          </div>
        </aside>
      </div>
    </PanelCard>
  );
}
