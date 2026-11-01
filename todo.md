# TODO

Every fact that was not supplied by you goes here as `[[PLACEHOLDER]]`.
The build continues around them. The rendered UI never shows the literal
marker: an unresolved value falls back to a neutral alternative, and an
unresolved link is omitted rather than pointing nowhere.

## Site identity

- Name is set to "Gustavo Bispo" (it was already in the metadata in
  `app/layout.tsx`). Change it in `src/content/site.ts` if you want a
  different public spelling.
- [[PLACEHOLDER: years of experience, exact figure]] — currently "6+"
- [[PLACEHOLDER: location, remote availability, timezone]]
- [[PLACEHOLDER: domain focus, one sentence]]

## Contact

- Email is set to `gustavo.luiz.bispo.santos@gmail.com`. Swap it in
  `src/content/site.ts` if you want a separate address for recruiters.
- [[PLACEHOLDER: GitHub URL]] — the card is **hidden** until the URL has an
  account path. `https://github.com/` alone does not count.
- [[PLACEHOLDER: LinkedIn URL]] — same rule, `linkedin.com/in/<handle>`.
- [[PLACEHOLDER: confirm `/public/resume.pdf` exists or supply the path]]

## Case studies — numbers, dates, and NDA boundaries

### Project 01 — Live Nation Entertainment (multi-tenant venue platform)

- [[PLACEHOLDER: production scale claim, e.g. "consumers reached" — must come
  from a measurable source, dated]]
- [[PLACEHOLDER: number of venues migrated to the content-driven model]]
- [[PLACEHOLDER: number of Vinyl components migrated to the recipe-based
  architecture]]
- [[PLACEHOLDER: which locales are live, and the launch date for the
  Canada i18n release]]
- [[PLACEHOLDER: how many internal users on the customer-service app, and
  the go-live date]]
- [[PLACEHOLDER: Next.js 15 upgrade completion date]]

### Project 02 — Nivells (design system as an NPM package)

- [[PLACEHOLDER: package name and version on NPM, or "internal only"]]
- [[PLACEHOLDER: Storybook URL, or "private"]]
- [[PLACEHOLDER: number of web and mobile surfaces consuming the system]]
- [[PLACEHOLDER: test coverage % on the package at handoff]]

### Project 03 — Evermart (checkout re-platform)

- [[PLACEHOLDER: measurement method for the "3 to 5 seconds → roughly 300ms"
  load-time claim — synthetic / RUM / Lighthouse, and the date window]]
- [[PLACEHOLDER: deploy frequency claim ("daily deployments became safe") —
  measured how, on what pipeline]]
- [[PLACEHOLDER: team size and composition (the prior draft says "15-person
  team"; confirm the count and your direct reports)]]

## Side projects

- [[PLACEHOLDER: public URL for `axis-next`, or "in development"]]
- [[PLACEHOLDER: public URL for `Lensly.ai`, or "archived, no public site"]]
- [[PLACEHOLDER: dev.to handle and any current posts to surface]]

## Open facts the build needs

- [[PLACEHOLDER: Open Graph image generation needs your full name as it
  should appear on the social card, separately from the legal name]]
- [[PLACEHOLDER: any employer logo / wordmark that may not be used — list
  here so the case study artifacts avoid it]]
- [[PLACEHOLDER: hero status line copy — e.g. "Open to senior roles,
  remote, UTC-3" or "Not looking right now"]]

## Done

- Identified that `lenis` was installed but unused; removal tracked in P2.
- Identified that `backdrop-blur` in the sticky header had no reason;
  removal tracked in P2.
- Identified that the previous content carried unsourced metrics; they
  are flagged above.
