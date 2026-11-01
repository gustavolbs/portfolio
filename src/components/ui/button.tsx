import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 leading-none font-medium tracking-[-0.005em] transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] focus-visible:rounded-[var(--radius-sm)] disabled:opacity-50 disabled:pointer-events-none select-none";

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-[13px] min-h-[36px]",
  md: "px-4 py-2.5 text-[14px] min-h-[44px]",
  lg: "px-5 py-3 text-[15px] min-h-[48px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-transparent text-[var(--accent)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]",
  secondary:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)]",
  ghost:
    "bg-transparent text-[var(--text)] hover:bg-[var(--surface-hover)]",
};

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  external?: boolean;
};

export function LinkButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  external,
  ...rest
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};
  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...externalProps}
      {...rest}
    >
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
