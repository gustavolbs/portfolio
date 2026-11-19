import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, Figtree } from "next/font/google";

import { CaseHead, CaseShell } from "@/components/site/case-shell";
import s from "@/components/site/case.module.css";
import home from "@/components/site/home.module.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

const SITE = "https://medusa.linearcraft.dev/en/";
const STORE = "https://apps.apple.com/app/id6827226157";
const TINT = "#e7e9f2";

export const metadata: Metadata = {
  title: "Medusa case study",
  description:
    "Medusa, a free Apple TV client for your own Jellyfin server: tvOS design for the Siri Remote, a two-engine player and a privacy-first build, designed and built by Gustavo Bispo.",
  alternates: { canonical: "/medusa" },
  openGraph: {
    title: "Medusa case study · Gustavo Bispo",
    description: "An Apple TV app for your own media server, designed and built end to end.",
    url: "/medusa",
    images: [{ url: "/apps/medusa.webp", width: 1200, height: 675 }],
  },
};

const facts = [
  { label: "Role", value: "Solo: design, engineering, store" },
  { label: "Platform", value: "Apple TV, tvOS 17 or later" },
  { label: "Stack", value: "Swift 6, SwiftUI, AVPlayer, libmpv" },
  { label: "Languages", value: "English, Portuguese, Spanish" },
] as const;

const principles = [
  {
    title: "Focus is the cursor",
    body: "On a TV there is no pointer. The focused item grows and gets a white outline, so where you are is never in doubt.",
  },
  {
    title: "Content first",
    body: "Large artwork, a quiet interface. The title art is the hero, and the only interface accent is the white of focus.",
  },
  {
    title: "Motion with a purpose",
    body: "Short, continuous transitions that show where you came from. Nothing moves just to decorate.",
  },
  {
    title: "Read from three meters",
    body: "Type sizes and contrast are set for a living room, not a desk. One main action per screen.",
  },
] as const;

const screens = [
  { file: "home.webp", title: "Home", body: "The hero rotates through what is new on the server, led by each title's own logo art." },
  { file: "explore.webp", title: "Explore", body: "Top 10 today and collections, with big numbers you can read from the couch." },
] as const;

const engine = [
  { title: "Read the file", body: "Jellyfin reports the container, codecs, bit depth, HDR type and every track." },
  {
    title: "Check compatibility",
    body: "A pure, tested function decides if AVPlayer can play it directly with the chosen audio and subtitles.",
  },
  {
    title: "Pick the engine",
    body: "AVPlayer when it can, mpv when it cannot. The controls and the Siri Remote work the same in both.",
  },
] as const;

const palette = [
  { name: "Background", hex: "#0B0C10" },
  { name: "Surface", hex: "#15171D" },
  { name: "Text", hex: "#F4F5F7" },
  { name: "Muted", hex: "#A3A7B5" },
  { name: "Focus", hex: "#FFFFFF" },
  { name: "IMDb badge", hex: "#F5C518" },
] as const;

const stack = [
  {
    area: "Interface",
    body: "SwiftUI on tvOS 17 with the native focus engine. Every string in English, Portuguese and Spanish.",
  },
  {
    area: "Data",
    body: "The official Jellyfin Swift SDK. Several servers at once, with matching libraries merged into one.",
  },
  {
    area: "Playback",
    body: "AVPlayer and libmpv (through MPVKit) behind one PlaybackEngine protocol. The TV switches to the right picture mode for each video.",
  },
  {
    area: "Top Shelf",
    body: "An app extension shows Continue Watching from every server on the Apple TV home screen.",
  },
  {
    area: "Privacy",
    body: "No account, ads or analytics. The server address and session live in the Keychain, and optional OMDb and SubDL keys never leave the device.",
  },
  {
    area: "Quality",
    body: "XCTest and Swift Testing, UI tests for the player and live tests against a real server.",
  },
] as const;

export default function MedusaCaseStudy() {
  return (
    <CaseShell contactTitle={["Need someone who ships", "the whole product?"]}>
      <section className={`${home.wrap} ${s.hero} ${s.heroTv}`} aria-labelledby="hero-title">
        <div>
          <Link className={s.back} href="/#apps">
            <span aria-hidden="true">←</span> Apps · Case study, 2026
          </Link>
          <h1 id="hero-title">
            Medusa, an Apple TV app built for the couch<span>.</span>
          </h1>
          <p className={s.lede}>
            A free Apple TV client for people who run their own Jellyfin media server. It looks like a streaming
            service, plays the files people really keep and needs nothing but the Siri Remote. I designed and built it
            alone, from the first mockup to the App Store listing and the support site.
          </p>
          <dl className={s.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className={s.links}>
            <a className={home.pill} href={STORE} target="_blank" rel="noreferrer">
              App Store <span aria-hidden="true">↗</span>
            </a>
            <a href={SITE} target="_blank" rel="noreferrer">medusa.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.tv}>
            <Image
              alt="Medusa home screen on Apple TV, with Tears of Steel featured and the Recently added row"
              height={1350}
              priority
              sizes="(max-width: 1240px) 92vw, 1120px"
              src="/apps/medusa/hero.webp"
              width={2400}
            />
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="couch-title">
        <div className={home.wrap}>
          <CaseHead id="couch-title" eyebrow="The problem" title="Built for a remote, not a mouse.">
            Jellyfin users already have the library. What they lack on Apple TV is an app that feels at home there: one
            that reads from the couch, keeps focus obvious and never asks for a keyboard.
          </CaseHead>
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

      <section className={home.sec} aria-labelledby="app-title">
        <div className={home.wrap}>
          <CaseHead id="app-title" eyebrow="The app" title="A streaming look for your own library.">
            Home leads with the title logo and a muted trailer when the server has one. Rows for Continue Watching, My
            List, Top 10 and collections follow.
          </CaseHead>
          <ol className={`${s.screens} ${s.wideScreens}`}>
            {screens.map((screen, index) => (
              <li key={screen.file} className="reveal">
                <div className={s.wide}>
                  <Image
                    alt={`${screen.title} screen of Medusa on Apple TV`}
                    height={675}
                    loading="lazy"
                    sizes="(max-width: 600px) 92vw, 560px"
                    src={`/apps/medusa/${screen.file}`}
                    width={1200}
                  />
                </div>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{screen.title}</strong>
                <p>{screen.body}</p>
              </li>
            ))}
          </ol>
          <p className={s.note}>Captured on Apple TV with open movies from the Blender Foundation. The app ships no movies or shows.</p>
        </div>
      </section>

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="engine-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="engine-title" eyebrow="Playback" title="Two engines, one player.">
              Apple&apos;s AVPlayer plays what tvOS supports natively. Everything else, like MKV files or image
              subtitles, goes to an mpv engine, so the server converts as little as possible.
            </CaseHead>
            <ol className={s.principles}>
              {engine.map((step, index) => (
                <li key={step.title}>
                  <span className={s.label}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <ul className={s.chips} aria-label="What the player supports">
              <li>4K and HDR</li>
              <li>MKV, HEVC and many more formats</li>
              <li>Subtitles from the server or SubDL</li>
              <li>Swipe to seek on the Siri Remote</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="system-title">
        <div className={home.wrap}>
          <CaseHead id="system-title" eyebrow="Design system" title="Dark by default, color from the art.">
            The interface has one accent, the white of focus. Every other color comes from the artwork of each title.
            Bebas Neue sets titles in caps; Figtree carries the interface.
          </CaseHead>
          <div className={`${s.specimen} ${bebas.variable} ${figtree.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>Bebas Neue · featured titles, Top 10 numbers</span>
              <p
                className={s.sample}
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "0.02em" }}
              >
                Top 10 today
              </p>
              <span className={s.label}>Figtree · interface</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-figtree)", fontSize: "clamp(20px, 2vw, 26px)" }}>
                Continue watching
              </p>
            </div>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>Interface palette</span>
              <ul className={s.swatches}>
                {palette.map((swatch) => (
                  <li key={swatch.hex}>
                    <span className={s.chip} style={{ background: swatch.hex }} aria-hidden="true" />
                    <span>{swatch.name}</span>
                    <code>{swatch.hex}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="stack-title">
        <div className={home.wrap}>
          <CaseHead id="stack-title" eyebrow="Under the hood" title="Native, private, tested." />
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
