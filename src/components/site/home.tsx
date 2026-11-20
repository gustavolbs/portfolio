import Image from "next/image";

import { homeCopy, type HomeCopy, type Lang } from "@/content/home-copy";
import { publicProfile as profile } from "@/content/public-profile";

import { CopyEmail } from "./copy-email";
import { Inspector } from "./inspector";
import { RevealObserver } from "./reveal-observer";
import styles from "./home.module.css";

type AppKey = keyof HomeCopy["apps"]["pitch"];

type App = {
  key: AppKey;
  name: string;
  chips: readonly string[];
  icon: string;
  iconWidth?: number;
  shot: string;
  href?: string;
  tint: string;
};

const featured: App = {
  key: "medusa",
  name: "Medusa",
  chips: ["tvOS", "SwiftUI"],
  icon: "/apps/medusa-icon.webp",
  iconWidth: 93, // tvOS app icons are 5:3, not square
  shot: "/apps/medusa.webp",
  href: "/medusa",
  tint: "#e7e9f2",
};

const apps: readonly App[] = [
  {
    key: "civitasly",
    name: "Civitasly",
    chips: ["iOS · Android · Web", "Expo"],
    icon: "/apps/civitasly-icon.webp",
    shot: "/apps/civitasly.webp",
    href: "/civitasly",
    tint: "#e4ece5",
  },
  {
    key: "ipcatole",
    name: "IP Catolé",
    chips: ["iOS · Android · Web", "React Native"],
    icon: "/apps/ipcatole-icon.webp",
    shot: "/apps/ipcatole.webp",
    href: "/ipcatole",
    tint: "#efe9df",
  },
  {
    key: "urbanify",
    name: "Urbanify",
    chips: ["iOS · Android · Web", "Expo · Hono"],
    icon: "/apps/urbanify-icon.webp",
    shot: "/apps/urbanify.webp",
    href: "/urbanify",
    tint: "#e3ebf4",
  },
];

// Stage is the step reached in my seven-step app process (market, scope, visual, screens, architecture, tech, store).
const lab = [
  { key: "beecorder", name: "Beecorder", icon: "/apps/beecorder-icon.webp", stage: 6, label: "building", href: "/beecorder" },
  { key: "formula", name: "Fio", icon: "/apps/formula-icon.webp", stage: 4, label: "screens", href: "/fio" },
  { key: "frasco", name: "Frasco", icon: "/apps/frasco-icon.webp", stage: 4, label: "screens", href: "/frasco" },
  { key: "mimir", name: "Mimir", icon: "/apps/mimir-icon.webp", stage: 4, label: "screens", href: "/mimir" },
  { key: "montei", name: "Montei", icon: "/apps/montei-icon.webp", stage: 4, label: "screens", href: "/montei" },
] as const;

const employers = [
  { company: "Live Nation Entertainment", role: "senior", from: "2024", to: null },
  { company: "Nivells", role: "lead", from: "2024", to: "2025" },
  { company: "Leaf Agriculture", role: "senior", from: "2023", to: "2024" },
  { company: "Warren Brasil", role: "midSenior", from: "2021", to: "2022" },
  { company: "Evermart", role: "techLead", from: "2020", to: "2021" },
] as const;

const credentials = [
  { key: "masters", institution: "Universitat Oberta de Catalunya", year: null },
  { key: "mba", institution: "Full Cycle", year: "2025" },
  { key: "bs", institution: "UFCG", year: "2023" },
  { key: "claude", institution: "Anthropic", year: "2026" },
] as const;

const external = (href?: string) => (href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {});

function AppCard({ app, t, featured: isFeatured = false }: { app: App; t: HomeCopy; featured?: boolean }) {
  // case studies have a Portuguese version under /pt
  const href = app.href?.startsWith("/") && t.home !== "/" ? `${t.home}${app.href}` : app.href;
  const body = (
    <>
      <div className={styles.appText}>
        <Image className={styles.icon} src={app.icon} alt="" width={app.iconWidth ?? 56} height={56} />
        <h3>{app.name}</h3>
        <p>{t.apps.pitch[app.key]}</p>
        <ul className={styles.chips} aria-label={t.apps.chipsAria}>
          {app.chips.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      {isFeatured ? (
        <div className={styles.tv}>
          <Image src={app.shot} alt={`${app.name} ${t.apps.tvAlt}`} width={1200} height={675} loading="lazy" />
        </div>
      ) : (
        <div className={styles.phone}>
          <Image src={app.shot} alt={`${app.name}, ${t.apps.screenAlt}`} width={600} height={1304} loading="lazy" />
        </div>
      )}
      {app.href && (
        <span className={styles.go} aria-hidden="true">
          →
        </span>
      )}
    </>
  );
  const className = `${styles.app} ${isFeatured ? styles.feature : ""} reveal`;
  const style = { background: app.tint };
  return href ? (
    <a className={className} style={style} href={href} {...external(href)}>
      {body}
    </a>
  ) : (
    <article className={className} style={style}>
      {body}
    </article>
  );
}

export function Home({ lang = "en" }: { lang?: Lang }) {
  const t = homeCopy[lang];
  return (
    <div lang={t.htmlLang}>
      <RevealObserver />
      <header className={styles.bar}>
        <div className={styles.wrap}>
          <a className={styles.brand} href="#main" aria-label={t.brandAria}>
            <svg viewBox="0 0 18 22" aria-hidden="true">
              <path d="M3 2v15a3 3 0 0 0 3 3h10" />
              <circle cx="3" cy="2.4" r="2.2" />
            </svg>
            gustavo bispo
          </a>
          <nav aria-label={t.nav.aria}>
            <a href="#apps">{t.nav.apps}</a>
            <a href="#how">{t.nav.how}</a>
            <a href="#experience">{t.nav.xp}</a>
          </nav>
          <div className={styles.actions}>
            <a className={styles.lang} href={t.switchHref} hrefLang={t.switchLang} lang={t.switchLang} aria-label={t.switchAria}>
              {t.switchLabel}
            </a>
            <a className={styles.pill} href="#contact">
              {t.talk} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className={`${styles.wrap} ${styles.hero}`} aria-labelledby="hero-title">
          <div>
            <p className={styles.role}>{t.role}</p>
            <h1 id="hero-title">
              {t.h1[0]} <Inspector>{t.h1[1]}</Inspector> {t.h1[2]}<span className={styles.dot}>.</span>
            </h1>
            <p className={styles.lede}>
              {profile.years} {t.lede}
            </p>
            <div className={styles.links}>
              <a className={styles.pill} href={profile.mailto}>{t.emailMe}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <p className={styles.hint} aria-hidden="true">{t.hint}</p>
          </div>
          <div className={`${styles.portrait} reveal`}>
            <Image
              className={styles.photo}
              src="/gustavo.webp"
              alt={t.photoAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 400px"
            />
            <span className={styles.avail}>{t.available}</span>
          </div>
        </section>

        <section className={styles.sec} id="apps" aria-labelledby="h-apps">
          <div className={styles.wrap}>
            <div className={`${styles.head} reveal`}>
              <div>
                <p className={styles.eyebrow}>{t.apps.eyebrow}</p>
                <h2 id="h-apps">{t.apps.title}</h2>
              </div>
              <p>{t.apps.intro}</p>
            </div>
            <div className={styles.apps}>
              <AppCard app={featured} t={t} featured />
              {apps.map((app) => (
                <AppCard key={app.name} app={app} t={t} />
              ))}
            </div>

            <h3 className={`${styles.eyebrow} ${styles.labHead} reveal`}>{t.lab.title}</h3>
            <ul className={styles.lab}>
              {lab.map((item) => (
                <li key={item.name} className={`${styles.labCard} reveal`}>
                  <Image src={item.icon} alt="" width={44} height={44} loading="lazy" />
                  <strong>
                    <a className={styles.labLink} href={t.home === "/" ? item.href : `${t.home}${item.href}`}>
                      {item.name}
                    </a>
                  </strong>
                  <span>{t.lab.pitch[item.key]}</span>
                  <div
                    className={styles.stage}
                    role="img"
                    aria-label={t.lab.step(item.stage, t.lab[item.label])}
                  >
                    {Array.from({ length: 7 }, (_, i) => (
                      <i key={i} className={i < item.stage ? styles.done : undefined} />
                    ))}
                  </div>
                  <small>{t.lab[item.label]}</small>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sec} id="how" aria-labelledby="h-how">
          <div className={styles.wrap}>
            <div className={`${styles.head} reveal`}>
              <div>
                <p className={styles.eyebrow}>{t.how.eyebrow}</p>
                <h2 id="h-how">{t.how.title}</h2>
              </div>
            </div>
            <ol className={`${styles.how} reveal`}>
              {t.how.steps.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.n}>0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.sec} id="experience" aria-labelledby="h-xp">
          <div className={`${styles.wrap} ${styles.xp}`}>
            <div className="reveal">
              <p className={styles.eyebrow}>{t.xp.eyebrow}</p>
              <h2 id="h-xp">
                {profile.years} {t.xp.title}
              </h2>
              <p className={styles.lede}>{t.xp.intro}</p>
            </div>
            <div className="reveal">
              <ol className={styles.list}>
                {employers.map((e) => (
                  <li key={e.company}>
                    <div>
                      <strong>{e.company}</strong>
                      <span>{t.xp.roles[e.role]}</span>
                    </div>
                    <time>
                      {e.from} – {e.to ?? t.xp.now}
                    </time>
                  </li>
                ))}
              </ol>
              <h3 className={`${styles.eyebrow} ${styles.listHead}`}>{t.xp.education}</h3>
              <ol className={styles.list}>
                {credentials.map((c) => (
                  <li key={c.key}>
                    <div>
                      <strong>{t.xp.credentials[c.key]}</strong>
                      <span>{c.institution}</span>
                    </div>
                    <time>{c.year ?? t.xp.credentials.expected}</time>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={`${styles.sec} ${styles.contactSec}`} id="contact" aria-labelledby="h-contact">
          <div className={styles.wrap}>
            <div className={`${styles.contact} reveal`}>
              <h2 id="h-contact">
                {t.contact.title[0]} <em>{t.contact.title[1]}</em>
              </h2>
              <div className={styles.row}>
                <CopyEmail email={profile.email} label={t.contact.copy} done={t.contact.copied} />
                <a className={styles.ghost} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a className={styles.ghost} href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
              <p className={styles.small}>
                {t.contact.write} <a href={profile.mailto}>{profile.email}</a>. {t.contact.press}{" "}
                <kbd className={styles.kbd}>E</kbd> {t.contact.pressEnd}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={styles.wrap}>
          <span>© 2026 Gustavo Bispo · {t.footer}</span>
          <span className={styles.mono}>Next.js · Cloudflare Workers</span>
        </div>
      </footer>
    </div>
  );
}
