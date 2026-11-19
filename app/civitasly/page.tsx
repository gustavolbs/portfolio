import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import { CaseHead, CaseShell } from "@/components/site/case-shell";
import s from "@/components/site/case.module.css";
import home from "@/components/site/home.module.css";

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

const MEDIA = "https://media.civitasly.com/showcase/civitasly";

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

const TINT = "#e4ece5";

export default function CivitaslyCaseStudy() {
  return (
    <CaseShell contactTitle={["Want the live", "walkthrough?"]}>
      <section className={`${home.wrap} ${s.hero}`} aria-labelledby="hero-title">
        <div>
          <Link className={s.back} href="/#apps">
            <span aria-hidden="true">←</span> Apps · Case study, 2026
          </Link>
          <h1 id="hero-title">
            Civitasly, designed and built end to end<span>.</span>
          </h1>
          <p className={s.lede}>
            A mobile-first operating app for real estate agents in Brazil. Agents ask an assistant to register a
            property, match a client, check today&apos;s visits or see who owes rent. I am the only person on it:
            product, brand, design system, the iOS and Android app, the web platform and the marketing that sells it.
          </p>
          <dl className={s.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt>Live</dt>
              <dd>
                <a href="https://civitasly.com/pt" rel="noreferrer" target="_blank">civitasly.com ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image
              alt="Rentals list of the Civitasly app in the dark theme"
              height={2803}
              priority
              sizes="(max-width: 900px) 62vw, 300px"
              src={`${MEDIA}/img/app-screen-03.jpg`}
              width={1290}
            />
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="walkthrough-title">
        <div className={home.wrap}>
          <CaseHead id="walkthrough-title" eyebrow="Walkthrough" title="Twenty-six seconds of product.">
            Every frame is a real app screen. I built the video in code with Remotion: scenes are measured in beats in
            a single timeline file, and a Python script synthesizes the soundtrack from that same file, so every cut
            lands on the beat by construction.
          </CaseHead>
          <figure className="reveal" style={{ margin: 0 }}>
            <div className={s.frame}>
              <video
                controls
                playsInline
                poster={`${MEDIA}/img/poster-promo-site.jpg`}
                preload="none"
                width={1920}
                height={1080}
              >
                <source src={`${MEDIA}/video/civitasly-promo-site-16x9.mp4`} type="video/mp4" />
              </video>
            </div>
            <figcaption className={s.meta}>
              <span>1920 × 1080 · 26 s · Remotion and a synthesized score</span>
              <span>On-screen copy in Brazilian Portuguese</span>
              <a href={`${MEDIA}/video/civitasly-promo-reels-9x16.mp4`} rel="noreferrer" target="_blank">
                Vertical cut, 9:16 ↗
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="app-title">
        <div className={home.wrap}>
          <CaseHead id="app-title" eyebrow="The app" title="Calm screens for a noisy job.">
            Agents live in WhatsApp and work between visits. The app is organized around the questions they ask on the
            street: what do I collect this week, who needs a follow-up, where am I at two o&apos;clock.
          </CaseHead>
          <ol className={s.screens}>
            {screens.map((screen, index) => (
              <li key={screen.file} className="reveal">
                <div className={s.shot}>
                  <Image
                    alt={`${screen.title} screen of the Civitasly app`}
                    height={2803}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`${MEDIA}/img/${screen.file}`}
                    width={1290}
                  />
                </div>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{screen.title}</strong>
                <p>{screen.body}</p>
              </li>
            ))}
          </ol>
          <p className={s.note}>Store screenshot set. All names and amounts are illustrative.</p>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="system-title">
        <div className={home.wrap}>
          <CaseHead id="system-title" eyebrow="Design system" title="A ledger, not a dashboard.">
            Warm paper, a deep green, one brass accent and thin rules. A serif for statements and amounts, a sans for
            operational text, mono for labels. The dark theme is a palette of its own rather than an inversion.
          </CaseHead>
          <div className={`${s.specimen} ${dmSerif.variable} ${dmSans.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>DM Serif Display · statements, amounts</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(40px, 5vw, 64px)" }}>
                R$ 4.850,00
              </p>
              <span className={s.label}>DM Sans · operational text</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(20px, 2vw, 26px)" }}>
                4 collections need attention this week
              </p>
              <span className={s.label}>JetBrains Mono · labels, states</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-jetbrains)", fontSize: 15, letterSpacing: "0.08em" }}>
                OVERDUE · 12 DAYS
              </p>
            </div>
            <div className={`${s.panel} reveal`}>
              {palettes.map((palette) => (
                <div key={palette.name} className={s.swatchGroup}>
                  <span className={s.label}>{palette.name} theme</span>
                  <ul className={s.swatches}>
                    {palette.swatches.map((swatch) => (
                      <li key={swatch.hex}>
                        <span className={s.chip} style={{ background: swatch.hex }} aria-hidden="true" />
                        <span>{swatch.name}</span>
                        <code>{swatch.hex}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <ol className={`${s.principles} reveal`}>
            {principles.map((principle, index) => (
              <li key={principle.title}>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="iteration-title">
        <div className={home.wrap}>
          <CaseHead id="iteration-title" eyebrow="Iteration" title="Auditing my own landing.">
            The audit found a hero that promised chat, leads and rent collection while showing one screen, and headings
            in a different typeface from the app. The concept puts two real screens in the first fold and brings the
            app&apos;s serif to the headlines.
          </CaseHead>
          <div className={s.compare}>
            <figure className="reveal">
              <div className={s.frame}>
                <Image
                  alt="Civitasly landing page before the audit, showing a single rentals screen"
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 600px) 100vw, 600px"
                  src={`${MEDIA}/img/landing-current-desktop-first-screen.jpg`}
                  width={1440}
                />
              </div>
              <figcaption className={s.meta}>
                <span>Before</span>
                <span>One screen, sans headline</span>
              </figcaption>
            </figure>
            <figure className="reveal">
              <div className={s.frame}>
                <Image
                  alt="Civitasly landing page concept with the chat and rentals screens and a serif headline"
                  height={900}
                  loading="lazy"
                  sizes="(max-width: 600px) 100vw, 600px"
                  src={`${MEDIA}/img/landing-concept-desktop-first-screen.jpg`}
                  width={1440}
                />
              </div>
              <figcaption className={s.meta}>
                <span>Concept</span>
                <span>Two real screens, app serif</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="ads-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="ads-title" eyebrow="Ad factory" title="A pipeline, not a video.">
              Each ad is a JSON script rendered by a format engine with its own narrative, visual system and score.
              Every ad renders twice: a clean cut for the feed and an x-ray cut that annotates each segment, so the
              creative reasoning can be reviewed like code.
            </CaseHead>
            <ul className={s.videos}>
              {ads.map((ad) => (
                <li key={ad.file}>
                  <video controls playsInline poster={`${MEDIA}/img/${ad.poster}`} preload="none" width={1080} height={1920}>
                    <source src={`${MEDIA}/video/${ad.file}`} type="video/mp4" />
                  </video>
                  <span className={s.label}>{ad.format} · x-ray cut</span>
                  <strong>{ad.title}</strong>
                </li>
              ))}
            </ul>
            <ul className={s.chips} aria-label="Rules every ad follows">
              <li>Hook readable on frame zero</li>
              <li>Tells the story with the sound off</li>
              <li>Something new every 1.5 s or less</li>
              <li>Proof with real product screens</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="stack-title">
        <div className={home.wrap}>
          <CaseHead id="stack-title" eyebrow="Under the hood" title="One codebase, every surface." />
          <dl className={`${s.stack} reveal`}>
            {stack.map((item) => (
              <div key={item.area}>
                <dt>{item.area}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </CaseShell>
  );
}
