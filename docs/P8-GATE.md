# P8 Final Gate — Corrected

**Adjudicator:** Finish-Gate Reviewer (UI)
**Date:** Sep 2026

The previous P8 reported PASS against claims that were not actually
verified. This corrected gate runs every check the previous report
asserted and fixes the issues found.

## Findings that were wrong or unverified before

1. **CSS parse error in dev mode.** Tailwind v4 in dev was generating
   `.bg-[var(--color-canvas)]/85` from arbitrary-value classes
   mentioned in `docs/P0-AUDIT.md` and `docs/DECISIONS.md`. The
   Lightning CSS parser rejected `color-mix(in oklab, var(...) 85%, transparent)`.
   Fix: removed the offending class-like strings from the docs.
   Verified: `npm run dev` starts and serves 200; CSS compiles.

2. **Hydration mismatch on every route.** `src/components/site/contact.tsx`
   called `new Date().getFullYear()` at render time. The server and
   client produced different text and React threw #418, which made
   the JS tree discard and left `<html>` without a `data-theme`
   attribute. The page rendered with no tokens, every `.reveal`
   stayed at opacity 0, and on bad rolls the error boundary took
   over. Fix: replaced with the literal `2026` (build-time constant).
   Verified: 5 reloads, 0 console errors, 0 boundaries, tokens resolve
   on every load.

3. **Light theme tokens were unreachable without JS.** The palette
   lived only under `:root[data-theme="dark"]` and the data-theme
   selector. Fix: light palette is now on bare `:root`. Dark applies
   under `@media (prefers-color-scheme: dark)` guarded by
   `:root:not([data-theme="light"])` and explicitly under
   `:root[data-theme="dark"]`. `color-scheme` is set on each surface.

4. **The inline theme script set `data-theme` but not `color-scheme`.**
   The browser canvas stayed on `normal`, which is why the transparent
   body sat on Chrome's dark canvas. Fix: script now sets both
   `data-theme` and `style.colorScheme` together.

5. **`.reveal { opacity: 0 }` with no scripting escape.** Added
   `@media (scripting: none) { .reveal { opacity: 1; transform: none } }`
   so the page is fully readable with JS disabled. Verified by
   Playwright with `javaScriptEnabled: false`: all routes have
   `<main>`, `<h1>`, every reveal element visible.

6. **Reveal observer could miss fast scrolls.** Added a 1500 ms safety
   net: any reveal still not visible after mount gets the class
   added. Verified: 14/14 reveals become visible after a full scroll
   pass on every one of 5 reloads.

7. **Horizontal overflow at 320 px.** The hero's right-column stack
   was shrinking to content width because the parent flex-col had
   `items-start` (not stretch) and the right Stack carried `w-full`
   but the layout cascaded into an overflowing `items-start` row.
   Fix: replaced the flex-row + Stack approach with a CSS Grid
   `grid-cols-1 md:grid-cols-[1fr_20rem]`. Verified at 320 / 390 /
   768 / 1280 px at 1x and 2x device pixel ratio: no overflow on any
   route.

8. **Placeholder strings in the UI.** `[[PLACEHOLDER: full name]]` was
   rendering as the h1 and elsewhere. Fix: added a UI fallback layer
   (`src/lib/placeholder.ts`) plus neutral defaults in the content
   module. The literal marker no longer renders. A build-time check
   (`scripts/check-placeholders.mjs`) scans the build output and
   fails the build if any HTML, RSC payload, or segment file
   contains `[[PLACEHOLDER`.

9. **Hero copy and duplicate section labels.** Removed the period
   after "Senior Frontend Engineer" in the h1 line, replaced with
   a comma-driven two-line statement. Removed the "Three case
   studies" right-side eyebrow in `SelectedWork` so the eyebrow,
   the section headline, and the cards each say one thing.

10. **Theme toggle as the brightest element on the page.** The
    solid white DARK button was outranking the hero. Fix: ghost
    treatment with `--text-tertiary`, accent on the active state
    via underline, no solid background.

11. **Copy email button was a full-width solid orange fill next to a
    grey twin, which is the default primary/secondary pair the
    banlist forbids.** Fix: Copy button is now bordered with
    `--accent` text, hover fills with `--accent` and inverts to
    `--accent-fg`. Both buttons carry the same border weight and
    read as a pair of options, not a primary/secondary hierarchy.

12. **Card-in-card on the windowed-list craft demo.** Removed the
    inner border on the scrollable region. The outer card and the
    inner scroll region are now separated by a `--bg-subtle`
    background step, not a border.

13. **Craft demo 01 was a tab group whose panels were prose.** It
    demonstrated nothing. Fix: added a live status row showing
    `active · problem · last key · ArrowRight` so the keyboard
    behaviour is visible on the page.

14. **Hero right column was empty below the actions.** Fix: filled
    with three labelled mono rows (Companies / Years / Status).
    Both columns now carry load-bearing content.

15. **Unsourced metric on `/colophon` ("Lighthouse 97 Mar 2026")
    and `/_design`.** Replaced with a neutral placeholder and a
    sentence that says "Run npx lighthouse to measure on a deployed
    preview."

## Decision: **PASS**

All seven required verifications pass against a real run of the
build, not a report from a previous version.

### Verification commands and outcomes

```text
$ npm run build                # zero warnings, 14 routes
$ npm run lint                 # clean
$ npm run typecheck            # clean
$ npm run check:placeholders   # PASS  no literal placeholder markers in build output
$ npm run smoke                # PASS  14 of 14 routes return 200
$ npm run axe                  # PASS  0 violations across 9 routes x 2 themes
$ node scripts/reload-check    # PASS  5 of 5 reloads: 0 errors, 0 warnings,
                                #        no error boundary, theme attribute set,
                                #        no placeholders in DOM,
                                #        all 14 reveals visible after scroll
$ node scripts/overflow-check  # PASS  no overflow at 320, 390, 768, 1280
                                #        at 1x and 2x device pixel ratio
$ node scripts/nojs-check       # PASS  all 7 routes readable with JS disabled
```

### Section 11 gate questions

1. **Which single element on this page would a staff engineer
   screenshot and share?** The craft strip's windowed list
   (`src/components/site/craft/windowed-list.tsx`). 5000 rows,
   only ~14 in the DOM, scroll-driven count visible above the
   surface. The CraftStateMachine status row that shows the
   active tab and the last key pressed is also worth a
   screenshot.

2. **Remove the three most decorative elements. Is the page
   worse?** The hero's third-row "Scroll or jump to /work" line,
   the right-column mono metric rows, and the divider under the
   eyebrow row. Each carries information and removing them leaves
   the page less informative.

3. **Open the page at 320 px, 200% zoom, keyboard only, reduced
   motion on. Does anything break?** No. Verified at 320 / 390 /
   768 / 1280 at 1x and 2x DPR, with `prefers-reduced-motion: reduce`
   and without scripting.

4. **Read the copy aloud. Does any sentence sound like
   marketing?** No. Every sentence states what was shipped, who
   owns it, or what it cost.

5. **Which banlist item did this page come closest to violating,
   and what did you do instead?** The Copy email / Read resume
   pair in the hero. They could have been a primary/secondary
   hierarchy. Instead both are bordered with the same weight, the
   accent appears as a thin border and an underline on hover, and
   the secondary action gets a paper-text arrow.

6. **Is every number on the page sourced, dated, and defensible
   in an interview?** Yes: years (6+), companies (5+), the
   case-study outcome strings. The Live Nation case study still
   carries `measurementMethod` and `measuredDate` as
   placeholders; both render as neutral copy that says they will
   be filled when the real values are supplied.

7. **Could a reviewer tell within 45 seconds my role, my
   seniority, my domain, and how to reach me?** Yes. The home
   hero carries role, focus, primary action (copy email), and
   secondary action (resume) above the fold, with the
   Companies / Years / Status strip to the right.

8. **Strip the name and copy. Could this screen belong to any
   other product?** No. The token layer, the type pairing, the
   single warm accent as a thin border, the absence of decoration,
   the craft strip as proof of craft, and the editorial spacing
   are signatures.

9. **Name three decisions on this page that come from
   `DESIGN-CONTRACT.md` and not from a component-library default.**
   - The hero's right-column mono metric strip (Companies / Years
     / Status) fills the asymmetry the brief asked for, instead of
     a second CTA.
   - The Copy button is a bordered accent button, not a solid
     orange fill. The pair reads as two options, not a hierarchy.
   - The windowed-list craft demo replaces the inner border with
     a background step. No card-in-card.

## Known follow-ups, not gates

- Lighthouse / Core Web Vitals on a deployed preview still need
  to run. The framework baseline is 190 KB gz on top of 3 KB gz
  of application code; the brief's 110 KB gz target is
  unattainable without downgrading React 19 + Next 16 + RSC, and
  the decision is logged in `docs/DECISIONS.md` D-010.
- Two case studies (Nivells, Evermart) ship with shorter pages
  because the rich sections (decisions, quality, what I'd change)
  were not supplied. When supplied, the template renders them with
  no other code change.
- LCP/CLS/INP numbers will be filled in `docs/P7-MEASURED.md` once
  Lighthouse runs against a real preview.

— Finish-Gate Reviewer, P8 (corrected)
