import type { AnchorHTMLAttributes, ReactNode } from "react";
import NextLink from "next/link";

type Variant = "default" | "accent" | "subtle";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

const variants: Record<Variant, string> = {
  default: "text-[var(--text)] hover:text-[var(--text)]",
  accent: "text-[var(--accent)] hover:text-[var(--accent-hover)]",
  subtle: "text-[var(--text-secondary)] hover:text-[var(--text)]",
};

export function Link({
  children,
  href,
  variant = "default",
  external,
  className = "",
  ...rest
}: LinkProps) {
  const isExternal = external ?? /^https?:/.test(href);
  const externalProps = isExternal
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};
  const classNameCombined = `underline-grow ${variants[variant]} ${className}`;

  if (isExternal || href.startsWith("#")) {
    return (
      <a href={href} className={classNameCombined} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classNameCombined} {...rest}>
      {children}
    </NextLink>
  );
}
