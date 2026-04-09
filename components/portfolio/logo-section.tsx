import { LogoMarquee } from "@/components/portfolio/logo-marquee";
import { PanelCard, SectionEyebrow } from "@/components/portfolio/ui";
import {
  clientLogos,
  logoSection,
  translate,
  type Locale,
} from "@/lib/portfolio-content";

type LogoSectionProps = {
  locale: Locale;
};

export function LogoSection({ locale }: LogoSectionProps) {
  return (
    <PanelCard className="relative z-10 rounded-[28px] bg-[linear-gradient(180deg,#241632_0%,#170f22_100%)] px-5 py-6 shadow-[0_26px_80px_rgba(0,0,0,0.24)] sm:px-6 sm:py-7 md:rounded-[34px] md:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionEyebrow>{translate(locale, logoSection.eyebrow)}</SectionEyebrow>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(1.9rem,3.4vw,3.2rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
            {translate(locale, logoSection.title)}
          </h2>
        </div>

        <p className="max-w-[38ch] text-sm leading-7 text-white/66 md:text-right">
          {translate(locale, logoSection.body)}
        </p>
      </div>

      <div className="mt-6">
        <LogoMarquee items={clientLogos} locale={locale} />
      </div>
    </PanelCard>
  );
}
