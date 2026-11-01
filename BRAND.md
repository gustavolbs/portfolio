# BRAND.md

**Persona:** Brand Guardian
**Phase:** P1
**Status:** Foundation committed. Direction: **Graphite and Signal**.

## 1. Positioning

One sentence, derived from the brief and the three shipped case studies,
not from adjectives:

> Senior Frontend Engineer who owns frontend architecture and product
> delivery at consumer scale. Shipped three rewrites that changed how the
> teams around them worked, not just how the apps looked.

Domain class: **consumer product frontend at scale**, with secondary
weight on **design systems and architecture**. The case studies confirm
it: a multi-tenant venue platform on Next.js, an NPM-packaged design
system, and a checkout re-platform that made daily deploys safe. The
engineer is paid to ship and to leave the codebase easier to extend than
the one they inherited. That is the class of problem the site sells.

## 2. Personality, in three traits

Each trait carries a visible consequence in the build.

### Precise

Tracking tightens on display type, numbers use tabular numerals, every
metric has a measurement method or is absent, every spacing value sits on
the 4px ramp. The hero h1 reads at -0.032em tracking, weight 500, never
700, because tight tracking at medium weight reads more expensive than
bold. Mono labels carry dates, stack versions, and figures only — never
body copy.

### Restrained

One warm accent, under 5% coverage of any viewport. Allowed only on the
primary action, inline links, the focus ring, and one small status
indicator. No second hue. No decorative gradient. No neon. No glass.
Depth comes from a 1px `--border` plus a background step; shadows are
capped, optional in light theme, never used in dark. Both themes are
authored, not inverted from each other.

### Evidenced

Every claim is numbered, dated, or named. The home lists three
deliverables; the case studies carry stack labels, period, and role;
the colophon prints the measured budgets. Mono metadata on every claim
reminds the reader that this site is the work. When a metric is not
sourced it appears as `[[PLACEHOLDER]]` in the UI, never as a confident
number.

## 3. Committed direction: Graphite and Signal

- **Surface family:** near-neutral dark by default, near-neutral light
  authored independently. No pure `#000` or `#fff`.
- **Accent:** one warm hue (amber, OKLCH 0.74 0.150 62 in dark,
  OKLCH 0.53 0.150 55 in light). Under 5% coverage. Never a background
  fill on a large block. Never a gradient. Never applied to display type.
- **Type:** Inter Tight (sans), JetBrains Mono (mono). Two families only.
- **Line and border:** structural 1px borders instead of shadows in dark.
- **Motion:** short durations, opacity and transform only, reduced-motion
  branch removes transforms.

### Why not the editorial direction

The brief permits a serif display in one place if the committed direction
is editorial. It is not. The site is consumed by recruiters and hiring
managers who will land on the home in 45 seconds and on a case study in
five minutes; serif display is a third reading layer they did not ask
for. A single sans family with mono metadata carries the same density and
ships a smaller CSS payload.

### Why not the warm-cream direction

The previous session's DESIGN.md committed to `#F7F5F0` as the canvas.
That direction reads as product-marketing warm and as printed material,
which the audience does not need. The audience needs the screen to look
like the inside of a serious engineering tool — dark-first, restrained,
quiet. Warm cream is one large step away from that.

### Why Graphite and Signal survives a constraint check

There is no inherited wordmark, no required brand color, no accessibility
conflict. The direction is committed.

## 4. Voice guidelines

Three do / do-not pairs written against the actual copy that will ship.

### Do

- "Owns frontend architecture and product delivery across Live Nation's
  consumer ecosystem."
- "Reduced the slowest pages from 3-5s to roughly 300ms. Measured with
  RUM on the production build, Mar 2020 to Jul 2021."
- "Three case studies. One engineer. Six years."

### Do not

- "I'm a passionate frontend engineer who loves crafting beautiful
  digital experiences." — Banlist #41, #39, #40.
- "Leveraging cutting-edge technologies to unlock seamless journeys." —
  Banlist #41.
- "Senior Frontend Rockstar / Ninja available for 10x impact roles." —
  Banlist #41.

### Mechanics

- First person singular, past tense for shipped work.
- Sentence case everywhere, including buttons and section headings.
- No em dashes. Reword or use parentheses.
- No exclamation marks. No emoji anywhere in the UI or copy.
- Numbers > adjectives. "Reduced p75 LCP from 3.4s to 1.1s" beats
  "blazing fast".
- Section headings name content, not the author's relationship to it.
  "Selected work", not "My projects". "Experience", not "My journey".

## 5. Misuse rules

This identity is diluted by any of:

- A second accent hue. The amber in section 5 is the only accent. A
  green success color or a red error color must reuse hue rotation on
  amber or live as a neutral surface step. Treat as violation.
- A decorative gradient on hero, heading, button, or border. The site
  uses a single warm accent and never as a fill for a large block.
- A third font family. Display, body, and code are two families: sans
  and mono. No serif. No italic display. No monospace body.
- An illustration style that is not mine. The `VenueCard` SVG in the
  case study is a **rebuilt sample**, labeled as such. No fictional
  dashboards, no fake IDE windows, no generated "product fragments"
  meant to pass as real shipped work.
- Bounce-in entrances, counters that spin up on scroll, parallax,
  particles, marquees, or typewriter hero copy. All banned.
- Light theme produced by mechanically inverting the dark theme. Both
  themes are authored. The light theme is warmer; the dark theme is
  cooler. They do not share a transform.

— Brand Guardian, P1
