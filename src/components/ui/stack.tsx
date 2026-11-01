import type { HTMLAttributes, ReactNode } from "react";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: 1 | 2 | 3 | 4 | 6 | 8 | 12 | 16;
  direction?: "row" | "column";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  wrap?: boolean;
};

const gapClass: Record<NonNullable<StackProps["gap"]>, string> = {
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  12: "gap-12",
  16: "gap-16",
};

export function Stack({
  children,
  gap = 4,
  direction = "column",
  align,
  justify,
  wrap,
  className = "",
  ...rest
}: StackProps) {
  const dirClass = direction === "row" ? "flex-row" : "flex-col";
  const alignClass = align ? `items-${align}` : "";
  const justifyClass = justify ? `justify-${justify}` : "";
  const wrapClass = wrap ? "flex-wrap" : "";
  return (
    <div
      className={`flex ${dirClass} ${gapClass[gap]} ${alignClass} ${justifyClass} ${wrapClass} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
