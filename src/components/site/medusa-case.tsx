import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue, Figtree } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

const STORE = "https://apps.apple.com/app/id6827226157";
const TINT = "#e7e9f2";

const palette = ["#0B0C10", "#15171D", "#F4F5F7", "#A3A7B5", "#FFFFFF", "#F5C518"] as const;
const screenFiles = ["home.webp", "explore.webp"] as const;

export const medusaCopy = {
  en: {
    site: "https://medusa.linearcraft.dev/en/",
    alt: "/pt/medusa",
    back: "Apps · Case study, 2026",
    h1: "Medusa, an Apple TV app built for the couch",
    lede: "A free Apple TV client for people who run their own Jellyfin media server. It looks like a streaming service, plays the files people really keep and needs nothing but the Siri Remote. I designed and built it alone, from the first mockup to the App Store listing and the support site.",
    facts: [
      { label: "Role", value: "Solo: design, engineering, store" },
      { label: "Platform", value: "Apple TV, tvOS 17 or later" },
      { label: "Stack", value: "Swift 6, SwiftUI, AVPlayer, libmpv" },
      { label: "Languages", value: "English, Portuguese, Spanish" },
    ],
    heroAlt: "Medusa home screen on Apple TV, with Tears of Steel featured and the Recently added row",
    problem: {
      eyebrow: "The problem",
      title: "Built for a remote, not a mouse.",
      body: "Jellyfin users already have the library. What they lack on Apple TV is an app that feels at home there: one that reads from the couch, keeps focus obvious and never asks for a keyboard.",
    },
    principles: [
      { title: "Focus is the cursor", body: "On a TV there is no pointer. The focused item grows and gets a white outline, so where you are is never in doubt." },
      { title: "Content first", body: "Large artwork, a quiet interface. The title art is the hero, and the only interface accent is the white of focus." },
      { title: "Motion with a purpose", body: "Short, continuous transitions that show where you came from. Nothing moves just to decorate." },
      { title: "Read from three meters", body: "Type sizes and contrast are set for a living room, not a desk. One main action per screen." },
    ],
    app: {
      eyebrow: "The app",
      title: "A streaming look for your own library.",
      body: "Home leads with the title logo and a muted trailer when the server has one. Rows for Continue Watching, My List, Top 10 and collections follow.",
    },
    screens: [
      { title: "Home", body: "The hero rotates through what is new on the server, led by each title's own logo art." },
      { title: "Explore", body: "Top 10 today and collections, with big numbers you can read from the couch." },
    ],
    screenAlt: (title: string) => `${title} screen of Medusa on Apple TV`,
    note: "Captured on Apple TV with open movies from the Blender Foundation. The app ships no movies or shows.",
    engine: {
      eyebrow: "Playback",
      title: "Two engines, one player.",
      body: "Apple's AVPlayer plays what tvOS supports natively. Everything else, like MKV files or image subtitles, goes to an mpv engine, so the server converts as little as possible.",
      steps: [
        { title: "Read the file", body: "Jellyfin reports the container, codecs, bit depth, HDR type and every track." },
        { title: "Check compatibility", body: "A pure, tested function decides if AVPlayer can play it directly with the chosen audio and subtitles." },
        { title: "Pick the engine", body: "AVPlayer when it can, mpv when it cannot. The controls and the Siri Remote work the same in both." },
      ],
      chipsAria: "What the player supports",
      chips: ["4K and HDR", "MKV, HEVC and many more formats", "Subtitles from the server or SubDL", "Swipe to seek on the Siri Remote"],
    },
    system: {
      eyebrow: "Design system",
      title: "Dark by default, color from the art.",
      body: "The interface has one accent, the white of focus. Every other color comes from the artwork of each title. Bebas Neue sets titles in caps; Figtree carries the interface.",
      bebas: "Bebas Neue · featured titles, Top 10 numbers",
      bebasSample: "Top 10 today",
      figtree: "Figtree · interface",
      figtreeSample: "Continue watching",
      paletteLabel: "Interface palette",
      swatches: ["Background", "Surface", "Text", "Muted", "Focus", "IMDb badge"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Native, private, tested." },
    stack: [
      { area: "Interface", body: "SwiftUI on tvOS 17 with the native focus engine. Every string in English, Portuguese and Spanish." },
      { area: "Data", body: "The official Jellyfin Swift SDK. Several servers at once, with matching libraries merged into one." },
      { area: "Playback", body: "AVPlayer and libmpv (through MPVKit) behind one PlaybackEngine protocol. The TV switches to the right picture mode for each video." },
      { area: "Top Shelf", body: "An app extension shows Continue Watching from every server on the Apple TV home screen." },
      { area: "Privacy", body: "No account, ads or analytics. The server address and session live in the Keychain, and optional OMDb and SubDL keys never leave the device." },
      { area: "Quality", body: "XCTest and Swift Testing, UI tests for the player and live tests against a real server." },
    ],
    contact: ["Need someone who ships", "the whole product?"],
  },
  pt: {
    site: "https://medusa.linearcraft.dev/",
    alt: "/medusa",
    back: "Apps · Estudo de caso, 2026",
    h1: "Medusa, um app de Apple TV feito para o sofá",
    lede: "Um cliente gratuito de Apple TV para quem tem o próprio servidor de mídia Jellyfin. Parece um serviço de streaming, toca os arquivos que as pessoas guardam de verdade e só precisa do Siri Remote. Desenhei e construí sozinho, do primeiro mockup à página na App Store e ao site de suporte.",
    facts: [
      { label: "Papel", value: "Solo: design, engenharia, loja" },
      { label: "Plataforma", value: "Apple TV, tvOS 17 ou mais recente" },
      { label: "Stack", value: "Swift 6, SwiftUI, AVPlayer, libmpv" },
      { label: "Idiomas", value: "Inglês, português, espanhol" },
    ],
    heroAlt: "Tela inicial do Medusa na Apple TV, com Tears of Steel em destaque e a fileira Adicionados recentemente",
    problem: {
      eyebrow: "O problema",
      title: "Feito para o controle, não para o mouse.",
      body: "Quem usa Jellyfin já tem a biblioteca. O que falta na Apple TV é um app que pareça nativo ali: que dê para ler do sofá, que deixe o foco sempre claro e que nunca peça teclado.",
    },
    principles: [
      { title: "O foco é o cursor", body: "Na TV não há ponteiro. O item em foco cresce e ganha um contorno branco, então você sempre sabe onde está." },
      { title: "Conteúdo primeiro", body: "Arte grande, interface discreta. A arte do título é o destaque, e o único acento da interface é o branco do foco." },
      { title: "Movimento com propósito", body: "Transições curtas e contínuas que mostram de onde você veio. Nada se mexe só para enfeitar." },
      { title: "Legível a três metros", body: "Tamanhos de texto e contraste pensados para a sala, não para a mesa. Uma ação principal por tela." },
    ],
    app: {
      eyebrow: "O app",
      title: "Cara de streaming para a sua biblioteca.",
      body: "A tela inicial abre com o logo do título e um trailer sem som quando o servidor tem um. Depois vêm as fileiras Continuar assistindo, Minha lista, Top 10 e coleções.",
    },
    screens: [
      { title: "Início", body: "O destaque gira pelas novidades do servidor, com a arte de logo de cada título." },
      { title: "Explorar", body: "Top 10 de hoje e coleções, com números grandes que dá para ler do sofá." },
    ],
    screenAlt: (title: string) => `Tela ${title} do Medusa na Apple TV`,
    note: "Capturas na Apple TV com filmes abertos da Blender Foundation. O app não traz filmes nem séries.",
    engine: {
      eyebrow: "Reprodução",
      title: "Dois motores, um player.",
      body: "O AVPlayer da Apple toca o que o tvOS suporta nativamente. O resto, como arquivos MKV ou legendas em imagem, vai para um motor mpv, então o servidor converte o mínimo possível.",
      steps: [
        { title: "Ler o arquivo", body: "O Jellyfin informa o contêiner, os codecs, a profundidade de cor, o tipo de HDR e todas as faixas." },
        { title: "Checar compatibilidade", body: "Uma função pura e testada decide se o AVPlayer toca direto com o áudio e a legenda escolhidos." },
        { title: "Escolher o motor", body: "AVPlayer quando dá, mpv quando não dá. Os controles e o Siri Remote funcionam igual nos dois." },
      ],
      chipsAria: "O que o player suporta",
      chips: ["4K e HDR", "MKV, HEVC e muitos outros formatos", "Legendas do servidor ou do SubDL", "Deslize para avançar no Siri Remote"],
    },
    system: {
      eyebrow: "Design system",
      title: "Escuro por padrão, cor vinda da arte.",
      body: "A interface tem um único acento, o branco do foco. Toda outra cor vem da arte de cada título. Bebas Neue compõe os títulos em caixa alta; Figtree cuida da interface.",
      bebas: "Bebas Neue · títulos em destaque, números do Top 10",
      bebasSample: "Top 10 de hoje",
      figtree: "Figtree · interface",
      figtreeSample: "Continuar assistindo",
      paletteLabel: "Paleta da interface",
      swatches: ["Fundo", "Superfície", "Texto", "Secundário", "Foco", "Selo IMDb"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Nativo, privado, testado." },
    stack: [
      { area: "Interface", body: "SwiftUI no tvOS 17 com o motor de foco nativo. Todos os textos em inglês, português e espanhol." },
      { area: "Dados", body: "O SDK oficial do Jellyfin em Swift. Vários servidores ao mesmo tempo, com bibliotecas iguais unidas em uma só." },
      { area: "Reprodução", body: "AVPlayer e libmpv (via MPVKit) atrás de um único protocolo PlaybackEngine. A TV troca para o modo de imagem certo em cada vídeo." },
      { area: "Top Shelf", body: "Uma extensão mostra o Continuar assistindo de todos os servidores na tela inicial da Apple TV." },
      { area: "Privacidade", body: "Sem conta, anúncios ou analytics. O endereço do servidor e a sessão ficam no Keychain, e as chaves opcionais de OMDb e SubDL nunca saem do aparelho." },
      { area: "Qualidade", body: "XCTest e Swift Testing, testes de interface do player e testes ao vivo contra um servidor real." },
    ],
    contact: ["Precisa de alguém que entrega", "o produto inteiro?"],
  },
} as const;

export function MedusaCase({ lang }: { lang: Lang }) {
  const t = medusaCopy[lang];
  const homeHref = lang === "pt" ? "/pt#apps" : "/#apps";
  return (
    <CaseShell lang={lang} alt={t.alt} contactTitle={t.contact}>
      <section className={`${home.wrap} ${s.hero} ${s.heroTv}`} aria-labelledby="hero-title">
        <div>
          <Link className={s.back} href={homeHref}>
            <span aria-hidden="true">←</span> {t.back}
          </Link>
          <h1 id="hero-title">
            {t.h1}
            <span>.</span>
          </h1>
          <p className={s.lede}>{t.lede}</p>
          <dl className={s.facts}>
            {t.facts.map((fact) => (
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
            <a href={t.site} target="_blank" rel="noreferrer">medusa.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.tv}>
            <Image
              alt={t.heroAlt}
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
          <CaseHead id="couch-title" eyebrow={t.problem.eyebrow} title={t.problem.title}>
            {t.problem.body}
          </CaseHead>
          <ol className={`${s.principles} reveal`}>
            {t.principles.map((principle, index) => (
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
          <CaseHead id="app-title" eyebrow={t.app.eyebrow} title={t.app.title}>
            {t.app.body}
          </CaseHead>
          <ol className={`${s.screens} ${s.wideScreens}`}>
            {t.screens.map((screen, index) => (
              <li key={screenFiles[index]} className="reveal">
                <div className={s.wide}>
                  <Image
                    alt={t.screenAlt(screen.title)}
                    height={675}
                    loading="lazy"
                    sizes="(max-width: 600px) 92vw, 560px"
                    src={`/apps/medusa/${screenFiles[index]}`}
                    width={1200}
                  />
                </div>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{screen.title}</strong>
                <p>{screen.body}</p>
              </li>
            ))}
          </ol>
          <p className={s.note}>{t.note}</p>
        </div>
      </section>

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="engine-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="engine-title" eyebrow={t.engine.eyebrow} title={t.engine.title}>
              {t.engine.body}
            </CaseHead>
            <ol className={s.principles}>
              {t.engine.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={s.label}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <ul className={s.chips} aria-label={t.engine.chipsAria}>
              {t.engine.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="system-title">
        <div className={home.wrap}>
          <CaseHead id="system-title" eyebrow={t.system.eyebrow} title={t.system.title}>
            {t.system.body}
          </CaseHead>
          <div className={`${s.specimen} ${bebas.variable} ${figtree.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.bebas}</span>
              <p
                className={s.sample}
                style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "0.02em" }}
              >
                {t.system.bebasSample}
              </p>
              <span className={s.label}>{t.system.figtree}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-figtree)", fontSize: "clamp(20px, 2vw, 26px)" }}>
                {t.system.figtreeSample}
              </p>
            </div>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.paletteLabel}</span>
              <ul className={s.swatches}>
                {palette.map((hex, index) => (
                  <li key={hex}>
                    <span className={s.chip} style={{ background: hex }} aria-hidden="true" />
                    <span>{t.system.swatches[index]}</span>
                    <code>{hex}</code>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="stack-title">
        <div className={home.wrap}>
          <CaseHead id="stack-title" eyebrow={t.stackTitle.eyebrow} title={t.stackTitle.title} />
          <dl className={`${s.stack} reveal`}>
            {t.stack.map((item) => (
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
