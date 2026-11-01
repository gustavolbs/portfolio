import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Mono } from "@/components/ui/mono";
import { Text } from "@/components/ui/text";
import { CopyButton } from "@/components/ui/copy-button";
import { LinkButton } from "@/components/ui/button";
import { positioning, profile, homeActions } from "@/content/validated";

export function StaticHero() {
  return (
    <section
      id="top"
      aria-label="Intro"
      className="pt-24 pb-24 md:pt-32 md:pb-32"
    >
      <Container>
        <div className="reveal flex items-baseline justify-between gap-4">
          <Mono variant="eyebrow">
            {profile.role} · {profile.years} years
          </Mono>
          <Mono variant="eyebrow" className="hidden md:inline">
            Campina Grande · BR · UTC-3
          </Mono>
        </div>

        <div className="mt-12 md:mt-16 grid items-end gap-12 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <Text as="h1" variant="display" className="text-[var(--text)]">
              {profile.name}
            </Text>
            <Text
              as="p"
              variant="body-lg"
              className="mt-6 max-w-[44ch] text-[var(--text-secondary)]"
            >
              {positioning.role}. {positioning.domain}
            </Text>
            <Text
              as="p"
              variant="body"
              className="mt-4 max-w-[44ch] text-[var(--text-tertiary)]"
            >
              {positioning.proof}
            </Text>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
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
            </div>
            <div className="mt-4 border-t border-[var(--border)] pt-4">
              <Mono variant="eyebrow">{profile.status}</Mono>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 border-t border-[var(--border)] pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <Link
              href="/work"
              className="underline-grow text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)]"
            >
              Selected work, three case studies
            </Link>
            <Mono variant="eyebrow">
              Scroll · or jump to /work, /craft, /colophon
            </Mono>
          </div>
        </div>
      </Container>
    </section>
  );
}
