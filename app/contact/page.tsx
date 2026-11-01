import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { CopyButton } from "@/components/ui/copy-button";
import { RevealObserver } from "@/components/site/reveal-observer";
import { contactChannels, profile } from "@/content/validated";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email, GitHub, LinkedIn, resume, timezone, response expectation.",
};

export default function ContactPage() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <main id="main">
        <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
          <Container>
            <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
              <Mono variant="eyebrow">Contact</Mono>
              <Mono variant="eyebrow">{profile.location}</Mono>
            </Stack>

            <Text as="h1" variant="display" className="mt-6 max-w-[20ch] text-[var(--text)]">
              If you are hiring senior frontend, talk to me.
            </Text>

            <Text
              as="p"
              variant="body-lg"
              className="mt-6 max-w-[60ch] text-[var(--text-secondary)]"
            >
              {profile.role} focused on frontend architecture and product
              delivery. Reply window under 24 hours on weekdays, UTC-3.
            </Text>
          </Container>
        </Section>

        <div className="border-t border-[var(--border)]" />

        <Section className="py-16 md:py-24">
          <Container>
            <Grid cols={1} gap={4} className="md:grid-cols-2">
              {contactChannels.map((c) => (
                <div
                  key={c.label}
                  className="flex items-baseline justify-between gap-4 border border-[var(--border)] rounded-[var(--radius-md)] bg-[var(--surface)] p-6 md:p-8 transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)]"
                >
                  <Stack gap={2} className="min-w-0 flex-1">
                    <Mono variant="eyebrow">{c.label}</Mono>
                    <span className="text-[16px] text-[var(--text)] truncate">
                      {c.value}
                    </span>
                  </Stack>
                  {c.label === "Email" ? (
                    <CopyButton value={profile.email} label="Copy" />
                  ) : (
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noreferrer noopener" : undefined}
                      className="inline-flex items-center justify-center bg-[var(--surface)] border border-[var(--border-interactive)] text-[var(--text)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] focus-visible:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] rounded-[var(--radius-sm)] px-3 py-2 text-[13px] font-medium min-h-[36px]"
                    >
                      Open
                      <span aria-hidden="true" className="font-mono text-[12px] ml-1">
                        →
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section className="py-16 md:py-24 border-t border-[var(--border)]">
          <Container>
            <Grid cols={1} gap={8} className="md:grid-cols-12 md:gap-14">
              <Stack gap={2} className="md:col-span-3">
                <Mono variant="eyebrow">Response</Mono>
              </Stack>
              <Stack gap={4} className="md:col-span-9 max-w-[62ch]">
                <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                  Email is fastest. LinkedIn is fine for first contact if you
                  need to verify identity before reaching out. Reply window
                  is under 24 hours on weekdays, longer on weekends.
                </Text>
                <Text as="p" variant="body" className="text-[var(--text-secondary)]">
                  I am currently {profile.status}.
                </Text>
              </Stack>
            </Grid>
          </Container>
        </Section>
      </main>
    </>
  );
}
