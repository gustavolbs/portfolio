import Image from "next/image";
import Link from "next/link";

import type { Lang } from "@/content/home-copy";

import { CaseHead, CaseShell } from "./case-shell";
import s from "./case.module.css";
import c from "./sales-factory.module.css";
import home from "./home.module.css";

const TINT = "#e3e9dc";
const SELLS = "https://agoraaqui.com.br";

// Rebuilt from a real conversation: the owner's name, business and project are changed.
type Msg = { from: "bia" | "owner" | "gap"; text: string; voice?: string; link?: string; tag?: number };

export const salesFactoryCopy = {
  en: {
    alt: "/pt/sales-factory",
    back: "Apps · Case study, 2026",
    h1: "Sales Factory, an AI agent that prospects, sells and delivers on its own",
    lede: "A sales system Linear Craft built to sell its own products without a sales team. Bia, its agent, finds small businesses on the map, builds each one a preview of its site, writes to the owner on WhatsApp, answers, charges and publishes the site. I designed and built all of it, from the agent and its tools to the CRM we watch it from.",
    facts: [
      { label: "Role", value: "Product, engineering and sales operations" },
      { label: "Surfaces", value: "WhatsApp, email and an internal CRM" },
      { label: "Stack", value: "TypeScript, Postgres, Claude, MCP" },
    ],
    sells: "Sells",
    chatName: "Agora Aqui",
    chatStatus: "business account",
    heroAria: "The start of a conversation between Bia and a business owner on WhatsApp",
    hero: [
      { from: "bia", text: "Good afternoon! I found this number on Google Maps for Lia Moura Atelier. Am I talking to whoever runs it?" },
      { from: "owner", text: "Yes" },
      { from: "bia", text: "Great, thanks! I'm Bia, from Agora Aqui. Today you book clients by answering message by message, even after hours?" },
      { from: "owner", text: "yes 🙂" },
      { from: "bia", text: "We're building the page for Lia Moura Atelier, with the WhatsApp button already carrying the booking message. The link arrives here on its own in a few minutes." },
      { from: "bia", text: "Done! The preview is here:", link: "lia-moura-atelier.agoraaqui.com.br" },
    ] as Msg[],
    agent: {
      eyebrow: "The agent",
      title: "Bia finds, sells and delivers on her own.",
      body: "From a map listing to a live site, Bia runs the whole sale. She finds the business, builds its site, writes to the owner, answers, charges and publishes. A person steps in only when she asks for one.",
      steps: [
        { title: "Find", body: "Reads public map listings, scores each business by its photos and reviews, and drops the ones that already have a site." },
        { title: "Build", body: "Builds a preview of that business's own site from its photos and details, and a critic model reviews it." },
        { title: "Write", body: "Writes the first message for that owner. An automatic judge checks every message before it goes out." },
        { title: "Talk", body: "Answers on WhatsApp with a sales playbook: questions, objections, plans. Prices come only from tools." },
        { title: "Charge", body: "Sends the payment link, and the payment webhook confirms the sale." },
        { title: "Deliver", body: "Publishes the site at the owner's own subdomain, with no one in the loop." },
      ],
      figuresAria: "First three weeks of live outreach",
      figures: [
        { value: "5,443", label: "businesses found and scored" },
        { value: "386", label: "owners reached on WhatsApp" },
        { value: "118", label: "owners who wrote back themselves" },
        { value: "24", label: "asked for the price" },
        { value: "3", label: "handed to a person" },
        { value: "US$0.05", label: "model cost per conversation" },
      ],
      note: "First three weeks of live outreach, Oct 31 to Nov 19, 2026. Automatic replies are not counted. In the same weeks Bia built 164 custom previews, and 19 A/B tests compared approaches and offers.",
    },
    convo: {
      eyebrow: "One conversation",
      title: "A fashion designer, two previews and a question about price.",
      body: "The owner wanted her site to be about something else. Bia understood it from a voice note, built a new preview and answered the price and the objection that came with it.",
      aria: "The rest of the conversation, after the first preview",
      chat: [
        { from: "owner", voice: "Voice note · 0:41", text: "I'd like it to be about the atelier, not the beauty studio. I'm a fashion designer: I sign collections and I've had 3 big runway shows.", tag: 1 },
        { from: "bia", text: "The 3 shows and the collections you sign carry the most weight, so they go up front, right after your pieces. Send me photos of each show, with its name and year." },
        { from: "gap", text: "Next day" },
        { from: "bia", text: "Hi, Lia! I built the new version of your site, now about the atelier and your work as a designer, with the home fittings and the service for companies:", link: "lia-moura-estilista.agoraaqui.com.br", tag: 2 },
        { from: "owner", voice: "Voice note · 0:52", text: "I have new photos. And I want to see the price with you." },
        { from: "bia", text: "No setup fee: you pay only the monthly plan, R$ 99.00 a month, and the first month is what you pay through the link to go live. In the first 7 days you can change your mind and get it back.", tag: 3 },
        { from: "owner", text: "That's great, friend. But I have big expenses with my thesis" },
        { from: "bia", text: "I understand, a thesis weighs a lot. That's why there's no big amount at once: only the monthly fee, and you swap in your new photos yourself, in the panel.", tag: 4 },
      ] as Msg[],
      did: [
        { title: "Heard the voice note", body: "Voice notes are transcribed and read like any message, so the owner can answer the way she talks." },
        { title: "Rebuilt the site", body: "The new focus, the runway shows and her home fitting service went into a second preview, built from the conversation alone." },
        { title: "Quoted from the tool", body: "The price and the terms come from the offer the payment link uses, never from the model's memory." },
        { title: "Answered the objection", body: "The playbook turns a money worry into the reason the plan exists: no big payment up front." },
      ],
      note: "Rebuilt from a real conversation, translated from Portuguese. The owner's name, business and project are changed.",
    },
    rules: {
      eyebrow: "The guardrails",
      title: "An agent you can let talk to customers.",
      body: "A model that sells can also promise the wrong thing. Most of the engineering is in what Bia cannot do.",
      steps: [
        { title: "Prices only from tools", body: "Bia never states a price from memory. She calls the pricing tool, and the payment link comes from the same offer." },
        { title: "A judge before every send", body: "Every first message is checked against the business's facts and the house rules before it leaves." },
        { title: "A test for every contact", body: "Each contact gets one arm of an A/B test on approach or offer, so changes ship when replies prove them." },
        { title: "A person when needed", body: "When Bia is stuck she hands the conversation over, and the CRM shows exactly where." },
      ],
      chipsAria: "Engineering rules",
      chips: ["Every business change updates what Bia knows", "Snapshot tests for the playbook", "An opt-out is honored at once", "Production fixes are reversible updates"],
    },
    crm: {
      eyebrow: "The CRM",
      title: "A control room for a team of one.",
      body: "Funnel, conversations, money and system health in one place. Every lead card shows where it stands and what it is worth, and any conversation can be read and taken over from the same WhatsApp number.",
      alt: "Sales Factory CRM: the sales funnel board with Found, Contacted and Replied columns and a card per business",
      note: "Business names and cities replaced.",
    },
    stackTitle: { eyebrow: "Under the hood", title: "Small services, one job each." },
    stack: [
      { area: "Agent", body: "Claude Sonnet runs the conversations and writes the messages; Claude Haiku does the quick checks. A sales playbook and a FAQ per product, with snapshot tests." },
      { area: "Tools", body: "An MCP server of sales tools: prices, the preview, the payment link and the handoff. The model acts only through them." },
      { area: "Prospecting", body: "Public map listings, a model that sorts each business's photos, and a scan before any contact." },
      { area: "Previews", body: "An agent builds each site and a critic pass reviews it. Sites are tenants of one Next.js app on Vercel." },
      { area: "WhatsApp", body: "Several numbers through OpenWA, a channel gateway for the webhooks and the agent runtime behind it." },
      { area: "Jobs and money", body: "pg-boss jobs on Postgres, and payment webhooks with reconciliation and dispute handling." },
      { area: "Ops", body: "A pnpm monorepo in Docker on our own server, with one CLI for jobs, flags, experiments and migrations." },
    ],
    contact: ["Need an agent that", "does real work?"],
  },
  pt: {
    alt: "/sales-factory",
    back: "Apps · Estudo de caso, 2026",
    h1: "Sales Factory, um agente de IA que prospecta, vende e entrega sozinho",
    lede: "Um sistema de vendas que a Linear Craft criou para vender os próprios produtos sem equipe comercial. A Bia, o agente, encontra pequenos negócios no mapa, monta para cada um a prévia do site, escreve para o dono no WhatsApp, responde, cobra e publica o site. Eu desenhei e construí tudo, do agente e das ferramentas dele ao CRM de onde a gente acompanha.",
    facts: [
      { label: "Papel", value: "Produto, engenharia e operação de vendas" },
      { label: "Superfícies", value: "WhatsApp, e-mail e um CRM interno" },
      { label: "Stack", value: "TypeScript, Postgres, Claude, MCP" },
    ],
    sells: "Vende",
    chatName: "Agora Aqui",
    chatStatus: "conta comercial",
    heroAria: "O começo de uma conversa entre a Bia e uma dona de negócio no WhatsApp",
    hero: [
      { from: "bia", text: "Boa tarde! Tudo bem? Encontrei este número no Google Maps, como contato do Lia Moura Ateliê. Falo com quem cuida do ateliê?" },
      { from: "owner", text: "Sim" },
      { from: "bia", text: "Que bom, obrigada por confirmar! Sou a Bia, da Agora Aqui. Hoje você marca horário respondendo mensagem por mensagem, até fora do expediente?" },
      { from: "owner", text: "sim 🙂" },
      { from: "bia", text: "Estamos montando a página do Lia Moura Ateliê, com o botão do WhatsApp já levando a mensagem pronta pra marcar horário. O link chega aqui sozinho em alguns minutos." },
      { from: "bia", text: "Pronto! A prévia do site está aqui:", link: "lia-moura-atelie.agoraaqui.com.br" },
    ] as Msg[],
    agent: {
      eyebrow: "O agente",
      title: "A Bia encontra, vende e entrega sozinha.",
      body: "Do anúncio no mapa ao site no ar, a Bia faz a venda inteira. Ela encontra o negócio, monta o site, escreve para o dono, responde, cobra e publica. Uma pessoa só entra quando ela pede.",
      steps: [
        { title: "Encontra", body: "Lê anúncios públicos de mapa, pontua cada negócio pelas fotos e avaliações e descarta quem já tem site." },
        { title: "Monta", body: "Monta a prévia do site daquele negócio com as fotos e os dados dele, e um modelo crítico revisa." },
        { title: "Escreve", body: "Escreve a primeira mensagem para aquele dono. Um juiz automático confere cada mensagem antes do envio." },
        { title: "Conversa", body: "Responde no WhatsApp com um playbook de vendas: dúvidas, objeções, planos. Preço só vem das ferramentas." },
        { title: "Cobra", body: "Manda o link de pagamento, e o webhook do pagamento confirma a venda." },
        { title: "Entrega", body: "Publica o site no subdomínio do dono, sem ninguém no meio." },
      ],
      figuresAria: "Primeiras três semanas de prospecção",
      figures: [
        { value: "5.443", label: "negócios encontrados e pontuados" },
        { value: "386", label: "donos abordados no WhatsApp" },
        { value: "118", label: "donos que responderam eles mesmos" },
        { value: "24", label: "perguntaram o preço" },
        { value: "3", label: "passadas para uma pessoa" },
        { value: "US$0,05", label: "de modelo por conversa" },
      ],
      note: "Primeiras três semanas de prospecção, de 31/10 a 19/11/2026. Respostas automáticas não entram na conta. Nas mesmas semanas a Bia montou 164 prévias sob medida, e 19 testes A/B compararam abordagens e ofertas.",
    },
    convo: {
      eyebrow: "Uma conversa",
      title: "Uma estilista, duas prévias e uma pergunta sobre preço.",
      body: "A dona queria que o site falasse de outra coisa. A Bia entendeu por um áudio, montou uma prévia nova e respondeu o preço e a objeção que veio junto.",
      aria: "O resto da conversa, depois da primeira prévia",
      chat: [
        { from: "owner", voice: "Áudio · 0:41", text: "Queria que fosse em relação ao ateliê, não ao estúdio. Sou estilista: já assino coleções e tive 3 desfiles gigantes.", tag: 1 },
        { from: "bia", text: "Os 3 desfiles e as coleções que você assina são o que mais pesa, então entram em destaque logo depois das suas peças. Me manda as fotos de cada desfile, com o nome e o ano." },
        { from: "gap", text: "No dia seguinte" },
        { from: "bia", text: "Oi, Lia! Montei a nova versão do seu site, agora com foco no ateliê e no seu trabalho de estilista, já com o atendimento em casa e o atendimento para empresas:", link: "lia-moura-estilista.agoraaqui.com.br", tag: 2 },
        { from: "owner", voice: "Áudio · 0:52", text: "Tenho fotos novas. E quero ver contigo o valor." },
        { from: "bia", text: "Sem taxa de criação: você paga só a mensalidade, R$ 99,00 por mês, e o primeiro mês já é o que você paga pelo link pro site entrar no ar. Nos primeiros 7 dias você pode desistir e recebe de volta.", tag: 3 },
        { from: "owner", text: "Poxa amiga muito bom. Mas tô tendo despesas grandes no meu TCC" },
        { from: "bia", text: "Imagino, TCC pesa mesmo. Por isso aqui não tem um valor grande de uma vez: só a mensalidade, e você troca as fotos pelas novas direto no painel.", tag: 4 },
      ] as Msg[],
      did: [
        { title: "Ouviu o áudio", body: "Áudios são transcritos e lidos como qualquer mensagem, então a dona responde do jeito que fala." },
        { title: "Refez o site", body: "O foco novo, os desfiles e o atendimento em casa entraram numa segunda prévia, montada só a partir da conversa." },
        { title: "Cotou pela ferramenta", body: "Preço e condições vêm da mesma oferta que gera o link de pagamento, nunca da memória do modelo." },
        { title: "Respondeu a objeção", body: "O playbook transforma a preocupação com dinheiro no motivo do plano: nada de pagar muito de uma vez." },
      ],
      note: "Refeita a partir de uma conversa real. Nome da dona, do negócio e do projeto trocados.",
    },
    rules: {
      eyebrow: "As travas",
      title: "Um agente que pode falar com cliente.",
      body: "Um modelo que vende também pode prometer a coisa errada. A maior parte da engenharia está no que a Bia não pode fazer.",
      steps: [
        { title: "Preço só pelas ferramentas", body: "A Bia nunca diz preço de memória. Ela chama a ferramenta de preço, e o link de pagamento sai da mesma oferta." },
        { title: "Um juiz antes de cada envio", body: "Toda primeira mensagem é conferida contra os dados do negócio e as regras da casa antes de sair." },
        { title: "Um teste para cada contato", body: "Cada contato cai num braço de um teste A/B de abordagem ou oferta, então a mudança só entra quando as respostas provam." },
        { title: "Uma pessoa quando precisa", body: "Quando a Bia trava, ela passa a conversa adiante, e o CRM mostra exatamente onde." },
      ],
      chipsAria: "Regras de engenharia",
      chips: ["Toda mudança de negócio atualiza o que a Bia sabe", "Testes de snapshot no playbook", "Pedido para sair vale na hora", "Correção em produção é update reversível"],
    },
    crm: {
      eyebrow: "O CRM",
      title: "Uma sala de controle para uma equipe de um.",
      body: "Funil, conversas, dinheiro e saúde do sistema num lugar só. Cada card de lead mostra em que etapa está e quanto vale, e qualquer conversa pode ser lida e assumida pelo mesmo número de WhatsApp.",
      alt: "CRM da Sales Factory: quadro do funil de vendas com as colunas Encontrado, Contatado e Respondeu e um card por negócio",
      note: "Nomes dos negócios e cidades trocados.",
    },
    stackTitle: { eyebrow: "Por dentro", title: "Serviços pequenos, um trabalho cada." },
    stack: [
      { area: "Agente", body: "Claude Sonnet conduz as conversas e escreve as mensagens; Claude Haiku faz as checagens rápidas. Playbook de vendas e FAQ por produto, com testes de snapshot." },
      { area: "Ferramentas", body: "Um servidor MCP de ferramentas de venda: preço, prévia, link de pagamento e passagem para humano. O modelo só age por elas." },
      { area: "Prospecção", body: "Anúncios públicos de mapa, um modelo que separa as fotos de cada negócio e uma checagem antes de qualquer contato." },
      { area: "Prévias", body: "Um agente monta cada site e uma revisão crítica confere. Os sites são tenants de um app Next.js na Vercel." },
      { area: "WhatsApp", body: "Vários números pelo OpenWA, um gateway de canal para os webhooks e o runtime do agente por trás." },
      { area: "Jobs e dinheiro", body: "Jobs pg-boss no Postgres e webhooks de pagamento com conciliação e tratamento de contestações." },
      { area: "Operação", body: "Um monorepo pnpm em Docker no nosso próprio servidor, com uma CLI para jobs, flags, experimentos e migrações." },
    ],
    contact: ["Precisa de um agente", "que trabalhe de verdade?"],
  },
} as const;

function Chat({ name, status, msgs, label }: { name: string; status: string; msgs: readonly Msg[]; label: string }) {
  return (
    <div className={c.chat} role="figure" aria-label={label}>
      <div className={c.chatHead}>
        <Image alt="" height={32} src="/apps/agoraaqui-icon.webp" width={32} />
        <div>
          <strong>{name}</strong>
          <span>{status}</span>
        </div>
      </div>
      <ol className={c.chatBody}>
        {msgs.map((m) => (
          <li key={m.text} className={m.from === "owner" ? c.owner : m.from === "gap" ? c.gap : undefined}>
            {m.voice && <span className={c.voice}>{m.voice}</span>}
            {m.tag && <span className={c.tag} aria-hidden="true">{m.tag}</span>}
            {m.text}
            {m.link && <> <span className={c.link}>{m.link}</span></>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function SalesFactoryCase({ lang }: { lang: Lang }) {
  const t = salesFactoryCopy[lang];
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
              <dt>{t.sells}</dt>
              <dd>
                <a href={SELLS} rel="noreferrer" target="_blank">agoraaqui.com.br ↗</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={`${s.stage} reveal`} style={{ background: TINT }}>
          <Chat label={t.heroAria} msgs={t.hero} name={t.chatName} status={t.chatStatus} />
        </div>
      </section>

      <section className={home.sec} aria-labelledby="agent-title">
        <div className={home.wrap}>
          <CaseHead id="agent-title" eyebrow={t.agent.eyebrow} title={t.agent.title}>
            {t.agent.body}
          </CaseHead>
          <ol className={`${s.principles} ${s.six} reveal`}>
            {t.agent.steps.map((step, index) => (
              <li key={step.title}>
                <span className={s.n}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
          <dl className={`${s.figures} reveal`} aria-label={t.agent.figuresAria}>
            {t.agent.figures.map((figure) => (
              <div key={figure.label}>
                <dt>{figure.label}</dt>
                <dd>{figure.value}</dd>
              </div>
            ))}
          </dl>
          <p className={s.note}>{t.agent.note}</p>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="convo-title">
        <div className={home.wrap}>
          <CaseHead id="convo-title" eyebrow={t.convo.eyebrow} title={t.convo.title}>
            {t.convo.body}
          </CaseHead>
          <div className={c.convo}>
            <div className={`${s.stage} reveal`} style={{ background: TINT }}>
              <Chat label={t.convo.aria} msgs={t.convo.chat} name={t.chatName} status={t.chatStatus} />
            </div>
            <ol className={`${c.did} reveal`}>
              {t.convo.did.map((item, index) => (
                <li key={item.title}>
                  <h3>
                    <span className={c.tag} aria-hidden="true">{index + 1}</span>
                    {item.title}
                  </h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className={s.note}>{t.convo.note}</p>
        </div>
      </section>

      <section className={`${home.sec} ${home.contactSec}`} aria-labelledby="rules-title">
        <div className={home.wrap}>
          <div className={`${s.dark} reveal`}>
            <CaseHead id="rules-title" eyebrow={t.rules.eyebrow} title={t.rules.title}>
              {t.rules.body}
            </CaseHead>
            <ol className={`${s.principles} ${s.four}`}>
              {t.rules.steps.map((step, index) => (
                <li key={step.title}>
                  <span className={s.label}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            <ul className={s.chips} aria-label={t.rules.chipsAria}>
              {t.rules.chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={home.sec} aria-labelledby="crm-title">
        <div className={home.wrap}>
          <CaseHead id="crm-title" eyebrow={t.crm.eyebrow} title={t.crm.title}>
            {t.crm.body}
          </CaseHead>
          <figure className={`${c.crm} reveal`}>
            <div>
              <Image alt={t.crm.alt} height={800} loading="lazy" sizes="(max-width: 1100px) 100vw, 1040px" src="/apps/sales-factory/crm.webp" width={1200} />
            </div>
            <figcaption className={s.note}>{t.crm.note}</figcaption>
          </figure>
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
