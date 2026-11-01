import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { RevealObserver } from "@/components/site/reveal-observer";
import { aboutCopy, profile } from "@/content/validated";
import { uiText } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Computer scientist by training, frontend engineer by trade, product engineer by disposition.",
};

const howIWork = [
  {
    label: "Read the codebase twice",
    body: "Before I change anything, I read the surrounding code twice. The first pass is for what is there. The second is for what was tried and removed.",
  },
  {
    label: "Make the next engineer's life easier",
    body: "Every PR is a note to the next person. Variable names, comments on intent, tests on invariants. I optimize for the engineer who will touch this in six months.",
  },
  {
    label: "Measure before claiming",
    body: "If I cannot point at the measurement method and the date, I do not say the number. Estimates are honest about being estimates. Outcomes are dated.",
  },
  {
    label: "Write the rejected option down",
    body: "When a decision lands, I write what was rejected and why. The next engineer deserves the option I considered, not just the one I picked.",
  },
];

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">
        <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Container>
            <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
              <Mono variant="eyebrow">About</Mono>
              <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                {profile.location}
              </Mono>
            </Stack>

            <Text as="h1" variant="display" className="mt-6 max-w-[22ch] text-[var(--text)]">
              Computer scientist by training. Product engineer by disposition.
            </Text>
          </Container>
        </Section>

        <div className="border-t border-[var(--border)]" />

        <Section className="py-16 md:py-24">
          <Container>
            <Grid cols={1} gap={6} className="md:grid-cols-12 md:gap-14">
              <Stack gap={6} className="md:col-span-4">
                <Mono variant="eyebrow">Facts</Mono>
                <dl className="flex flex-col gap-5">
                {aboutCopy.facts.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <dt>
                      <Mono variant="eyebrow">{f.label}</Mono>
                    </dt>
                    <dd className="text-[14px] text-[var(--text)]">
                      {uiText(f.label, f.value)}
                    </dd>
                  </div>
                ))}
                </dl>
              </Stack>

              <Stack gap={6} className="md:col-span-7 md:col-start-6">
                <Mono variant="eyebrow">Narrative</Mono>
                {aboutCopy.body.map((p, i) => (
                  <Text
                    key={i}
                    as="p"
                    variant="body-lg"
                    className="max-w-[62ch] text-[var(--text-secondary)]"
                  >
                    {uiText("about_body", p)}
                  </Text>
                ))}
              </Stack>
            </Grid>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-12 md:mb-16">
              <Mono variant="eyebrow">How I work</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Four habits, applied without ceremony.
              </Text>
            </Stack>

            <ol className="flex flex-col">
              {howIWork.map((h, i) => (
                <li
                  key={h.label}
                  className={`reveal grid gap-4 py-8 md:grid-cols-[8rem_1fr] md:gap-14 md:py-10 ${
                    i !== 0 ? "border-t border-[var(--border)]" : "border-t border-[var(--border)]"
                  }`}
                >
                  <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                    0{i + 1}
                  </Mono>
                  <Stack gap={2}>
                    <Text as="h3" variant="h3" className="text-[var(--text)]">
                      {h.label}
                    </Text>
                    <Text
                      as="p"
                      variant="body"
                      className="max-w-[62ch] text-[var(--text-secondary)]"
                    >
                      {h.body}
                    </Text>
                  </Stack>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      </main>
    </>
  );
}
