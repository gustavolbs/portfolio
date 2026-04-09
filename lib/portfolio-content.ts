import { localeMessages, locales, type Locale } from "@/lib/locales";

export { locales, type Locale };

export type LocalizedText = Record<Locale, string>;
export type LocalizedList<T> = Record<Locale, readonly T[]>;

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
  id: string;
  name: LocalizedText;
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

const localize = <T>(selector: (messages: (typeof localeMessages)[Locale]) => T) =>
  Object.fromEntries(
    locales.map((locale) => [locale, selector(localeMessages[locale])]),
  ) as Record<Locale, T>;

export const intro = {
  status: localize((messages) => messages.intro.status),
  title: localize((messages) => messages.intro.title),
  body: localize((messages) => messages.intro.body),
  cta: localize((messages) => messages.intro.cta),
  roleLine: localize((messages) => messages.intro.roleLine),
} as const;

export const heroMeta = {
  eyebrow: localize((messages) => messages.hero.eyebrow),
  kicker: localize((messages) => messages.hero.kicker),
  availabilityLabel: localize((messages) => messages.hero.availabilityLabel),
  availabilityValue: localize((messages) => messages.hero.availabilityValue),
  locationLabel: localize((messages) => messages.hero.locationLabel),
  locationValue: localize((messages) => messages.hero.locationValue),
  valueLabel: localize((messages) => messages.hero.valueLabel),
  valueValue: localize((messages) => messages.hero.valueValue),
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
] as const;

export const stackSection = {
  eyebrow: localize((messages) => messages.stackSection.eyebrow),
  title: localize((messages) => messages.stackSection.title),
  body: localize((messages) => messages.stackSection.body),
} as const;

export const stackGroups: readonly StackGroup[] = [
  {
    id: "frontend",
    title: localize((messages) => messages.stackGroups.frontend),
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
    title: localize((messages) => messages.stackGroups.backend),
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
    title: localize((messages) => messages.stackGroups.devops),
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
    title: localize((messages) => messages.stackGroups.systems),
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
    title: localize((messages) => messages.stackGroups.product),
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
  {
    id: "civicplus",
    name: localize((messages) => messages.clientLogos.civicplus),
    src: "/clients/civicplus-vector-logo.svg",
  },
  {
    id: "duelbits",
    name: localize((messages) => messages.clientLogos.duelbits),
    src: "/clients/duelbits.png",
  },
  {
    id: "evermart",
    name: localize((messages) => messages.clientLogos.evermart),
    src: "/clients/evermart.png",
  },
  {
    id: "leaf",
    name: localize((messages) => messages.clientLogos.leaf),
    src: "/clients/leaf.svg",
  },
  {
    id: "linker",
    name: localize((messages) => messages.clientLogos.linker),
    src: "/clients/linker.svg",
  },
  {
    id: "livenation",
    name: localize((messages) => messages.clientLogos.livenation),
    src: "/clients/livenation.svg",
  },
  {
    id: "nivells",
    name: localize((messages) => messages.clientLogos.nivells),
    src: "/clients/nivells.svg",
  },
  {
    id: "vccess",
    name: localize((messages) => messages.clientLogos.vccess),
    src: "/clients/vccess.svg",
  },
  {
    id: "warren",
    name: localize((messages) => messages.clientLogos.warren),
    src: "/clients/warren.svg",
  },
] as const;

export const logoSection = {
  eyebrow: localize((messages) => messages.logoSection.eyebrow),
  title: localize((messages) => messages.logoSection.title),
  body: localize((messages) => messages.logoSection.body),
} as const;

export const sections: readonly StorySection[] = [
  {
    id: "education",
    kind: "study",
    label: "01 / Education",
    image: "/scenarios/classroom.png",
    eyebrow: localize((messages) => messages.sections.education.eyebrow),
    title: localize((messages) => messages.sections.education.title),
    body: localize((messages) => messages.sections.education.body),
    items: [
      {
        id: "ufcg",
        title: localize((messages) => messages.sections.education.items.ufcg.title),
        meta: localize((messages) => messages.sections.education.items.ufcg.meta),
        body: localize((messages) => messages.sections.education.items.ufcg.body),
      },
      {
        id: "fullcycle",
        title: localize((messages) => messages.sections.education.items.fullcycle.title),
        meta: localize((messages) => messages.sections.education.items.fullcycle.meta),
        body: localize((messages) => messages.sections.education.items.fullcycle.body),
      },
    ],
  },
  {
    id: "experience",
    kind: "work",
    label: "02 / Experience",
    image: "/scenarios/office.png",
    eyebrow: localize((messages) => messages.sections.experience.eyebrow),
    title: localize((messages) => messages.sections.experience.title),
    body: localize((messages) => messages.sections.experience.body),
    items: [
      {
        id: "xteam",
        title: localize((messages) => messages.sections.experience.items.xteam.title),
        meta: localize((messages) => messages.sections.experience.items.xteam.meta),
        body: localize((messages) => messages.sections.experience.items.xteam.body),
      },
      {
        id: "frontend",
        title: localize((messages) => messages.sections.experience.items.frontend.title),
        meta: localize((messages) => messages.sections.experience.items.frontend.meta),
        body: localize((messages) => messages.sections.experience.items.frontend.body),
      },
      {
        id: "delivery",
        title: localize((messages) => messages.sections.experience.items.delivery.title),
        meta: localize((messages) => messages.sections.experience.items.delivery.meta),
        body: localize((messages) => messages.sections.experience.items.delivery.body),
      },
    ],
  },
  {
    id: "creation",
    kind: "create",
    label: "03 / Creation",
    image: "/scenarios/room.png",
    eyebrow: localize((messages) => messages.sections.creation.eyebrow),
    title: localize((messages) => messages.sections.creation.title),
    body: localize((messages) => messages.sections.creation.body),
    items: [
      {
        id: "lensly",
        title: localize((messages) => messages.sections.creation.items.lensly.title),
        meta: localize((messages) => messages.sections.creation.items.lensly.meta),
        body: localize((messages) => messages.sections.creation.items.lensly.body),
      },
      {
        id: "open-source",
        title: localize((messages) => messages.sections.creation.items["open-source"].title),
        meta: localize((messages) => messages.sections.creation.items["open-source"].meta),
        body: localize((messages) => messages.sections.creation.items["open-source"].body),
      },
      {
        id: "github",
        title: localize((messages) => messages.sections.creation.items.github.title),
        meta: localize((messages) => messages.sections.creation.items.github.meta),
        body: localize((messages) => messages.sections.creation.items.github.body),
      },
    ],
  },
] as const;

export const footerCopy = {
  eyebrow: localize((messages) => messages.footer.eyebrow),
  title: localize((messages) => messages.footer.title),
  body: localize((messages) => messages.footer.body),
  highlights: localize((messages) => messages.footer.highlights),
} as const;

export const footerFormCopy = {
  eyebrow: localize((messages) => messages.footer.form.eyebrow),
  title: localize((messages) => messages.footer.form.title),
  body: localize((messages) => messages.footer.form.body),
  subject: localize((messages) => messages.footer.form.subject),
  nameFieldLabel: localize((messages) => messages.footer.form.nameFieldLabel),
  emailFieldLabel: localize((messages) => messages.footer.form.emailFieldLabel),
  name: localize((messages) => messages.footer.form.name),
  email: localize((messages) => messages.footer.form.email),
  message: localize((messages) => messages.footer.form.message),
  submit: localize((messages) => messages.footer.form.submit),
  direct: localize((messages) => messages.footer.form.direct),
  directBody: localize((messages) => messages.footer.form.directBody),
  mail: localize((messages) => messages.footer.form.mail),
  linkedin: localize((messages) => messages.footer.form.linkedin),
} as const;

export const railCopy = {
  introLabel: localize((messages) => messages.rail.introLabel),
  introDescription: localize((messages) => messages.rail.introDescription),
  logosLabel: localize((messages) => messages.rail.logosLabel),
  logosDescription: localize((messages) => messages.rail.logosDescription),
  stackLabel: localize((messages) => messages.rail.stackLabel),
  stackDescription: localize((messages) => messages.rail.stackDescription),
  footerLabel: localize((messages) => messages.rail.footerLabel),
  footerDescription: localize((messages) => messages.rail.footerDescription),
  chapterHint: localize((messages) => messages.rail.chapterHint),
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

export function translate<T>(locale: Locale, value: Record<Locale, T>) {
  return value[locale];
}
