import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { contactChannels, profile } from "@/content/validated";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
          <Mono variant="eyebrow">04 · Contact</Mono>
          <Mono variant="eyebrow">{profile.location}</Mono>
        </Stack>

        <Text as="h2" variant="h1" className="mt-6 max-w-[24ch] text-[var(--text)]">
          If you are hiring senior frontend, talk to me.
        </Text>

        <Text
          as="p"
          variant="body-lg"
          className="mt-6 max-w-[56ch] text-[var(--text-secondary)]"
        >
          {profile.role} focused on frontend architecture and product delivery.
          Reply window under 24 hours on weekdays. Resume available below.
        </Text>

        <Grid cols={2} gap={4} className="mt-16 md:mt-24">
          {contactChannels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noreferrer noopener" : undefined}
              className="group flex items-baseline justify-between gap-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 md:p-8 transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] focus-visible:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              <Stack gap={1} className="min-w-0">
                <Mono variant="eyebrow">{c.label}</Mono>
                <span className="text-[15px] text-[var(--text)] truncate">
                  {c.value}
                </span>
              </Stack>
              <span
                aria-hidden="true"
                className="font-mono text-[14px] text-[var(--text-tertiary)] transition-transform duration-[var(--dur-1)] ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:text-[var(--text)]"
              >
                →
              </span>
            </a>
          ))}
        </Grid>

        <div className="mt-16 md:mt-24 flex items-baseline justify-between border-t border-[var(--border)] pt-6">
          <Mono variant="eyebrow">© 2026 {profile.name}</Mono>
          <Mono variant="eyebrow">{profile.status}</Mono>
        </div>
      </Container>
    </Section>
  );
}
