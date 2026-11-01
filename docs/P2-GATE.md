# P2 Gate — Token Layer, Layout Framework, Primitives, /_design route

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

The token layer is committed, primitives are owned, and `/_design`
renders every token and primitive in real code. Build, typecheck, and
lint all pass clean.

## Evidence

1. **Tokens are the single source of truth.** `src/styles/tokens.css`
   declares two themes (dark and light) in OKLCH, with surface,
   border, text, accent, focus, motion, type, space, and radius
   families. No component reads a raw hex or a raw px. Tailwind v4
   `@theme inline` exposes tokens as utilities without forking them.

2. **Two themes authored independently.** The light theme is not the
   dark theme inverted. The light theme's hue sits at 95 with darker
   text at 270; the dark theme's hue sits at 270 with light text. The
   accent hue is shifted in lightness and chroma per theme to remain
   legible on its own surface. No `#000` or `#fff` anywhere.

3. **Theme flash is blocked.** `app/layout.tsx` injects an inline
   script in `<head>` that reads `localStorage.theme` (falling back
   to dark) and sets `data-theme` before paint.

4. **Primitives are owned and small.** Container, Section, Stack,
   Grid, Text, Mono, Button, LinkButton, CopyButton, ThemeToggle,
   Link, Card, Tag, Metric, Divider. Each is a Server Component
   unless it needs state. Each forwards `className`. Buttons and the
   toggle carry `:hover`, `:focus-visible`, and `:disabled` states.
   The focus ring is `2px solid var(--focus)` with `2px offset` on
   every interactive element.

5. **`/_design` route renders every token and primitive.** Eight
   sections: color, type, space, radius, motion, layout primitives,
   content primitives, interactive primitives, plus a verification
   row. Build output confirms the route is live.

6. **Fonts are correctly loaded.** Inter Tight (sans) and JetBrains
   Mono (mono) via `next/font/google` with `subsets: ["latin"]`,
   `display: "swap"`, `fallback` arrays, and `adjustFontFallback: true`.
   Self-hosted at build time, not loaded from a CDN link.

7. **Build clean.** `npm run build` produces zero warnings. The
   `/_design` route appears in the route table. `npm run typecheck`
   and `npm run lint` both pass with zero issues.

## Findings (forward-looking)

1. **The `_design` folder name uses URL-encoded underscore**
   (`%5Fdesign`) per Next.js 16's private-folder convention. This is
   correct, but a future engineer might rename it back to `_design`
   by accident. Add a comment in the folder explaining why.

2. **The `Container` component is the only layout primitive that
   accepts `as`.** The other primitives (`Stack`, `Grid`) hardcode
   `<div>`. Acceptable for v1, but the constraint is worth noting.

3. **The `ThemeToggle` hydrates client-side after first paint.**
   The inline script sets `data-theme` correctly so there is no
   flash, but the toggle shows "dark" active for one frame on the
   light theme until React hydrates. Acceptable; if visible at P7 we
   will SSR via `cookies()`.

## Required before P3

- The static hero from P1 will be replaced by the full home. P2
  primitives are stable; P3 uses them.

## Required before P8

- Verify that no component on a live route renders raw colors or
  inline px values outside the space ramp. The `/_design` page is
  exempt where it documents the scale.

Advance to P3 (UI Designer — Home page).

— Finish-Gate Reviewer, P2
