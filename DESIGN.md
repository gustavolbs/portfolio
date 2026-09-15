---
name: Gustavo Bispo Live Layout
description: A technical-editorial portfolio where responsive behavior is the proof of frontend judgement.
colors:
  paper: "#f8f8f8"
  ink: "#090909"
  cobalt: "#0b57f4"
  cobalt-light: "#70a0ff"
  grid-line: "rgba(67, 119, 210, 0.16)"
  metadata-muted: "rgba(55, 83, 143, 0.52)"
  dark-rule: "rgba(248, 248, 248, 0.32)"
typography:
  display:
    fontFamily: "Magra, Arial, sans-serif"
    fontSize: "clamp(72px, 8.52vw, 135px)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.068em"
  section:
    fontFamily: "Magra, Arial, sans-serif"
    fontSize: "clamp(58px, 7vw, 108px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Inter Tight, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.45vw, 23px)"
    fontWeight: 400
    lineHeight: 1.4
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "8px to 12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em to 0.08em"
spacing:
  mobile-gutter: "18px"
  desktop-gutter: "3.1vw"
  section-top: "32px"
  section-bottom: "120px"
  section-gap: "72px to 96px"
corners:
  default: "0"
  range-thumb: "50%"
---

# Design system: Live Layout

## North star

The page should look like the work of a frontend engineer who understands product and UX, not like a product being sold. Its central visual metaphor is a responsive layout specimen: grid, hierarchy, constraint, browser-native input and container queries are visible and functional.

## Visual language

- Warm white paper, near-black ink and one cobalt signal.
- Flat surfaces, square edges and structural rules. No cards, glass, shadows or ornamental blobs.
- A measured twelve-column field on desktop and four-column field on mobile.
- Magra carries blunt editorial statements. Inter Tight carries explanations. JetBrains Mono is limited to measurements, labels and states.
- Large type establishes confidence; precise metadata establishes engineering discipline.

The grid is allowed only where it functions as a measurement surface: the structural hero and the responsive specimen. It must not become a generic decorative background elsewhere.

## Layout

The desktop hero uses an aspect-aware height of `min(100svh, 62.55vw)` so its measured vertical composition survives from 1280 to 1600 pixels. The mobile hero uses the full small viewport height and reduces to four columns.

Sections alternate by purpose rather than by card pattern:

1. The hero identifies role, seniority, stack and contact without competing interaction.
2. The live specimen keeps its width ruler beside the controlled result and demonstrates responsive hierarchy with real container queries.
3. The dark trajectory field lists selected employer names, broad roles, years and concise credentials.
4. Ruled editorial rows explain product judgement, frontend systems and production quality.
5. A cobalt field closes with one plain email action.

## Interaction

The native range input is the signature interaction. It supports pointer, touch and keyboard, publishes its current value through `output`, and controls the actual inline size of the specimen. The specimen changes between compact, medium and wide arrangements using container queries.

Hover on employer rows is optional reinforcement only. It never reveals hidden information. Focus remains visibly outlined. Reduced-motion mode removes effective transition duration.

## Content boundary

Employer names and broad role titles may establish trajectory. No employer architecture, internal tools, scale, metrics, clients or project narratives may appear. The resume owns career detail; the page owns the impression of judgement and craft.

## Do

- Let the role precede the visual idea.
- Make browser-native behavior part of the proof.
- Keep headings short, direct and left aligned.
- Use rules, columns and inversion to create rhythm.
- Preserve semantic order and keyboard parity.

## Do not

- Add fake browser, IDE, terminal, dashboard or code-window chrome.
- Add project cards, logo walls, skill clouds or case studies.
- Add rounded containers, gradients, glow, soft shadows or glass effects.
- Use cobalt as ambient decoration outside measurement, state and the closing action.
- Publish resume details or confidential employer material.
