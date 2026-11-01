import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "dt";
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "body-lg"
    | "body"
    | "small"
    | "meta"
    | "eyebrow";
  className?: string;
  id?: string;
};

export function Text({
  children,
  as: Tag = "p",
  variant = "body",
  className = "",
  id,
}: Props) {
  const variantClass = {
    display: "text-display text-balance",
    h1: "text-h1 text-balance",
    h2: "text-h2 text-balance",
    h3: "text-h3 text-balance",
    "body-lg": "text-body-lg",
    body: "text-body",
    small: "text-small",
    meta: "text-meta",
    eyebrow: "text-eyebrow",
  }[variant];

  return (
    <Tag id={id} className={`${variantClass} ${className}`}>
      {children}
    </Tag>
  );
}
