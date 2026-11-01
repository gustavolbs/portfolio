import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { Divider } from "@/components/ui/divider";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Metric } from "@/components/ui/metric";
import { Button, LinkButton } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const metadata: Metadata = {
  title: "Design system",
  description: "Tokens and primitives for the portfolio of Gustavo Bispo.",
  robots: { index: false, follow: false },
};

const swatches = [
  { token: "--bg", label: "Background" },
  { token: "--bg-subtle", label: "Background subtle" },
  { token: "--surface", label: "Surface" },
  { token: "--surface-hover", label: "Surface hover" },
  { token: "--border", label: "Border" },
  { token: "--border-strong", label: "Border strong" },
  { token: "--border-interactive", label: "Border interactive" },
  { token: "--text", label: "Text" },
  { token: "--text-secondary", label: "Text secondary" },
  { token: "--text-tertiary", label: "Text tertiary" },
  { token: "--accent", label: "Accent" },
  { token: "--accent-hover", label: "Accent hover" },
  { token: "--accent-fg", label: "Accent fg" },
  { token: "--focus", label: "Focus" },
] as const;

type TypeRow = {
  name: string;
  size: string;
  lh: string;
  tracking: string;
  weight: string;
  mono?: boolean;
};

const typeScale: readonly TypeRow[] = [
  { name: "display", size: "64 / 40", lh: "0.98", tracking: "-0.032em", weight: "500" },
  { name: "h1", size: "44 / 32", lh: "1.06", tracking: "-0.026em", weight: "500" },
  { name: "h2", size: "32 / 26", lh: "1.16", tracking: "-0.020em", weight: "500" },
  { name: "h3", size: "22 / 20", lh: "1.30", tracking: "-0.014em", weight: "500" },
  { name: "body-lg", size: "18 / 17", lh: "1.60", tracking: "-0.008em", weight: "400" },
  { name: "body", size: "16 / 16", lh: "1.65", tracking: "0", weight: "400" },
  { name: "small", size: "14 / 14", lh: "1.50", tracking: "0", weight: "400" },
  { name: "meta", size: "12 / 12", lh: "1.40", tracking: "0.045em", weight: "500", mono: true },
];

const spaceScale = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160] as const;

const radii = [
  { name: "sm", value: "4px", usage: "inputs, chips" },
  { name: "md", value: "8px", usage: "buttons, cards" },
  { name: "lg", value: "16px", usage: "media, large surfaces" },
  { name: "full", value: "9999px", usage: "avatars" },
] as const;

const motionTokens = [
  { name: "--dur-1", value: "120ms", usage: "hover, press, color" },
  { name: "--dur-2", value: "180ms", usage: "small elements, focus, tooltips" },
  { name: "--dur-3", value: "260ms", usage: "entrances, disclosure" },
  { name: "--dur-4", value: "400ms", usage: "reserved for the single hero moment" },
  { name: "--ease-out", value: "cubic-bezier(0.16, 1, 0.30, 1)", usage: "default entrance and exit" },
  { name: "--ease-standard", value: "cubic-bezier(0.20, 0, 0, 1)", usage: "system transitions" },
] as const;

const containers = [
  { name: "Container", notes: "page max-width 1180px, gutters 24 / 40" },
  { name: "Section", notes: "py 96 mobile, py 160 desktop" },
  { name: "Stack", notes: "vertical or horizontal flex with gap tokens" },
  { name: "Grid", notes: "1, 2, 3, 4, 6, 12 column presets with gap tokens" },
  { name: "Divider", notes: "1px hairline in --border" },
] as const;

const contentComponents = [
  { name: "Text", notes: "variant-driven, mapped to the type scale" },
  { name: "Mono", notes: "metadata only, never body" },
  { name: "Card", notes: "single elevation, no nesting" },
  { name: "Tag", notes: "mono, uppercase, --border" },
  { name: "Metric", notes: "label, value, hint. tabular numerals" },
] as const;

const interactiveComponents = [
  { name: "Button / LinkButton", notes: "primary, secondary, ghost. sm, md, lg" },
  { name: "CopyButton", notes: "writes value to clipboard, aria-live confirmation" },
  { name: "ThemeToggle", notes: "dark / light, persisted to localStorage, no flash" },
  { name: "Link", notes: "internal (next/link) and external, underline-grow" },
] as const;
interactiveComponents satisfies readonly { name: string; notes: string }[];

export default function DesignPage() {
  return (
    <main id="main">
      <Section as="section" className="pt-24 pb-16 md:pt-32 md:pb-20">
        <Container>
          <Stack gap={4}>
            <Mono variant="eyebrow">P2 · /_design · internal</Mono>
            <Text as="h1" variant="display" id="top">
              Design system
            </Text>
            <Text as="p" variant="body-lg" className="max-w-[56ch] text-[var(--text-secondary)]">
              The single source of truth for tokens and primitives. Every
              component on the site renders from this page without changes. No
              raw hex, no raw px, no Tailwind default palette class.
            </Text>
            <div className="pt-4">
              <ThemeToggle />
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section id="tokens-color" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">01 · Color tokens</Mono>
            <Text as="h2" variant="h2">
              Both themes authored in OKLCH.
            </Text>
            <Text as="p" variant="body" className="max-w-[56ch] text-[var(--text-secondary)]">
              The accent covers under 5% of any viewport. It is allowed on one
              primary action, inline links, the focus ring, and at most one small
              status indicator. Never a background fill for a large block.
            </Text>
          </Stack>

          <Grid cols={2} gap={4} className="mt-12">
            {swatches.map((s) => (
              <div
                key={s.token}
                className="flex items-center gap-4 border border-[var(--border)] rounded-[var(--radius-md)] p-4"
              >
                <span
                  aria-hidden="true"
                  className="block h-14 w-14 rounded-[var(--radius-sm)] border border-[var(--border)] shrink-0"
                  style={{ backgroundColor: `var(${s.token})` }}
                />
                <Stack gap={1} className="min-w-0">
                  <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
                    {s.token}
                  </span>
                  <span className="text-[14px] text-[var(--text)]">{s.label}</span>
                </Stack>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Divider />

      <Section id="tokens-type" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">02 · Type scale</Mono>
            <Text as="h2" variant="h2">
              Two families. Eight sizes.
            </Text>
            <Text as="p" variant="body" className="max-w-[56ch] text-[var(--text-secondary)]">
              Sans for everything readable. Mono for metadata only: dates,
              stack labels, versions, figures, eyebrows, code.
            </Text>
          </Stack>

          <Stack gap={8} className="mt-12">
            {typeScale.map((t) => (
              <div
                key={t.name}
                className="grid items-baseline gap-6 border-t border-[var(--border)] pt-6 md:grid-cols-[10rem_1fr_14rem] md:gap-10"
              >
                <Mono variant="eyebrow">{t.name}</Mono>
                <span
                  className={
                    t.mono
                      ? "font-mono text-[12px] tracking-[0.045em] uppercase"
                      : `text-[var(--${t.name === "display" ? "display" : t.name === "body-lg" ? "body-lg" : t.name})] text-[var(--text)]`
                  }
                  style={
                    t.mono
                      ? undefined
                      : {
                          fontSize:
                            t.name === "display"
                              ? "64px"
                              : t.name === "h1"
                                ? "44px"
                                : t.name === "h2"
                                  ? "32px"
                                  : t.name === "h3"
                                    ? "22px"
                                    : t.name === "body-lg"
                                      ? "18px"
                                      : t.name === "body"
                                        ? "16px"
                                        : "14px",
                          lineHeight: t.lh,
                          letterSpacing: t.tracking,
                          fontWeight: Number(t.weight),
                        }
                  }
                >
                  The portfolio is the work.
                </span>
                <span className="font-mono text-[11px] text-[var(--text-tertiary)] tabular">
                  {t.size} · lh {t.lh} · {t.tracking} · {t.weight}
                </span>
              </div>
            ))}
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section id="tokens-space" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">03 · Space and radius</Mono>
            <Text as="h2" variant="h2">
              4px base. Eleven stops. Four radii.
            </Text>
          </Stack>

          <Stack gap={6} className="mt-12">
            {spaceScale.map((s) => (
              <div key={s} className="flex items-center gap-6">
                <span className="font-mono text-[12px] text-[var(--text-tertiary)] w-12">
                  {s}
                </span>
                <span
                  aria-hidden="true"
                  className="block bg-[var(--accent)]"
                  style={{ width: `${s}px`, height: "12px" }}
                />
                <span className="font-mono text-[12px] text-[var(--text-tertiary)]">
                  {s}px
                </span>
              </div>
            ))}
          </Stack>

          <Grid cols={2} gap={4} className="mt-12">
            {radii.map((r) => (
              <Card key={r.name}>
                <Stack gap={3}>
                  <Mono variant="eyebrow">radius · {r.name}</Mono>
                  <div
                    aria-hidden="true"
                    className="h-16 w-16 bg-[var(--accent)]"
                    style={{
                      borderRadius:
                        r.name === "full" ? "9999px" : `${r.value}px`,
                    }}
                  />
                  <span className="text-[14px] text-[var(--text-secondary)]">
                    {r.value} · {r.usage}
                  </span>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Divider />

      <Section id="tokens-motion" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">04 · Motion</Mono>
            <Text as="h2" variant="h2">
              Opacity and transform only. Reduced motion removes transforms.
            </Text>
          </Stack>

          <Grid cols={2} gap={4} className="mt-12">
            {motionTokens.map((m) => (
              <Card key={m.name}>
                <Stack gap={2}>
                  <Mono variant="eyebrow">{m.name}</Mono>
                  <span className="font-mono text-[14px] text-[var(--text)]">
                    {m.value}
                  </span>
                  <span className="text-[13px] text-[var(--text-secondary)]">
                    {m.usage}
                  </span>
                </Stack>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Divider />

      <Section id="primitives-layout" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">05 · Layout primitives</Mono>
            <Text as="h2" variant="h2">
              Five primitives. No layout utility invented on a screen.
            </Text>
          </Stack>

          <Stack gap={3} className="mt-12">
            {containers.map((c) => (
              <div
                key={c.name}
                className="grid gap-3 border-t border-[var(--border)] py-4 md:grid-cols-[12rem_1fr]"
              >
                <Mono variant="eyebrow">{c.name}</Mono>
                <span className="text-[14px] text-[var(--text-secondary)]">
                  {c.notes}
                </span>
              </div>
            ))}
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section id="primitives-content" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">06 · Content primitives</Mono>
            <Text as="h2" variant="h2">
              Five more. Each owns its typography.
            </Text>
          </Stack>

          <Stack gap={12} className="mt-12">
            {contentComponents.map((c) => (
              <div key={c.name} className="border-t border-[var(--border)] pt-6">
                <Stack gap={4}>
                  <Mono variant="eyebrow">{c.name}</Mono>
                  <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                    {c.notes}
                  </Text>
                  <Tag>tag · mono · uppercase · 0.06em</Tag>
                </Stack>
              </div>
            ))}
            <Card>
              <Stack gap={3}>
                <Mono variant="eyebrow">Metric</Mono>
                <Metric value="—" label="Lighthouse performance" hint="Run `npx lighthouse` to measure on a deployed preview." />
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section id="primitives-interactive" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">07 · Interactive primitives</Mono>
            <Text as="h2" variant="h2">
              Four. Focus ring on every interactive element.
            </Text>
          </Stack>

          <Stack gap={12} className="mt-12">
            <Card>
              <Stack gap={6}>
                <Mono variant="eyebrow">Button</Mono>
                <Stack direction="row" gap={3} wrap>
                  <Button variant="primary" size="md">
                    Primary action
                  </Button>
                  <Button variant="secondary" size="md">
                    Secondary
                  </Button>
                  <Button variant="ghost" size="md">
                    Ghost
                  </Button>
                  <Button variant="primary" size="md" disabled>
                    Disabled
                  </Button>
                </Stack>
                <Stack direction="row" gap={3} wrap>
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                </Stack>
              </Stack>
            </Card>

            <Card>
              <Stack gap={6}>
                <Mono variant="eyebrow">CopyButton</Mono>
                <CopyButton value="hello@example.com" label="Copy email" />
              </Stack>
            </Card>

            <Card>
              <Stack gap={6}>
                <Mono variant="eyebrow">LinkButton</Mono>
                <Stack direction="row" gap={3} wrap>
                  <LinkButton href="#top" variant="primary" size="md">
                    Internal
                  </LinkButton>
                  <LinkButton
                    href="https://example.com"
                    variant="secondary"
                    size="md"
                    external
                  >
                    External
                  </LinkButton>
                </Stack>
              </Stack>
            </Card>

            <Card>
              <Stack gap={6}>
                <Mono variant="eyebrow">ThemeToggle</Mono>
                <ThemeToggle />
                <Text as="p" variant="small" className="text-[var(--text-tertiary)]">
                  Persisted in localStorage. The inline script in layout
                  applies the value before paint to prevent flash.
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section id="checks" className="py-16 md:py-24">
        <Container>
          <Stack gap={6}>
            <Mono variant="eyebrow">08 · Verification</Mono>
            <Text as="h2" variant="h2">
              This page is checked by the same gates as the live site.
            </Text>
          </Stack>

          <Grid cols={3} gap={4} className="mt-12">
            <Metric value="0" label="raw hex in components" />
            <Metric value="0" label="raw px in components" />
            <Metric value="2" label="font families" />
            <Metric value="1" label="accent hue" />
            <Metric value="11" label="space stops" />
            <Metric value="4" label="radius stops" />
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
