export const locales = ["pt", "en", "es", "fr", "it"] as const;

export type Locale = (typeof locales)[number];
export type LocalizedText = Record<Locale, string>;

export type ChapterItem = {
  id: string;
  title: LocalizedText;
  meta: LocalizedText;
  body: LocalizedText;
};

export type StorySection = {
  id: string;
  kind: "study" | "work" | "create";
  label: string;
  image: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
  items: ChapterItem[];
};

export type LogoItem = {
  name: string;
  src: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type StackGroup = {
  id: string;
  title: LocalizedText;
  items: readonly string[];
};

export const intro = {
  status: {
    pt: "Frontend engineer com foco em interfaces premium e experiência visual",
    en: "Frontend engineer focused on premium interfaces and visual experience",
    es: "Frontend engineer enfocado en interfaces premium y experiencia visual",
    fr: "Frontend engineer orienté interfaces premium et expérience visuelle",
    it: "Frontend engineer focalizzato su interfacce premium ed esperienza visiva",
  },
  title: {
    pt: "Portfólio, produto e narrativa visual no mesmo sistema.",
    en: "Portfolio, product, and visual narrative in the same system.",
    es: "Portafolio, producto y narrativa visual en el mismo sistema.",
    fr: "Portfolio, produit et narration visuelle dans le même système.",
    it: "Portfolio, prodotto e narrativa visiva nello stesso sistema.",
  },
  body: {
    pt: "Quero que cada parte da minha trajetória apareça como um capítulo visual: formação, experiência e criação. Menos currículo estático, mais direção de arte, clareza e intenção.",
    en: "I want each part of my path to appear as a visual chapter: education, experience, and creation. Less static resume, more art direction, clarity, and intention.",
    es: "Quiero que cada parte de mi trayectoria aparezca como un capítulo visual: formación, experiencia y creación. Menos currículo estático, más dirección de arte, claridad e intención.",
    fr: "Je veux que chaque partie de mon parcours apparaisse comme un chapitre visuel : formation, expérience et création. Moins de CV statique, plus de direction artistique, de clarté et d'intention.",
    it: "Voglio che ogni parte del mio percorso appaia come un capitolo visivo: formazione, esperienza e creazione. Meno curriculum statico, più direzione artistica, chiarezza e intenzione.",
  },
  cta: {
    pt: "Explorar capítulos",
    en: "Explore chapters",
    es: "Explorar capítulos",
    fr: "Explorer les chapitres",
    it: "Esplora i capitoli",
  },
  roleLine: {
    pt: ["Frontend Engineer", "Produto", "Visual Systems"],
    en: ["Frontend Engineer", "Product", "Visual Systems"],
    es: ["Frontend Engineer", "Producto", "Visual Systems"],
    fr: ["Frontend Engineer", "Produit", "Visual Systems"],
    it: ["Frontend Engineer", "Prodotto", "Visual Systems"],
  },
} as const;

export const heroCards = {
  positioning: {
    label: {
      pt: "Posicionamento",
      en: "Positioning",
      es: "Posicionamiento",
      fr: "Positionnement",
      it: "Posizionamento",
    },
    title: "Frontend + Product + Visual Systems",
    body: {
      pt: "Interfaces premium, direção visual e experiência de produto para times que valorizam execução.",
      en: "Premium interfaces, visual direction, and product experience for teams that care about execution.",
      es: "Interfaces premium, dirección visual y experiencia de producto para equipos que valoran la ejecución.",
      fr: "Interfaces premium, direction visuelle et expérience produit pour des équipes exigeantes.",
      it: "Interfacce premium, direzione visiva ed esperienza di prodotto per team che valorizzano l'esecuzione.",
    },
    bullets: {
      pt: [
        "Execução forte em React e Next.js",
        "Olhar de produto e narrativa visual",
        "Comunicação bilíngue para times globais",
      ],
      en: [
        "Strong execution in React and Next.js",
        "Product thinking with visual narrative",
        "Bilingual communication for global teams",
      ],
      es: [
        "Ejecución sólida en React y Next.js",
        "Visión de producto con narrativa visual",
        "Comunicación bilingüe para equipos globales",
      ],
      fr: [
        "Exécution solide en React et Next.js",
        "Vision produit avec narration visuelle",
        "Communication bilingue pour équipes globales",
      ],
      it: [
        "Esecuzione solida in React e Next.js",
        "Visione di prodotto con narrativa visiva",
        "Comunicazione bilingue per team globali",
      ],
    },
  },
  base: {
    label: {
      pt: "Base",
      en: "Base",
      es: "Base",
      fr: "Base",
      it: "Base",
    },
    value: "Campina Grande, BR",
  },
  availability: {
    label: {
      pt: "Disponível",
      en: "Available",
      es: "Disponible",
      fr: "Disponible",
      it: "Disponibile",
    },
    value: {
      pt: "Remoto / Global",
      en: "Remote / Global",
      es: "Remoto / Global",
      fr: "Remote / Global",
      it: "Remoto / Globale",
    },
  },
} as const;

export const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Design Systems",
  "Framer Motion",
  "Node.js",
  "Product Thinking",
];

export const stackSection = {
  eyebrow: {
    pt: "Stack / Capacidades",
    en: "Stack / Capabilities",
    es: "Stack / Capacidades",
    fr: "Stack / Capacités",
    it: "Stack / Capacità",
  },
  title: {
    pt: "Competências organizadas por domínio, não só por framework.",
    en: "Skills organized by domain, not just by framework.",
    es: "Habilidades organizadas por dominio, no solo por framework.",
    fr: "Compétences organisées par domaine, pas seulement par framework.",
    it: "Competenze organizzate per dominio, non solo per framework.",
  },
  body: {
    pt: "Front-end é o centro, mas a atuação se conecta com arquitetura, back-end, DevOps, design de sistema e produto.",
    en: "Frontend is the center, but the work connects with architecture, backend, DevOps, system design, and product.",
    es: "Frontend es el centro, pero el trabajo se conecta con arquitectura, backend, DevOps, diseño de sistemas y producto.",
    fr: "Le frontend est le centre, mais le travail se connecte à l'architecture, au backend, au DevOps, au design système et au produit.",
    it: "Il frontend è il centro, ma il lavoro si collega ad architettura, backend, DevOps, system design e prodotto.",
  },
} as const;

export const stackGroups: readonly StackGroup[] = [
  {
    id: "frontend",
    title: {
      pt: "Front-end",
      en: "Frontend",
      es: "Frontend",
      fr: "Frontend",
      it: "Frontend",
    },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    id: "backend",
    title: {
      pt: "Back-end",
      en: "Backend",
      es: "Backend",
      fr: "Backend",
      it: "Backend",
    },
    items: [
      "Node.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Authentication",
      "Server Architecture",
    ],
  },
  {
    id: "devops",
    title: {
      pt: "DevOps",
      en: "DevOps",
      es: "DevOps",
      fr: "DevOps",
      it: "DevOps",
    },
    items: [
      "Docker",
      "CI/CD",
      "Vercel",
      "GitHub Actions",
      "Observability",
      "Deployment Flows",
      "Environment Strategy",
    ],
  },
  {
    id: "systems",
    title: {
      pt: "Arquitetura e Sistemas",
      en: "Architecture and Systems",
      es: "Arquitectura y Sistemas",
      fr: "Architecture et Systèmes",
      it: "Architettura e Sistemi",
    },
    items: [
      "System Design",
      "Design Systems",
      "Component Libraries",
      "Scalability",
      "Maintainability",
      "Technical Decision Making",
    ],
  },
  {
    id: "product",
    title: {
      pt: "Produto, UI e UX",
      en: "Product, UI and UX",
      es: "Producto, UI y UX",
      fr: "Produit, UI et UX",
      it: "Prodotto, UI e UX",
    },
    items: [
      "Product Thinking",
      "UI Direction",
      "UX Reasoning",
      "Interaction Design",
      "Information Hierarchy",
      "Visual Narrative",
    ],
  },
] as const;

export const clientLogos: readonly LogoItem[] = [
  { name: "CivicPlus", src: "/clients/civicplus-vector-logo.svg" },
  { name: "Duelbits", src: "/clients/duelbits.png" },
  { name: "Evermart", src: "/clients/evermart.png" },
  { name: "Leaf Agriculture", src: "/clients/leaf.svg" },
  { name: "Linker", src: "/clients/linker.svg" },
  { name: "Live Nation", src: "/clients/livenation.svg" },
  { name: "Nivells", src: "/clients/nivells.svg" },
  { name: "VCCESS", src: "/clients/vccess.svg" },
  { name: "Warren", src: "/clients/warren.svg" },
] as const;

export const logoSection = {
  eyebrow: {
    pt: "Clientes / Times",
    en: "Clients / Teams",
    es: "Clientes / Equipos",
    fr: "Clients / Équipes",
    it: "Clienti / Team",
  },
  title: {
    pt: "Marcas e contextos onde meu trabalho já passou.",
    en: "Brands and contexts where my work has already lived.",
    es: "Marcas y contextos por donde ya pasó mi trabajo.",
    fr: "Marques et contextes où mon travail a déjà existé.",
    it: "Marchi e contesti in cui il mio lavoro è già passato.",
  },
  body: {
    pt: "Seleção de empresas, produtos e ambientes onde atuei em front-end, produto e sistemas visuais.",
    en: "A selection of companies, products, and environments where I worked across frontend, product, and visual systems.",
    es: "Selección de empresas, productos y entornos donde trabajé entre frontend, producto y sistemas visuales.",
    fr: "Sélection d'entreprises, produits et environnements où j'ai travaillé entre frontend, produit et systèmes visuels.",
    it: "Selezione di aziende, prodotti e contesti in cui ho lavorato tra frontend, prodotto e sistemi visivi.",
  },
} as const;

export const sections: readonly StorySection[] = [
  {
    id: "education",
    kind: "study",
    label: "01 / Education",
    image: "/scenarios/classroom.png",
    eyebrow: {
      pt: "Formação",
      en: "Education",
      es: "Formación",
      fr: "Formation",
      it: "Formazione",
    },
    title: {
      pt: "Base técnica e repertório analítico.",
      en: "Technical foundation and analytical range.",
      es: "Base técnica y repertorio analítico.",
      fr: "Base technique et répertoire analytique.",
      it: "Base tecnica e repertorio analitico.",
    },
    body: {
      pt: "A parte acadêmica aparece como progressão. Cada item tem foco isolado enquanto a cena permanece estável.",
      en: "The academic chapter appears as progression. Each item gets isolated focus while the scene stays stable.",
      es: "La parte académica aparece como progresión. Cada ítem recibe foco aislado mientras la escena permanece estable.",
      fr: "La partie académique apparaît comme une progression. Chaque élément reçoit un focus isolé pendant que la scène reste stable.",
      it: "La parte accademica appare come progressione. Ogni elemento riceve un focus isolato mentre la scena resta stabile.",
    },
    items: [
      {
        id: "ufcg",
        title: {
          pt: "Universidade Federal de Campina Grande",
          en: "Federal University of Campina Grande",
          es: "Universidad Federal de Campina Grande",
          fr: "Université Fédérale de Campina Grande",
          it: "Università Federale di Campina Grande",
        },
        meta: {
          pt: "Bacharel em Ciência da Computação",
          en: "Bachelor in Computer Science",
          es: "Licenciatura en Ciencias de la Computación",
          fr: "Licence en informatique",
          it: "Laurea in Informatica",
        },
        body: {
          pt: "Base forte em computação, lógica, software e resolução estruturada de problemas.",
          en: "Strong foundation in computing, logic, software, and structured problem solving.",
          es: "Base sólida en computación, lógica, software y resolución estructurada de problemas.",
          fr: "Base solide en informatique, logique, software et résolution structurée de problèmes.",
          it: "Base solida in informatica, logica, software e risoluzione strutturata dei problemi.",
        },
      },
      {
        id: "fullcycle",
        title: {
          pt: "MBA em Arquitetura FullCycle",
          en: "MBA in FullCycle Architecture",
          es: "MBA en Arquitectura FullCycle",
          fr: "MBA en architecture FullCycle",
          it: "MBA in Architettura FullCycle",
        },
        meta: {
          pt: "Arquitetura, produto e visão sistêmica",
          en: "Architecture, product, and systems thinking",
          es: "Arquitectura, producto y visión sistémica",
          fr: "Architecture, produit et vision systémique",
          it: "Architettura, prodotto e visione sistemica",
        },
        body: {
          pt: "Aprofundamento em decisão técnica, arquitetura e leitura de produto além da interface.",
          en: "Deeper work in technical decision making, architecture, and product thinking beyond the interface.",
          es: "Profundización en decisión técnica, arquitectura y lectura de producto más allá de la interfaz.",
          fr: "Approfondissement de la décision technique, de l'architecture et de la lecture produit au-delà de l'interface.",
          it: "Approfondimento su decisione tecnica, architettura e lettura di prodotto oltre l'interfaccia.",
        },
      },
    ],
  },
  {
    id: "experience",
    kind: "work",
    label: "02 / Experience",
    image: "/scenarios/office.png",
    eyebrow: {
      pt: "Experiência",
      en: "Experience",
      es: "Experiencia",
      fr: "Expérience",
      it: "Esperienza",
    },
    title: {
      pt: "Produto, consistência e entrega.",
      en: "Product, consistency, and delivery.",
      es: "Producto, consistencia y entrega.",
      fr: "Produit, cohérence et delivery.",
      it: "Prodotto, coerenza e delivery.",
    },
    body: {
      pt: "A experiência profissional aparece como capítulos curtos, em ordem de relevância e com leitura mais editorial.",
      en: "Professional experience appears as short chapters, ordered by relevance and with a more editorial reading.",
      es: "La experiencia profesional aparece como capítulos breves, ordenados por relevancia y con lectura más editorial.",
      fr: "L'expérience professionnelle apparaît comme des chapitres courts, ordonnés par pertinence et avec une lecture plus éditoriale.",
      it: "L'esperienza professionale appare come capitoli brevi, ordinati per rilevanza e con una lettura più editoriale.",
    },
    items: [
      {
        id: "xteam",
        title: {
          pt: "X-Team",
          en: "X-Team",
          es: "X-Team",
          fr: "X-Team",
          it: "X-Team",
        },
        meta: {
          pt: "Times internacionais e produto digital",
          en: "International teams and digital product",
          es: "Equipos internacionales y producto digital",
          fr: "Équipes internationales et produit digital",
          it: "Team internazionali e prodotto digitale",
        },
        body: {
          pt: "Trabalho em interfaces de produto com exigência alta de qualidade visual, clareza e colaboração remota.",
          en: "Work on product interfaces with a high bar for visual quality, clarity, and remote collaboration.",
          es: "Trabajo en interfaces de producto con una exigencia alta de calidad visual, claridad y colaboración remota.",
          fr: "Travail sur des interfaces produit avec un niveau élevé de qualité visuelle, de clarté et de collaboration à distance.",
          it: "Lavoro su interfacce di prodotto con un livello alto di qualità visiva, chiarezza e collaborazione remota.",
        },
      },
      {
        id: "frontend",
        title: {
          pt: "Front-end com mentalidade de produto",
          en: "Frontend with product thinking",
          es: "Frontend con mentalidad de producto",
          fr: "Frontend avec vision produit",
          it: "Frontend con mentalità di prodotto",
        },
        meta: {
          pt: "React, Next.js, TypeScript e performance",
          en: "React, Next.js, TypeScript, and performance",
          es: "React, Next.js, TypeScript y performance",
          fr: "React, Next.js, TypeScript et performance",
          it: "React, Next.js, TypeScript e performance",
        },
        body: {
          pt: "Construção de experiências digitais com atenção ao detalhe, fluidez e legibilidade do sistema.",
          en: "Building digital experiences with attention to detail, flow, and system legibility.",
          es: "Construcción de experiencias digitales con atención al detalle, fluidez y legibilidad del sistema.",
          fr: "Construction d'expériences digitales avec attention au détail, à la fluidité et à la lisibilité du système.",
          it: "Costruzione di esperienze digitali con attenzione al dettaglio, fluidità e leggibilità del sistema.",
        },
      },
      {
        id: "delivery",
        title: {
          pt: "Entrega full-cycle",
          en: "Full-cycle delivery",
          es: "Entrega full-cycle",
          fr: "Delivery full-cycle",
          it: "Delivery full-cycle",
        },
        meta: {
          pt: "Design, sistema e decisão técnica",
          en: "Design, systems, and technical decisions",
          es: "Diseño, sistema y decisión técnica",
          fr: "Design, système et décision technique",
          it: "Design, sistema e decisione tecnica",
        },
        body: {
          pt: "Capacidade de conectar implementação, direção visual e resultado de produto sem perder consistência.",
          en: "Ability to connect implementation, visual direction, and product outcome without losing consistency.",
          es: "Capacidad de conectar implementación, dirección visual y resultado de producto sin perder consistencia.",
          fr: "Capacité à relier implémentation, direction visuelle et résultat produit sans perdre en cohérence.",
          it: "Capacità di collegare implementazione, direzione visiva e risultato di prodotto senza perdere coerenza.",
        },
      },
    ],
  },
  {
    id: "creation",
    kind: "create",
    label: "03 / Creation",
    image: "/scenarios/room.png",
    eyebrow: {
      pt: "Criação",
      en: "Creation",
      es: "Creación",
      fr: "Création",
      it: "Creazione",
    },
    title: {
      pt: "Exploração, projeto e repertório.",
      en: "Exploration, projects, and range.",
      es: "Exploración, proyectos y repertorio.",
      fr: "Exploration, projets et répertoire.",
      it: "Esplorazione, progetti e repertorio.",
    },
    body: {
      pt: "O terceiro capítulo mostra o lado onde linguagem visual, curiosidade e produto viram experimento e projeto.",
      en: "The third chapter shows where visual language, curiosity, and product become experiments and projects.",
      es: "El tercer capítulo muestra dónde el lenguaje visual, la curiosidad y el producto se vuelven experimento y proyecto.",
      fr: "Le troisième chapitre montre là où langage visuel, curiosité et produit deviennent expérimentation et projet.",
      it: "Il terzo capitolo mostra dove linguaggio visivo, curiosità e prodotto diventano esperimento e progetto.",
    },
    items: [
      {
        id: "lensly",
        title: {
          pt: "Lensly.ai",
          en: "Lensly.ai",
          es: "Lensly.ai",
          fr: "Lensly.ai",
          it: "Lensly.ai",
        },
        meta: {
          pt: "Produto com IA",
          en: "AI-powered product",
          es: "Producto con IA",
          fr: "Produit avec IA",
          it: "Prodotto con IA",
        },
        body: {
          pt: "Exploração de produto, interface e narrativa visual aplicada a experiências com inteligência artificial.",
          en: "Exploration of product, interface, and visual narrative applied to AI experiences.",
          es: "Exploración de producto, interfaz y narrativa visual aplicada a experiencias con inteligencia artificial.",
          fr: "Exploration de produit, d'interface et de narration visuelle appliquée aux expériences avec intelligence artificielle.",
          it: "Esplorazione di prodotto, interfaccia e narrativa visiva applicata a esperienze con intelligenza artificiale.",
        },
      },
      {
        id: "open-source",
        title: {
          pt: "Open source e sistema visual",
          en: "Open source and visual systems",
          es: "Open source y sistema visual",
          fr: "Open source et système visuel",
          it: "Open source e sistema visivo",
        },
        meta: {
          pt: "Bibliotecas, componentes e consistência",
          en: "Libraries, components, and consistency",
          es: "Bibliotecas, componentes y consistencia",
          fr: "Bibliothèques, composants et cohérence",
          it: "Librerie, componenti e coerenza",
        },
        body: {
          pt: "Experimentação contínua com componentes reutilizáveis, padronização visual e estrutura de interface.",
          en: "Continuous experimentation with reusable components, visual standardization, and interface structure.",
          es: "Experimentación continua con componentes reutilizables, estandarización visual y estructura de interfaz.",
          fr: "Expérimentation continue avec des composants réutilisables, une standardisation visuelle et une structure d'interface.",
          it: "Sperimentazione continua con componenti riutilizzabili, standardizzazione visiva e struttura dell'interfaccia.",
        },
      },
      {
        id: "github",
        title: {
          pt: "GitHub público",
          en: "Public GitHub",
          es: "GitHub público",
          fr: "GitHub public",
          it: "GitHub pubblico",
        },
        meta: {
          pt: "Protótipos, testes e repertório técnico",
          en: "Prototypes, tests, and technical range",
          es: "Prototipos, pruebas y repertorio técnico",
          fr: "Prototypes, tests et répertoire technique",
          it: "Prototipi, test e repertorio tecnico",
        },
        body: {
          pt: "Uma camada pública de experimentação que mostra processo, curiosidade e velocidade de exploração.",
          en: "A public layer of experimentation that shows process, curiosity, and exploration speed.",
          es: "Una capa pública de experimentación que muestra proceso, curiosidad y velocidad de exploración.",
          fr: "Une couche publique d'expérimentation qui montre le processus, la curiosité et la vitesse d'exploration.",
          it: "Uno strato pubblico di sperimentazione che mostra processo, curiosità e velocità di esplorazione.",
        },
      },
    ],
  },
] as const;

export const footerCopy = {
  eyebrow: {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
    fr: "Contact",
    it: "Contatto",
  },
  title: {
    pt: "Projetos ambiciosos pedem interface forte, clareza de produto e execução consistente.",
    en: "Ambitious projects ask for strong interfaces, product clarity, and consistent execution.",
    es: "Los proyectos ambiciosos piden interfaces fuertes, claridad de producto y ejecución consistente.",
    fr: "Les projets ambitieux demandent des interfaces fortes, de la clarté produit et une exécution cohérente.",
    it: "I progetti ambiziosi richiedono interfacce forti, chiarezza di prodotto ed esecuzione coerente.",
  },
  body: {
    pt: "Se o contexto pede produto bem acabado, sistema coerente e camada visual acima da média, faz sentido conversar.",
    en: "If the context asks for a polished product, coherent systems, and above-average visual quality, it makes sense to talk.",
    es: "Si el contexto pide un producto pulido, sistemas coherentes y una capa visual por encima de la media, tiene sentido hablar.",
    fr: "Si le contexte demande un produit soigné, des systèmes cohérents et une qualité visuelle au-dessus de la moyenne, cela vaut la peine d'échanger.",
    it: "Se il contesto richiede un prodotto curato, sistemi coerenti e una qualità visiva sopra la media, ha senso parlarne.",
  },
  highlights: {
    pt: [
      { label: "Foco", value: "React, Next.js, TypeScript" },
      { label: "Escopo", value: "Frontend / Produto / Motion" },
      { label: "Formato", value: "Remoto / Global" },
      { label: "Idioma", value: "PT / EN / ES / FR / IT" },
    ],
    en: [
      { label: "Focus", value: "React, Next.js, TypeScript" },
      { label: "Scope", value: "Frontend / Product / Motion" },
      { label: "Format", value: "Remote / Global" },
      { label: "Language", value: "PT / EN / ES / FR / IT" },
    ],
    es: [
      { label: "Foco", value: "React, Next.js, TypeScript" },
      { label: "Alcance", value: "Frontend / Producto / Motion" },
      { label: "Formato", value: "Remoto / Global" },
      { label: "Idioma", value: "PT / EN / ES / FR / IT" },
    ],
    fr: [
      { label: "Focus", value: "React, Next.js, TypeScript" },
      { label: "Périmètre", value: "Frontend / Produit / Motion" },
      { label: "Format", value: "Remote / Global" },
      { label: "Langue", value: "PT / EN / ES / FR / IT" },
    ],
    it: [
      { label: "Focus", value: "React, Next.js, TypeScript" },
      { label: "Ambito", value: "Frontend / Prodotto / Motion" },
      { label: "Formato", value: "Remoto / Globale" },
      { label: "Lingua", value: "PT / EN / ES / FR / IT" },
    ],
  },
  cta: {
    pt: "Iniciar conversa",
    en: "Start a conversation",
    es: "Iniciar conversación",
    fr: "Démarrer une conversation",
    it: "Iniziare una conversazione",
  },
} as const;

export const contactLinks: readonly ContactLink[] = [
  {
    label: "Email",
    value: "gustavo.luiz.bispo.santos@gmail.com",
    href: "mailto:gustavo.luiz.bispo.santos@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/gustavolbs",
    href: "https://github.com/gustavolbs",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gbispo-santos",
    href: "https://www.linkedin.com/in/gbispo-santos/",
  },
] as const;

export function translate(locale: Locale, text: LocalizedText) {
  return text[locale];
}
