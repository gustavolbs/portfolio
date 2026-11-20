import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: "800", variable: "--font-nunito", display: "swap" });

const TINT = "#CFE4D5";
const shots = ["client", "visit", "amount", "photos", "reminder", "new-client"] as const;
const palette = ["#EEF3EC", "#1F5D4C", "#B5532F", "#1F3A33", "#CFE4D5", "#4F6B62"] as const;

export const fioCopy = {
  en: {
    alt: "/pt/fio",
    back: "Lab · In design, 2026",
    h1: "Fio, every client's color history in one thread",
    lede: "A record book for independent hair colorists in Brazil and the US. Each client keeps her formulas, before and after photos and a return date. The next visit starts from a copy of the last one, and on the return date the colorist gets a ready WhatsApp message to send. I took it from market research to approved screens, architecture, pricing and store copy.",
    site: "https://fio.linearcraft.dev/en/",
    facts: [
      { label: "Role", value: "Research, product and design" },
      { label: "Platforms", value: "iOS and Android, Portuguese and English" },
      { label: "Status", value: "Screens approved, code next" },
      { label: "Price", value: "10 clients free, then $3.99 a month or $29.99 a year" },
    ],
    heroAlt: "Fio client list with avatars and the date of each client's last visit",
    rules: {
      eyebrow: "What the research changed",
      title: "The basics are a commodity. The return visit is not.",
      body: "Ten formula apps appeared in three months, all with the same private notebook, grams and photos. Reviews of the leader complain about locked records and lost data, not about features. So Fio competes on trust and on bringing the client back.",
      steps: [
        { title: "Repeat last visit", body: "One button copies the last formula into a new visit. The colorist changes only what changed today." },
        { title: "Formulas as data", body: "Each mix has lines with brand, shade and amount, developer volume and ratio, processing time and the area of the hair." },
        { title: "Return on WhatsApp", body: "A local reminder on the return date opens WhatsApp with a message she can edit. The app never sends anything by itself." },
        { title: "Never held hostage", body: "When the free limit or a subscription ends, every record and photo stays readable. She only stops adding new clients." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "Built for the chair, not the desk.",
      body: "Large targets, big numbers and one main action per screen, so a record takes seconds between two clients.",
    },
    screens: [
      { title: "The client", body: "Notes, the visit history with photos and formulas, and Repeat last visit in reach." },
      { title: "A visit", body: "Mixes copied from the last visit, split by root, lengths and ends, with grams and time." },
      { title: "Adjust the amount", body: "Change one product in steps of 5 grams without retyping the formula." },
      { title: "Photos and return", body: "Before and after photos, a return in 4, 6 or 8 weeks and a free note." },
      { title: "The reminder", body: "A message ready to edit, with snooze a week, dismiss and Open WhatsApp." },
      { title: "A new client", body: "Name and WhatsApp number first. Birthday and notes are optional." },
    ],
    screenAlt: (title: string) => `Fio screen design: ${title}`,
    note: "Approved screen designs in Portuguese, rendered from the design canvas. The app ships in Portuguese and English. Names and photos are illustrative.",
    system: {
      eyebrow: "Design system",
      title: "Sage, cream and terracotta.",
      body: "A colorist's bench in soft 2.5D sets the tone. A pale sage background lets real hair colors read true, white cards hold the data and terracotta marks the one action that matters. Nunito sets titles, names and buttons; the system font carries everything else.",
      display: "Nunito ExtraBold · titles and buttons",
      displaySample: "Repeat last visit",
      body2: "System font · formulas",
      bodySample: "7.1 + 6.34 · 20 vol · 35 min",
      paletteLabel: "Tokens",
      swatches: ["Sage background", "Deep green", "Terracotta", "Ink", "Selected chip", "Secondary"],
    },
    platform: {
      eyebrow: "Architecture",
      title: "No server in version one.",
      body: "Clients, visits and photos live on the phone. The first version goes to review without a backend; login and a cloud backup come in version two.",
      steps: [
        { title: "SQLite shaped for D1", body: "Plain SQL on expo-sqlite with the same schema Cloudflare D1 uses, so the backup in version two needs no rewrite." },
        { title: "Photos kept light", body: "Each photo is resized to 1600 px and saved in the app folder, out of the gallery and out of the database." },
        { title: "Reminders within limits", body: "iOS keeps at most 64 local notifications per app, so Fio schedules the next 60 and refreshes the list on every open." },
      ],
      chipsAria: "Engineering rules",
      chips: ["No health fields by design", "UUIDs for future sync", "Purchases without login", "Grams or ounces, set on first use"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "One phone, no backend." },
    stack: [
      { area: "Mobile", body: "Expo and React Native with expo-sqlite, expo-image-picker and local notifications, one codebase for iPhone and Android." },
      { area: "Data", body: "Plain SQL with UUIDs and an updated-at on every record, ready for a D1 and R2 backup later." },
      { area: "Payments", body: "RevenueCat with an anonymous id. Restore purchases uses the store account, so no login is needed." },
      { area: "Language", body: "Portuguese and English in the same build. The weight unit is chosen on first use and can change in Settings." },
      { area: "Art", body: "AI-generated avatars, hair photos, welcome scene and icon, with the prompts kept for every image." },
      { area: "Process", body: "Market, scope, visual, screens, architecture, technology and store stages, each closed with a written decision." },
    ],
    contact: ["Have an app idea", "worth testing?"],
  },
  pt: {
    alt: "/fio",
    back: "Lab · Em design, 2026",
    h1: "Fio, a história de cor de cada cliente num fio só",
    lede: "Uma ficha para coloristas autônomas no Brasil e nos EUA. Cada cliente guarda suas fórmulas, fotos de antes e depois e uma data de retorno. A próxima visita começa de uma cópia da anterior, e no dia do retorno a colorista recebe uma mensagem de WhatsApp pronta para enviar. Levei da pesquisa de mercado às telas aprovadas, arquitetura, preço e textos da loja.",
    site: "https://fio.linearcraft.dev/",
    facts: [
      { label: "Papel", value: "Pesquisa, produto e design" },
      { label: "Plataformas", value: "iOS e Android, português e inglês" },
      { label: "Status", value: "Telas aprovadas, código em seguida" },
      { label: "Preço", value: "10 clientes grátis, depois R$ 12,90 por mês ou R$ 99,90 por ano" },
    ],
    heroAlt: "Lista de clientes do Fio com avatares e a data da última visita de cada uma",
    rules: {
      eyebrow: "O que a pesquisa mudou",
      title: "O básico virou commodity. O retorno da cliente não.",
      body: "Dez apps de fórmula apareceram em três meses, todos com o mesmo caderno privado, gramas e fotos. As avaliações do líder reclamam de ficha bloqueada e dado perdido, não de função. Então o Fio compete em confiança e em trazer a cliente de volta.",
      steps: [
        { title: "Repetir última visita", body: "Um botão copia a última fórmula para uma visita nova. A colorista muda só o que mudou hoje." },
        { title: "Fórmula como dado", body: "Cada mistura tem linhas com marca, tom e quantidade, volume e proporção do oxidante, tempo de pausa e a área do cabelo." },
        { title: "Retorno no WhatsApp", body: "Um lembrete local no dia do retorno abre o WhatsApp com uma mensagem que ela pode editar. O app nunca envia nada sozinho." },
        { title: "Nunca refém", body: "Quando o limite grátis ou a assinatura acabam, toda ficha e foto continuam legíveis. Ela só deixa de cadastrar clientes novas." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Feito para a cadeira, não para a mesa.",
      body: "Alvos grandes, números grandes e uma ação principal por tela, para um registro levar segundos entre duas clientes.",
    },
    screens: [
      { title: "A cliente", body: "Observações, o histórico de visitas com fotos e fórmulas, e Repetir última visita ao alcance." },
      { title: "Uma visita", body: "Misturas copiadas da visita anterior, por raiz, comprimento e pontas, com gramas e tempo." },
      { title: "Ajustar quantidade", body: "Mude um produto de 5 em 5 gramas sem redigitar a fórmula." },
      { title: "Fotos e retorno", body: "Fotos de antes e depois, retorno em 4, 6 ou 8 semanas e uma nota livre." },
      { title: "O lembrete", body: "Uma mensagem pronta para editar, com adiar 1 semana, dispensar e Abrir WhatsApp." },
      { title: "Cliente nova", body: "Nome e WhatsApp primeiro. Aniversário e observações são opcionais." },
    ],
    screenAlt: (title: string) => `Desenho de tela do Fio: ${title}`,
    note: "Desenhos de tela aprovados, renderizados do canvas de design. Nomes e fotos são ilustrativos.",
    system: {
      eyebrow: "Design system",
      title: "Sálvia, creme e terracota.",
      body: "Uma bancada de colorista em 2,5D suave dá o tom. Um fundo sálvia claro deixa a cor real do cabelo aparecer, cartões brancos guardam os dados e a terracota marca a única ação que importa. Nunito compõe títulos, nomes e botões; a fonte do sistema cuida do resto.",
      display: "Nunito ExtraBold · títulos e botões",
      displaySample: "Repetir última visita",
      body2: "Fonte do sistema · fórmulas",
      bodySample: "7.1 + 6.34 · 20 vol · 35 min",
      paletteLabel: "Tokens",
      swatches: ["Fundo sálvia", "Verde profundo", "Terracota", "Tinta", "Chip selecionado", "Secundário"],
    },
    platform: {
      eyebrow: "Arquitetura",
      title: "Sem servidor na versão um.",
      body: "Clientes, visitas e fotos ficam no celular. A primeira versão vai para a revisão sem backend; login e cópia na nuvem chegam na versão dois.",
      steps: [
        { title: "SQLite no formato do D1", body: "SQL direto no expo-sqlite com o mesmo esquema do Cloudflare D1, então a cópia da versão dois não pede reescrita." },
        { title: "Fotos leves", body: "Cada foto é reduzida para 1600 px e salva na pasta do app, fora da galeria e fora do banco." },
        { title: "Lembretes dentro do limite", body: "O iOS guarda no máximo 64 notificações locais por app, então o Fio agenda as 60 mais próximas e refaz a lista a cada abertura." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Sem campos de saúde por design", "UUIDs para o sync futuro", "Compra sem login", "Gramas ou onças, no primeiro uso"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Um celular, nenhum backend." },
    stack: [
      { area: "Mobile", body: "Expo e React Native com expo-sqlite, expo-image-picker e notificações locais, um código para iPhone e Android." },
      { area: "Dados", body: "SQL direto com UUID e data de alteração em todo registro, pronto para uma cópia em D1 e R2 depois." },
      { area: "Pagamento", body: "RevenueCat com id anônimo. Restaurar compras usa a conta da loja, então não precisa de login." },
      { area: "Idioma", body: "Português e inglês no mesmo build. A unidade de peso é escolhida no primeiro uso e muda nos Ajustes." },
      { area: "Arte", body: "Avatares, fotos de cabelo, cena de boas-vindas e ícone gerados por IA, com os prompts guardados para cada imagem." },
      { area: "Processo", body: "Etapas de mercado, escopo, visual, telas, arquitetura, tecnologia e loja, cada uma fechada com uma decisão escrita." },
    ],
    contact: ["Tem uma ideia de app", "que vale testar?"],
  },
} as const;

export function FioCase({ lang }: { lang: Lang }) {
  const t = fioCopy[lang];
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
            <a href={t.site} target="_blank" rel="noreferrer">fio.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1391} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/fio/clients.webp" width={660} />
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
                    height={1391}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`/apps/fio/${shots[index]}.webp`}
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
