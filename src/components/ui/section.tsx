import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
  ariaLabel?: string;
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
  ariaLabel,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </Tag>
  );
}
