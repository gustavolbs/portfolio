import Image from "next/image";
import Link from "next/link";
import { Inter, Poppins } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "600", variable: "--font-poppins", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const TINT = "#e3ebf4";
const SITE = "https://urbanify.com.br";
const shots = ["01", "02", "03", "04", "05", "06"] as const;
const palette = ["#034EFF", "#000E2E", "#001E66", "#10FF8D", "#BC75FF", "#6B7996"] as const;

export const urbanifyCopy = {
  en: {
    alt: "/pt/urbanify",
    back: "Apps · Case study, 2026",
    h1: "Urbanify, a city repair loop citizens can follow",
    lede: "A platform for urban maintenance, sold to city governments through reseller partners. A citizen reports a pothole with a photo and the location, someone checks it on site, the right department fixes it and records the fix, and the citizen confirms. I lead the product and rebuilt it as v3: the citizen app, the city team's web, the partner and advertiser panels, the API and the design system.",
    facts: [
      { label: "Role", value: "Product, design and the v3 rebuild" },
      { label: "Surfaces", value: "iOS, Android and web" },
      { label: "Stack", value: "Expo, Next.js, Hono, Postgres" },
    ],
    live: "Site",
    heroAlt: "Urbanify home screen with the Report a problem button and the citizen's open reports",
    loop: {
      eyebrow: "The loop",
      title: "One ticket, four hands.",
      body: "A complaint that disappears into a phone line is the problem. Every report has an owner at each step, and every step is recorded, so the citizen sees who has it and the city sees where it stalls.",
      steps: [
        { title: "Report", body: "Type, location and up to five photos, in about a minute. The map works from home too." },
        { title: "Verify", body: "Someone checks the problem on site before any team is sent. Verifying is a task, not a job title." },
        { title: "Resolve", body: "The responsible department fixes it and records the solution with a photo." },
        { title: "Confirm", body: "The citizen answers yes or no. A no reopens the ticket instead of closing it quietly." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "Every step in the citizen's pocket.",
      body: "The app answers what the citizen wants to know right now: what do I still need to do, where is my report, and did the city really fix it.",
    },
    screens: [
      { title: "Report in a minute", body: "The main action is the first thing on the home screen, with the reports that need an answer below it." },
      { title: "Your reports", body: "The status of each report and what is still missing from you." },
      { title: "Pin it on the map", body: "Search the address or move the pin, even when you are not at the spot." },
      { title: "Every step until it is fixed", body: "Who took it, the on-site check and the recorded solution, in order." },
      { title: "Confirm the fix", body: "Yes or no, with an optional comment, when the city says it is solved." },
      { title: "Notices that matter", body: "A push when someone verifies, when work starts and when your answer is needed." },
    ],
    screenAlt: (title: string) => `Urbanify App Store screenshot: ${title}`,
    note: "App Store screenshot set. All names and addresses are illustrative.",
    system: {
      eyebrow: "Design system",
      title: "Public service, not a bureaucracy.",
      body: "A strong blue on white for action, navy for weight, and a mint detail used only as a mark. Poppins sets headlines; Inter carries forms, statuses and long Portuguese labels. Tokens are shared by the app and the web.",
      display: "Poppins · headlines",
      displaySample: "Seen a problem on the street?",
      body2: "Inter · interface",
      bodySample: "Waiting for your confirmation",
      paletteLabel: "Brand palette",
      swatches: ["Primary", "Navy", "Deep", "Mint (detail only)", "Lilac", "Gray"],
    },
    platform: {
      eyebrow: "The platform",
      title: "One product, five doors.",
      body: "The same API and database serve the citizen app, the city team's queue, map, dashboards and audit log, a reseller panel with a course and certification, an advertiser panel and an internal marketing tool.",
      steps: [
        { title: "City team", body: "Queue, triage, map, dashboards, audit and phone or counter intake for people without the app." },
        { title: "Partners", body: "A public page, applications, training, certification and sales material behind a login." },
        { title: "Advertisers", body: "Local businesses book sponsored spots in the app, with subscriptions and invoices." },
      ],
      chipsAria: "Engineering rules",
      chips: ["An isolation test on every route", "Open311 with webhooks", "Signed over-the-air updates", "Photos stripped of EXIF, private links"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Built to run a city's data." },
    stack: [
      { area: "Mobile", body: "Expo and React Native with NativeWind and React Native Reusables. Builds on EAS and a self-hosted, code-signed update server." },
      { area: "Web", body: "Next.js on Vercel with shadcn/ui. The shared component library lives in a Storybook of its own." },
      { area: "API", body: "Hono with Zod contracts that generate the OpenAPI spec. API and pg-boss workers run on Fly.io in São Paulo." },
      { area: "Data", body: "Postgres with PostGIS and row-level security by city. A test calls every route as another city and must get nothing back." },
      { area: "Maps", body: "MapLibre and Protomaps with a custom style. Google only powers address search, behind an adapter." },
      { area: "Privacy", body: "Passwordless email login. Report photos sit in a private bucket, served through short-lived signed links with the location metadata removed." },
    ],
    contact: ["Need a product built", "end to end?"],
  },
  pt: {
    alt: "/urbanify",
    back: "Apps · Estudo de caso, 2026",
    h1: "Urbanify, um ciclo de zeladoria que o cidadão acompanha",
    lede: "Uma plataforma de zeladoria urbana vendida para prefeituras por parceiros de revenda. O cidadão relata um buraco com foto e local, alguém confere no local, a secretaria certa resolve e registra a solução, e o cidadão confirma. Lidero o produto e reconstruí tudo como v3: o app do cidadão, a web da equipe da prefeitura, os painéis do parceiro e do anunciante, a API e o design system.",
    facts: [
      { label: "Papel", value: "Produto, design e a reconstrução da v3" },
      { label: "Superfícies", value: "iOS, Android e web" },
      { label: "Stack", value: "Expo, Next.js, Hono, Postgres" },
    ],
    live: "Site",
    heroAlt: "Tela inicial do Urbanify com o botão Reportar problema e os relatos abertos do cidadão",
    loop: {
      eyebrow: "O ciclo",
      title: "Um chamado, quatro mãos.",
      body: "O problema é a reclamação que some numa ligação. Cada relato tem um responsável em cada etapa, e cada etapa fica registrada: o cidadão vê com quem está, e a prefeitura vê onde trava.",
      steps: [
        { title: "Relatar", body: "Tipo, local e até cinco fotos, em cerca de um minuto. O mapa funciona de casa também." },
        { title: "Verificar", body: "Alguém confere o problema no local antes de mandar uma equipe. Verificar é uma tarefa, não um cargo." },
        { title: "Resolver", body: "A secretaria responsável resolve e registra a solução com foto." },
        { title: "Confirmar", body: "O cidadão responde sim ou não. Um não reabre o chamado em vez de fechá-lo em silêncio." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Cada etapa no bolso do cidadão.",
      body: "O app responde o que o cidadão quer saber agora: o que ainda falta eu fazer, onde está meu relato e se a prefeitura resolveu mesmo.",
    },
    screens: [
      { title: "Reporte em 1 minuto", body: "A ação principal é a primeira coisa da tela inicial, com os relatos que pedem resposta logo abaixo." },
      { title: "Seus relatos", body: "O status de cada relato e o que ainda falta você fazer." },
      { title: "Marque no mapa", body: "Busque o endereço ou ajuste o pino, mesmo longe do local." },
      { title: "Cada etapa até resolver", body: "Quem assumiu, a verificação no local e a solução registrada, em ordem." },
      { title: "Confirme a solução", body: "Sim ou não, com comentário opcional, quando a prefeitura diz que resolveu." },
      { title: "Avisos que importam", body: "Um push quando alguém verifica, quando a obra começa e quando sua resposta é necessária." },
    ],
    screenAlt: (title: string) => `Print da App Store do Urbanify: ${title}`,
    note: "Conjunto de prints da App Store. Todos os nomes e endereços são ilustrativos.",
    system: {
      eyebrow: "Design system",
      title: "Serviço público, não burocracia.",
      body: "Um azul forte sobre branco para ação, marinho para peso e um detalhe menta usado só como marca. Poppins compõe os títulos; Inter cuida de formulários, status e rótulos longos em português. Os tokens são os mesmos no app e na web.",
      display: "Poppins · títulos",
      displaySample: "Viu um problema na rua?",
      body2: "Inter · interface",
      bodySample: "Aguardando sua confirmação",
      paletteLabel: "Paleta da marca",
      swatches: ["Primária", "Marinho", "Profundo", "Menta (só detalhe)", "Lilás", "Cinza"],
    },
    platform: {
      eyebrow: "A plataforma",
      title: "Um produto, cinco portas.",
      body: "A mesma API e o mesmo banco atendem o app do cidadão, a fila, o mapa, os painéis e a auditoria da prefeitura, um painel de revenda com curso e certificação, um painel do anunciante e uma ferramenta interna de marketing.",
      steps: [
        { title: "Prefeitura", body: "Fila, triagem, mapa, painéis, auditoria e atendimento por telefone ou balcão para quem não tem o app." },
        { title: "Parceiros", body: "Página pública, candidatura, curso, certificação e material de venda com login." },
        { title: "Anunciantes", body: "Comércios locais reservam espaços patrocinados no app, com assinatura e nota fiscal." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Teste de isolamento em toda rota", "Open311 com webhooks", "Atualizações over-the-air assinadas", "Fotos sem EXIF, links privados"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Feito para guardar dados de uma cidade." },
    stack: [
      { area: "Mobile", body: "Expo e React Native com NativeWind e React Native Reusables. Builds no EAS e um servidor próprio de atualizações com assinatura de código." },
      { area: "Web", body: "Next.js na Vercel com shadcn/ui. A biblioteca de componentes compartilhada tem um Storybook próprio." },
      { area: "API", body: "Hono com contratos em Zod que geram a especificação OpenAPI. API e workers pg-boss rodam no Fly.io em São Paulo." },
      { area: "Dados", body: "Postgres com PostGIS e row-level security por cidade. Um teste chama toda rota como outra cidade e não pode receber nada." },
      { area: "Mapas", body: "MapLibre e Protomaps com estilo próprio. O Google só faz a busca de endereço, atrás de um adapter." },
      { area: "Privacidade", body: "Login por e-mail, sem senha. As fotos dos relatos ficam num bucket privado, servidas por links assinados de curta duração e sem os metadados de localização." },
    ],
    contact: ["Precisa de um produto", "de ponta a ponta?"],
  },
} as const;

export function UrbanifyCase({ lang }: { lang: Lang }) {
  const t = urbanifyCopy[lang];
  const homeHref = lang === "pt" ? "/pt#apps" : "/#apps";
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
                <a href={SITE} rel="noreferrer" target="_blank">urbanify.com.br ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1435} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/urbanify/hero.webp" width={660} />
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="loop-title">
        <div className={home.wrap}>
          <CaseHead id="loop-title" eyebrow={t.loop.eyebrow} title={t.loop.title}>
            {t.loop.body}
          </CaseHead>
          <ol className={`${s.principles} reveal`}>
            {t.loop.steps.map((step, index) => (
              <li key={step.title}>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
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
          <ol className={s.screens}>
            {t.screens.map((screen, index) => (
              <li key={shots[index]} className="reveal">
                <div className={s.shot}>
                  <Image
                    alt={t.screenAlt(screen.title)}
                    height={1434}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`/apps/urbanify/${shots[index]}.webp`}
                    width={660}
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
          <div className={`${s.specimen} ${poppins.variable} ${inter.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.display}</span>
              <p
                className={s.sample}
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
              >
                {t.system.displaySample}
              </p>
              <span className={s.label}>{t.system.body2}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(20px, 2vw, 26px)" }}>
                {t.system.bodySample}
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

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="platform-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="platform-title" eyebrow={t.platform.eyebrow} title={t.platform.title}>
              {t.platform.body}
            </CaseHead>
            <ol className={s.principles}>
              {t.platform.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={s.label}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <ul className={s.chips} aria-label={t.platform.chipsAria}>
              {t.platform.chips.map((chip) => (
                <li key={chip}>{chip}</li>
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
