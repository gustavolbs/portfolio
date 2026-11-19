import Link from "next/link";
import type { ReactNode } from "react";

import { homeCopy, type Lang } from "@/content/home-copy";
import { publicProfile as profile } from "@/content/public-profile";

import { CopyEmail } from "./copy-email";
import { RevealObserver } from "./reveal-observer";
import s from "./case.module.css";
import home from "./home.module.css";

const otherApps = { en: "Other apps", pt: "Outros apps" } as const;

// Header, closing call and footer shared by the app case studies, so they read as part of the home.
// `alt` is the same case study in the other language.
export function CaseShell({
  children,
  contactTitle,
  lang,
  alt,
}: {
  children: ReactNode;
  contactTitle: readonly [string, string];
  lang: Lang;
  alt: string;
}) {
  const t = homeCopy[lang];
  const base = t.home;
  return (
    <div lang={t.htmlLang}>
      <RevealObserver />
      <header className={home.bar}>
        <div className={home.wrap}>
          <Link className={home.brand} href={base} aria-label={t.brandAria}>
            <svg viewBox="0 0 18 22" aria-hidden="true">
              <path d="M3 2v15a3 3 0 0 0 3 3h10" />
              <circle cx="3" cy="2.4" r="2.2" />
            </svg>
            gustavo bispo
          </Link>
          <nav aria-label={t.nav.aria}>
            <Link href={`${base}#apps`}>{t.nav.apps}</Link>
            <Link href={`${base}#how`}>{t.nav.how}</Link>
            <Link href={`${base}#experience`}>{t.nav.xp}</Link>
          </nav>
          <div className={home.actions}>
            <Link className={home.lang} href={alt} hrefLang={t.switchLang} lang={t.switchLang} aria-label={t.switchAria}>
              {t.switchLabel}
            </Link>
            <a className={home.pill} href="#contact">
              {t.talk} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main" className={s.main}>
        {children}

        <section className={`${home.sec} ${home.contactSec}`} id="contact" aria-labelledby="h-contact">
          <div className={home.wrap}>
            <div className={`${home.contact} reveal`}>
              <h2 id="h-contact">
                {contactTitle[0]} <em>{contactTitle[1]}</em>
              </h2>
              <div className={home.row}>
                <CopyEmail email={profile.email} label={t.contact.copy} done={t.contact.copied} />
                <a className={home.ghost} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <Link className={home.ghost} href={`${base}#apps`}>{otherApps[lang]}</Link>
              </div>
              <p className={home.small}>
                {t.contact.write} <a href={profile.mailto}>{profile.email}</a>. {t.contact.press}{" "}
                <kbd className={home.kbd}>E</kbd> {t.contact.pressEnd}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={home.foot}>
        <div className={home.wrap}>
          <span>© 2026 Gustavo Bispo · {t.footer}</span>
          <span className={home.mono}>Next.js · Cloudflare Workers</span>
        </div>
      </footer>
    </div>
  );
}

// Section heading in the home's style: eyebrow and title on the left, intro on the right.
export function CaseHead({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className={`${home.head} reveal`}>
      <div>
        <p className={home.eyebrow}>{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {children && <p>{children}</p>}
    </div>
  );
}
