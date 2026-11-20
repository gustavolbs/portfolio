import Image from "next/image";
import Link from "next/link";
import { Funnel_Display, Funnel_Sans } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const display = Funnel_Display({ subsets: ["latin"], weight: "600", variable: "--font-funnel-display", display: "swap" });
const sans = Funnel_Sans({ subsets: ["latin"], variable: "--font-funnel-sans", display: "swap" });

const TINT = "#efe5d8";
const SITE = "https://agoraaqui.com.br";
const shots = ["01", "02", "03", "04", "05", "06"] as const;
const palette = ["#FF4D1F", "#14110F", "#F6F3EC", "#0A0C0D", "#6B645B", "#ECEEED"] as const;

export const agoraaquiCopy = {
  en: {
    alt: "/pt/agoraaqui",
    back: "Apps · Case study, 2026",
    h1: "agoraaqui, a small business site you see before you pay",
    lede: "A service that builds the website of a small Brazilian business, a dentist, a barber, a physiotherapist, and shows it finished on WhatsApp before any payment. The owner approves it, pays once and the site goes live at their-business.agoraaqui.com.br. Linear Craft runs it, and I built all of it: the offer, the storefront, the sites platform and the sales system behind it.",
    facts: [
      { label: "Role", value: "Product, design, engineering and sales" },
      { label: "Surfaces", value: "Web and WhatsApp" },
      { label: "Stack", value: "Next.js, Postgres, Claude, WhatsApp" },
    ],
    live: "Site",
    heroAlt: "agoraaqui home on a phone: Your site live, right here, with the WhatsApp button and an example site below",
    loop: {
      eyebrow: "The offer",
      title: "The site first, the bill after.",
      body: "A small business owner has heard many promises about websites. Here the promise is the finished site itself, with their name, colors and photos, so the only decision left is whether they like it.",
      steps: [
        { title: "Preview", body: "We build the site from the business's public details and send a link on WhatsApp." },
        { title: "Approve", body: "The owner says yes or asks for another option. Nothing is charged before the yes." },
        { title: "Go live", body: "One payment, and the site goes live on its own address under agoraaqui.com.br." },
        { title: "Stay live", body: "A hosting plan keeps it up, with the option of the business's own domain." },
      ],
    },
    app: {
      eyebrow: "The sites",
      title: "One platform, a different face for each business.",
      body: "Every site runs on the same app, but each profession gets its own layout, type and colors. Each one leads to the same place: a WhatsApp message the client only has to send.",
    },
    screens: [
      { title: "A dentist", body: "Warm, calm and specific about children and patients with special needs." },
      { title: "A second dentist, another look", body: "Same profession, different person, so a different palette and voice." },
      { title: "A physiotherapist", body: "An editorial serif for a practice built on long, careful sessions." },
      { title: "The message is already written", body: "The client ticks what they need and the WhatsApp text writes itself." },
      { title: "Hours and questions up front", body: "Opening days and a ready message before the first question comes up." },
      { title: "How it works, on the storefront", body: "The agoraaqui home explains the offer in four steps, in plain words." },
    ],
    screenAlt: (title: string) => `agoraaqui site on a phone: ${title}`,
    note: "Live client sites and the agoraaqui storefront, captured on a phone.",
    system: {
      eyebrow: "Storefront brand",
      title: "Paper, ink and one red dot.",
      body: "The storefront looks like a printed note: warm paper, near-black ink and a red-orange dot that marks the action. Funnel Display sets headlines; Funnel Sans carries the copy. The client sites never use it: each one gets its own brand.",
      display: "Funnel Display · headlines",
      displaySample: "Your site live. Right here.",
      body2: "Funnel Sans · copy",
      bodySample: "You get the preview on WhatsApp",
      paletteLabel: "Brand palette",
      swatches: ["Pen (action)", "Ink", "Paper", "Night", "Muted", "On night"],
    },
    platform: {
      eyebrow: "Behind the counter",
      title: "Sold by an AI agent.",
      body: "No one at Linear Craft sells agoraaqui by hand. Sales Factory, our own sales system, finds the businesses, builds the previews, talks to the owners on WhatsApp, charges and publishes the site.",
      link: "See the Sales Factory case",
    },
    stackTitle: { eyebrow: "Under the hood", title: "Built to publish and keep running." },
    stack: [
      { area: "Sites", body: "One Next.js app on Vercel serves every business at its own subdomain. Tenants live in Postgres on Neon in São Paulo." },
      { area: "Storefront", body: "Static HTML from a small build script: no framework, no cookies, no analytics. Comparison pages cite dated sources for every claim." },
      { area: "Jobs and money", body: "pg-boss jobs on Postgres, and payment webhooks with reconciliation and dispute handling." },
    ],
    contact: ["Need a product built", "end to end?"],
  },
  pt: {
    alt: "/agoraaqui",
    back: "Apps · Estudo de caso, 2026",
    h1: "agoraaqui, o site do pequeno negócio que você vê antes de pagar",
    lede: "Um serviço que cria o site de um pequeno negócio brasileiro, uma dentista, uma barbearia, uma fisioterapeuta, e mostra pronto no WhatsApp antes de qualquer pagamento. O dono aprova, paga uma vez e o site entra no ar em seunegocio.agoraaqui.com.br. A Linear Craft opera o serviço, e eu construí tudo: a oferta, a vitrine, a plataforma dos sites e o sistema de vendas por trás.",
    facts: [
      { label: "Papel", value: "Produto, design, engenharia e vendas" },
      { label: "Superfícies", value: "Web e WhatsApp" },
      { label: "Stack", value: "Next.js, Postgres, Claude, WhatsApp" },
    ],
    live: "Site",
    heroAlt: "Home do agoraaqui no celular: Seu site no ar. Agora aqui., com o botão do WhatsApp e um site de exemplo abaixo",
    loop: {
      eyebrow: "A oferta",
      title: "Primeiro o site, depois a conta.",
      body: "O dono de um pequeno negócio já ouviu muita promessa sobre site. Aqui a promessa é o próprio site pronto, com o nome, as cores e as fotos dele, e a única decisão que sobra é se ele gostou.",
      steps: [
        { title: "Prévia", body: "Montamos o site com os dados públicos do negócio e mandamos o link no WhatsApp." },
        { title: "Aprovação", body: "O dono diz sim ou pede outra opção. Nada é cobrado antes do sim." },
        { title: "No ar", body: "Um pagamento, e o site entra no ar no próprio endereço dentro de agoraaqui.com.br." },
        { title: "Fica no ar", body: "Um plano de hospedagem mantém o site, com a opção de domínio próprio." },
      ],
    },
    app: {
      eyebrow: "Os sites",
      title: "Uma plataforma, uma cara para cada negócio.",
      body: "Todo site roda no mesmo app, mas cada profissão ganha layout, tipografia e cores próprios. Todos levam ao mesmo lugar: uma mensagem de WhatsApp que o cliente só precisa enviar.",
    },
    screens: [
      { title: "Uma dentista", body: "Acolhedor, calmo e claro sobre crianças e pacientes com necessidades especiais." },
      { title: "Outra dentista, outra cara", body: "Mesma profissão, outra pessoa, então outra paleta e outra voz." },
      { title: "Uma fisioterapeuta", body: "Uma serifa editorial para um atendimento feito de sessões longas e cuidadosas." },
      { title: "A mensagem já vem escrita", body: "O cliente marca o que precisa e o texto do WhatsApp se escreve sozinho." },
      { title: "Horário e dúvidas na frente", body: "Dias de atendimento e uma mensagem pronta antes da primeira pergunta." },
      { title: "Como funciona, na vitrine", body: "A home do agoraaqui explica a oferta em quatro passos, em palavras simples." },
    ],
    screenAlt: (title: string) => `Site do agoraaqui no celular: ${title}`,
    note: "Sites de clientes no ar e a vitrine do agoraaqui, capturados no celular.",
    system: {
      eyebrow: "Marca da vitrine",
      title: "Papel, tinta e um ponto vermelho.",
      body: "A vitrine parece um bilhete impresso: papel quente, tinta quase preta e um ponto laranja-avermelhado que marca a ação. Funnel Display compõe os títulos; Funnel Sans cuida do texto. Os sites dos clientes nunca usam essa marca: cada um ganha a sua.",
      display: "Funnel Display · títulos",
      displaySample: "Seu site no ar. Agora aqui.",
      body2: "Funnel Sans · texto",
      bodySample: "Você recebe a prévia no WhatsApp",
      paletteLabel: "Paleta da marca",
      swatches: ["Caneta (ação)", "Tinta", "Papel", "Noite", "Apagado", "Sobre a noite"],
    },
    platform: {
      eyebrow: "Atrás do balcão",
      title: "Vendido por um agente de IA.",
      body: "Ninguém na Linear Craft vende o agoraaqui na mão. A Sales Factory, nosso próprio sistema de vendas, encontra os negócios, monta as prévias, conversa com os donos no WhatsApp, cobra e publica o site.",
      link: "Ver o case da Sales Factory",
    },
    stackTitle: { eyebrow: "Por dentro", title: "Feito para publicar e continuar no ar." },
    stack: [
      { area: "Sites", body: "Um app Next.js na Vercel atende todo negócio no próprio subdomínio. Os tenants ficam num Postgres no Neon, em São Paulo." },
      { area: "Vitrine", body: "HTML estático gerado por um script pequeno: sem framework, sem cookies, sem analytics. As páginas de comparação citam fontes datadas para cada afirmação." },
      { area: "Jobs e dinheiro", body: "Jobs pg-boss no Postgres e webhooks de pagamento com conciliação e tratamento de contestações." },
    ],
    contact: ["Precisa de um produto", "de ponta a ponta?"],
  },
} as const;

export function AgoraaquiCase({ lang }: { lang: Lang }) {
  const t = agoraaquiCopy[lang];
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
                <a href={SITE} rel="noreferrer" target="_blank">agoraaqui.com.br ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1434} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/agoraaqui/hero.webp" width={660} />
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
                    src={`/apps/agoraaqui/${shots[index]}.webp`}
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
          <div className={`${s.specimen} ${display.variable} ${sans.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.display}</span>
              <p
                className={s.sample}
                style={{ fontFamily: "var(--font-funnel-display)", fontWeight: 600, fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.02em" }}
              >
                {t.system.displaySample}
              </p>
              <span className={s.label}>{t.system.body2}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-funnel-sans)", fontSize: "clamp(20px, 2vw, 26px)" }}>
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
            <Link className={s.darkLink} href={lang === "pt" ? "/pt/sales-factory" : "/sales-factory"}>
              {t.platform.link} <span aria-hidden="true">→</span>
            </Link>
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
