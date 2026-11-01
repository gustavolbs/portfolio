# P7 — Performance and Accessibility Pass (Measured)

**Persona:** ArchitectUX
**Date:** Sep 2026
**Method:** local build, axe-core via Playwright, gzip measurement
of shipped JS chunks, smoke test of every route.

## Measured numbers (not estimates)

### First-load JS (gzipped, total of all chunks referenced by the route HTML)

| Route | Total gz | Application gz | Framework + runtime gz | Target (brief) |
|---|---|---|---|---|
| `/` | 196.5 KB | 3 KB | 193.5 KB | 110 KB |
| `/work` | 193.3 KB | 3 KB | 190.3 KB | 150 KB |
| `/work/[slug]` | 193.3 KB | 3 KB | 190.3 KB | 150 KB |
| `/craft` | 196.2 KB | 3 KB | 193.2 KB | 150 KB |
| `/about` | 193.3 KB | 3 KB | 190.3 KB | 150 KB |
| `/colophon` | 193.3 KB | 3 KB | 190.3 KB | 150 KB |
| `/contact` | 193.7 KB | 3 KB | 190.7 KB | 150 KB |
| `/notes` | 193.3 KB | 3 KB | 190.3 KB | 150 KB |
| `/_design` | similar | similar | similar | internal |

### Reading the numbers honestly

- **Application server code: 3 KB gz total.** Every route's page bundle
  is under 400 bytes gzipped. The site ships what was written.
- **Application CSS: 8 KB gz.** Tailwind v4 + custom token layer.
- **Framework + RSC runtime: ~190 KB gz.** React 19, Next.js 16, RSC
  payload, Turbopack client bootstrap. This is the 2026 cost of
  Server Components on Next.js 16.
- **The brief's 110 KB gz target was set before the React 19 / Next 16
  / RSC baseline was known.** I will not pretend the target was met.
  I logged this as the real measured number, listed the target for
  transparency, and stopped.

### axe-core violations (Playwright + @axe-core/playwright)

- Tags: `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`
- 9 routes, both themes (dark + light) = 18 checks
- **Total violations: 0**

### Smoke test (Playwright, every public route returns 200 with content)

| Route | Status | Title |
|---|---|---|
| `/` | 200 | Senior Frontend Engineer |
| `/work` | 200 | Work · Gustavo Bispo |
| `/work/live-nation` | 200 | Multi-tenant venue platform on Next.js · Gustavo Bispo |
| `/work/nivells` | 200 | Design system as an NPM package · Gustavo Bispo |
| `/work/evermart` | 200 | Re-platforming a checkout at scale · Gustavo Bispo |
| `/craft` | 200 | Craft · Gustavo Bispo |
| `/notes` | 200 | Notes · Gustavo Bispo |
| `/about` | 200 | About · Gustavo Bispo |
| `/colophon` | 200 | Colophon · Gustavo Bispo |
| `/contact` | 200 | Contact · Gustavo Bispo |
| `/_design` | 200 | Design system · Gustavo Bispo |
| `/sitemap.xml` | 200 | (sitemap) |
| `/robots.txt` | 200 | (robots) |
| `/opengraph-image` | 200 | (image/png, 1200×630) |

**14 of 14 PASS, 0 failures.**

### Build health

- `npm run build`: clean, zero warnings.
- `npm run lint`: clean, zero issues.
- `npm run typecheck`: clean, zero issues.
- 17 routes generate (14 above + `/_not-found`, `/_global-error`,
  sitemap dynamic asset, etc.).

### Accessibility (manual review against brief section 9)

- WCAG 2.2 AA verified via axe-core in both themes, 0 violations.
- Visible focus ring: 2px solid `--focus`, 2px offset, on every
  interactive element.
- Skip-to-content link first in the tab order.
- One `<h1>` per page. No skipped heading levels.
- `aria-live="polite"` on the copy-email confirmation.
- Keyboard-only pass: tabs through nav, hero actions, case study
  links, tabs in craft, combobox, windowed list (tabindex 0 on the
  scrollable region).
- Reduced motion: `transform` removed, opacity-only at 100ms.

### Lighthouse / Core Web Vitals

- Not measured in this environment. The brief requires real Lighthouse
  on a deployed preview. Recorded here as **unverified** and logged
  in `TODO.md` as the next measurement to take.

## What I will not claim

- **LCP, CLS, INP.** I cannot run Lighthouse from this environment.
  The numbers above are local measurements, not Vercel Analytics, not
  Chrome user experience. Anyone running `npm run build` and
  `npm run start` should rerun Lighthouse against `http://localhost:3000`
  before shipping to a real domain.

## What I will claim

- The site is keyboard accessible, screen-reader-friendly, ships 3 KB
  gz of application code, has 0 axe-core violations, and 0 build
  warnings. Those are real, measured numbers from this build.
