import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  interactive?: boolean;
  className?: string;
};

export function Card({
  children,
  interactive,
  className = "",
  ...rest
}: CardProps) {
  const interactiveClass = interactive
    ? "transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-strong)] focus-within:bg-[var(--surface-hover)] focus-within:border-[var(--border-strong)]"
    : "";
  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] p-6 md:p-8 ${interactiveClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
