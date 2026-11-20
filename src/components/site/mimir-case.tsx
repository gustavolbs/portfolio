import Image from "next/image";
import Link from "next/link";
import { Nunito } from "next/font/google";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import home from "./home.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: "800", variable: "--font-nunito", display: "swap" });

const TINT = "#D9C8F0";
const shots = ["child", "writing", "player", "timer", "read", "limit"] as const;
const palette = ["#1E1430", "#2A1D42", "#F4ECF2", "#BDADD0", "#F0C987", "#C9A6FF"] as const;

export const mimirCopy = {
  en: {
    alt: "/pt/mimir",
    back: "Lab · In development, 2026",
    h1: "Mimir, bedtime stories with your child's name",
    lede: "A bedtime app for Brazilian parents. Each night it writes a new story with the child's name, their pet and something from their day, and can read it aloud in a warm voice. Saved stories play offline, a sleep timer fades everything out, and the whole interface stays dark for a bedroom with the lights off.",
    site: "https://mimir.linearcraft.dev/",
    facts: [
      { label: "Role", value: "Research, product, design and architecture" },
      { label: "Platforms", value: "iOS and Android, Brazil, Portuguese" },
      { label: "Status", value: "Architecture closed, tech choices in progress" },
    ],
    heroAlt: "Mimir Tonight screen: an illustrated bedroom at night with a puppy asleep, the question Shall we dream with Pipo? and a Tell the story button",
    rules: {
      eyebrow: "What the research changed",
      title: "One tired parent, one sleepy child.",
      body: "Story apps with thousands of reviews prove the demand. The gap is a story that knows the child. Every screen is built for the last ten minutes of the day, with one hand and the lights off.",
      steps: [
        { title: "The child is the hero", body: "Only a first name, which can be made up, an age range, a pet and a bedtime. No surname, birth date, photo or voice of the child is stored." },
        { title: "Calm by rule", body: "No fear, no violence, nothing a child could copy. The adventure happens in a dream and every story ends in bed, asleep." },
        { title: "Read or listen", body: "Narration is optional. A parent who reads aloud gets large text on a dark page, and pays nothing for a voice." },
        { title: "Then it gets out of the way", body: "A timer fades the voice and the ambient sound to zero, and Keep playing moves on to a library story." },
      ],
    },
    app: {
      eyebrow: "The app",
      title: "Four tabs, one bedtime.",
      body: "Tonight, Library, Sounds and Family. The tone is fairy tale where the child is, and calm and plain everywhere else.",
    },
    screens: [
      { title: "Who is dreaming tonight", body: "First run asks for a name, an age range and a bedtime. The name can be invented." },
      { title: "Writing the story", body: "A slow moon while the text is written. Cancel works only in this phase, before the voice starts." },
      { title: "The player", body: "The bedroom scene on top, with background sound, the timer and a switch to reading." },
      { title: "Sleep timer", body: "10 to 45 minutes, plus Keep playing other stories when this one ends." },
      { title: "Read aloud", body: "The same story as text, set in Nunito, for the parent who prefers their own voice." },
      { title: "Enough for tonight", body: "New stories have a daily cap. The library stays open and does not count." },
    ],
    screenAlt: (title: string) => `Mimir screen design: ${title}`,
    note: "Approved screen designs in Portuguese, rendered from the design canvas. Names are examples.",
    system: {
      eyebrow: "Design system",
      title: "Plum, gold and a night light.",
      body: "Dark only in v1. A soft 2.5D bedroom sits at the top of the main screens. Warm white text on plum keeps a 15:1 contrast without glare, and gold marks what a parent presses. Nunito sets titles and the story; the system font carries buttons and labels.",
      display: "Nunito ExtraBold · titles and stories",
      displaySample: "A lua que sabia esperar",
      body2: "System font · buttons and labels",
      bodySample: "Contar a história",
      paletteLabel: "Tokens",
      swatches: ["Night", "Card", "Warm white", "Muted", "Gold, action", "Lavender, detail"],
    },
    platform: {
      eyebrow: "Architecture",
      title: "A story made in durable steps.",
      body: "Accounts are per family and shared between phones, so there is a server from day one. The app asks a Worker for a story and gets an id back at once; a Cloudflare Workflow does the slow part with retries.",
      steps: [
        { title: "Write, then check", body: "Claude Sonnet 5.5 writes from a tested prompt. A second call checks the text is fit for bedtime, rewrites once if not, and the voice starts only after approval." },
        { title: "A warm voice, trimmed", body: "ElevenLabs v3 narrates in one of four voices. The Worker cuts pauses longer than one second and encodes a 64 kbps MP3 to R2." },
        { title: "Cost on purpose", body: "Text costs about two cents, voice most of the rest. Audio only when a parent asks, library narrated once, replays free from the phone." },
      ],
      chipsAria: "Engineering rules",
      chips: ["Email code, no password", "One account per family, 4 + 4 profiles", "Daily cap counted on the server", "Report button on every story"],
    },
    stackTitle: { eyebrow: "Under the hood", title: "Offline first, synced by family." },
    stack: [
      { area: "App", body: "React Native with Expo and a dev client, the same base as the other lab apps." },
      { area: "Data", body: "SQLite on the phone is the source of truth. Changes queue locally and sync to D1; the last edit wins and deletes are soft." },
      { area: "Audio", body: "expo-audio with one player for the story, which owns the lock screen, and one looping player for ambient sound." },
      { area: "Server", body: "Cloudflare Workers, D1 and R2, with Workflows for generation and Resend for login codes and reports." },
      { area: "Library", body: "20 ready stories, each reviewed by a person before narration, downloaded once and then played offline." },
      { area: "Sounds", body: "Six CC0 tracks from Freesound, normalized to -24 LUFS so rain and crickets play at the same level." },
    ],
    contact: ["Have an app idea", "worth testing?"],
  },
  pt: {
    alt: "/mimir",
    back: "Lab · Em desenvolvimento, 2026",
    h1: "Mimir, histórias de ninar com o nome do seu filho",
    lede: "Um app de hora de dormir para pais brasileiros. Toda noite ele escreve uma história nova com o nome da criança, o bichinho dela e algo do dia, e pode narrar com uma voz calma. Histórias salvas tocam sem internet, um timer abaixa tudo até o silêncio e a interface inteira fica escura para um quarto de luz apagada.",
    site: "https://mimir.linearcraft.dev/",
    facts: [
      { label: "Papel", value: "Pesquisa, produto, design e arquitetura" },
      { label: "Plataformas", value: "iOS e Android, Brasil, português" },
      { label: "Status", value: "Arquitetura fechada, tecnologia em andamento" },
    ],
    heroAlt: "Tela Hoje do Mimir: um quarto ilustrado à noite com um cachorrinho dormindo, a pergunta Vamos sonhar com o Pipo? e o botão Contar a história",
    rules: {
      eyebrow: "O que a pesquisa mudou",
      title: "Um pai cansado, uma criança com sono.",
      body: "Apps de histórias com milhares de avaliações provam a demanda. A lacuna é uma história que conhece a criança. Cada tela é feita para os últimos dez minutos do dia, com uma mão e a luz apagada.",
      steps: [
        { title: "A criança é a heroína", body: "Só o primeiro nome, que pode ser inventado, a faixa de idade, um bichinho e a hora de dormir. Sobrenome, data de nascimento, foto e voz da criança não são guardados." },
        { title: "Calma por regra", body: "Sem medo, sem violência, nada para a criança imitar. A aventura acontece no sonho e toda história termina na cama, dormindo." },
        { title: "Ler ou ouvir", body: "A narração é opcional. Quem lê em voz alta tem texto grande numa página escura, e não paga por voz." },
        { title: "Depois sai da frente", body: "Um timer abaixa a voz e o som ambiente até zero, e Continuar tocando segue para uma história da biblioteca." },
      ],
    },
    app: {
      eyebrow: "O app",
      title: "Quatro abas, uma hora de dormir.",
      body: "Hoje, Biblioteca, Sons e Família. O tom é de conto de fadas onde está a criança, e calmo e direto no resto.",
    },
    screens: [
      { title: "Quem vai sonhar hoje", body: "O primeiro uso pede nome, faixa de idade e hora de dormir. O nome pode ser inventado." },
      { title: "Escrevendo a história", body: "Uma lua lenta enquanto o texto é escrito. Cancelar só vale nessa fase, antes da voz começar." },
      { title: "O player", body: "A cena do quarto no topo, com som de fundo, timer e um botão para ler." },
      { title: "Timer", body: "De 10 a 45 minutos, mais Continuar com outras histórias quando esta acabar." },
      { title: "Ler em voz alta", body: "A mesma história em texto, em Nunito, para quem prefere a própria voz." },
      { title: "Chega por hoje", body: "Histórias novas têm limite por dia. A biblioteca continua aberta e não conta." },
    ],
    screenAlt: (title: string) => `Desenho de tela do Mimir: ${title}`,
    note: "Desenhos de tela aprovados, renderizados do canvas de design. Os nomes são exemplos.",
    system: {
      eyebrow: "Design system",
      title: "Ameixa, dourado e luz de abajur.",
      body: "Só modo escuro na v1. Um quarto em 2,5D suave fica no topo das telas principais. Branco quente sobre ameixa mantém contraste de 15:1 sem ofuscar, e o dourado marca o que o pai aperta. Nunito compõe títulos e a história; a fonte do sistema cuida de botões e rótulos.",
      display: "Nunito ExtraBold · títulos e histórias",
      displaySample: "A lua que sabia esperar",
      body2: "Fonte do sistema · botões e rótulos",
      bodySample: "Contar a história",
      paletteLabel: "Tokens",
      swatches: ["Noite", "Cartão", "Branco quente", "Apoio", "Dourado, ação", "Lavanda, detalhe"],
    },
    platform: {
      eyebrow: "Arquitetura",
      title: "Uma história feita em passos duráveis.",
      body: "A conta é por família e compartilhada entre celulares, então há servidor desde o primeiro dia. O app pede a história a um Worker e recebe um id na hora; um Workflow do Cloudflare faz a parte lenta, com retry.",
      steps: [
        { title: "Escreve, depois confere", body: "O Claude Sonnet 5.5 escreve a partir de um prompt testado. Uma segunda chamada confere se o texto serve para dormir, reescreve uma vez se não servir, e a voz só começa depois da aprovação." },
        { title: "Voz calma, sem buracos", body: "O ElevenLabs v3 narra com uma de quatro vozes. O Worker corta pausas acima de um segundo e grava um MP3 de 64 kbps no R2." },
        { title: "Custo de propósito", body: "O texto custa uns dois centavos de dólar; a voz é quase todo o resto. Áudio só quando o pai pede, biblioteca narrada uma vez, repetir sai do celular de graça." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Código por e-mail, sem senha", "Uma conta por família, 4 + 4 perfis", "Limite diário contado no servidor", "Botão de denúncia em toda história"],
    },
    stackTitle: { eyebrow: "Por dentro", title: "Offline primeiro, sync por família." },
    stack: [
      { area: "App", body: "React Native com Expo e dev client, a mesma base dos outros apps do lab." },
      { area: "Dados", body: "O SQLite do celular é a base. As mudanças entram numa fila local e sincronizam com o D1; a última edição vence e apagar só marca." },
      { area: "Áudio", body: "expo-audio com um player para a história, dono da tela de bloqueio, e outro em loop para o som ambiente." },
      { area: "Servidor", body: "Cloudflare Workers, D1 e R2, com Workflows para gerar e Resend para os códigos de login e as denúncias." },
      { area: "Biblioteca", body: "20 histórias prontas, cada uma revisada por uma pessoa antes da narração, baixadas uma vez e depois tocadas sem internet." },
      { area: "Sons", body: "Seis faixas CC0 do Freesound, normalizadas a -24 LUFS para chuva e grilos tocarem no mesmo volume." },
    ],
    contact: ["Tem uma ideia de app", "que vale testar?"],
  },
} as const;

export function MimirCase({ lang }: { lang: Lang }) {
  const t = mimirCopy[lang];
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
            <a href={t.site} target="_blank" rel="noreferrer">mimir.linearcraft.dev</a>
          </div>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <div className={s.phone}>
            <Image alt={t.heroAlt} height={1428} priority sizes="(max-width: 900px) 62vw, 300px" src="/apps/mimir/tonight.webp" width={660} />
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
                    src={`/apps/mimir/${shots[index]}.webp`}
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
