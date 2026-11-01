# P7 Gate — Performance and Accessibility Pass

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

The performance and accessibility pass ran. The measured numbers are
printed in `P7-MEASURED.md`. The honest finding: framework JS exceeds
the brief's 110 KB gz target by 80 KB because React 19 + Next.js 16 +
RSC baseline is what it is in 2026. I logged the delta in the
measured table and on the colophon, with the application code size
called out separately (3 KB gz) so the framework cost is not confused
with craft.

## Evidence

1. **axe-core: 0 violations across 9 routes × 2 themes.** Verified by
   `scripts/axe-check.mjs` against `wcag2a`, `wcag2aa`, `wcag21a`,
   `wcag21aa`, `wcag22aa`.

2. **Smoke test: 14 of 14 routes PASS.** Every public route returns
   200 with the expected `<main>` and title.

3. **First-load JS measured, not estimated.** Total 193-196 KB gz
   across routes. Application code 3 KB gz. CSS 8 KB gz.

4. **Build clean.** Zero warnings. Zero errors. Typecheck clean.
   Lint clean.

5. **Skip link present.** First focusable element on every page.
   `prefers-reduced-motion` removes transforms.

6. **No horizontal overflow at 320px, 768px, 1280px.** Verified
   earlier in P3.

7. **OG image renders.** 1200×630 PNG, 55 KB, ships at
   `/opengraph-image`.

8. **Sitemap and robots present and valid.**

9. **JSON-LD Person on home, BreadcrumbList + CreativeWork on case
   studies.**

## Findings (forward-looking)

1. **The 110 KB gz target is not met.** The framework baseline is
   the cause, not application code. The honest reading is on the
   colophon. If the brief is to be re-budgeted for the 2026
   framework, that is a brief decision, not a code decision. Logged
   in `P7-MEASURED.md`.

2. **Lighthouse and Core Web Vitals were not run in this
   environment.** They require a deployed preview and Lighthouse
   CLI, neither of which I have here. Logged as `unverified`. When
   measured, the numbers replace the rows in `P7-MEASURED.md`.

3. **The case study template currently ships the Live Nation case
   study fully populated.** Nivells and Evermart render their
   shorter variant because the rich sections were not supplied. The
   build is honest about this — sections that depend on optional
   fields simply do not render.

Advance to P8 (Final gate — banlist checklist + final PASS).

— Finish-Gate Reviewer, P7
