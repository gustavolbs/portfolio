import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { RevealObserver } from "@/components/site/reveal-observer";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Engineering writing. When there is something to say, it lives here.",
};

export default function NotesIndex() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">
        <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Container>
            <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
              <Mono variant="eyebrow">Notes</Mono>
              <Mono variant="eyebrow">Empty state</Mono>
            </Stack>

            <Text as="h1" variant="display" className="mt-6 max-w-[20ch] text-[var(--text)]">
              Nothing here yet.
            </Text>

            <Text
              as="p"
              variant="body-lg"
              className="mt-6 max-w-[60ch] text-[var(--text-secondary)]"
            >
              I write when there is a thing to write about, not on a schedule.
              When the first post lands it will be about a decision I made on
              a real codebase that I am still willing to defend.
            </Text>

            <Stack gap={3} className="mt-16 md:mt-24 max-w-[60ch]">
              <Mono variant="eyebrow">What will go here</Mono>
              <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                Engineering writing on the tradeoffs that show up when best
                practices meet a real codebase. Internationalization at scale.
                The cost of a typed payment abstraction. Why the design system
                moved to an NPM package.
              </Text>
              <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                Until then, the case studies on <Link href="/work" className="underline-grow text-[var(--text)]">/work</Link> carry the
                decisions I would write about.
              </Text>
            </Stack>
          </Container>
        </Section>
      </main>
    </>
  );
}
