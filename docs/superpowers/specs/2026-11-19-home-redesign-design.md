# Home redesign: lighter, with my apps as the work

Date: 2026-11-19. Status: approved (mockup v2b, `.superpowers/brainstorm/.../v2b-leve.html`).

## Why

The current home is dark, mostly text, and shows no work. A friend's designer portfolio
(gersonmarques.com) feels far more pleasant: soft light palette, large regular-weight type,
lots of air, rounded image cards, a human presence, and real work on screen. Gustavo wants
that pleasantness, without copying it, and with a frontend-engineer identity instead of a
designer one. His own apps are public, so they can be the work section (employer work stays private).

## Goals

- Light, warm, calm look: oat background, Geist at regular weight, rounded tinted cards.
- Show shipped apps with real screenshots: Medusa (featured), Civitasly, IP Catolé, Urbanify.
- Show apps in progress honestly ("In the lab"): Montei, Frasco, Fórmula, Beecorder, Cafuné,
  each with its stage out of seven.
- Dev identity through behavior, not costume: a DevTools-style inspector on the word
  "interfaces" with live measurements, and the E key copies the email.
- Keep: experience list, How I work (Frame, Build, Ship, Lead), direct contact links.
- English at `/` and Brazilian Portuguese at `/pt`, from one dictionary (`src/content/home-copy.ts`),
  with a language link in the header and hreflang alternates on both pages and in the sitemap.
- Gustavo's studio photo in the portrait card (`public/gustavo.webp`).

## Non-goals

- No store or "live" badges until each app's store status is confirmed.
- No new pages. `/civitasly` stays as it is and the Civitasly card links to it.

## Anti-goals

- Monospace labels, grids, rulers and hard edges as decoration (the rejected directions).
- Presenting concept apps as shipped products.

## Approaches considered

1. Keep the dark theme and add a project bento. Safe, but keeps what Gustavo found unpleasant.
2. Technical light themes (inspector, spec sheet). Rejected in review: too dense and "dev cosplay".
3. Chosen: Gerson-like lightness with my own palette and font, dev identity in interactions.

## How

- `app/layout.tsx`: Geist + Geist Mono via `next/font/google`, light color scheme.
- `app/globals.css`: light tokens.
- `src/components/site/home.tsx` + `home.module.css`: rewritten. Client islands:
  `inspector.tsx` (live size + first-load reveal) and `copy-email.tsx` (button + E key).
  The existing `RevealObserver` handles scroll reveals.
- Images in `public/apps/` as WebP; icons at 128 px.
- `scroll-line.tsx` and `specimen.tsx` are removed (only the old home used them).

## Left to the builder

Exact copy per app, tints per card, and responsive breakpoints, following the mockup.
