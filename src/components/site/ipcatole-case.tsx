import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", variable: "--font-dm-serif", display: "swap" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

const TINT = "#e3f2ea";
const SITE = "https://ipcatole.org.br";
const shots = ["inicio", "igreja", "biblia", "agenda", "hinario", "videos"] as const;
const palette = ["#007A52", "#33463F", "#3ECB98", "#E3F2EA", "#1C1C1A", "#121413"] as const;

export const ipcatoleCopy = {
  en: {
    alt: "/pt/ipcatole",
    back: "Apps · Case study, 2026",
    h1: "IP Catolé, a whole congregation in one app",
    lede: "The app of a Presbyterian church in Brazil. Members see the next service, read and listen to the Bible, sing from the hymnal, follow each society's calendar and watch the live service. Leaders run all of it from the same app: notices, events, volunteer schedules and prayer requests. I designed and built it end to end, from the API to the store builds.",
    facts: [
      { label: "Role", value: "Product, design and engineering" },
      { label: "Surfaces", value: "iOS, Android and the public site" },
      { label: "Status", value: "Beta on TestFlight and Google Play" },
    ],
    live: "Church",
    heroAlt: "IP Catolé home screen with the next service, a campaign, shortcuts and the week's notices",
    rules: {
      eyebrow: "The rules",
      title: "Run by volunteers, real constraints.",
      body: "A volunteer office, members on every kind of phone and signal, and no budget for servers. Four rules decided most of the design.",
      steps: [
        { title: "Works offline", body: "The Bible, 409 hymns and the catechisms ship inside the app. Everything from the API is cached, so the last data stays on screen without a signal." },
        { title: "Leaders edit in the app", body: "The web admin panel was cut. Notices, events, schedules and members are managed from a Leadership area, by role." },
        { title: "Everything is editable", body: "Whatever a person creates gets an edit flow in the same step, not just create and delete." },
        { title: "Free tiers first", body: "Photos are resized before upload, and the live check spends about a fifth of the daily YouTube quota." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "Sunday and the rest of the week.",
      body: "Five tabs: Home, Calendar, Bible, Videos and Church. Shortcuts on Home open screens inside the other tabs, and back always returns to that tab's first screen.",
    },
    screens: [
      { title: "What is next", body: "The next service, the current campaign and the week's notices, with shortcuts to what people open most." },
      { title: "The church", body: "Service times, content, your own area and a way to talk to the leadership, in short groups." },
      { title: "Bible", body: "Almeida Revista e Atualizada with adjustable type, favorites and the New Testament in audio." },
      { title: "Calendar by society", body: "A dot per society on the month and a filter for each group, so youth and women's events never mix." },
      { title: "Hymnal with chords", body: "One search for number, title or verse, lyrics or chords, and previous and next for the service." },
      { title: "Videos and live", body: "The latest sermon, series by book, and a red dot on the tab while the service is live." },
    ],
    screenAlt: (title: string) => `IP Catolé app screen: ${title}`,
    note: "Screens from the iOS simulator with sample content.",
    system: {
      eyebrow: "Design system",
      title: "Quiet green, serif voice.",
      body: "The deep green of the church's logo carries big cards; a brighter green marks actions. DM Serif Display gives screens a printed, hymnal feel; DM Sans carries everything else. Every color has a light and a dark value, and the app follows the phone.",
      display: "DM Serif Display · titles",
      displaySample: "Paz do Senhor",
      body2: "DM Sans · interface",
      bodySample: "Next service · tomorrow, 10 am",
      paletteLabel: "Palette",
      swatches: ["Brand", "Logo green", "Accent, dark", "Soft", "Ink", "Night"],
    },
    platform: {
      eyebrow: "Behind the app",
      title: "Built to idle between services.",
      body: "One API and one database serve the app and the public site. The heavy jobs run on a schedule, so nothing sits awake between services.",
      steps: [
        { title: "Live service", body: "A Cloudflare Worker checks the YouTube channel every minute from 6 am to 11 pm and sends one push when the service starts." },
        { title: "Volunteer schedules", body: "An engine fills the month by rotation or availability, flags conflicts across groups and writes the WhatsApp message." },
        { title: "Prayer wall", body: "Public requests show only a first name. A word filter and reports from two phones hide a request until a leader reviews it." },
      ],
      chipsAria: "Engineering rules",
      chips: ["Email code login, no passwords", "260 audio chapters on R2", "Birthdays show day and month only", "Photos resized, EXIF stripped"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Small stack, few moving parts." },
    stack: [
      { area: "Mobile", body: "Expo Router and React Native, built on EAS. Styles come from shared tokens that switch between the light and dark theme." },
      { area: "API", body: "Next.js route handlers with Zod contracts shared by the app and the site. Vitest covers each route and the permission matrix." },
      { area: "Data", body: "Neon Postgres with Drizzle. Roles decide who edits each area, and every change is recorded in an audit log." },
      { area: "Jobs", body: "A Cloudflare Worker on cron for the live check, new videos and schedule reminders, with its last state in KV." },
      { area: "Media", body: "Cloudflare R2 for photos and the New Testament audio. Images are resized and compressed on the phone before upload." },
      { area: "Messages", body: "Expo push by topic, so each member picks live, notices or schedules. Login codes go out by email through Resend." },
    ],
    contact: ["Need an app your team", "can run on its own?"],
  },
  pt: {
    alt: "/ipcatole",
    back: "Apps · Estudo de caso, 2026",
    h1: "IP Catolé, uma igreja inteira num app",
    lede: "O app de uma igreja presbiteriana. O membro vê o próximo culto, lê e ouve a Bíblia, canta pelo hinário, acompanha a agenda de cada sociedade e assiste ao culto ao vivo. A liderança cuida de tudo no mesmo app: avisos, eventos, escalas e pedidos de oração. Desenhei e construí de ponta a ponta, da API aos builds das lojas.",
    facts: [
      { label: "Papel", value: "Produto, design e engenharia" },
      { label: "Superfícies", value: "iOS, Android e o site público" },
      { label: "Status", value: "Beta no TestFlight e no Google Play" },
    ],
    live: "Igreja",
    heroAlt: "Tela inicial do IP Catolé com o próximo culto, uma campanha, atalhos e os avisos da semana",
    rules: {
      eyebrow: "As regras",
      title: "Igreja de voluntários, limites reais.",
      body: "Uma secretaria voluntária, membros com todo tipo de celular e de sinal, e nenhum orçamento para servidor. Quatro regras decidiram quase todo o desenho.",
      steps: [
        { title: "Funciona offline", body: "A Bíblia, 409 hinos e os catecismos vêm dentro do app. Tudo da API fica em cache, então o último dado continua na tela sem sinal." },
        { title: "A liderança edita no app", body: "O painel web caiu. Avisos, eventos, escalas e membros se gerenciam numa área de Liderança, por papel." },
        { title: "Tudo é editável", body: "O que uma pessoa cria ganha a edição no mesmo passo, não só criar e apagar." },
        { title: "Plano grátis primeiro", body: "As fotos são reduzidas antes do envio, e a checagem da live gasta cerca de um quinto da cota diária do YouTube." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "O domingo e o resto da semana.",
      body: "Cinco abas: Início, Agenda, Bíblia, Vídeos e Igreja. Os atalhos do Início abrem telas dentro das outras abas, e voltar sempre leva à primeira tela daquela aba.",
    },
    screens: [
      { title: "O que vem agora", body: "O próximo culto, a campanha do momento e os avisos da semana, com atalhos para o que mais se abre." },
      { title: "A igreja", body: "Horários de culto, conteúdo, a sua área e um canal com a liderança, em grupos curtos." },
      { title: "Bíblia", body: "Almeida Revista e Atualizada com fonte ajustável, favoritos e o Novo Testamento em áudio." },
      { title: "Agenda por sociedade", body: "Um ponto por sociedade no mês e um filtro por grupo, para os eventos da UMP e da SAF não se misturarem." },
      { title: "Hinário com cifra", body: "Uma busca por número, título ou trecho, letra ou cifra, e anterior e próximo para o culto." },
      { title: "Vídeos e ao vivo", body: "O último sermão, as séries por livro e um ponto vermelho na aba enquanto o culto está no ar." },
    ],
    screenAlt: (title: string) => `Tela do app IP Catolé: ${title}`,
    note: "Telas do simulador de iOS com conteúdo de exemplo.",
    system: {
      eyebrow: "Design system",
      title: "Verde sereno, voz de serifa.",
      body: "O verde escuro da logo da igreja veste os cartões grandes; um verde mais vivo marca as ações. DM Serif Display dá às telas um ar de hinário impresso; DM Sans cuida do resto. Cada cor tem um valor claro e um escuro, e o app segue o celular.",
      display: "DM Serif Display · títulos",
      displaySample: "Paz do Senhor",
      body2: "DM Sans · interface",
      bodySample: "Próximo culto · amanhã, 10h",
      paletteLabel: "Paleta",
      swatches: ["Marca", "Verde da logo", "Destaque, escuro", "Suave", "Tinta", "Noite"],
    },
    platform: {
      eyebrow: "Por trás do app",
      title: "Feito para descansar entre os cultos.",
      body: "Uma API e um banco atendem o app e o site público. Os trabalhos pesados rodam em horário marcado, então nada fica ligado entre um culto e outro.",
      steps: [
        { title: "Culto ao vivo", body: "Um Worker da Cloudflare olha o canal do YouTube a cada minuto, das 6h às 23h, e manda um push quando o culto começa." },
        { title: "Escalas", body: "Um motor preenche o mês por rodízio ou disponibilidade, aponta conflitos entre grupos e escreve a mensagem do WhatsApp." },
        { title: "Mural de oração", body: "Pedidos públicos mostram só o primeiro nome. Um filtro de palavras e denúncias de dois aparelhos escondem o pedido até a liderança revisar." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Login por código no e-mail, sem senha", "260 capítulos em áudio no R2", "Aniversário mostra só dia e mês", "Fotos reduzidas, sem EXIF"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Stack pequena, poucas peças." },
    stack: [
      { area: "Mobile", body: "Expo Router e React Native, com builds no EAS. Os estilos vêm de tokens compartilhados que trocam entre o tema claro e o escuro." },
      { area: "API", body: "Route handlers do Next.js com contratos em Zod compartilhados pelo app e pelo site. O Vitest cobre cada rota e a matriz de permissões." },
      { area: "Dados", body: "Neon Postgres com Drizzle. Papéis decidem quem edita cada área, e toda mudança fica num log de auditoria." },
      { area: "Rotinas", body: "Um Worker da Cloudflare com cron para a live, os vídeos novos e os lembretes de escala, com o último estado no KV." },
      { area: "Mídia", body: "Cloudflare R2 para fotos e o áudio do Novo Testamento. As imagens são reduzidas e comprimidas no celular antes do envio." },
      { area: "Mensagens", body: "Push do Expo por tópico, para cada membro escolher live, avisos ou escalas. O código de login vai por e-mail pelo Resend." },
    ],
    contact: ["Precisa de um app que sua", "equipe toque sozinha?"],
  },
} as const;

export function IpcatoleCase({ lang }: { lang: Lang }) {
  const t = ipcatoleCopy[lang];
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
                <a href={SITE} rel="noreferrer" target="_blank">ipcatole.org.br ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1435} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/ipcatole/inicio.webp" width={660} />
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
                    src={`/apps/ipcatole/${shots[index]}.webp`}
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
          <div className={`${s.specimen} ${serif.variable} ${sans.variable}`}>
            <div className={`${s.panel} reveal`}>
              <span className={s.label}>{t.system.display}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(36px, 4.4vw, 58px)" }}>
                {t.system.displaySample}
              </p>
              <span className={s.label}>{t.system.body2}</span>
              <p className={s.sample} style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(20px, 2vw, 26px)" }}>
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
