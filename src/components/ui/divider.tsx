import type { ElementType } from "react";

type DividerProps = {
  className?: string;
  as?: ElementType;
};

export function Divider({ className = "", as: Tag = "hr" }: DividerProps) {
  return <Tag className={`hairline ${className}`} />;
}
