import type { ReactNode } from "react";

type ClassValue = string | false | null | undefined;

export function cx(...values: ClassValue[]) {
  return values.filter(Boolean).join(" ");
}

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function SectionEyebrow({
  children,
  className,
}: SectionEyebrowProps) {
  return (
    <span
      className={cx(
        "inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72",
        className,
      )}
    >
      {children}
    </span>
  );
}

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cx(
        "rounded-[24px] border border-white/10 bg-white/[0.035]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PanelCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cx(
        "rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#18101f_0%,#100b16_100%)] shadow-[0_24px_72px_rgba(0,0,0,0.22)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
