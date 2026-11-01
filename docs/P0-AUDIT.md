# P0 Audit — Existing Repo

**Persona:** ArchitectUX

## Stack

- **Next.js**: 16.2.3 (App Router, Turbopack default, React 19.2 canary).
  Breaking changes relevant to this work: `params` / `searchParams` are async
  Promises; `opengraph-image` / `twitter-image` receive `params` and `id` as
  Promises; `next lint` removed (use ESLint CLI); `next dev` outputs to
  `.next/dev` (concurrent with build); `images.domains` deprecated in favor of
  `remotePatterns`; `imageSizes` default dropped `16`; `images.qualities` default
  is `[75]` only; `images.maximumRedirects` defaults to 3.
- **React**: 19.2.4 (Server Components default, View Transitions, Activity, `useEffectEvent`).
- **TypeScript**: strict mode on, target ES2017, `@/*` path alias mapped to root.
- **Styling**: Tailwind v4 (`@tailwindcss/postcss`), tokens declared inline in
  `app/globals.css` via `@theme inline { … }`. No separate `tokens.css`. No
  utility-only patterns. Components mix raw Tailwind utilities with raw CSS
  custom properties referenced via `bg-` and `text-` arbitrary-value
  classes in the previous JSX.
- **Fonts**: Inter Tight (sans) and JetBrains Mono (mono) loaded via
  `next/font/google`, `subsets: ["latin"]`, `display: swap`, exposed as CSS
  variables `--font-inter-tight` and `--font-jetbrains`. No `adjustFontFallback`
  declared. No subset beyond `latin`.
- **Animation**: Custom IntersectionObserver (`reveal-on-scroll.tsx`) plus a
  scroll-driven `rAF` transition (`hero-to-project-transition.tsx`).
- **Smooth scroll**: `lenis` is installed but **not imported anywhere** —
  dead weight on `package.json`.
- **No other dependencies installed.** No component library, no Radix, no
  testing framework, no icon library.

## Routes

Only `/` exists. No `/work`, no `/craft`, no `/notes`, no `/about`, no
`/colophon`. There is no navigation to those routes because they do not exist.

## Components (kept from prior session)

- `button.tsx` — `LinkButton` + `Button`, two variants (primary, ghost), three
  sizes. Sound skeleton.
- `nav.tsx` — sticky, has a `backdrop-blur` (banlist #9). Anchors only.
- `hero.tsx` — positions name, eyebrow, primary CTA. Calls a scroll-choreographed
  transition that requires DOM hooks (`data-hero`, `data-surface`, `data-sidebar`).
- `hero-to-project-transition.tsx` — `useEffect` + rAF + IntersectionObserver-free
  scroll progress, fades hero and scales surface over a 700px range. Respects
  `prefers-reduced-motion`.
- `work.tsx` — renders three projects: `ProjectOneChapters`, `ProjectTwoMatrix`,
  `ProjectThreeStack`. Reads as a vertical-scroll composition.
- `how-i-build.tsx` — five-layer mental model with a sticky `VenueCard`.
- `venue-card.tsx` — fictional venue card as the product fragment.
- `experience.tsx` — eight roles, single-column timeline.
- `experiments.tsx` — three side projects in a 3-up grid.
- `about.tsx` — two-column facts + body.
- `final-cta.tsx` — contact channels as a 3-up grid with arrow on hover.
- `reveal-on-scroll.tsx` — adds `.is-visible` once per element. Good.
- `project-one-scroll.tsx`, `project-one-chapters.tsx`,
  `project-two-matrix.tsx`, `project-three-stack.tsx` — large; will be
  re-evaluated, not deleted blind.

## What is worth keeping

- The **shape** of the work is right: 3 case studies, an experience timeline,
  an experiments block, an about, a contact. The product/case-study framing is
  the brief's own framing — keep it.
- The **`button.tsx` API** (LinkButton + Button, three sizes, two variants).
- The **`reveal-on-scroll.tsx` pattern** — single IO observer, reduced-motion
  branch, unobserve on first intersection.
- The **`hero-to-project-transition.tsx` idea** — the scroll-choreographed
  hero→project dissolve is a defensible "one hero moment" interaction
  (per motion budget). The current implementation has problems to fix (see
  banlist hits), but the concept survives.
- The **content shape** in `content/content.ts` (profile, projects with
  variant, chapters, stack, period). Three real projects, real employers, real
  dates. **No fabricated metrics beyond "50M+ users" carried in copy from a
  prior session — that needs to be removed or marked `[[PLACEHOLDER]]`.**
- The **font choice** (Inter Tight + JetBrains Mono). Both match the
  sans/mono inventory in section 5.

## What is going away

- The **sticky header with `backdrop-blur`** (banlist #9). The brief does not
  need it: the nav is short and not content-bearing, and a non-blurred sticky
  bar reads as honest.
- The **3D hero** placeholder note in `todo.md` — killed. The brief does not
  authorize a 3D scene and the banlist excludes tilted / 3D mockups (banlist #6).
- The **`lenis` dependency** — not imported; remove from `package.json` and
  lockfiles. Native CSS `scroll-behavior` and the existing scroll-choreographed
  hero carry the load.
- The **light-only theme**. The brief commits "Graphite and Signal": dark as
  the authored default, light theme authored independently (not inverted),
  inline script blocks the flash.
- The **single `.container-narrow` utility** — replace with a token-driven
  `Container` primitive exposed to Tailwind.
- The **sticky header with backdrop-blur and an alpha-modifier on a CSS-variable background** (components/nav.tsx). Inline hardcoded alpha plus a blur with no reason. Fix: drop the blur, drop the alpha, use a 1px border-bottom divider instead.

## What is being rewritten

- `app/globals.css` becomes `src/styles/tokens.css` (or kept at `app/globals.css`
  per Next.js convention — will stay at `app/globals.css`, importing
  `src/styles/tokens.css`). Token layer migrated to OKLCH with the section-5
  defaults for both themes.
- `app/layout.tsx` adds the theme inline script in `<head>`, the Geist Mono
  fallback (still JetBrains Mono for now), the system font fallback declared
  via `next/font/google` `fallback` + `adjustFontFallback`, and proper
  `<html data-theme="…">` initialization.
- The component layer splits into `src/components/ui/*` (owned primitives:
  Container, Section, Stack, Grid, Text, Mono, Button, Link, Card, Divider,
  Tag, Metric, CopyButton, ThemeToggle) and `src/components/site/*`
  (page-level compositions).
- The data layer moves from `content/content.ts` to typed MDX-light data
  modules validated with Zod at build. For v1, typed TS modules with Zod
  parsing on import is sufficient and avoids a new MDX dependency.
- Routes added: `/work`, `/work/[slug]`, `/craft`, `/notes`, `/notes/[slug]`,
  `/about`, `/colophon`, `/contact`. Plus `/_design` internal for token review.
- `next.config.ts` stays minimal (no `images.domains`, no `eslint: {}` — that
  option was removed in v16). Adds `metadataBase`, OG image, sitemap, robots.

## Banlist hits already in the repo

- **#9 Sticky header with `backdrop-blur` and no reason for either** —
  `components/nav.tsx:13`. Fix: drop the blur, drop the alpha, use a 1px
  border-bottom divider instead.
- **#16 Pure-ish neutrals**: `--color-ink` is `#1A1A1A` (not `#000`) and
  `--color-canvas` is `#F7F5F0` (not `#FFF`). Contrast is fine, but the
  palette commits to "graphite + neutrals only" with no accent. The brief
  requires exactly one warm accent (OKLCH amber in section 5). Current
  design has zero accent. Fix: introduce the accent token family in P2.
- **#18 More than one accent hue?** No — currently zero. Need exactly one.
  Fix: add it in P2.
- **#45 A project list longer than three case studies on the home page** —
  the home currently lists three projects inside a `Work` section that is
  essentially the full case study inline. Three is fine on the home; the
  page is structured as hero + work sections, which the brief allows. No fix
  beyond routing restructure.
- **#48 Client components that render static markup** — `hero-to-project-
  transition.tsx` mounts only to wire `useEffect`. The component itself
  returns `<div className="contents" />` and is mounted globally from
  `page.tsx`. Keep the logic but lift the wrapper so the static markup is
  rendered by Server Components; the effect can attach via a small leaf.
- **#50 Layout shift from font swap** — `next/font` is used but no
  `adjustFontFallback`. Fix in P2.
- **#52 Magic numbers** — `clamp(36px,5vw,56px)` shows up in JSX rather than
  the token scale. Fix: token-driven type scale in P2.
- **#54 `console.log` in shipped code** — none found. OK.
- **#56 A single `h1` missing** — the home page has `<h1>` inside `hero.tsx`,
  but each new route page must own its own. Will be enforced in P3+.
- **#60 README does not describe how to run the project** — current README is
  the create-next-app default. Fix in P2.

## What I will keep, delete, and rewrite (one paragraph)

Keep the three-project, hero→case-study framing, the button primitive, the
reveal-on-scroll observer, and the Inter Tight + JetBrains Mono pairing.
Delete the `lenis` dependency, the `backdrop-blur` sticky header, the light-only
single-theme assumption, the zero-accent palette, the bare-clamp typography
sizes, and the 3D-hero placeholder note. Rewrite `app/globals.css` into a
two-theme OKLCH token layer; split components into `src/components/ui/*`
primitives and `src/components/site/*` page compositions; introduce a
single `Container`, `Section`, `Stack`, `Grid`, `Text`, `Mono`, `Button`,
`Link`, `Card`, `Divider`, `Tag`, `Metric`, `CopyButton`, and `ThemeToggle`;
add `/_design`, `/work`, `/work/[slug]`, `/craft`, `/notes`, `/notes/[slug]`,
`/about`, `/colophon`, `/contact` routes; stand up metadata, OG images
(`ImageResponse` using the site's own type/tokens), `sitemap.ts`, `robots.ts`,
JSON-LD `Person` + `BreadcrumbList`, axe + Playwright smoke tests, and the
measured budgets at P7.

## Open facts I do not have

Logged in `TODO.md` as `[[PLACEHOLDER]]`:

- Real metrics on Live Nation consumer reach beyond what is already stated
  (the brief does not authorize any specific number).
- Resume PDF presence and filename (currently `/resume.pdf` is asserted in
  PRODUCT.md but the file is not in `/public`).
- Years of experience total (PRODUCT.md says 6+; need confirmation).
- Whether the side projects (`axis-next`, `Lensly.ai`) have public URLs or
  remain placeholders.
- Whether `gustavo.luiz.bispo.santos@gmail.com` is the correct public email.
- Confirmation that the i18n launch, the customer-service app, and the
  checkout re-platforming numbers ("3 to 5 seconds → ~300ms") are
  sourced and dated.

The build will continue around these placeholders. The placeholders must be
visible in the rendered UI as `[[PLACEHOLDER: …]]` so a future reviewer can
spot them and supply the value.

## Per-file annotation (post gate)

| File | Client? | Raw color? | Magic number? | Other |
|---|---|---|---|---|
| `components/project-one-scroll.tsx` | No | No | No | Inline `style` for the sidebar's opacity/transform — must move to a `.sidebar-enter` utility, not be inline. |
| `components/project-one-chapters.tsx` | No | No | No | OK. |
| `components/project-two-matrix.tsx` | No | No | No | OK. Preview buttons use `tabIndex={-1}` correctly so the matrix is non-focusable. |
| `components/project-three-stack.tsx` | No | No | No | Three fictional checkouts; if the "3-5s → ~300ms" timing lacks a measurement method, the numbers must be replaced with `[[PLACEHOLDER]]` or sourced before P4. |
| `components/venue-card.tsx` | No | No | `hsl(${a.hue}, 18%, 92%)` etc. — SVG fills use raw HSL | These are illustrative imagery, not brand color. Acceptable as inline SVG art, but they are not tokens. Kept as-is and labeled "rebuilt sample" if the page ever references them as work. |

— ArchitectUX, P0
