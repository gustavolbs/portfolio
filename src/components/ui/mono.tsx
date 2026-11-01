import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "span" | "div" | "p";
  variant?: "meta" | "eyebrow";
  className?: string;
};

export function Mono({ children, as: Tag = "span", variant = "meta", className = "" }: Props) {
  const variantClass =
    variant === "eyebrow" ? "text-eyebrow" : "text-meta";
  return <Tag className={`${variantClass} ${className}`}>{children}</Tag>;
}
