import Link from "next/link";
import type { ReactNode } from "react";

import { publicProfile as profile } from "@/content/public-profile";

import { CopyEmail } from "./copy-email";
import { RevealObserver } from "./reveal-observer";
import s from "./case.module.css";
import home from "./home.module.css";

// Header, closing call and footer shared by the app case studies, so they read as part of the home.
export function CaseShell({ children, contactTitle }: { children: ReactNode; contactTitle: [string, string] }) {
  return (
    <div lang="en">
      <RevealObserver />
      <header className={home.bar}>
        <div className={home.wrap}>
          <Link className={home.brand} href="/" aria-label="Gustavo Bispo, home">
            <svg viewBox="0 0 18 22" aria-hidden="true">
              <path d="M3 2v15a3 3 0 0 0 3 3h10" />
              <circle cx="3" cy="2.4" r="2.2" />
            </svg>
            gustavo bispo
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/#apps">Apps</Link>
            <Link href="/#how">How I work</Link>
            <Link href="/#experience">Experience</Link>
          </nav>
          <div className={home.actions}>
            <a className={home.pill} href="#contact">
              Let&apos;s talk <span aria-hidden="true">↗</span>
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
                <CopyEmail email={profile.email} label="Copy email" done="Copied to clipboard" />
                <a className={home.ghost} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <Link className={home.ghost} href="/#apps">Other apps</Link>
              </div>
              <p className={home.small}>
                Or write to <a href={profile.mailto}>{profile.email}</a>. Press <kbd className={home.kbd}>E</kbd>{" "}
                anywhere to copy it.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={home.foot}>
        <div className={home.wrap}>
          <span>© 2026 Gustavo Bispo · Brazil, UTC−3</span>
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
