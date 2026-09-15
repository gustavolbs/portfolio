# Gustavo Bispo portfolio

A single-page portfolio for a Senior Frontend & Product Engineer. The interface itself demonstrates responsive systems, browser-native interaction, accessibility and product judgement.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
npm run axe
npm run smoke
```

`axe` and `smoke` use `http://localhost:3000` by default. Point them to another running server with `TEST_BASE_URL`, for example:

```bash
TEST_BASE_URL=http://localhost:3002 npm run axe
```

## Active implementation

- `app/page.tsx` renders the portfolio.
- `src/components/site/live-layout.tsx` owns the native width interaction and page structure.
- `src/components/site/live-layout.module.css` owns the responsive visual system and container queries.
- `PRODUCT.md` defines the audience and privacy boundary.
- `DESIGN.md` and `DESIGN-CONTRACT.md` document the visual and interaction rules.

Legacy content routes permanently redirect to `/`. They do not render or import the old case studies.

## Privacy

The public page uses selected employer names and broad titles only. Employer architecture, internal tooling, customers, scale, metrics and project narratives are deliberately excluded.

## Stack

Next.js 16, React 19, TypeScript, CSS Modules, `next/font`, Playwright and axe-core. No animation or UI framework is required.

## License

Private.
