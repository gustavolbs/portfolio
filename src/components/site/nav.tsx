import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Stack } from "@/components/ui/stack";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/content/validated";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Craft", href: "/craft" },
  { label: "Notes", href: "/notes" },
  { label: "About", href: "/about" },
  { label: "Colophon", href: "/colophon" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]">
      <Container className="flex items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          aria-label="Home"
          className="inline-flex items-center gap-2 text-[var(--text)] hover:text-[var(--text)]"
        >
          <span className="text-[14px] font-medium tracking-[-0.005em]">
            {profile.shortName}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-grow text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Stack direction="row" gap={4} align="center" className="hidden md:flex">
          <ThemeToggle />
          <Link
            href={profile.mailto}
            className="underline-grow text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)]"
          >
            Email
          </Link>
        </Stack>

        <Link
          href={profile.mailto}
          className="text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text)] md:hidden"
        >
          Email
        </Link>
      </Container>
    </header>
  );
}
