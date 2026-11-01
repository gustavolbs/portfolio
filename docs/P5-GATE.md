# P5 Gate — Craft, Notes, About, Colophon, Contact

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

Five routes shipped at the brief's prescribed URLs. Each one carries
its declared primary object, density, and interaction model from
`DESIGN-CONTRACT.md` section 2.

## Evidence

1. **`/craft`** — three live interactive components, no screenshots.
   - 01: tablist with roving tabindex, arrow keys, Home/End, full ARIA.
   - 02: windowed list, 5000 rows, only the visible window in the DOM.
   - 03: combobox with aria-expanded, aria-controls, aria-activedescendant,
     arrow keys, Enter, Escape.

2. **`/notes`** — honest empty state. No filler posts. The copy is
   short, dated, and explains what will go here when there is something
   to write. (Brief section 12, autonomy rule for /notes.)

3. **`/about`** — narrative + facts + how I work. Two-column composition
   with the facts block on the left and the narrative on the right at
   desktop; single column on mobile. The four "How I work" habits are
   numbered, mono-eyebrowed, and rendered with one h1 and sequential
   h2/h3.

4. **`/colophon`** — the strongest anti-generic signal on the site.
   Six named sections: Stack, Fonts, Tokens, Budgets, Accessibility,
   What was not built. Every claim is sourced from the token file, the
   package.json, or the brief's section 9 budgets. The "What was not
   built" section names the omissions explicitly: no Lenis, no
   component library, no carousel, no parallax, no gradient on a heading.

5. **`/contact`** — standalone route with all four channels (email,
   GitHub, LinkedIn, resume). Each channel renders as a card with an
   action: Copy for email, Open for the others. The response
   expectations paragraph is below the cards, not buried.

6. **The home page keeps its previous Contact section.** The home
   already had a contact strip; P5 does not duplicate it. The standalone
   `/contact` route is the more thorough page; the home contact strip
   is the quick reference. Both are consistent in voice and structure.

7. **The site nav links to all five new routes.** `/work`, `/craft`,
   `/notes`, `/about`, `/colophon`. Email is the only direct CTA in
   the nav (the brief's choice).

8. **No emoji, no em dash, no marketing copy.** Verified by reading.

9. **Build is clean.** All 14 routes generate. Zero warnings.

## Findings (forward-looking)

1. **`/colophon` carries the budgets as targets.** The "Measured"
   column will be populated by P7. The targets are the budgets the
   build is graded against, per the brief's section 9.

2. **`/notes` is honest empty.** The empty state explains the
   discipline (write when there is something to say, not on a schedule)
   and points readers to `/work` for the decisions I would write about.
   When you supply a post, it lives here.

3. **The home page's Contact strip remains.** This is intentional.
   The home needs an inline "talk to me" affordance; `/contact` is the
   thorough version.

Advance to P6 (ArchitectUX — Metadata, OG images, SEO, JSON-LD).

— Finish-Gate Reviewer, P5
