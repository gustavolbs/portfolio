import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const MEDIA = "https://media.civitasly.com/showcase/civitasly";
const TINT = "#e4ece5";

const screenFiles = ["app-screen-01.jpg", "app-screen-02.jpg", "app-screen-03.jpg", "app-screen-04.jpg", "app-screen-05.jpg", "app-screen-06.jpg"] as const;
const lightHex = ["#F5F8F6", "#1D2623", "#425D54", "#DDEAE2", "#F4EEE5", "#C97863"] as const;
const darkHex = ["#171A19", "#222624", "#F3F1EA", "#C6A77B"] as const;
const adFiles = [
  { file: "civitasly-ad-do-boleto-ao-repasse-raiox-9x16.mp4", poster: "poster-ad-do-boleto-ao-repasse-raiox.jpg" },
  { file: "civitasly-ad-e-so-perguntar-raiox-9x16.mp4", poster: "poster-ad-e-so-perguntar-raiox.jpg" },
  { file: "civitasly-ad-responde-primeiro-raiox-9x16.mp4", poster: "poster-ad-responde-primeiro-raiox.jpg" },
] as const;

export const civitaslyCopy = {
  en: {
    alt: "/pt/civitasly",
    back: "Apps · Case study, 2026",
    h1: "Civitasly, designed and built end to end",
    lede: "A mobile-first operating app for real estate agents in Brazil. Agents ask an assistant to register a property, match a client, check today's visits or see who owes rent. I am the only person on it: product, brand, design system, the iOS and Android app, the web platform and the marketing that sells it.",
    facts: [
      { label: "Role", value: "Founder, design and engineering" },
      { label: "Surfaces", value: "iOS, Android, web, PDF" },
      { label: "Stack", value: "Expo, React Native, Next.js, Supabase" },
    ],
    live: "Live",
    heroAlt: "Rentals list of the Civitasly app in the dark theme",
    walk: {
      eyebrow: "Walkthrough",
      title: "Twenty-six seconds of product.",
      body: "Every frame is a real app screen. I built the video in code with Remotion: scenes are measured in beats in a single timeline file, and a Python script synthesizes the soundtrack from that same file, so every cut lands on the beat by construction.",
      meta: ["1920 × 1080 · 26 s · Remotion and a synthesized score", "On-screen copy in Brazilian Portuguese"],
      vertical: "Vertical cut, 9:16 ↗",
    },
    app: {
      eyebrow: "The app",
      title: "Calm screens for a noisy job.",
      body: "Agents live in WhatsApp and work between visits. The app is organized around the questions they ask on the street: what do I collect this week, who needs a follow-up, where am I at two o'clock.",
    },
    screens: [
      { title: "Rentals", body: "What is due, overdue and received, before anything else." },
      { title: "Weekly priorities", body: "The contracts that need attention this week, in order." },
      { title: "Dark theme", body: "Designed as its own palette, with brass replacing green as the action color." },
      { title: "Assistant", body: "Typed or spoken requests become actions across the whole app." },
      { title: "Leads", body: "A queue sorted by the next contact, not by date created." },
      { title: "Agenda", body: "Visits and rent collection share one day view." },
    ],
    screenAlt: (title: string) => `${title} screen of the Civitasly app`,
    note: "Store screenshot set. All names and amounts are illustrative.",
    system: {
      eyebrow: "Design system",
      title: "A ledger, not a dashboard.",
      body: "Warm paper, a deep green, one brass accent and thin rules. A serif for statements and amounts, a sans for operational text, mono for labels. The dark theme is a palette of its own rather than an inversion.",
      serif: "DM Serif Display · statements, amounts",
      sans: "DM Sans · operational text",
      sansSample: "4 collections need attention this week",
      mono: "JetBrains Mono · labels, states",
      monoSample: "OVERDUE · 12 DAYS",
      themes: ["Light theme", "Dark theme"],
      light: ["Background", "Ink", "Ledger", "Sage", "Linen", "Clay"],
      dark: ["Background", "Surface", "Paper", "Brass"],
    },
    principles: [
      { title: "One question per screen", body: "Agents open the app between visits. Each screen answers a single question, and the answer is the largest thing on it." },
      { title: "Status in words", body: "Overdue, open and received are always spelled out. Color reinforces the state; it never carries it alone." },
      { title: "Anti-references first", body: "The brief ruled out purple gradients, sparkle AI badges and fourteen-widget dashboards before choosing anything. The reference became an accountant's ledger." },
      { title: "Shared contracts", body: "Tokens, schemas and domain rules live in workspace packages consumed by both the mobile app and the web platform." },
    ],
    iteration: {
      eyebrow: "Iteration",
      title: "Auditing my own landing.",
      body: "The audit found a hero that promised chat, leads and rent collection while showing one screen, and headings in a different typeface from the app. The concept puts two real screens in the first fold and brings the app's serif to the headlines.",
      beforeAlt: "Civitasly landing page before the audit, showing a single rentals screen",
      afterAlt: "Civitasly landing page concept with the chat and rentals screens and a serif headline",
      before: ["Before", "One screen, sans headline"],
      after: ["Concept", "Two real screens, app serif"],
    },
    ads: {
      eyebrow: "Ad factory",
      title: "A pipeline, not a video.",
      body: "Each ad is a JSON script rendered by a format engine with its own narrative, visual system and score. Every ad renders twice: a clean cut for the feed and an x-ray cut that annotates each segment, so the creative reasoning can be reviewed like code.",
      xray: "x-ray cut",
      items: [
        { format: "Statement", title: "Follow the rent from invoice to payout" },
        { format: "Conversation", title: "The client's request is already the search" },
        { format: "Kinetic type", title: "Whoever answers first, sells" },
      ],
      rulesAria: "Rules every ad follows",
      rules: ["Hook readable on frame zero", "Tells the story with the sound off", "Something new every 1.5 s or less", "Proof with real product screens"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "One codebase, every surface." },
    stack: [
      { area: "Mobile", body: "Expo and React Native with NativeWind. Light and dark themes, voice input in the assistant, Jest component tests and Maestro end-to-end flows." },
      { area: "Web", body: "Next.js App Router. Marketing site in three locales, public agent showcase pages, bilingual property PDFs with react-pdf and Instagram kits rendered with @vercel/og." },
      { area: "Shared", body: "Turborepo workspaces for domain rules, financial calculations, schemas, design tokens and the typed API client." },
      { area: "Data", body: "Supabase with row-level security, deterministic and idempotent seeds, and a finance test suite that runs on every persistence change." },
    ],
    contact: ["Want the live", "walkthrough?"],
  },
  pt: {
    alt: "/civitasly",
    back: "Apps · Estudo de caso, 2026",
    h1: "Civitasly, desenhado e construído de ponta a ponta",
    lede: "Um app de operação, mobile primeiro, para corretores de imóveis no Brasil. O corretor pede a um assistente para cadastrar um imóvel, achar o cliente certo, ver as visitas do dia ou saber quem está devendo aluguel. Sou a única pessoa no projeto: produto, marca, design system, o app de iOS e Android, a plataforma web e o marketing que vende tudo isso.",
    facts: [
      { label: "Papel", value: "Fundador, design e engenharia" },
      { label: "Superfícies", value: "iOS, Android, web, PDF" },
      { label: "Stack", value: "Expo, React Native, Next.js, Supabase" },
    ],
    live: "No ar",
    heroAlt: "Lista de aluguéis do app Civitasly no tema escuro",
    walk: {
      eyebrow: "Tour",
      title: "Vinte e seis segundos de produto.",
      body: "Cada quadro é uma tela real do app. Fiz o vídeo em código com Remotion: as cenas são medidas em batidas num único arquivo de timeline, e um script em Python sintetiza a trilha a partir desse mesmo arquivo, então todo corte cai na batida por construção.",
      meta: ["1920 × 1080 · 26 s · Remotion e trilha sintetizada", "Textos na tela em português"],
      vertical: "Corte vertical, 9:16 ↗",
    },
    app: {
      eyebrow: "O app",
      title: "Telas calmas para um trabalho agitado.",
      body: "Corretores vivem no WhatsApp e trabalham entre uma visita e outra. O app se organiza pelas perguntas que eles fazem na rua: o que recebo esta semana, quem precisa de retorno, onde estou às duas da tarde.",
    },
    screens: [
      { title: "Aluguéis", body: "O que vence, o que está atrasado e o que já entrou, antes de qualquer coisa." },
      { title: "Prioridades da semana", body: "Os contratos que pedem atenção nesta semana, em ordem." },
      { title: "Tema escuro", body: "Desenhado como paleta própria, com o latão no lugar do verde como cor de ação." },
      { title: "Assistente", body: "Pedidos digitados ou falados viram ações em todo o app." },
      { title: "Leads", body: "Uma fila ordenada pelo próximo contato, não pela data de criação." },
      { title: "Agenda", body: "Visitas e cobranças de aluguel dividem a mesma visão do dia." },
    ],
    screenAlt: (title: string) => `Tela ${title} do app Civitasly`,
    note: "Conjunto de prints da loja. Todos os nomes e valores são ilustrativos.",
    system: {
      eyebrow: "Design system",
      title: "Um livro-caixa, não um dashboard.",
      body: "Papel quente, um verde profundo, um acento de latão e linhas finas. Uma serifa para frases e valores, uma sem serifa para o texto operacional, mono para rótulos. O tema escuro é uma paleta própria, não uma inversão.",
      serif: "DM Serif Display · frases, valores",
      sans: "DM Sans · texto operacional",
      sansSample: "4 cobranças pedem atenção esta semana",
      mono: "JetBrains Mono · rótulos, estados",
      monoSample: "ATRASADO · 12 DIAS",
      themes: ["Tema claro", "Tema escuro"],
      light: ["Fundo", "Tinta", "Livro-caixa", "Sálvia", "Linho", "Argila"],
      dark: ["Fundo", "Superfície", "Papel", "Latão"],
    },
    principles: [
      { title: "Uma pergunta por tela", body: "O corretor abre o app entre visitas. Cada tela responde a uma única pergunta, e a resposta é a maior coisa nela." },
      { title: "Estado por extenso", body: "Atrasado, em aberto e recebido sempre aparecem escritos. A cor reforça o estado; nunca o carrega sozinha." },
      { title: "Antirreferências primeiro", body: "Antes de escolher qualquer coisa, o briefing descartou degradês roxos, selos de IA com brilho e dashboards de catorze widgets. A referência virou o livro-caixa de um contador." },
      { title: "Contratos compartilhados", body: "Tokens, schemas e regras de domínio ficam em pacotes do workspace usados pelo app e pela plataforma web." },
    ],
    iteration: {
      eyebrow: "Iteração",
      title: "Auditando a minha própria landing.",
      body: "A auditoria achou um hero que prometia chat, leads e cobrança de aluguel mostrando uma única tela, e títulos numa fonte diferente da do app. O conceito põe duas telas reais na primeira dobra e leva a serifa do app para os títulos.",
      beforeAlt: "Landing do Civitasly antes da auditoria, com uma única tela de aluguéis",
      afterAlt: "Conceito da landing do Civitasly com as telas de chat e de aluguéis e um título com serifa",
      before: ["Antes", "Uma tela, título sem serifa"],
      after: ["Conceito", "Duas telas reais, serifa do app"],
    },
    ads: {
      eyebrow: "Fábrica de anúncios",
      title: "Um pipeline, não um vídeo.",
      body: "Cada anúncio é um roteiro em JSON renderizado por um motor de formato com narrativa, sistema visual e trilha próprios. Todo anúncio sai duas vezes: um corte limpo para o feed e um corte raio-x que anota cada trecho, para revisar o raciocínio criativo como se revisa código.",
      xray: "corte raio-x",
      items: [
        { format: "Afirmação", title: "Do boleto ao repasse" },
        { format: "Conversa", title: "O pedido do cliente já é a busca" },
        { format: "Tipografia cinética", title: "Quem responde primeiro vende" },
      ],
      rulesAria: "Regras que todo anúncio segue",
      rules: ["Gancho legível no quadro zero", "Conta a história sem som", "Algo novo a cada 1,5 s ou menos", "Prova com telas reais do produto"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Um código, todas as superfícies." },
    stack: [
      { area: "Mobile", body: "Expo e React Native com NativeWind. Temas claro e escuro, entrada por voz no assistente, testes de componente com Jest e fluxos de ponta a ponta com Maestro." },
      { area: "Web", body: "Next.js App Router. Site de marketing em três idiomas, páginas públicas de vitrine do corretor, PDFs bilíngues de imóveis com react-pdf e kits de Instagram gerados com @vercel/og." },
      { area: "Compartilhado", body: "Workspaces Turborepo para regras de domínio, cálculos financeiros, schemas, design tokens e o cliente tipado da API." },
      { area: "Dados", body: "Supabase com row-level security, seeds determinísticos e idempotentes, e uma suíte de testes financeiros que roda a cada mudança de persistência." },
    ],
    contact: ["Quer ver o tour", "ao vivo?"],
  },
} as const;

export function CivitaslyCase({ lang }: { lang: Lang }) {
  const t = civitaslyCopy[lang];
  const homeHref = lang === "pt" ? "/pt#apps" : "/#apps";
  const palettes = [
    { name: t.system.themes[0], hex: lightHex, names: t.system.light },
    { name: t.system.themes[1], hex: darkHex, names: t.system.dark },
  ];
  return (
    <CaseShell lang={lang} alt={t.alt} contactTitle={t.contact}>
      <section className={`${home.wrap} ${s.hero}`} aria-labelledby="hero-title">
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
            <div>
              <dt>{t.live}</dt>
              <dd>
                <a href="https://civitasly.com/pt" rel="noreferrer" target="_blank">civitasly.com ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image
              alt={t.heroAlt}
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
          <CaseHead id="walkthrough-title" eyebrow={t.walk.eyebrow} title={t.walk.title}>
            {t.walk.body}
          </CaseHead>
          <figure className="reveal" style={{ margin: 0 }}>
            <div className={s.frame}>
              <video controls playsInline poster={`${MEDIA}/img/poster-promo-site.jpg`} preload="none" width={1920} height={1080}>
                <source src={`${MEDIA}/video/civitasly-promo-site-16x9.mp4`} type="video/mp4" />
              </video>
            </div>
            <figcaption className={s.meta}>
              <span>{t.walk.meta[0]}</span>
              <span>{t.walk.meta[1]}</span>
              <a href={`${MEDIA}/video/civitasly-promo-reels-9x16.mp4`} rel="noreferrer" target="_blank">
                {t.walk.vertical}
              </a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="app-title">
        <div className={home.wrap}>
          <CaseHead id="app-title" eyebrow={t.app.eyebrow} title={t.app.title}>
            {t.app.body}
          </CaseHead>
          <ol className={s.screens}>
            {t.screens.map((screen, index) => (
              <li key={screenFiles[index]} className="reveal">
                <div className={s.shot}>
                  <Image
                    alt={t.screenAlt(screen.title)}
                    height={2803}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`${MEDIA}/img/${screenFiles[index]}`}
                    width={1290}
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

      <section className={home.sec} aria-labelledby="system-title">
        <div className={home.wrap}>
          <CaseHead id="system-title" eyebrow={t.system.eyebrow} title={t.system.title}>
            {t.system.body}
          </CaseHead>
          <div className={`${s.specimen} ${dmSerif.variable} ${dmSans.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.serif}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(40px, 5vw, 64px)" }}>
                R$ 4.850,00
              </p>
              <span className={s.label}>{t.system.sans}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(20px, 2vw, 26px)" }}>
                {t.system.sansSample}
              </p>
              <span className={s.label}>{t.system.mono}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-jetbrains)", fontSize: 15, letterSpacing: "0.08em" }}>
                {t.system.monoSample}
              </p>
            </div>
            <div className={`${s.panel} reveal`}>
              {palettes.map((palette) => (
                <div key={palette.name} className={s.swatchGroup}>
                  <span className={s.label}>{palette.name}</span>
                  <ul className={s.swatches}>
                    {palette.hex.map((hex, index) => (
                      <li key={hex}>
                        <span className={s.chip} style={{ background: hex }} aria-hidden="true" />
                        <span>{palette.names[index]}</span>
                        <code>{hex}</code>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
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

      <section className={home.sec} aria-labelledby="iteration-title">
        <div className={home.wrap}>
          <CaseHead id="iteration-title" eyebrow={t.iteration.eyebrow} title={t.iteration.title}>
            {t.iteration.body}
          </CaseHead>
          <div className={s.compare}>
            {[
              { src: "landing-current-desktop-first-screen.jpg", alt: t.iteration.beforeAlt, cap: t.iteration.before },
              { src: "landing-concept-desktop-first-screen.jpg", alt: t.iteration.afterAlt, cap: t.iteration.after },
            ].map((item) => (
              <figure key={item.src} className="reveal">
                <div className={s.frame}>
                  <Image
                    alt={item.alt}
                    height={900}
                    loading="lazy"
                    sizes="(max-width: 600px) 100vw, 600px"
                    src={`${MEDIA}/img/${item.src}`}
                    width={1440}
                  />
                </div>
                <figcaption className={s.meta}>
                  <span>{item.cap[0]}</span>
                  <span>{item.cap[1]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="ads-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="ads-title" eyebrow={t.ads.eyebrow} title={t.ads.title}>
              {t.ads.body}
            </CaseHead>
            <ul className={s.videos}>
              {t.ads.items.map((ad, index) => (
                <li key={adFiles[index].file}>
                  <video controls playsInline poster={`${MEDIA}/img/${adFiles[index].poster}`} preload="none" width={1080} height={1920}>
                    <source src={`${MEDIA}/video/${adFiles[index].file}`} type="video/mp4" />
                  </video>
                  <span className={s.label}>
                    {ad.format} · {t.ads.xray}
                  </span>
                  <strong>{ad.title}</strong>
                </li>
              ))}
            </ul>
            <ul className={s.chips} aria-label={t.ads.rulesAria}>
              {t.ads.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
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
