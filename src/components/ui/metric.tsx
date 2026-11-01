import type { ReactNode } from "react";

type MetricProps = {
  value: ReactNode;
  label: string;
  hint?: string;
  className?: string;
};

export function Metric({ value, label, hint, className = "" }: MetricProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-tertiary)]">
        {label}
      </span>
      <span className="font-sans text-[var(--h3)] font-medium tabular tracking-[-0.014em] text-[var(--text)]">
        {value}
      </span>
      {hint && (
        <span className="text-[13px] text-[var(--text-secondary)]">
          {hint}
        </span>
      )}
    </div>
  );
}
