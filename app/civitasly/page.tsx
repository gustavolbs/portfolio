import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { publicProfile as profile } from "@/content/public-profile";

import styles from "./civitasly.module.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const MEDIA = "https://czipioneacmyqkjdkuaz.supabase.co/storage/v1/object/public/showcase/civitasly";

export const metadata: Metadata = {
  title: "Civitasly case study",
  description:
    "Civitasly, a mobile-first app for real estate agents: product, brand, design system, iOS/Android, web and a code-driven ad pipeline, designed and built by Gustavo Bispo.",
  alternates: { canonical: "/civitasly" },
  openGraph: {
    title: "Civitasly case study · Gustavo Bispo",
    description: "Product, design system, mobile app, web platform and ad pipeline, designed and built end to end.",
    url: "/civitasly",
    images: [{ url: `${MEDIA}/img/poster-promo-site.jpg`, width: 1920, height: 1080 }],
  },
};

const facts = [
  { label: "Role", value: "Founder, design and engineering" },
  { label: "Surfaces", value: "iOS, Android, web, PDF" },
  { label: "Stack", value: "Expo, React Native, Next.js, Supabase" },
] as const;

const screens = [
  { file: "app-screen-01.jpg", title: "Rentals", body: "What is due, overdue and received, before anything else." },
  { file: "app-screen-02.jpg", title: "Weekly priorities", body: "The contracts that need attention this week, in order." },
  { file: "app-screen-03.jpg", title: "Dark theme", body: "Designed as its own palette, with brass replacing green as the action color." },
  { file: "app-screen-04.jpg", title: "Assistant", body: "Typed or spoken requests become actions across the whole app." },
  { file: "app-screen-05.jpg", title: "Leads", body: "A queue sorted by the next contact, not by date created." },
  { file: "app-screen-06.jpg", title: "Agenda", body: "Visits and rent collection share one day view." },
] as const;

const palettes = [
  {
    name: "Light",
    swatches: [
      { name: "Background", hex: "#F5F8F6" },
      { name: "Ink", hex: "#1D2623" },
      { name: "Ledger", hex: "#425D54" },
      { name: "Sage", hex: "#DDEAE2" },
      { name: "Linen", hex: "#F4EEE5" },
      { name: "Clay", hex: "#C97863" },
    ],
  },
  {
    name: "Dark",
    swatches: [
      { name: "Background", hex: "#171A19" },
      { name: "Surface", hex: "#222624" },
      { name: "Paper", hex: "#F3F1EA" },
      { name: "Brass", hex: "#C6A77B" },
    ],
  },
] as const;

const principles = [
  {
    title: "One question per screen",
    body: "Agents open the app between visits. Each screen answers a single question, and the answer is the largest thing on it.",
  },
  {
    title: "Status in words",
    body: "Overdue, open and received are always spelled out. Color reinforces the state; it never carries it alone.",
  },
  {
    title: "Anti-references first",
    body: "The brief ruled out purple gradients, sparkle AI badges and fourteen-widget dashboards before choosing anything. The reference became an accountant's ledger.",
  },
  {
    title: "Shared contracts",
    body: "Tokens, schemas and domain rules live in workspace packages consumed by both the mobile app and the web platform.",
  },
] as const;

const ads = [
  {
    file: "civitasly-ad-do-boleto-ao-repasse-raiox-9x16.mp4",
    poster: "poster-ad-do-boleto-ao-repasse-raiox.jpg",
    format: "Statement",
    title: "Follow the rent from invoice to payout",
  },
  {
    file: "civitasly-ad-e-so-perguntar-raiox-9x16.mp4",
    poster: "poster-ad-e-so-perguntar-raiox.jpg",
    format: "Conversation",
    title: "The client's request is already the search",
  },
  {
    file: "civitasly-ad-responde-primeiro-raiox-9x16.mp4",
    poster: "poster-ad-responde-primeiro-raiox.jpg",
    format: "Kinetic type",
    title: "Whoever answers first, sells",
  },
] as const;

const stack = [
  {
    area: "Mobile",
    body: "Expo and React Native with NativeWind. Light and dark themes, voice input in the assistant, Jest component tests and Maestro end-to-end flows.",
  },
  {
    area: "Web",
    body: "Next.js App Router. Marketing site in three locales, public agent showcase pages, bilingual property PDFs with react-pdf and Instagram kits rendered with @vercel/og.",
  },
  {
    area: "Shared",
    body: "Turborepo workspaces for domain rules, financial calculations, schemas, design tokens and the typed API client.",
  },
  {
    area: "Data",
    body: "Supabase with row-level security, deterministic and idempotent seeds, and a finance test suite that runs on every persistence change.",
  },
] as const;

export default function CivitaslyCaseStudy() {
  return (
    <main className={`${styles.page} ${dmSerif.variable} ${dmSans.variable}`} id="main">
      <header className={styles.header}>
        <Link className={styles.brand} href="/">Gustavo Bispo</Link>
        <nav className={styles.nav} aria-label="Primary navigation">
          <a href={profile.mailto}>Email</a>
          <a href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <p className={styles.kicker}>
          <span aria-hidden="true" />
          Case study / 2026
        </p>
        <h1 className={styles.headline} id="hero-title">
          <span>Civitasly.</span>
          <span>Designed and built</span>
          <span>end to end.</span>
        </h1>
        <p className={styles.lede}>
          A mobile-first operating app for real estate agents in Brazil. Agents ask an
          assistant to register a property, match a client, check today&apos;s visits or
          see who owes rent. I am the only person on it: product, brand, design system,
          the iOS and Android app, the web platform and the marketing that sells it.
        </p>
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
          <div>
            <dt>Live</dt>
            <dd><a href="https://civitasly.com/pt" rel="noreferrer" target="_blank">civitasly.com</a></dd>
          </div>
        </dl>
      </section>

      <section className={styles.section} aria-labelledby="walkthrough-title">
        <SectionLabel number="01" name="Walkthrough" />
        <div className={styles.intro}>
          <h2 id="walkthrough-title">Twenty-six seconds of product.</h2>
          <p>
            Every frame is a real app screen. I built the video in code with Remotion:
            scenes are measured in beats in a single timeline file, and a Python script
            synthesizes the soundtrack from that same file, so every cut lands on the
            beat by construction.
          </p>
        </div>
        <figure className={styles.media}>
          <video
            className={styles.wideVideo}
            controls
            playsInline
            poster={`${MEDIA}/img/poster-promo-site.jpg`}
            preload="none"
            width={1920}
            height={1080}
          >
            <source src={`${MEDIA}/video/civitasly-promo-site-16x9.mp4`} type="video/mp4" />
          </video>
          <figcaption className={styles.meta}>
            <span>1920 × 1080 / 26 s / Remotion and a synthesized score</span>
            <span>On-screen copy in Brazilian Portuguese</span>
            <a href={`${MEDIA}/video/civitasly-promo-reels-9x16.mp4`} rel="noreferrer" target="_blank">
              Vertical cut, 9:16
            </a>
          </figcaption>
        </figure>
      </section>

      <section className={styles.section} aria-labelledby="app-title">
        <SectionLabel number="02" name="The app" />
        <div className={styles.intro}>
          <h2 id="app-title">Calm screens for a noisy job.</h2>
          <p>
            Agents live in WhatsApp and work between visits. The app is organized around
            the questions they ask on the street: what do I collect this week, who needs a
            follow-up, where am I at two o&apos;clock. Amounts are set large and statuses are
            written out.
          </p>
        </div>
        <ol className={styles.screens}>
          {screens.map((screen, index) => (
            <li key={screen.file}>
              <Image
                alt={`${screen.title} screen of the Civitasly app`}
                height={2803}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                src={`${MEDIA}/img/${screen.file}`}
                width={1290}
              />
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <strong>{screen.title}</strong>
              <p>{screen.body}</p>
            </li>
          ))}
        </ol>
        <p className={styles.note}>Store screenshot set. All names and amounts are illustrative.</p>
      </section>

      <section className={`${styles.section} ${styles.ledger}`} aria-labelledby="system-title">
        <SectionLabel number="03" name="Design system" />
        <div className={styles.intro}>
          <h2 id="system-title">A ledger, not a dashboard.</h2>
          <p>
            Warm paper, a deep green, one brass accent and thin rules. A serif for
            statements and amounts, a sans for operational text, mono for labels. The dark
            theme is a palette of its own rather than an inversion.
          </p>
        </div>

        <div className={styles.specimen}>
          <div className={styles.type}>
            <div>
              <span className={styles.metaLabel}>DM Serif Display / statements, amounts</span>
              <p className={styles.serifSample}>R$ 4.850,00</p>
            </div>
            <div>
              <span className={styles.metaLabel}>DM Sans / operational text</span>
              <p className={styles.sansSample}>4 collections need attention this week</p>
            </div>
            <div>
              <span className={styles.metaLabel}>JetBrains Mono / labels, states</span>
              <p className={styles.monoSample}>OVERDUE · 12 DAYS</p>
            </div>
          </div>

          <div className={styles.palettes}>
            {palettes.map((palette) => (
              <div key={palette.name}>
                <span className={styles.metaLabel}>{palette.name} theme</span>
                <ul className={styles.swatches}>
                  {palette.swatches.map((swatch) => (
                    <li key={swatch.hex}>
                      <span className={styles.chip} style={{ background: swatch.hex }} aria-hidden="true" />
                      <span>{swatch.name}</span>
                      <code>{swatch.hex}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ol className={styles.rows}>
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="iteration-title">
        <SectionLabel number="04" name="Iteration" />
        <div className={styles.intro}>
          <h2 id="iteration-title">Auditing my own landing.</h2>
          <p>
            I review my own surfaces the way I would review a teammate&apos;s. The audit found
            a hero that promised chat, leads and rent collection while showing one screen,
            and headings set in a different typeface from the app. The concept puts two
            real screens in the first fold and brings the app&apos;s serif to the headlines.
          </p>
        </div>
        <div className={styles.compare}>
          <figure>
            <Image
              alt="Civitasly landing page before the audit, showing a single rentals screen"
              height={900}
              sizes="(max-width: 760px) 100vw, 47vw"
              src={`${MEDIA}/img/landing-current-desktop-first-screen.jpg`}
              width={1440}
            />
            <figcaption className={styles.meta}><span>Before</span><span>One screen, sans headline</span></figcaption>
          </figure>
          <figure>
            <Image
              alt="Civitasly landing page concept with the chat and rentals screens and a serif headline"
              height={900}
              sizes="(max-width: 760px) 100vw, 47vw"
              src={`${MEDIA}/img/landing-concept-desktop-first-screen.jpg`}
              width={1440}
            />
            <figcaption className={styles.meta}><span>Concept</span><span>Two real screens, app serif</span></figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`} aria-labelledby="ads-title">
        <SectionLabel number="05" name="Ad factory" />
        <div className={styles.intro}>
          <h2 id="ads-title">A pipeline, not a video.</h2>
          <p>
            Each ad is a JSON script rendered by a format engine with its own narrative,
            visual system and score. Every ad renders twice: a clean cut for the feed and
            an x-ray cut that annotates the story beat and technique of each segment, so
            the creative reasoning can be reviewed like code.
          </p>
        </div>
        <ul className={styles.ads}>
          {ads.map((ad) => (
            <li key={ad.file}>
              <video
                controls
                playsInline
                poster={`${MEDIA}/img/${ad.poster}`}
                preload="none"
                width={1080}
                height={1920}
              >
                <source src={`${MEDIA}/video/${ad.file}`} type="video/mp4" />
              </video>
              <span className={styles.metaLabel}>{ad.format} / x-ray cut</span>
              <strong>{ad.title}</strong>
            </li>
          ))}
        </ul>
        <ul className={styles.rules}>
          <li>Hook readable on frame zero</li>
          <li>Tells the story with the sound off</li>
          <li>Something new every 1.5 s or less</li>
          <li>Proof with real product screens</li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="stack-title">
        <SectionLabel number="06" name="Under the hood" />
        <div className={styles.intro}>
          <h2 id="stack-title">One codebase, every surface.</h2>
        </div>
        <dl className={styles.stack}>
          {stack.map((item) => (
            <div key={item.area}>
              <dt>{item.area}</dt>
              <dd>{item.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.contact} aria-labelledby="contact-title">
        <h2 id="contact-title">Want the live walkthrough?</h2>
        <p>I am happy to go through the app, the codebase or the ad pipeline on a call.</p>
        <a href={profile.mailto}>{profile.email}</a>
      </section>
    </main>
  );
}

function SectionLabel({ number, name }: { number: string; name: string }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <span>{name}</span>
    </div>
  );
}
