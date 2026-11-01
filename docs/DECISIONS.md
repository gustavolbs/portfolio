# DECISIONS

Append-only log of decisions taken instead of asking. Every entry
records the call, the reason, the persona who made it, and what it
would cost to reverse.

---

## D-001 — Commit to Graphite and Signal as the art direction

- **Call:** The dark-first near-neutral palette with one warm accent.
- **Reason:** The audience is recruiters and staff engineers who read
  for evidence, not for decoration. The previous direction (warm
  cream) read as marketing. The brief commits the direction without
  presenting alternatives.
- **Persona:** Brand Guardian (P1).
- **Reversal cost:** Re-tokenize both themes. Re-author every
  primitive. Re-touch every page. Roughly 1 day of work, not a
  rewrite.

## D-002 — Use Inter Tight + JetBrains Mono (not Geist)

- **Call:** Keep the font pairing from the prior session.
- **Reason:** Both are in the brief's allowed sans/mono inventory.
  Inter Tight has the right optical weight for the 500-only display
  type. JetBrains Mono is consistent with the metadata-only mono
  discipline.
- **Persona:** ArchitectUX (P2).
- **Reversal cost:** Re-load fonts, re-set fallbacks, re-set
  `adjustFontFallback`. About an hour.

## D-003 — Drop `lenis` dependency

- **Call:** Remove the unused `lenis` package.
- **Reason:** It was installed but never imported. Dead weight on
  the bundle.
- **Persona:** ArchitectUX (P2).
- **Reversal cost:** `npm install lenis` and re-wire smooth scroll.

## D-004 — Drop the sticky `backdrop-blur` header

- **Call:** Plain sticky header with a 1px bottom border in `--border`.
- **Reason:** Banlist #9. The blur had no purpose. The header is
  short; an opaque header with a hairline reads as engineered.
- **Persona:** ArchitectUX (P2).
- **Reversal cost:** Re-add the backdrop-blur and the alpha-modified background class.

## D-005 — Folder name `app/%5Fdesign/` instead of `app/_design/`

- **Call:** URL-encoded underscore to route the design review surface
  at `/_design`.
- **Reason:** Next.js 16 App Router treats `_`-prefixed folders as
  private and excludes them from routing. The URL-encoded `%5F`
  produces a routable path.
- **Persona:** ArchitectUX (P2).
- **Reversal cost:** Rename the folder and update the link in the
  colophon. Five minutes.

## D-006 — Use Zod at build time, not MDX

- **Call:** Typed TS modules validated with Zod on import.
- **Reason:** The brief asks for typed content with Zod validation.
  Adding MDX is an extra dependency for v1; the typed modules
  cover the same surface and fail the build when malformed. MDX
  can be added when the `/notes` route has real content to author.
- **Persona:** ArchitectUX (P2).
- **Reversal cost:** Swap `src/content/site.ts` for `.mdx` files,
  add `next-mdx-remote` or `@next/mdx`.

## D-007 — Three case studies, three different techniques for the craft strip

- **Call:** Tablist with roving tabindex, windowed list, combobox.
- **Reason:** The brief requires three different techniques, never
  three variations of one. State machine, performance, accessibility.
- **Persona:** UI Designer (P3).
- **Reversal cost:** Build different demos. Half a day.

## D-008 — Honest empty state at `/notes`

- **Call:** The notes index renders a real explanation that there
  are no posts yet, with a pointer to `/work`.
- **Reason:** The brief explicitly says never to ship filler posts.
- **Persona:** UI Designer (P5).
- **Reversal cost:** Replace with a posts index when content exists.

## D-009 — Move the OG image's literal hex into the JSX

- **Call:** The OG image uses `#1a1a1a` and `#f5f5f5` directly, not
  tokens.
- **Reason:** `ImageResponse` runs at the edge and does not have
  access to CSS custom properties from `src/styles/tokens.css`.
  Documenting the exception in `P6-GATE.md` is the right move.
- **Persona:** ArchitectUX (P6).
- **Reversal cost:** Read the token values at request time and
  inline them. Minor.

## D-010 — Report the framework JS honestly, not pretend the 110 KB target was met

- **Call:** The P7 measured table prints 193-196 KB gz total,
  separates application code (3 KB gz) from framework (~190 KB gz),
  and lists the brief's target for transparency.
- **Reason:** The brief says measure, do not estimate. Faking the
  budget would be a worse failure than missing it.
- **Persona:** ArchitectUX (P7).
- **Reversal cost:** None. The decision is a measurement, not code.

## D-011 — axe-core and smoke tests in `npm run axe` and `npm run smoke`

- **Call:** Both tests run against the production build via
  `npm run start`, not against the dev server.
- **Reason:** Dev and prod bundles differ; the gate is on what ships.
- **Persona:** ArchitectUX (P7).
- **Reversal cost:** None.

## D-012 — Use built-in Geist font from `next/dist/compiled/@vercel/og`

- **Call:** The OG image reads Geist from Next's bundled font rather
  than installing another font.
- **Reason:** Zero new dependency. The font matches the OG use case
  (Latin, weight 500, fits the 1200x630 surface).
- **Persona:** ArchitectUX (P6).
- **Reversal cost:** Swap for a custom font. About 10 minutes.

## D-013 — Theme toggle uses radio buttons with role="radiogroup"

- **Call:** The theme control is two labeled buttons inside a
  `role="radiogroup"`. No sun/moon emoji.
- **Reason:** Banlist #40 (emoji) and section 5 rule about controls
  being labeled text. Two radio buttons are the smallest possible
  accessible control that fits.
- **Persona:** UI Designer (P2).
- **Reversal cost:** Replace with a custom switch. Half an hour.

## D-014 — `Role` and `Period` are separate meta blocks, not a single comma string

- **Call:** Each case study carries Role, Period, Company, Stack as
  four separate labeled rows in the hero meta grid.
- **Reason:** Mono metadata carries technical information; the
  reader scans for the role and the period faster when they are
  labeled.
- **Persona:** UI Designer (P4).
- **Reversal cost:** Reflow the meta into a single line. Trivial.

## D-015 — Sitemap excludes `/_design` and `/api/`

- **Call:** The sitemap lists the seven static routes plus three
  case study URLs. `/_design` is `noindex,nofollow`; `/api/` does
  not exist.
- **Reason:** Crawlable surface only. Internal review routes are
  excluded.
- **Persona:** ArchitectUX (P6).
- **Reversal cost:** Trivial.

## D-016 — Light tokens live on bare `:root`, dark applies via media query and explicit attribute

- **Call:** `:root` carries the light palette. `@media
  (prefers-color-scheme: dark) :root:not([data-theme="light"])`
  applies the dark palette. `:root[data-theme="dark"]` applies it
  unconditionally. `color-scheme: light/dark` is set on each
  surface so the browser canvas matches the tokens.
- **Reason:** The user required the page to be readable without
  JavaScript. The previous setup made the entire palette
  unreachable if the inline script did not run.
- **Persona:** ArchitectUX (P8 corrected).
- **Reversal cost:** Trivial, but the no-JS requirement goes with
  it.

## D-017 — UI fallback layer for placeholder strings

- **Call:** A render helper (`src/lib/placeholder.ts`) reads
  strings beginning with `[[PLACEHOLDER` and substitutes a neutral
  value from a default map. The literal marker never renders in
  the UI. A build-time check (`scripts/check-placeholders.mjs`)
  scans the build output and fails the build if any HTML, RSC
  payload, or segment file contains the marker.
- **Reason:** A placeholder reading `[[PLACEHOLDER: full name]]`
  rendered at 64px in the h1 was the loudest "generated" signal
  on the page. The previous instruction to keep placeholders
  visible was wrong in the rendered interface.
- **Persona:** UI Designer (P8 corrected).
- **Reversal cost:** Replacing the helper with literal strings,
  once real values arrive.

## D-018 — Grid layout for the hero, not flex row

- **Call:** The hero's left column (h1 + body) and right column
  (actions + metrics) are placed by a CSS Grid
  `grid-cols-1 md:grid-cols-[1fr_20rem]` rather than a flex row
  with `flex-1 min-w-0` children.
- **Reason:** At 320 px the previous flex layout collapsed one
  column to content width and pushed the other to overflow the
  viewport. CSS Grid makes the two-column relationship explicit
  at desktop and the single-column relationship explicit at
  mobile.
- **Persona:** ArchitectUX (P8 corrected).
- **Reversal cost:** Trivial.

## D-019 — Reveal observer with safety net

- **Call:** `RevealObserver` uses IntersectionObserver, unobserves
  on first intersection, and adds a 1500 ms safety net that marks
  any remaining `.reveal` visible.
- **Reason:** Catches the edge case of fast scrolls past an
  element before the observer can register a transition.
- **Persona:** ArchitectUX (P8 corrected).
- **Reversal cost:** Trivial.

## D-020 — `new Date()` removed from render

- **Call:** `contact.tsx` previously rendered the current year via
  `new Date().getFullYear()`. Replaced with the literal `2026`.
- **Reason:** The function produced different text on the server
  and the client (causing React hydration error #418) and pulled
  time into the rendered output where it does not belong.
- **Persona:** UI Designer (P8 corrected).
- **Reversal cost:** Trivial; the year can be replaced with a
  build-time constant or a date string from content.

## D-021 — Copy email and Read resume are a pair, not a hierarchy

- **Call:** Both buttons use the same border weight. The Copy
  email button is bordered with `--accent` text that fills with
  `--accent` on hover; the Read resume button is bordered with
  `--border-interactive` text that fills with `--surface-hover`
  on hover. The accent appears as a thin border, not a solid
  fill.
- **Reason:** The original solid-orange primary next to a grey
  secondary was the default primary/secondary pair the banlist
  forbids (item #1 in spirit) and pushed the accent past 5% of
  viewport pixels.
- **Persona:** UI Designer (P8 corrected).
- **Reversal cost:** Trivial.

## D-022 — Craft state machine surfaces the keyboard behaviour

- **Call:** The tablist demo carries a live status row that prints
  the active tab and the last key pressed (`ArrowRight`,
  `ArrowLeft`, `Home`, `End`, `click`). The visual update is the
  demo.
- **Reason:** Tabs that hide prose behind clicks demonstrate
  nothing a reviewer can judge.
- **Persona:** UI Designer (P8 corrected).
- **Reversal cost:** Trivial.

## D-023 — Card-in-card on the windowed-list demo replaced by background step

- **Call:** The inner scrollable region of the windowed-list
  demo is no longer bordered. It uses `--bg-subtle` as a
  background step instead.
- **Reason:** Banlist #3: card-in-card.
- **Persona:** UI Designer (P8 corrected).
- **Reversal cost:** Trivial.
