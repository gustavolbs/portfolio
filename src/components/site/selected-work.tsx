import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";
import { Grid } from "@/components/ui/grid";
import { Text } from "@/components/ui/text";
import { Mono } from "@/components/ui/mono";
import { Tag } from "@/components/ui/tag";
import { caseStudies } from "@/content/validated";

export function SelectedWork() {
  return (
    <Section id="work">
      <Container>
        <Stack direction="row" justify="between" align="baseline" className="flex-wrap gap-4">
          <Mono variant="eyebrow">01 · Selected work</Mono>
        </Stack>

        <Text as="h2" variant="h1" className="mt-6 max-w-[22ch] text-[var(--text)]">
          Three rewrites that changed how the teams around them worked.
        </Text>

        <Grid cols={1} gap={8} className="mt-12 md:mt-16">
          {caseStudies.map((c) => (
            <article
              key={c.slug}
              className="reveal border-t border-[var(--border)] pt-6"
            >
              <Grid cols={1} gap={6} className="md:grid-cols-12 md:gap-10">
                <Stack gap={3} className="md:col-span-3">
                  <Mono variant="eyebrow">{c.number} · {c.company}</Mono>
                  <Mono variant="eyebrow" className="text-[var(--text-tertiary)]">
                    {c.period}
                  </Mono>
                </Stack>

                <Stack gap={4} className="md:col-span-9">
                  <Link
                    href={`/work/${c.slug}`}
                    className="group inline-flex items-baseline gap-3 text-[var(--text)] hover:text-[var(--text)]"
                  >
                    <Text as="h3" variant="h2" className="text-[var(--text)]">
                      {c.title}
                    </Text>
                    <span
                      aria-hidden="true"
                      className="font-mono text-[16px] text-[var(--text-tertiary)] transition-transform duration-[var(--dur-1)] ease-[var(--ease-out)] group-hover:translate-x-1 group-hover:text-[var(--text)]"
                    >
                      →
                    </span>
                  </Link>

                  <Text
                    as="p"
                    variant="body"
                    className="max-w-[60ch] text-[var(--text-secondary)]"
                  >
                    {c.problem}
                  </Text>

                  <Text
                    as="p"
                    variant="body"
                    className="max-w-[60ch] text-[var(--text)]"
                  >
                    {c.outcome}
                  </Text>

                  <Stack direction="row" gap={2} wrap className="mt-2">
                    {c.stack.slice(0, 6).map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </Stack>

                  <Stack direction="row" gap={6} className="mt-4 flex-wrap">
                    <Meta label="Role" value={c.role} />
                    <Meta label="Period" value={c.period} />
                  </Stack>
                </Stack>
              </Grid>
            </article>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <Stack gap={1}>
      <Mono variant="eyebrow">{label}</Mono>
      <span className="text-[13px] text-[var(--text-secondary)]">{value}</span>
    </Stack>
  );
}
