# P4 Gate — Work Index + Case Study Template

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

Three case studies are reachable at `/work/[slug]`, the index at `/work`
lists them with the same data shape, and the template renders every
section from the brief: hero, context, role, problem (as a tradeoff),
decisions with what was rejected, quality, outcome with measurement
method, what I'd change.

## Evidence

1. **Three case studies, never more.** `generateStaticParams` returns
   exactly the three slugs. The build output confirms three prerendered
   case study pages.

2. **The template carries the brief's mandated sections.** Live
   Nation's case study renders Hero, Context, My role, The problem (as
   a tradeoff), Decisions (three, each with Chose, Rejected, Why),
   Quality, Outcome with measurement method, and What I'd change.

3. **Each decision names what was rejected and why.** This is the part
   a staff engineer reads first. The template enforces it.

4. **Measurement method is its own block.** The outcome section
   separates the headline outcome from the measurement method and the
   measurement window. No number is presented without sourcing.

5. **The other two case studies still ship.** Nivells and Evermart
   carry the same data structure; their richer sections (decisions,
   what I'd change) are empty because they were not supplied. P0's
   decision to use Zod validation means the build still passes; the
   empty sections simply do not render their `if` blocks. This is the
   correct behavior — never invent a decision to fill a section.

6. **Nav works from every page.** The `/work/[slug]` template includes
   the site nav and a "← All work" link. The previous/next case study
   loop at the bottom carries the reader through all three.

7. **One `h1` per page, sequential headings.** No heading-level skips.

8. **Focus ring on every interactive element.** Verified by reading
   the template.

9. **No horizontal overflow at 320px.** The case study template uses
   the same `Container` primitive as the home; verified by the
   primitive's container math.

10. **Build clean.** Zero warnings. Typecheck clean. Lint clean.

## Findings (forward-looking)

1. **The two unpopulated case studies have shorter pages.** This is
   correct per the brief: never invent decisions to fill a section.
   When you supply context, ownership, tradeoff, decisions, quality,
   measurement method, and what you'd change for the other two, they
   appear. Until then, those sections are absent.

2. **The Measurement Method block currently renders the placeholder
   for Live Nation** ("[[PLACEHOLDER: production scale claim, measured
   how, dated]]"). This is intentional. Replace with the real value
   in `src/content/site.ts` when you supply it.

3. **The case study template does not embed an image artifact.** The
   brief permits screenshot, recording, live embed, or none. None was
   supplied. The hero is text-first with mono metadata. When you
   supply an artifact, add it inside the Hero section above the meta
   grid, marked `rebuilt sample` if it is not real shipped work.

Advance to P5 (UI Designer — Craft, Notes, About, Colophon, Contact).

— Finish-Gate Reviewer, P4
