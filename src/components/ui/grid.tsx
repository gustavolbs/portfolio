import type { HTMLAttributes, ReactNode } from "react";

type GridProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 4 | 6 | 8 | 12 | 16;
  className?: string;
};

const colsClass: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  12: "grid-cols-12",
};

const gapClass: Record<NonNullable<GridProps["gap"]>, string> = {
  4: "gap-4",
  6: "gap-6",
  8: "gap-8",
  12: "gap-12",
  16: "gap-16",
};

export function Grid({
  children,
  cols = 1,
  gap = 6,
  className = "",
  ...rest
}: GridProps) {
  return (
    <div className={`grid ${colsClass[cols]} ${gapClass[gap]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
