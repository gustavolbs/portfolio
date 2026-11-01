import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { Mono } from "@/components/ui/mono";
import { CopyButton } from "@/components/ui/copy-button";
import { LinkButton } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { positioning, profile, homeActions } from "@/content/validated";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Intro"
      className="pt-20 pb-12 md:pt-24 md:pb-16"
    >
      <Container>
        <Stack
          direction="row"
          justify="between"
          align="baseline"
          className="flex-wrap gap-4"
        >
          <Mono variant="eyebrow">
            {profile.role} · {profile.years} years
          </Mono>
          <Mono variant="eyebrow" className="hidden md:inline">
            {profile.location}
          </Mono>
        </Stack>

        <Stack gap={12} className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_20rem] md:gap-16">
            <div className="flex flex-col gap-6">
              <Text as="h1" variant="display" className="text-[var(--text)]">
                {profile.role}{" "}
                <span className="text-[var(--text-secondary)]">
                  with a focus on {positioning.focusShort}.
                </span>
              </Text>
              <Text
                as="p"
                variant="body-lg"
                className="max-w-[44ch] text-[var(--text-secondary)]"
              >
                {positioning.proof}
              </Text>
            </div>

            <Stack gap={4}>
              <CopyButton
                value={profile.email}
                label={homeActions.primary.label}
              />
              <LinkButton
                href={homeActions.secondary.href}
                variant="secondary"
                size="md"
              >
                {homeActions.secondary.label}
                <span aria-hidden="true" className="font-mono text-[12px]">
                  →
                </span>
              </LinkButton>
              <div className="border-t border-[var(--border)] pt-4 mt-2">
                <Stack gap={3}>
                  <Stack direction="row" justify="between" align="baseline">
                    <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                      Companies
                    </Mono>
                    <span className="font-mono text-[var(--text)] tabular text-[14px]">5+</span>
                  </Stack>
                  <Stack direction="row" justify="between" align="baseline">
                    <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                      Years
                    </Mono>
                    <span className="font-mono text-[var(--text)] tabular text-[14px]">{profile.years}</span>
                  </Stack>
                  <Stack direction="row" justify="between" align="baseline">
                    <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                      Status
                    </Mono>
                    <span className="font-mono text-[var(--text)] text-[14px]">{profile.status}</span>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </div>

        </Stack>
      </Container>
    </section>
  );
}
