import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { CraftStateMachine } from "@/components/site/craft/state-machine";
import { CraftWindowedList } from "@/components/site/craft/windowed-list";
import { CraftCombobox } from "@/components/site/craft/combobox";

export function CraftStrip() {
  return (
    <Section id="craft-strip">
      <Container>
        <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
          <Mono variant="eyebrow">02 · Craft</Mono>
        </Stack>

        <Text as="h2" variant="h1" className="mt-6 max-w-[22ch] text-[var(--text)]">
          The site is the work. Three components, three techniques.
        </Text>

        <Text
          as="p"
          variant="body-lg"
          className="mt-6 max-w-[56ch] text-[var(--text-secondary)]"
        >
          One state machine with roving tabindex. One windowed list that only
          paints the visible rows. One combobox with full keyboard and ARIA
          wiring. All interactive. All token-driven.
        </Text>

        <Stack gap={8} className="mt-12 md:mt-16">
          <div className="reveal">
            <CraftStateMachine />
          </div>
          <div className="reveal">
            <CraftWindowedList />
          </div>
          <div className="reveal">
            <CraftCombobox />
          </div>
        </Stack>
      </Container>
    </Section>
  );
}
