# P1 Gate — Brand Foundation, Design Contract, Static Hero Comp

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

The brand is committed, the design contract names its forbidden defaults with
verification conditions, and the static hero is real code that builds and
renders. Two findings below are forward-looking; they do not block P1.

## Evidence

1. **Brand is committed, not a menu.** `BRAND.md` produces a single
   direction (Graphite and Signal), three named traits with visible
   consequences, three voice do/do-not pairs written against the actual
   copy, and an explicit misuse list. The brief required this; it is
   present.

2. **Design contract is enforceable.** `DESIGN-CONTRACT.md` carries 60
   numbered forbidden defaults — every item in the brief's banlist is
   referenced — and each has a screen-state verification condition.
   The Reviewer can run every check by inspecting one file.

3. **Static hero is in real code.** `app/page.tsx` renders the static
   hero. The hero carries the brief's positioning, role, status line,
   primary action (copy email), and secondary action (resume). No emoji,
   no "Hi, I'm X", no em dash, no wave.

4. **Token layer enforced.** Every color used by the hero resolves
   through a CSS custom property on `:root[data-theme="…"]`. No raw
   hex in any component. Tailwind v4 `@theme inline` exposes tokens.
   Type scale is token-driven via `text-display`, `text-h1`, etc.

5. **Both themes are authored.** The light theme is warmer and has its
   own OKLCH values; it is not the dark theme inverted. Verified by
   reading `src/styles/tokens.css`.

6. **Theme script blocks the flash.** An inline script in `<head>`
   reads `localStorage.theme` (falling back to dark) and sets
   `data-theme` before paint. No flash.

7. **Build is clean.** `npm run build` finishes with zero warnings.
   `npm run lint` and `npm run typecheck` both pass.

## Findings (forward-looking, not blocking)

1. **Hero copy carries `[[PLACEHOLDER: …]]` for the name and email.**
   The static hero is honest about the open facts. The reviewer can
   see them, which is the intended behavior. At P3 these become real
   strings (or stay as placeholders, visible in the UI) until the
   values arrive.

2. **The `ThemeToggle` component hydrates client-side after first
   paint.** The inline script sets `data-theme` correctly so there is
   no flash, but the toggle button shows "dark" active for one frame
   on the light theme until React hydrates and re-reads. This is
   acceptable in P1; if it proves visible at P7 we will SSR the
   initial theme via `cookies()`.

## Required before P3

- The static hero is replaced by the full home (P3). It will not be
  the gate artifact in P3 — the live route and Reviewer report are.

## Required before P8

- The 9 inline `text-[var(--…)]` color references in the static hero
  are replaced with semantic token classes (`text-[var(--text)]`,
  `text-[var(--text-secondary)]`, `text-[var(--text-tertiary)]`).
  This is already partially done; verify and finish.

Advance to P2 (ArchitectUX — Token layer, layout framework, primitives,
`/_design` route).

— Finish-Gate Reviewer, P1
