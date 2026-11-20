import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: "800", variable: "--font-nunito", display: "swap" });

const TINT = "#FCEBB8";
const shots = ["hive", "recording", "note", "apiaries", "setup", "paywall"] as const;
const palette = ["#F2A900", "#1F3318", "#FFF8E7", "#4A6340", "#F1E6C6", "#B3261E"] as const;

export const beecorderCopy = {
  en: {
    alt: "/pt/beecorder",
    back: "Lab · In development, 2026",
    h1: "Beecorder, hive notes you speak with gloves on",
    lede: "A voice diary for hobby beekeepers in the US, UK and Australia. Open the hive, press one big button, say what you see and put the phone away. The note is saved on the phone at once, even with no signal, and turns into text filed under the right hive when you are back online. I took it from market research to code: scope, visual, screens, architecture, pricing and store copy.",
    site: "https://beecorder.linearcraft.dev/",
    facts: [
      { label: "Role", value: "Research, product, design and code" },
      { label: "Platforms", value: "iOS and Android, in English" },
      { label: "Status", value: "Building the app" },
      { label: "Price", value: "Free plan, Premium at $39.99 a year" },
    ],
    heroAlt: "Beecorder apiary screen: an illustrated island with hives, and the hives that need attention first",
    rules: {
      eyebrow: "What the research changed",
      title: "Voice is not the moat. Gloves are.",
      body: "The market study found a paid leader at $60 to $70 a year and ten new hive apps launched in twelve months, several already with voice. So the bet moved from the feature to the moment of use: outdoors, in sun, with sticky gloves.",
      steps: [
        { title: "One big button", body: "Tap and talk is the main action on the hive screen. Four optional quick buttons sit around it: Queen seen, Eggs seen, Temperament and Follow-up." },
        { title: "Record with no signal", body: "Audio is written to the phone first. Transcription waits for a connection, so an apiary in a field never loses a note." },
        { title: "A reminder, not a report", body: "Each hive gets a next inspection, 10 days by default. Hives that are overdue or marked Follow-up rise to the top of the list." },
        { title: "No game mechanics", body: "No mascot, points or streaks. The app should be quick to open and quick to put away." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "From the hive back to the pocket.",
      body: "Twelve screens in the first version, each with one main action. These are the approved designs the code is built against.",
    },
    screens: [
      { title: "The hive", body: "Next inspection, past notes and the record button in thumb reach." },
      { title: "Recording", body: "A large timer and a red stop button that reads in full sun. The quick buttons still work while you talk." },
      { title: "The note", body: "Editable text, the tags you tapped, the original audio and when to come back." },
      { title: "Your apiaries", body: "Each apiary is an island with a count of hives and how many need attention." },
      { title: "First use", body: "Name the apiary and pick how many hives. The app creates Hive 1 to Hive 4 for you." },
      { title: "Fair paywall", body: "It shows only after the free notes run out. Old notes stay readable and reminders keep coming." },
    ],
    screenAlt: (title: string) => `Beecorder screen design: ${title}`,
    note: "Approved screen designs rendered from the design canvas. Names and data are illustrative.",
    system: {
      eyebrow: "Design system",
      title: "Honey, wood and paper.",
      body: "Soft 2.5D scenes on a cream background, with controls that feel like objects: a honey button that sinks when pressed, pebble quick buttons, a wooden plaque for the hive name and a torn paper sheet for notes. Nunito sets titles and buttons; the phone's system font carries the notes. Light mode only, tuned for outdoor contrast.",
      display: "Nunito ExtraBold · titles and buttons",
      displaySample: "Tap and talk",
      body2: "System font · notes",
      bodySample: "Queen seen, good brood pattern.",
      paletteLabel: "Tokens",
      swatches: ["Honey", "Forest", "Cream", "Moss", "Sand", "Danger"],
    },
    platform: {
      eyebrow: "Architecture",
      title: "The phone keeps the notes.",
      body: "Hives, notes and audio live in SQLite on the phone. The server exists only to turn speech into text and to know who pays.",
      steps: [
        { title: "Accurate first", body: "Transcription runs in the cloud with ElevenLabs Scribe and beekeeping key terms, because a bad transcript would drive people away faster than a slow one." },
        { title: "Forward and forget", body: "A Cloudflare Worker receives the audio, sends it to the provider, returns the text and deletes the audio. It never stores audio or text." },
        { title: "Limits per account", body: "Email code login appears at the first transcription, so reinstalling the app does not reset the free plan. RevenueCat answers who is subscribed." },
      ],
      chipsAria: "Engineering rules",
      chips: ["Audio stays on the phone", "Provider swappable behind the API", "Sync-ready ids on every record", "Sun and glove test before launch"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Small on purpose." },
    stack: [
      { area: "Mobile", body: "Expo Router and React Native with expo-audio, expo-sqlite, local notifications and Reanimated for the 2.5D controls." },
      { area: "Backend", body: "Cloudflare Workers with D1 for accounts and the free limit. Login codes go out by email through Resend." },
      { area: "Speech", body: "ElevenLabs Scribe for transcription, with a second provider ready behind the same API." },
      { area: "Payments", body: "RevenueCat for App Store and Google Play subscriptions, restore purchases and the paywall." },
      { area: "Art", body: "AI-generated scenes and icon in a consistent 2.5D style, with prompts and versions kept for every image." },
      { area: "Process", body: "Nine documented stages, from market and scope to store copy, each closed with a written decision before the next one starts." },
    ],
    contact: ["Have an app idea", "worth testing?"],
  },
  pt: {
    alt: "/beecorder",
    back: "Lab · Em desenvolvimento, 2026",
    h1: "Beecorder, notas de colmeia faladas de luva",
    lede: "Um diário de voz para apicultores amadores nos EUA, Reino Unido e Austrália. Abra a colmeia, aperte um botão grande, diga o que vê e guarde o celular. A nota fica salva no aparelho na hora, mesmo sem sinal, e vira texto arquivado na colmeia certa quando a internet volta. Levei da pesquisa de mercado ao código: escopo, visual, telas, arquitetura, preço e textos da loja.",
    site: "https://beecorder.linearcraft.dev/",
    facts: [
      { label: "Papel", value: "Pesquisa, produto, design e código" },
      { label: "Plataformas", value: "iOS e Android, em inglês" },
      { label: "Status", value: "App em construção" },
      { label: "Preço", value: "Plano grátis, Premium a US$ 39,99 por ano" },
    ],
    heroAlt: "Tela do apiário no Beecorder: uma ilha ilustrada com colmeias e as colmeias que pedem atenção primeiro",
    rules: {
      eyebrow: "O que a pesquisa mudou",
      title: "A voz não é a vantagem. A luva é.",
      body: "O estudo de mercado achou um líder pago de US$ 60 a 70 por ano e dez apps novos de colmeia lançados em doze meses, vários já com voz. Então a aposta saiu da função e foi para o momento de uso: ao ar livre, no sol, com luva melada.",
      steps: [
        { title: "Um botão grande", body: "Tocar e falar é a ação principal da tela da colmeia. Quatro botões rápidos opcionais ficam em volta: Queen seen, Eggs seen, Temperament e Follow-up." },
        { title: "Grava sem sinal", body: "O áudio vai primeiro para o celular. A transcrição espera a conexão, então um apiário no meio do campo nunca perde uma nota." },
        { title: "Um lembrete, não um relatório", body: "Cada colmeia ganha uma próxima inspeção, 10 dias por padrão. Colmeias atrasadas ou marcadas Follow-up sobem para o topo da lista." },
        { title: "Sem mecânica de jogo", body: "Sem mascote, pontos ou sequências. O app tem que abrir rápido e sair do caminho rápido." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Da colmeia de volta ao bolso.",
      body: "Doze telas na primeira versão, cada uma com uma ação principal. Estes são os desenhos aprovados que o código segue.",
    },
    screens: [
      { title: "A colmeia", body: "Próxima inspeção, notas anteriores e o botão de gravar ao alcance do polegar." },
      { title: "Gravando", body: "Um cronômetro grande e um botão vermelho de parar que se lê no sol forte. Os botões rápidos funcionam enquanto você fala." },
      { title: "A nota", body: "Texto editável, as marcas que você tocou, o áudio original e quando voltar." },
      { title: "Seus apiários", body: "Cada apiário é uma ilha com o número de colmeias e quantas pedem atenção." },
      { title: "Primeiro uso", body: "Dê nome ao apiário e escolha quantas colmeias. O app cria da Hive 1 à Hive 4." },
      { title: "Paywall justo", body: "Só aparece quando as notas grátis acabam. As notas antigas continuam legíveis e os lembretes seguem chegando." },
    ],
    screenAlt: (title: string) => `Desenho de tela do Beecorder: ${title}`,
    note: "Desenhos de tela aprovados, renderizados do canvas de design. Nomes e dados são ilustrativos.",
    system: {
      eyebrow: "Design system",
      title: "Mel, madeira e papel.",
      body: "Cenas suaves em 2,5D sobre fundo creme, com controles que parecem objetos: um botão de mel que afunda ao apertar, botões rápidos de seixo, uma plaqueta de madeira com o nome da colmeia e uma folha de papel rasgada para as notas. Nunito compõe títulos e botões; a fonte do sistema cuida das notas. Só modo claro, ajustado para contraste ao ar livre.",
      display: "Nunito ExtraBold · títulos e botões",
      displaySample: "Tap and talk",
      body2: "Fonte do sistema · notas",
      bodySample: "Queen seen, good brood pattern.",
      paletteLabel: "Tokens",
      swatches: ["Mel", "Floresta", "Creme", "Musgo", "Areia", "Perigo"],
    },
    platform: {
      eyebrow: "Arquitetura",
      title: "O celular guarda as notas.",
      body: "Colmeias, notas e áudio ficam no SQLite do celular. O servidor existe só para transformar fala em texto e saber quem paga.",
      steps: [
        { title: "Precisão primeiro", body: "A transcrição roda na nuvem com o ElevenLabs Scribe e termos de apicultura, porque uma transcrição ruim afasta mais gente que uma lenta." },
        { title: "Repassa e esquece", body: "Um Worker da Cloudflare recebe o áudio, envia ao provedor, devolve o texto e apaga o áudio. Ele nunca guarda áudio nem texto." },
        { title: "Limite por conta", body: "O login por código no e-mail aparece na primeira transcrição, então reinstalar o app não zera o plano grátis. O RevenueCat responde quem assina." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["O áudio fica no celular", "Provedor trocável atrás da API", "Ids prontos para sincronizar", "Teste de sol e luva antes do lançamento"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Pequeno de propósito." },
    stack: [
      { area: "Mobile", body: "Expo Router e React Native com expo-audio, expo-sqlite, notificações locais e Reanimated para os controles em 2,5D." },
      { area: "Backend", body: "Cloudflare Workers com D1 para contas e o limite grátis. O código de login vai por e-mail pelo Resend." },
      { area: "Fala", body: "ElevenLabs Scribe para a transcrição, com um segundo provedor pronto atrás da mesma API." },
      { area: "Pagamento", body: "RevenueCat para as assinaturas da App Store e do Google Play, restaurar compras e o paywall." },
      { area: "Arte", body: "Cenas e ícone gerados por IA num estilo 2,5D consistente, com prompts e versões guardados para cada imagem." },
      { area: "Processo", body: "Nove etapas documentadas, do mercado e escopo aos textos da loja, cada uma fechada com uma decisão escrita antes da próxima." },
    ],
    contact: ["Tem uma ideia de app", "que vale testar?"],
  },
} as const;

export function BeecorderCase({ lang }: { lang: Lang }) {
  const t = beecorderCopy[lang];
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
            <a href={t.site} target="_blank" rel="noreferrer">beecorder.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1428} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/beecorder/apiary.webp" width={660} />
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
                    height={1428}
                    loading="lazy"
                    sizes="(max-width: 600px) 70vw, (max-width: 900px) 34vw, 260px"
                    src={`/apps/beecorder/${shots[index]}.webp`}
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
