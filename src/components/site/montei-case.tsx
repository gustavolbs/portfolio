import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: "800", variable: "--font-nunito", display: "swap" });

const TINT = "#F6E4D3";
const shots = ["budget", "bedroom", "item", "plan", "shop", "send"] as const;
const palette = ["#FBF5EC", "#A8461F", "#2B1D16", "#4F7242", "#E9B872", "#F6E4D3"] as const;

export const monteiCopy = {
  en: {
    alt: "/pt/montei",
    back: "Lab · In design, 2026",
    h1: "Montei, a new home that fills up as you buy",
    lede: "A checklist and budget for Brazilians setting up their first home: couples moving in together and people leaving their parents' place. A ready catalog of 138 items in 10 rooms, a spending cap that builds the shopping list for you, and a room scene at the top of each screen that gains a piece of furniture every time you mark something as bought.",
    site: "https://montei.linearcraft.dev/",
    facts: [
      { label: "Role", value: "Research, product and design" },
      { label: "Platforms", value: "iOS and Android, Brazil" },
      { label: "Status", value: "Screens approved, scene pipeline in tests" },
      { label: "Revenue", value: "Affiliate links in a curated shop" },
    ],
    heroAlt: "Montei kitchen screen: an illustrated kitchen half furnished, the room's budget and the item checklist",
    rules: {
      eyebrow: "What the research changed",
      title: "People do not know what is missing.",
      body: "Setting up a home costs tens of thousands of reais, and the competing apps have five reviews or fewer each. Montei starts full instead of empty, and turns progress into something you can see.",
      steps: [
        { title: "Starts full", body: "Turn rooms on in the first minute and the list is already there, with Before and After the move and an estimated price for each item." },
        { title: "Cap first", body: "Tell the app how much you can spend. It orders the essentials first and splits the rest into Buy now and When there is money left." },
        { title: "Progress you can see", body: "Each purchase puts the furniture into the room scene. A finished room gets a Ready badge." },
        { title: "Share by text", body: "Send what is still missing, room by room, to WhatsApp. It replaces sync in the first version." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "A house, room by room.",
      body: "Four tabs: Home, Plan, Shop and Send. Estimated prices show a tilde and are replaced the moment you type what you paid.",
    },
    screens: [
      { title: "How much can you spend", body: "Each budget range shows the same kitchen furnished at that level, so the number means something." },
      { title: "A room in progress", body: "The bedroom scene has the wardrobe and the bed; bedding and the rug are still missing." },
      { title: "The item", body: "Model chips with a default, an estimated price, and View offers or I already bought it." },
      { title: "Your plan", body: "What you spent against the cap, with Buy now and When there is money left in two lists." },
      { title: "The shop", body: "Three to six curated products per item, with photo, rating and a dated price." },
      { title: "Send the list", body: "Only what is missing or everything, as plain text grouped by room." },
    ],
    screenAlt: (title: string) => `Montei screen design: ${title}`,
    note: "Approved screen designs in Portuguese, rendered from the design canvas. Prices are illustrative estimates.",
    system: {
      eyebrow: "Design system",
      title: "Terracotta, cream and warm light.",
      body: "Rooms in soft 2.5D, lit like late afternoon, sit on a cream background. Terracotta carries the action and the progress bar, green marks what is bought. Nunito sets titles, totals and buttons; the system font carries the lists.",
      display: "Nunito ExtraBold · titles and totals",
      displaySample: "Cozinha pronta",
      body2: "System font · lists",
      bodySample: "Jogo de panelas · ~R$ 327",
      paletteLabel: "Tokens",
      swatches: ["Cream", "Terracotta", "Ink", "Green, bought", "Honey", "Terracotta light"],
    },
    platform: {
      eyebrow: "Architecture",
      title: "A scene made of pieces.",
      body: "Every room is a base image plus one transparent piece per item, placed by coordinates in a JSON file. The hard part is making AI-generated furniture fit a room it did not draw.",
      steps: [
        { title: "Pieces, not frames", body: "Each piece is cropped to the furniture and carries x, y and width, so a room of twelve items stays under a few hundred kilobytes." },
        { title: "Five tests to one", body: "Diffing edited images cut shadows into jagged outlines and repainted neighbors. Native alpha output from the image model was the first approach that held." },
        { title: "Only what is on screen", body: "The app loads the open room and its neighbors, and keeps small thumbnails on the phone instead of drawing ten scenes." },
      ],
      chipsAria: "Engineering rules",
      chips: ["No backend, no account in v1", "Catalog and prices as JSON on R2", "Prices dated, valid 30 days", "UUIDs for future sync"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Local app, remote catalog." },
    stack: [
      { area: "Data", body: "Everything the person types stays on the phone. Items get UUIDs so sync can come later without a migration." },
      { area: "Catalog", body: "Items, reference prices, shops and affiliate ids live in static JSON on Cloudflare R2, so they change without a store release." },
      { area: "List rule", body: "The shopping list is built on the phone from the cap, the rooms turned on and what the person already has." },
      { area: "Shop", body: "A curated catalog with photos and notes copied once, prices with a date, a weekly local refresh and no ads." },
      { area: "Art", body: "AI-generated rooms and furniture pieces with native transparency, trimmed and given a contact shadow by script." },
      { area: "Budget", body: "Targets of 400 KB per base, 60 KB per piece and 8 MB for all ten rooms." },
    ],
    contact: ["Have an app idea", "worth testing?"],
  },
  pt: {
    alt: "/montei",
    back: "Lab · Em design, 2026",
    h1: "Montei, a casa nova que se enche a cada compra",
    lede: "Checklist e orçamento para quem monta a primeira casa: casais indo morar juntos e quem sai da casa dos pais. Um catálogo pronto de 138 itens em 10 cômodos, um teto de gasto que monta a lista de compras para você e uma cena do cômodo no topo de cada tela, que ganha um móvel a cada item marcado como comprado.",
    site: "https://montei.linearcraft.dev/",
    facts: [
      { label: "Papel", value: "Pesquisa, produto e design" },
      { label: "Plataformas", value: "iOS e Android, Brasil" },
      { label: "Status", value: "Telas aprovadas, cenas em teste" },
      { label: "Receita", value: "Links de afiliado numa loja curada" },
    ],
    heroAlt: "Tela da cozinha no Montei: uma cozinha ilustrada pela metade, o orçamento do cômodo e a lista de itens",
    rules: {
      eyebrow: "O que a pesquisa mudou",
      title: "A pessoa não sabe o que falta.",
      body: "Montar uma casa custa dezenas de milhares de reais, e os apps concorrentes têm no máximo cinco avaliações cada. O Montei começa cheio em vez de vazio, e transforma o progresso em algo que se vê.",
      steps: [
        { title: "Começa cheio", body: "Ligue os cômodos no primeiro minuto e a lista já está lá, com Antes e Depois da mudança e um preço estimado por item." },
        { title: "Teto primeiro", body: "Diga quanto pode gastar. O app põe o essencial primeiro e divide o resto em Comprar agora e Quando sobrar." },
        { title: "Progresso que se vê", body: "Cada compra coloca o móvel na cena do cômodo. Cômodo completo ganha o selo Pronto." },
        { title: "Envia por texto", body: "Mande o que falta, cômodo por cômodo, para o WhatsApp. Substitui o sync na primeira versão." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Uma casa, cômodo por cômodo.",
      body: "Quatro abas: Casa, Plano, Loja e Enviar. O preço estimado aparece com um til e é trocado assim que você digita quanto pagou.",
    },
    screens: [
      { title: "Quanto você pode gastar", body: "Cada faixa de orçamento mostra a mesma cozinha mobiliada naquele nível, para o número fazer sentido." },
      { title: "Um cômodo em andamento", body: "A cena do quarto já tem guarda-roupa e cama; faltam roupa de cama e tapete." },
      { title: "O item", body: "Chips de modelo com um padrão, preço estimado, e Ver ofertas ou Já comprei." },
      { title: "Seu plano", body: "O gasto contra o teto, com Comprar agora e Quando sobrar em duas listas." },
      { title: "A loja", body: "De três a seis produtos curados por item, com foto, nota e preço com data." },
      { title: "Enviar a lista", body: "Só o que falta ou tudo, em texto simples por cômodo." },
    ],
    screenAlt: (title: string) => `Desenho de tela do Montei: ${title}`,
    note: "Desenhos de tela aprovados, renderizados do canvas de design. Os preços são estimativas ilustrativas.",
    system: {
      eyebrow: "Design system",
      title: "Terracota, creme e luz quente.",
      body: "Cômodos em 2,5D suave, com luz de fim de tarde, sobre fundo creme. A terracota leva a ação e a barra de progresso, o verde marca o que já foi comprado. Nunito compõe títulos, totais e botões; a fonte do sistema cuida das listas.",
      display: "Nunito ExtraBold · títulos e totais",
      displaySample: "Cozinha pronta",
      body2: "Fonte do sistema · listas",
      bodySample: "Jogo de panelas · ~R$ 327",
      paletteLabel: "Tokens",
      swatches: ["Creme", "Terracota", "Tinta", "Verde, comprado", "Mel", "Terracota clara"],
    },
    platform: {
      eyebrow: "Arquitetura",
      title: "Uma cena feita de peças.",
      body: "Cada cômodo é uma imagem base mais uma peça transparente por item, posicionada por coordenadas num JSON. A parte difícil é fazer um móvel gerado por IA caber num cômodo que ela não desenhou.",
      steps: [
        { title: "Peças, não quadros", body: "Cada peça é recortada no tamanho do móvel e leva x, y e largura, então um cômodo de doze itens fica em poucas centenas de kilobytes." },
        { title: "Cinco testes até um", body: "A diferença entre imagens editadas cortava a sombra em contornos duros e repintava os vizinhos. A saída com alfa nativo do modelo de imagem foi a primeira que funcionou." },
        { title: "Só o que está na tela", body: "O app carrega o cômodo aberto e os vizinhos, e guarda miniaturas pequenas no celular em vez de desenhar dez cenas." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Sem backend nem conta na v1", "Catálogo e preços em JSON no R2", "Preço com data, vale 30 dias", "UUIDs para o sync futuro"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "App local, catálogo remoto." },
    stack: [
      { area: "Dados", body: "Tudo o que a pessoa digita fica no celular. Os itens têm UUID para o sync entrar depois sem migração." },
      { area: "Catálogo", body: "Itens, preços de referência, lojas e ids de afiliado ficam em JSON estático no Cloudflare R2, e mudam sem publicar versão." },
      { area: "Regra da lista", body: "A lista de compras é montada no celular a partir do teto, dos cômodos ligados e do que a pessoa já tem." },
      { area: "Loja", body: "Catálogo curado com foto e nota copiadas uma vez, preço com data, atualização semanal local e sem anúncios." },
      { area: "Arte", body: "Cômodos e peças de móvel gerados por IA com transparência nativa, recortados e com sombra de contato por script." },
      { area: "Orçamento", body: "Metas de 400 KB por base, 60 KB por peça e 8 MB para os dez cômodos." },
    ],
    contact: ["Tem uma ideia de app", "que vale testar?"],
  },
} as const;

export function MonteiCase({ lang }: { lang: Lang }) {
  const t = monteiCopy[lang];
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
          </dl>
          <div className={s.links}>
            <a href={t.site} target="_blank" rel="noreferrer">montei.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1435} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/montei/kitchen.webp" width={660} />
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="rules-title">
        <div className={home.wrap}>
          <CaseHead id="rules-title" eyebrow={t.rules.eyebrow} title={t.rules.title}>
            {t.rules.body}
          </CaseHead>
          <ol className={`${s.principles} reveal`}>
            {t.rules.steps.map((step, index) => (
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
                    height={1435}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`/apps/montei/${shots[index]}.webp`}
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
          <div className={`${s.specimen} ${nunito.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.display}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-nunito)", fontWeight: 800, fontSize: "clamp(34px, 4.2vw, 54px)", letterSpacing: "-0.01em" }}>
                {t.system.displaySample}
              </p>
              <span className={s.label}>{t.system.body2}</span>
              <p className={s.sample} style={{ fontFamily: "system-ui, sans-serif", fontSize: "clamp(20px, 2vw, 26px)" }}>
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
