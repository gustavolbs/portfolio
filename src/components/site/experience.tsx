import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { experience } from "@/content/validated";
import { uiText } from "@/lib/placeholder";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
          <Mono variant="eyebrow">03 · Experience</Mono>
          <Mono variant="eyebrow">Most recent first</Mono>
        </Stack>

        <Text as="h2" variant="h1" className="mt-6 max-w-[18ch] text-[var(--text)]">
          Six years of shipping frontend at consumer scale.
        </Text>

        <ol className="mt-16 md:mt-24 flex flex-col">
          {experience.map((role, idx) => (
            <li
              key={`${role.role}-${role.period}-${idx}`}
              className={`reveal grid grid-cols-1 gap-3 py-6 md:grid-cols-[10rem_1fr_2fr] md:items-baseline md:gap-10 md:py-7 ${
                idx !== 0 ? "border-t border-[var(--border)]" : "border-t border-[var(--border)]"
              }`}
            >
              <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                {role.period}
              </Mono>
              <Stack gap={1}>
                <span className="text-[15px] font-medium tracking-[-0.005em] text-[var(--text)] md:text-[16px]">
                  {role.role}
                </span>
                <span className="text-[13px] text-[var(--text-secondary)]">
                  {uiText("currentCompany", role.company)}
                </span>
              </Stack>
              <Stack direction="row" gap={4} align="baseline" className="flex-wrap">
                <span className="text-[14px] leading-snug text-[var(--text-secondary)]">
                  {role.focus}
                </span>
                {role.current && (
                  <Mono variant="eyebrow" className="text-[var(--accent)]">
                    · current
                  </Mono>
                )}
              </Stack>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
