import Image from "next/image";
import Link from "next/link";
import { El_Messiri } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const messiri = El_Messiri({ subsets: ["latin"], weight: "700", variable: "--font-messiri", display: "swap" });

const TINT = "#E9D9BD";
const shots = ["item", "level", "today", "share", "bought", "arabic"] as const;
const palette = ["#2C150D", "#F6EFE4", "#2A1810", "#1E5B45", "#8A5A12", "#E3B04B"] as const;

export const galerieCopy = {
  en: {
    alt: "/pt/galerie",
    back: "Lab · In design, 2026",
    h1: "Galerie, a catalog for your perfume collection",
    site: "https://galerie.linearcraft.dev/en/",
    lede: "An app for perfume collectors with 20 to 100 bottles. It tracks what you have and what you want, what you paid, how much is left in each bottle and decant, and which one to wear today. It launches in Portuguese, English and Arabic, for Brazil, the US and the Gulf.",
    facts: [
      { label: "Role", value: "Research, product, design and architecture" },
      { label: "Platforms", value: "iOS and Android, Brazil, US and the Gulf" },
      { label: "Status", value: "Screens and architecture closed, about 76 h to build" },
      { label: "Name", value: "Working title, final name still open" },
    ],
    heroAlt: "Galerie home screen: the collection value on a dark banner, recently used bottles, today's pick and the bottles idle the longest",
    rules: {
      eyebrow: "What the research changed",
      title: "Collectors keep it in notes and spreadsheets.",
      body: "The Arabic perfume wave reached Brazil, and collection apps in the Brazilian store have two reviews or fewer. Galerie replaces the spreadsheet with a list you fill by searching, not typing.",
      steps: [
        { title: "Find, don't type", body: "A catalog of thousands of designer, niche, Arabic and Brazilian perfumes ships inside the app, with offline search. Anything missing can be typed by hand." },
        { title: "One list", body: "Each entry is a bottle or a decant, and Want or Have. Buying flips Want to Have, and the collection value counts only what you have." },
        { title: "Which one today", body: "Suggest picks the bottle idle the longest; Shuffle picks at random. Both skip empty bottles, and Used today records the date." },
        { title: "Three languages on day one", body: "Portuguese, English and Arabic from right to left, with one currency chosen by the user and no conversion." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "A shelf in your pocket.",
      body: "Home opens on the collection value, the bottles used recently, today's pick and two tabs, Have and Want. The level reads in % or ml with a switch.",
    },
    screens: [
      { title: "The bottle", body: "Photo, house, size, price paid, purchase date, last use and a free note." },
      { title: "How much is left", body: "A slider in % or ml. The app stores milliliters and works out the percentage." },
      { title: "Which one today", body: "The bottle idle the longest, with Another suggestion or Shuffle." },
      { title: "Share the collection", body: "Three card layouts, label, museum piece and shelf. The value stays off until you turn it on." },
      { title: "I bought it", body: "Moving an item from Want to Have asks for the price paid." },
      { title: "In Arabic", body: "The whole layout mirrors right to left. Digits stay Western, as Gulf retailers show them." },
    ],
    screenAlt: (title: string) => `Galerie screen design: ${title}`,
    note: "Approved screen designs, rendered from the design canvas. Bottles are AI-generated concepts and the perfume names are invented.",
    system: {
      eyebrow: "Design system",
      title: "Dark wood, gold and emerald.",
      body: "A 2.5D scene of dark wood and amber light lives only in the top banner. Everything else sits on cream panels, so the user's own bottle photos bring the color. Emerald is the action, gold marks Want. El Messiri covers Latin and Arabic for titles, names and buttons; the system font carries the rest. Light mode only in v1.",
      display: "El Messiri Bold · titles, names and buttons",
      displaySample: "Noite de Oud",
      body2: "System font · details",
      bodySample: "Parado há 41 dias · 55%",
      paletteLabel: "Tokens",
      swatches: ["Banner", "Cream", "Ink", "Emerald, action", "Gold, Want", "Light gold"],
    },
    platform: {
      eyebrow: "Architecture",
      title: "Everything stays on the phone.",
      body: "No account and no server in v1. The collection lives in SQLite and rides the system backup, iCloud or Google. Subscriptions go through RevenueCat with an anonymous id.",
      steps: [
        { title: "A catalog built, not copied", body: "Brand and perfume names are public facts. The catalog was assembled by research instead of copying any site's database, and the top houses are checked against official sites before launch." },
        { title: "Search in two scripts", body: "Each row has a normalized, indexed search column. Latin drops case and accents; Arabic drops vowel marks and unifies alef, ya and ta marbuta." },
        { title: "Photos outside the backup", body: "Photos are resized to 1600 px and kept out of the system backup, so Android's 25 MB cap cannot break it. Text comes back on a new phone; photos follow in v2." },
      ],
      chipsAria: "Engineering rules",
      chips: ["No brand names in store listings", "Prices stored as integer cents", "UUIDs ready for D1 sync", "Share card rendered on the phone"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Local first, built to sync later." },
    stack: [
      { area: "App", body: "React Native with Expo and a dev client, the same base as the other lab apps." },
      { area: "Data", body: "expo-sqlite with plain SQL migrations, UUID keys, millisecond timestamps and soft deletes, ready to move to Cloudflare D1." },
      { area: "Catalog", body: "Separate tables that change only with an app release. Each item keeps its own copy of brand and name, so a catalog change never breaks it." },
      { area: "Share card", body: "react-native-view-shot captures a fixed-size component and expo-sharing opens the system share sheet. Nothing goes to a server." },
      { area: "Payments", body: "RevenueCat in the app, with Restore purchases in the paywall and in Settings. The free limit is counted on the phone." },
      { area: "Tests", body: "Jest for search normalization, number parsing and level math, Maestro for the flows, and real devices in both writing directions." },
    ],
    contact: ["Have an app idea", "worth testing?"],
  },
  pt: {
    alt: "/galerie",
    back: "Lab · Em design, 2026",
    h1: "Galerie, o catálogo da sua coleção de perfumes",
    site: "https://galerie.linearcraft.dev/",
    lede: "Um app para quem coleciona perfume, com 20 a 100 frascos. Ele guarda o que você tem e o que quer, quanto pagou, quanto resta em cada frasco e decant, e qual usar hoje. Sai em português, inglês e árabe, para Brasil, Estados Unidos e Golfo.",
    facts: [
      { label: "Papel", value: "Pesquisa, produto, design e arquitetura" },
      { label: "Plataformas", value: "iOS e Android, Brasil, EUA e Golfo" },
      { label: "Status", value: "Telas e arquitetura fechadas, cerca de 76 h de construção" },
      { label: "Nome", value: "Provisório, nome final em aberto" },
    ],
    heroAlt: "Tela inicial do Galerie: o valor da coleção num banner escuro, frascos usados recentemente, a escolha de hoje e os frascos parados há mais tempo",
    rules: {
      eyebrow: "O que a pesquisa mudou",
      title: "Colecionador guarda tudo em nota e planilha.",
      body: "A febre de perfume árabe chegou ao Brasil, e os apps de coleção da loja brasileira têm no máximo duas avaliações. O Galerie troca a planilha por uma lista que se enche buscando, não digitando.",
      steps: [
        { title: "Busque, não digite", body: "Um catálogo com milhares de perfumes de grife, nicho, árabes e brasileiros vem dentro do app, com busca offline. O que faltar dá para digitar à mão." },
        { title: "Uma lista só", body: "Cada item é frasco ou decant, e Quero ou Tenho. Comprar troca Quero por Tenho, e o valor da coleção conta só o que você tem." },
        { title: "Qual usar hoje", body: "Sugerir mostra o frasco parado há mais tempo; Sortear escolhe ao acaso. Os dois pulam frasco vazio, e Usei hoje grava a data." },
        { title: "Três idiomas no lançamento", body: "Português, inglês e árabe da direita para a esquerda, com uma moeda escolhida pelo usuário e sem conversão." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Uma estante no bolso.",
      body: "A tela inicial abre no valor da coleção, nos frascos usados recentemente, na escolha de hoje e em duas abas, Tenho e Quero. O nível aparece em % ou ml, com um switch.",
    },
    screens: [
      { title: "O frasco", body: "Foto, casa, tamanho, preço pago, data da compra, último uso e uma nota livre." },
      { title: "Quanto resta", body: "Um controle em % ou ml. O app guarda mililitros e calcula a porcentagem." },
      { title: "Qual usar hoje", body: "O frasco parado há mais tempo, com Outra sugestão ou Sortear." },
      { title: "Compartilhar a coleção", body: "Três layouts de card, etiqueta, peça de museu e estante. O valor fica desligado até você ligar." },
      { title: "Comprei", body: "Mover um item de Quero para Tenho pede o preço pago." },
      { title: "Em árabe", body: "O layout inteiro espelha da direita para a esquerda. Os algarismos ficam ocidentais, como as lojas do Golfo mostram." },
    ],
    screenAlt: (title: string) => `Desenho de tela do Galerie: ${title}`,
    note: "Desenhos de tela aprovados, renderizados do canvas de design. Os frascos são conceitos gerados por IA e os nomes dos perfumes são inventados.",
    system: {
      eyebrow: "Design system",
      title: "Madeira escura, dourado e esmeralda.",
      body: "Uma cena em 2,5D de madeira escura e luz âmbar fica só no banner do topo. O resto é painel creme, para a foto do frasco do próprio usuário trazer a cor. Esmeralda é a ação, dourado marca o Quero. El Messiri cobre latim e árabe em títulos, nomes e botões; a fonte do sistema cuida do resto. Só modo claro na v1.",
      display: "El Messiri Bold · títulos, nomes e botões",
      displaySample: "Noite de Oud",
      body2: "Fonte do sistema · detalhes",
      bodySample: "Parado há 41 dias · 55%",
      paletteLabel: "Tokens",
      swatches: ["Banner", "Creme", "Tinta", "Esmeralda, ação", "Ouro, Quero", "Ouro claro"],
    },
    platform: {
      eyebrow: "Arquitetura",
      title: "Tudo fica no celular.",
      body: "Sem conta e sem servidor na v1. A coleção vive no SQLite e entra no backup do sistema, iCloud ou Google. A assinatura passa pelo RevenueCat com id anônimo.",
      steps: [
        { title: "Catálogo montado, não copiado", body: "Nome de marca e de perfume é fato público. O catálogo foi montado por pesquisa, sem copiar a base de nenhum site, e as maiores casas são conferidas nos sites oficiais antes do lançamento." },
        { title: "Busca em duas escritas", body: "Cada linha tem uma coluna de busca normalizada e com índice. No latim saem maiúsculas e acentos; no árabe saem os sinais de vogal, e alef, ya e ta marbuta são unificados." },
        { title: "Fotos fora do backup", body: "As fotos são reduzidas a 1600 px e ficam fora do backup do sistema, para o limite de 25 MB do Android não derrubá-lo. O texto volta num celular novo; as fotos chegam na v2." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Nenhuma marca nos textos das lojas", "Preço guardado em centavos inteiros", "UUIDs prontos para o sync no D1", "Card gerado no próprio celular"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Local primeiro, pronto para sync depois." },
    stack: [
      { area: "App", body: "React Native com Expo e dev client, a mesma base dos outros apps do lab." },
      { area: "Dados", body: "expo-sqlite com migrações em SQL puro, chaves UUID, datas em milissegundos e apagar só marcando, pronto para ir ao Cloudflare D1." },
      { area: "Catálogo", body: "Tabelas separadas que só mudam com uma versão do app. Cada item guarda a própria cópia de marca e nome, então mudar o catálogo nunca quebra a coleção." },
      { area: "Card", body: "O react-native-view-shot captura um componente de tamanho fixo e o expo-sharing abre a folha de compartilhamento. Nada vai para servidor." },
      { area: "Pagamento", body: "RevenueCat no app, com Restaurar compras no paywall e nos Ajustes. O limite grátis é contado no celular." },
      { area: "Testes", body: "Jest para a normalização da busca, a leitura de números e o cálculo do nível, Maestro para os fluxos, e aparelho real nas duas direções de escrita." },
    ],
    contact: ["Tem uma ideia de app", "que vale testar?"],
  },
} as const;

export function GalerieCase({ lang }: { lang: Lang }) {
  const t = galerieCopy[lang];
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
            <a href={t.site} target="_blank" rel="noreferrer">galerie.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1387} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/galerie/collection.webp" width={660} />
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
                    height={1387}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`/apps/galerie/${shots[index]}.webp`}
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
          <div className={`${s.specimen} ${messiri.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.display}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-messiri)", fontWeight: 700, fontSize: "clamp(36px, 4.4vw, 58px)" }}>
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
