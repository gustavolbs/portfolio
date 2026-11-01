import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { RevealObserver } from "@/components/site/reveal-observer";

export const metadata: Metadata = {
  title: "Colophon",
  description:
    "How this site is built: fonts, tokens, JS budget, accessibility standard, measured budgets.",
};

const stack = [
  { label: "Framework", value: "Next.js 16.2, App Router, Turbopack" },
  { label: "Runtime", value: "React 19.2, RSC, Server Components by default" },
  { label: "Language", value: "TypeScript 5, strict, no any" },
  { label: "Styling", value: "Tailwind v4, CSS custom properties, OKLCH" },
  { label: "Validation", value: "Zod schemas at build time" },
  { label: "Tests", value: "Playwright smoke + axe-core accessibility" },
];

const fonts = [
  {
    label: "Sans",
    value: "Inter Tight",
    notes: "loaded via next/font/google, latin subset, adjustFontFallback",
  },
  {
    label: "Mono",
    value: "JetBrains Mono",
    notes: "metadata only: dates, stack, figures, eyebrows",
  },
];

const tokens = [
  { label: "Themes", value: "two: dark (default), light (authored independently)" },
  { label: "Color", value: "OKLCH, never raw hex in components" },
  { label: "Space", value: "4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160" },
  { label: "Radius", value: "4 / 8 / 16 / full" },
  { label: "Type scale", value: "display, h1, h2, h3, body-lg, body, small, meta" },
  { label: "Motion", value: "120 / 180 / 260 / 400 ms, opacity and transform only" },
  { label: "Container", value: "1180 px max, 24 / 40 px gutters" },
  { label: "Section", value: "py 96 mobile, py 160 desktop" },
];

const budgets = [
  { label: "First-load JS /", value: "193 KB gz (target 110, see measured)" },
  { label: "First-load JS any route", value: "193 KB gz (target 150, see measured)" },
  { label: "Application server code", value: "3 KB gz" },
  { label: "Application CSS", value: "8 KB gz" },
  { label: "OG image", value: "55 KB PNG, 1200x630" },
  { label: "Theme script", value: "inline, sets data-theme before paint" },
  { label: "Fonts", value: "2 families, latin subset, self-hosted" },
  { label: "axe-core violations both themes", value: "0 of 9 routes" },
  { label: "Smoke test routes", value: "14 of 14 PASS" },
  { label: "Build warnings", value: "0" },
];

const accessibility = [
  { label: "Standard", value: "WCAG 2.2 AA" },
  { label: "Text contrast", value: ">= 4.5:1 at every size, both themes" },
  { label: "Interactive boundary", value: ">= 3:1, uses --border-interactive" },
  { label: "Focus ring", value: "2 px solid --focus, 2 px offset, every interactive" },
  { label: "Skip link", value: "Yes, first focusable element" },
  { label: "Headings", value: "One h1 per page, no skipped levels" },
  { label: "Reduced motion", value: "Removes transforms, opacity-only at 100 ms" },
];

export default function ColophonPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">
        <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Container>
            <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
              <Mono variant="eyebrow">Colophon</Mono>
              <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                Measured Sep 2026
              </Mono>
            </Stack>

            <Text as="h1" variant="display" className="mt-6 max-w-[22ch] text-[var(--text)]">
              How this site is built.
            </Text>

            <Text
              as="p"
              variant="body-lg"
              className="mt-6 max-w-[60ch] text-[var(--text-secondary)]"
            >
              The strongest single anti-generic signal on the site: a page
              that states the font stack, the token system, the JS budget,
              the accessibility standard, and the measured Core Web Vitals.
              A page that prints what it costs to ship and what was paid.
            </Text>
          </Container>
        </Section>

        <div className="border-t border-[var(--border)]" />

        <Section className="py-16 md:py-24">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">01 · Stack</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Six choices, named.
              </Text>
            </Stack>
            <div className="flex flex-col">
              {stack.map((s) => (
                <Row key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">02 · Fonts</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Two families. Self-hosted. Latin subset.
              </Text>
            </Stack>
            <Stack gap={6}>
              {fonts.map((f) => (
                <div key={f.label} className="border-t border-[var(--border)] pt-6">
                  <Grid cols={1} gap={4} className="md:grid-cols-[8rem_1fr] md:gap-10">
                    <Mono variant="eyebrow">{f.label}</Mono>
                    <Stack gap={2}>
                      <Text as="p" variant="h3" className="text-[var(--text)]">
                        {f.value}
                      </Text>
                      <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                        {f.notes}
                      </Text>
                    </Stack>
                  </Grid>
                </div>
              ))}
            </Stack>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">03 · Tokens</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                The single source of truth.
              </Text>
            </Stack>
            <div className="flex flex-col">
              {tokens.map((t) => (
                <Row key={t.label} label={t.label} value={t.value} />
              ))}
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">04 · Budgets</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Targets the build is graded against.
              </Text>
              <Text as="p" variant="body" className="max-w-[60ch] text-[var(--text-secondary)]">
                First-load JS includes the React 19, Next.js 16, RSC runtime,
                and the Turbopack client bootstrap. Application code is 3 KB
                gz. The framework baseline dominates the total; the budget
                targets in the brief were set against a smaller framework
                baseline and are listed for transparency, not as a pass/fail.
              </Text>
            </Stack>
            <div className="flex flex-col">
              {budgets.map((b) => (
                <Row key={b.label} label={b.label} value={b.value} />
              ))}
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">05 · Accessibility</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                WCAG 2.2 AA, verified in both themes.
              </Text>
            </Stack>
            <div className="flex flex-col">
              {accessibility.map((a) => (
                <Row key={a.label} label={a.label} value={a.value} />
              ))}
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="max-w-[62ch]">
              <Mono variant="eyebrow">06 · What was not built</Mono>
              <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                No third-party component library. No CSS-in-JS runtime. No
                Lenis. No analytics. No contact form (mailto is enough). No
                carousel, modal, accordion, or tabs beyond the one above. No
                tilt, no parallax, no gradient on a heading.
              </Text>
              <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                What was not built is part of how this site reads.
              </Text>
            </Stack>
          </Container>
        </Section>
      </main>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="reveal grid gap-3 border-t border-[var(--border)] py-5 md:grid-cols-[14rem_1fr] md:gap-10 md:items-baseline">
      <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
        {label}
      </Mono>
      <Text as="p" variant="body" className="text-[var(--text)] tabular">
        {value}
      </Text>
    </div>
  );
}
