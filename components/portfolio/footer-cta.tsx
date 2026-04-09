"use client";

import { useMemo, useState } from "react";

import type { Locale } from "@/lib/portfolio-content";
import {
  contactLinks,
  footerCopy,
  footerFormCopy,
  translate,
} from "@/lib/portfolio-content";

type FooterCtaProps = {
  locale: Locale;
};

export function FooterCta({ locale }: FooterCtaProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = `${translate(locale, footerFormCopy.subject)}${name ? ` — ${name}` : ""}`;

    const body = [
      name ? `${translate(locale, footerFormCopy.nameFieldLabel)}: ${name}` : "",
      email ? `${translate(locale, footerFormCopy.emailFieldLabel)}: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:gustavo.luiz.bispo.santos@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [email, locale, message, name]);

  return (
    <footer className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#18101f_0%,#100b16_100%)] px-5 py-6 shadow-[0_24px_72px_rgba(0,0,0,0.22)] sm:px-6 sm:py-7 md:rounded-[36px] md:px-8 md:py-9">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-start">
        <div className="max-w-[42rem] min-w-0">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
            {translate(locale, footerCopy.eyebrow)}
          </span>
          <h2 className="mt-4 max-w-[10ch] text-[clamp(2.1rem,12vw,4rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
            {translate(locale, footerCopy.title)}
          </h2>
          <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-white/66 sm:text-[1rem] sm:leading-8">
            {translate(locale, footerCopy.body)}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {footerCopy.highlights[locale].slice(0, 3).map((item) => (
              <div
                key={`${item.label}-${item.value}`}
                className="rounded-[22px] border border-white/10 bg-white/[0.035] px-4 py-4"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  {item.label}
                </span>
                <p className="mt-3 text-base font-semibold leading-6 text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,#2c1734_0%,#17101b_100%)] p-4 sm:p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
              {translate(locale, footerFormCopy.direct)}
            </div>
            <p className="mt-3 max-w-[30rem] text-sm leading-7 text-white/62">
              {translate(locale, footerFormCopy.directBody)}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={contactLinks[0].href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffb15d_0%,#ff8f72_58%,#fff0d3_100%)] px-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#180f22] shadow-[0_18px_40px_rgba(255,150,93,0.22)] transition hover:-translate-y-0.5 sm:w-auto"
              >
                {translate(locale, footerFormCopy.mail)}
              </a>
              <a
                href={contactLinks[2].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl border border-white/10 px-5 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/[0.05] sm:w-auto"
              >
                {translate(locale, footerFormCopy.linkedin)}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(145deg,#22142b_0%,#130d18_100%)] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)] sm:p-5">
          <form className="grid gap-3" action={mailtoHref}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={translate(locale, footerFormCopy.name)}
              className="min-h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none placeholder:text-white/34 focus:border-white/22"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={translate(locale, footerFormCopy.email)}
              className="min-h-12 rounded-2xl border border-white/10 bg-black/15 px-4 text-sm text-white outline-none placeholder:text-white/34 focus:border-white/22"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder={translate(locale, footerFormCopy.message)}
              rows={6}
              className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm text-white outline-none placeholder:text-white/34 focus:border-white/22"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#180f22] transition hover:bg-[#f2e9df]"
            >
              {translate(locale, footerFormCopy.submit)}
            </button>
          </form>

          <div className="mt-5 grid gap-3 border-t border-white/8 pt-5">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between rounded-[20px] border border-white/10 px-4 py-3 transition hover:bg-white/[0.04]"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                    {item.label}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
                </div>
                <span className="text-white/38">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
