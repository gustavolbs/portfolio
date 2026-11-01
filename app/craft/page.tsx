import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { CraftStateMachine } from "@/components/site/craft/state-machine";
import { CraftWindowedList } from "@/components/site/craft/windowed-list";
import { CraftCombobox } from "@/components/site/craft/combobox";
import { RevealObserver } from "@/components/site/reveal-observer";

export const metadata: Metadata = {
  title: "Craft",
  description:
    "Three live components: a state machine with roving tabindex, a windowed list that only paints visible rows, and a combobox with full keyboard support.",
};

export default function CraftPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">
        <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Container>
            <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
              <Mono variant="eyebrow">Craft · three live components</Mono>
              <Mono variant="eyebrow">Real, not screenshots</Mono>
            </Stack>

            <Text as="h1" variant="display" className="mt-6 max-w-[20ch] text-[var(--text)]">
              The site is the work.
            </Text>

            <Text
              as="p"
              variant="body-lg"
              className="mt-6 max-w-[60ch] text-[var(--text-secondary)]"
            >
              Three components, three techniques. Each one is a real, working
              interface, not a description of one. Open them, click them, use
              the keyboard.
            </Text>
          </Container>
        </Section>

        <div className="border-t border-[var(--border)]" />

        <Section className="py-16 md:py-24">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">01 · State machine</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Tablist with roving tabindex.
              </Text>
              <Text
                as="p"
                variant="body"
                className="max-w-[56ch] text-[var(--text-secondary)]"
              >
                Tabs share a single tab stop in the page. Arrow keys move
                between them, Home and End jump to the ends. aria-selected,
                aria-controls, and aria-labelledby wire the relationship
                between each tab and its panel.
              </Text>
            </Stack>
            <div className="reveal">
              <CraftStateMachine />
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">02 · Performance</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Windowed list. Five thousand rows, only the visible window in the DOM.
              </Text>
              <Text
                as="p"
                variant="body"
                className="max-w-[56ch] text-[var(--text-secondary)]"
              >
                Scroll the inner box. The row count above updates. Behind the
                scenes the list virtualizes: only the rows in the viewport,
                plus a small overscan, are rendered. The total scroll height
                stays correct.
              </Text>
            </Stack>
            <div className="reveal">
              <CraftWindowedList />
            </div>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Stack gap={4} className="mb-10">
              <Mono variant="eyebrow">03 · Accessibility</Mono>
              <Text as="h2" variant="h2" className="max-w-[24ch] text-[var(--text)]">
                Combobox with full keyboard and ARIA wiring.
              </Text>
              <Text
                as="p"
                variant="body"
                className="max-w-[56ch] text-[var(--text-secondary)]"
              >
                Focus the input, type to filter, arrow keys to move, Enter to
                select, Escape to close. aria-expanded, aria-controls, and
                aria-activedescendant stay in sync. The listbox is announced
                when it opens.
              </Text>
            </Stack>
            <div className="reveal">
              <CraftCombobox />
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
