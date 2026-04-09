import type { Locale } from "@/lib/portfolio-content";
import { contactLinks, footerCopy, translate } from "@/lib/portfolio-content";

type FooterCtaProps = {
  locale: Locale;
};

export function FooterCta({ locale }: FooterCtaProps) {
  return (
    <footer className="rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,#21152d_0%,#140d1b_100%)] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.24)] md:px-8 md:py-10">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.05fr)_420px]">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
            {translate(locale, footerCopy.eyebrow)}
          </span>
          <h2 className="mt-5 max-w-[14ch] text-[clamp(2.2rem,4vw,4.2rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
            {translate(locale, footerCopy.title)}
          </h2>
          <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-white/68">
            {translate(locale, footerCopy.body)}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {footerCopy.highlights[locale].map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
                  {item.label}
                </span>
                <p className="mt-3 text-lg font-semibold leading-tight text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <a
            href={contactLinks[0].href}
            className="group rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_100%_0%,rgba(255,177,93,0.18),transparent_28%),linear-gradient(180deg,#2d1c3c_0%,#1d1228_100%)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.18)] transition hover:translate-y-[-2px]"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/52">
              Direct line
            </span>
            <p className="mt-3 text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
              {translate(locale, footerCopy.cta)}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              gustavo.luiz.bispo.santos@gmail.com
            </p>
            <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#ffcf97]">
              <span>{locale === "pt" ? "Responder por e-mail" : locale === "es" ? "Responder por correo" : locale === "fr" ? "Répondre par e-mail" : locale === "it" ? "Rispondere via e-mail" : "Reply by email"}</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </span>
          </a>

          <div className="grid gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-[22px] border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:bg-white/[0.05]"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/48">
                  {item.label}
                </span>
                <p className="mt-2 text-[1rem] font-semibold text-white">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
