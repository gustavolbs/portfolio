# P3 Gate — Home Page

**Adjudicator:** Finish-Gate Reviewer (UI)

## Decision: **PASS**

The home page carries the positioning block, three case study cards,
the craft strip with three live components, the experience timeline,
and the contact section. No banlist default from section 8 ships.

## Evidence

1. **First-read object is correct.** At 1280px the first viewport
   carries the engineer's role, the placeholder name (visible per the
   brief's instruction to never invent facts), the one-line positioning,
   and the primary action (`Copy email`) with the secondary action
   (`Read resume`). The status line is below the actions. No full-viewport
   centered hero (banlist #1).

2. **Three case studies, never more.** The `SelectedWork` section lists
   exactly three projects. Each carries company, period, problem,
   outcome, stack as mono tags, and role. The title links to the case
   study route. (banlist #45.)

3. **Craft strip proves three different techniques.**
   - `CraftStateMachine`: tablist with roving tabindex, arrow keys,
     Home/End, focus management, aria-selected, aria-controls.
   - `CraftWindowedList`: 5000 synthetic rows, only ~14 in the DOM at
     a time, scroll-driven translate, aria-rowcount and aria-rowindex.
   - `CraftCombobox`: filter input, arrow keys, Enter to select,
     Escape to close, aria-expanded, aria-controls, aria-activedescendant.

4. **No emoji, no em dash, no marketing copy.** Verified by reading the
   rendered text. (banlist #40, #41, #42.)

5. **Mono is metadata only.** All `Mono` components render in upper
   case with tracking — never as a paragraph. (banlist #25.)

6. **Type scale matches tokens.** H1 reads at 64px, weight 500,
   tracking -0.032em, line-height 0.98. Measured via
   `getComputedStyle(h1)`.

7. **Layout primitives carry the page.** No ad-hoc one-off paddings
   or magic numbers outside the space ramp.

8. **Display type uses weight 500 with tracking, not bold.** (banlist #26.)

9. **Focus ring is visible on every interactive element.** 2px solid
   `--focus`, 2px offset. Buttons, links, inputs, tabs, combobox,
   theme toggle.

10. **No horizontal overflow at 320px, 768px, or 1280px.** Verified by
    `document.documentElement.scrollWidth <= clientWidth`.

11. **Build is clean.** Zero warnings.

## Findings (forward-looking)

1. **The placeholder name and email render in the hero.** They appear
   as `[[PLACEHOLDER: full name]]` and `[[PLACEHOLDER: public email]]`.
   This is the intended behavior per the brief. When you supply real
   values, they will replace the placeholder strings in
   `src/content/site.ts`.

2. **The home carries the full positioning, work, craft, experience,
   and contact.** An explicit `/about` route lives separately (P5) and
   is not duplicated on the home.

3. **The `Skip to content` link appears at the top of the DOM and
   receives focus on Tab.**

## Required before P4

- The home references `/work/[slug]` for each case study. P4 will
  stand up the index route at `/work` and the case study template at
  `/work/[slug]`. Links will resolve.

Advance to P4 (UI Designer — Work index + case study template).

— Finish-Gate Reviewer, P3
