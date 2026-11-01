// Site content. Every value is a string. When a value is unknown,
// the string begins with "[[PLACEHOLDER:" so the page can render the
// marker and TODO.md can track the gap.
//
// UI fallback strategy: a render helper in src/lib/placeholder.ts
// reads these strings and, when the value begins with "[[PLACEHOLDER",
// returns a neutral non-committal string. The literal placeholder
// marker never renders in the UI. The marker remains in TODO.md.

export const profile = {
  name: "Gustavo Bispo",
  shortName: "Gustavo Bispo",
  email: "gustavo.luiz.bispo.santos@gmail.com",
  mailto: "mailto:gustavo.luiz.bispo.santos@gmail.com",
  github: "https://github.com/gustavolbs",
  linkedin: "https://www.linkedin.com/in/gbispo-santos",
  resumeHref: "/resume.pdf",
  currentCompany: "[[PLACEHOLDER: current company]]",
  role: "Senior Frontend & Product Engineer",
  years: "6+",
  location: "Brazil · UTC-3",
  status: "Open to senior roles",
} as const;

export const positioning = {
  role: "Senior Frontend Engineer",
  focusShort: "frontend architecture and product delivery at consumer scale",
  domain: "Owns frontend architecture and product delivery on React, Next.js and TypeScript.",
  proof:
    "Shipped three rewrites that changed how the teams around them worked: a multi-tenant venue platform, an NPM-packaged design system, and a checkout re-platform that made daily deploys safe.",
} as const;

export const homeActions = {
  primary: {
    label: "Copy email",
    value: profile.email,
  },
  secondary: {
    label: "Read resume",
    href: profile.resumeHref,
  },
} as const;

export type CaseStudy = {
  slug: string;
  number: string;
  company: string;
  title: string;
  role: string;
  period: string;
  problem: string;
  outcome: string;
  stack: readonly string[];
  chapters: readonly { label: string; body: string }[];
  context?: string;
  ownership?: string;
  tradeoff?: string;
  decisions?: readonly Decision[];
  quality?: readonly string[];
  measurementMethod?: string;
  measuredDate?: string;
  whatIdChange?: string;
};

export type Decision = {
  chose: string;
  rejected: string;
  why: string;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "live-nation",
    number: "01",
    company: "Live Nation Entertainment",
    title: "Multi-tenant venue platform on Next.js",
    role: "Senior Frontend Engineer",
    period: "Sep 2024 to Present",
    problem:
      "Adding a venue, re-theming an existing one, or shipping a sponsor integration previously required a code change per venue.",
    tradeoff:
      "Treat venues as code versus treat venues as configuration. Code is the engineer's natural unit; configuration is the business's natural unit. Both work; only one scales past a dozen venues.",
    context:
      "Live Nation operates a network of venue websites across multiple markets. Outsourced via X-Team, remote from Brazil, embedded with the LN Venue Sites team on LN.com. The platform serves the ticket purchase path, event detail pages, and venue-level content for a network of physical venues.",
    ownership:
      "Frontend architecture for the venue platform. i18n launch for Canada (en-CA, fr-CA). The internal customer service application end to end. The Next.js 15 upgrade. Ongoing mentorship for one mid frontend engineer on the team.",
    outcome:
      "A platform where launching a new venue is a configuration change, not a code change. i18n live in production across three locales. Internal customer service application in active use by support staff.",
    measurementMethod:
      "[[PLACEHOLDER: production scale claim, measured how, dated]]",
    measuredDate: "[[PLACEHOLDER: measurement date]]",
    decisions: [
      {
        chose:
          "Re-architected the venue platform onto a content-driven model where a venue's brand, theme, and sponsor slots are configuration, not code.",
        rejected:
          "Keep the existing per-venue code deploy. The team had been adding a venue roughly every quarter, each as a small sprint.",
        why:
          "Each new venue took the same sprint and pulled the same engineer. After the tenth venue the per-venue deploy was the bottleneck. Configuration moves the cost from engineering to content ops, where it belongs.",
      },
      {
        chose:
          "Owned the Canada i18n launch end to end. Hreflang and canonical SEO, next-intl infrastructure, locale-aware APIs, localized metadata, Algolia localization for en-US, en-CA, fr-CA.",
        rejected:
          "Defer i18n to a later quarter and ship feature work in en-US only.",
        why:
          "Canada was the next market with a hard launch date. The hreflang work was not optional and would not get cheaper later. Doing it in the same quarter as the venue platform rewrite also let the new content model carry locale naturally.",
      },
      {
        chose:
          "Built and shipped the internal customer service application replacing a spreadsheet-driven manual GraphQL workflow used by support staff.",
        rejected:
          "Patch the spreadsheet workflow with a Notion or Airtable template, which had been the previous default.",
        why:
          "Support staff were copying data between three tools and losing a percentage of cases to transcription error. The team had asked for a typed internal product twice and been told to wait. Building it removed a recurring class of bug and gave support a tool with an audit trail.",
      },
    ],
    quality: [
      "TypeScript strict across the venue platform. No `any`, no non-null assertions outside proven invariants.",
      "Lighthouse budget in CI: any PR that drops the Performance score below the threshold fails the build.",
      "i18n keys are typed at the source. Missing translations fail the build, not runtime.",
      "Hreflang and canonical tags audited per locale on every release.",
      "Accessibility: focus order verified per route, focus ring visible, skip link present.",
    ],
    stack: [
      "Next.js 15",
      "React",
      "TypeScript",
      "next-intl",
      "GraphQL",
      "Algolia",
      "Okta",
    ],
    chapters: [
      {
        label: "Context",
        body: "Multi-tenant Venue Sites platform on LN.com. Outsourced via X-Team, remote from Brazil.",
      },
      {
        label: "Architecture",
        body: "Re-architected the venue platform onto a content-driven model so a new or re-themed venue is a configuration, not a deployment.",
      },
      {
        label: "Internationalization",
        body: "Owned the canada i18n launch. Hreflang and canonical SEO, next-intl infrastructure, locale-aware APIs, Algolia localization.",
      },
      {
        label: "Internal product",
        body: "Built and shipped an internal customer service application used by support staff, replacing a spreadsheet-driven GraphQL workflow.",
      },
      {
        label: "Modernization",
        body: "Next.js 15 upgrade, retired feature flags, removed obsolete code paths, eliminated third-party personalization tooling.",
      },
    ],
    whatIdChange:
      "I would have pushed earlier for the i18n work to land on its own dedicated sprint, separate from the architecture rewrite. The two efforts shared engineers and the dependency between them slowed both. Splitting them would have produced a cleaner diff for review on each.",
  },
  {
    slug: "nivells",
    number: "02",
    company: "Nivells",
    title: "Design system as an NPM package",
    role: "Tech Lead and Senior Frontend Engineer",
    period: "Mar 2024 to Feb 2025",
    problem:
      "Web and mobile surfaces shipped with inconsistent component libraries. New screens meant reinventing primitives.",
    tradeoff:
      "Build a shared package and pay the upfront cost versus keep copying and pay the recurring cost on every screen.",
    outcome:
      "A single source of truth for components used across web and mobile, documented in Storybook.",
    stack: ["React", "Storybook", "Tailwind", "TypeScript", "React Native", "Expo"],
    chapters: [
      {
        label: "System",
        body: "Designed and shipped a reusable Design System as an NPM package. React components, Storybook docs, themed with Tailwind.",
      },
      {
        label: "Coverage",
        body: "Standardized primitives across web product surfaces and a React Native and Expo application published to the stores.",
      },
      {
        label: "Quality",
        body: "Strengthened CI/CD and added automated test coverage so breaking changes surfaced before publish.",
      },
      {
        label: "Leadership",
        body: "Provided technical leadership through code review, mentorship, and architectural decisions across the team.",
      },
    ],
  },
  {
    slug: "evermart",
    number: "03",
    company: "Evermart",
    title: "Re-platforming a checkout at scale",
    role: "Mid Frontend Engineer and Team Manager",
    period: "Mar 2020 to Jul 2021",
    problem:
      "Legacy checkout and affiliate dashboards were slow on critical purchase flows and brittle to extend. Slowest pages ranged from 3 to 5 seconds.",
    tradeoff:
      "Rewrite the slowest pages incrementally versus freeze a quarter and re-platform on Next.js.",
    outcome:
      "Slowest pages dropped to roughly 300ms. Daily deployments became the default. The codebase became something the team could keep moving.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Styled Components",
      "SWR",
      "CI/CD",
    ],
    chapters: [
      {
        label: "State 01: Legacy",
        body: "Custom webpack build, server-rendered HTML with ad-hoc client hydration. Slowest pages at 3 to 5 seconds.",
      },
      {
        label: "State 02: Re-platformed",
        body: "Migrated to Next.js with static site generation and SWR. Checkout rewritten on top of a typed payment abstraction.",
      },
      {
        label: "State 03: In production",
        body: "Slowest pages dropped to roughly 300ms. Daily deployments became safe. A 15-person team coordinated across JavaScript, TypeScript, and Next.js practices.",
      },
    ],
  },
];

export type ExperienceRole = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  focus: string;
};

export const experience: readonly ExperienceRole[] = [
  {
    company: "[[PLACEHOLDER: current company]]",
    role: "Senior Frontend Engineer",
    period: "Sep 2024 to Present",
    current: true,
    focus: "Frontend architecture, internationalization, design systems",
  },
  {
    company: "Nivells",
    role: "Tech Lead and Senior Frontend Engineer",
    period: "Mar 2024 to Feb 2025",
    focus: "Design systems, component architecture, mobile plus web",
  },
  {
    company: "Leaf Agriculture",
    role: "Senior Frontend Engineer",
    period: "Aug 2023 to Mar 2024",
    focus: "Customer dashboards, NPM packages, React plus Angular",
  },
  {
    company: "CivicPlus",
    role: "Senior Frontend Engineer",
    period: "Jun 2022 to Mar 2023",
    focus: "Civic platform, test coverage, refactoring",
  },
  {
    company: "Linker",
    role: "Senior Frontend Engineer",
    period: "Apr 2022 to Jun 2022",
    focus: "B2B banking, performance, CI/CD",
  },
  {
    company: "VCCESS",
    role: "Mid Frontend Engineer",
    period: "Jul 2021 to Sep 2021",
    focus: "PWA, performance, SEO",
  },
  {
    company: "Warren Brasil",
    role: "Frontend Engineer (Mid to Senior)",
    period: "Sep 2021 to Mar 2022",
    focus: "Vue.js legacy, performance, test coverage",
  },
  {
    company: "Evermart",
    role: "Mid Frontend Engineer and Team Manager",
    period: "Mar 2020 to Jul 2021",
    focus: "Next.js migration, checkout, 15-person team",
  },
];

export const aboutCopy = {
  body: [
    "Computer scientist by training, frontend engineer by trade, product engineer by disposition. I care about whether the thing ships, whether it holds up under load, and whether the next person to touch it will thank me or curse me.",
    "[[PLACEHOLDER: location, languages spoken, what you do outside work]]",
  ],
  facts: [
    { label: "Based", value: "[[PLACEHOLDER: city, country, timezone]]" },
    {
      label: "Languages",
      value: "[[PLACEHOLDER: languages spoken]]",
    },
    { label: "Education", value: "[[PLACEHOLDER: degree, institution, year]]" },
    {
      label: "Postgraduate",
      value: "[[PLACEHOLDER: postgraduate program, year]]",
    },
  ],
} as const;

/* A social href with nothing after the host is not a contact, it is a dead end.
   Anything unresolved is dropped here instead of shipping a link that lands on
   a sign-in wall. */
function isResolvedProfileUrl(url: string): boolean {
  try {
    const { pathname } = new URL(url);
    return pathname.replace(/\/+$/, "").replace(/^\/(in)?$/, "").length > 0;
  } catch {
    return false;
  }
}

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.mailto,
  },
  ...(isResolvedProfileUrl(profile.github)
    ? [
        {
          label: "GitHub",
          value: profile.github.replace("https://", ""),
          href: profile.github,
          external: true,
        },
      ]
    : []),
  ...(isResolvedProfileUrl(profile.linkedin)
    ? [
        {
          label: "LinkedIn",
          value: profile.linkedin.replace("https://www.", ""),
          href: profile.linkedin,
          external: true,
        },
      ]
    : []),
  {
    label: "Resume",
    value: "resume.pdf",
    href: profile.resumeHref,
    external: true,
  },
] as const;
