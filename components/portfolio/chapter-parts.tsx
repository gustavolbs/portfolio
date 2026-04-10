import type { RefObject } from "react";
import Image from "next/image";

import { SectionEyebrow, cx } from "@/components/portfolio/ui";
import type {
  ChapterItem,
  Locale,
  StorySection,
} from "@/lib/portfolio-content";
import { translate } from "@/lib/portfolio-content";

export function getSceneBackgroundClass(kind: StorySection["kind"]) {
  if (kind === "study") {
    return "bg-[radial-gradient(circle_at_18%_22%,rgba(95,230,224,0.28),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,177,93,0.14),transparent_18%),linear-gradient(180deg,#352367_0%,#241746_100%)]";
  }

  if (kind === "work") {
    return "bg-[radial-gradient(circle_at_72%_20%,rgba(255,106,169,0.28),transparent_22%),radial-gradient(circle_at_12%_78%,rgba(95,230,224,0.12),transparent_18%),linear-gradient(180deg,#341f62_0%,#251746_100%)]";
  }

  return "bg-[radial-gradient(circle_at_48%_16%,rgba(255,177,93,0.22),transparent_20%),radial-gradient(circle_at_88%_68%,rgba(255,106,169,0.12),transparent_18%),linear-gradient(180deg,#331f5d_0%,#241742_100%)]";
}

type SceneCardProps = {
  section: StorySection;
  compact?: boolean;
  sceneRef?: RefObject<HTMLDivElement | null>;
};

export function SceneCard({ section, compact = false, sceneRef }: SceneCardProps) {
  return (
    <div
      ref={sceneRef}
      className={cx(
        "relative min-w-0 overflow-hidden border border-white/10 bg-[#1c1226] shadow-[0_26px_70px_rgba(0,0,0,0.24)]",
        compact
          ? "h-[280px] rounded-[28px] sm:h-[340px]"
          : "h-[320px] rounded-[30px] md:h-[420px] xl:h-[620px]",
      )}
    >
      <div className={cx("absolute inset-0", getSceneBackgroundClass(section.kind))} />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,transparent_72%,rgba(255,255,255,0.04))]" />
      {!compact ? (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:38px_38px] opacity-25 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.38),transparent_88%)]" />
      ) : null}
      <div className="absolute left-3 top-3 z-10">
        <SectionEyebrow className="bg-white/10 text-white/80">
          {section.label}
        </SectionEyebrow>
      </div>
      <Image
        src={section.image}
        alt={section.label}
        fill
        sizes={compact ? "100vw" : "(max-width: 1280px) 100vw, 58vw"}
        className={cx(
          "object-contain object-center",
          compact ? "p-4" : "p-4 md:p-6",
        )}
        priority={section.id === "education"}
      />
    </div>
  );
}

type ChapterHeaderProps = {
  locale: Locale;
  section: StorySection;
  activeIndex: number;
  headerRef?: RefObject<HTMLDivElement | null>;
  compact?: boolean;
};

export function ChapterHeader({
  locale,
  section,
  activeIndex,
  headerRef,
  compact = false,
}: ChapterHeaderProps) {
  return (
    <div ref={headerRef}>
      <div className={cx("flex items-start justify-between gap-4", !compact && "xl:block")}>
        <SectionEyebrow className="bg-white/6">
          {translate(locale, section.eyebrow)}
        </SectionEyebrow>
        {compact ? (
          <span className="text-[3.25rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.05]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h2
        className={cx(
          "max-w-[14ch] font-medium leading-[0.92] tracking-[-0.06em] text-white",
          compact
            ? "mt-4 text-[2rem] sm:text-[2.3rem]"
            : "mt-4 text-[clamp(1.65rem,2.6vw,2.7rem)]",
        )}
      >
        {translate(locale, section.title)}
      </h2>
      <p
        className={cx(
          "mt-3 text-white/66",
          compact ? "text-sm leading-7" : "max-w-[52ch] text-[0.95rem] leading-[1.9]",
        )}
      >
        {translate(locale, section.body)}
      </p>
    </div>
  );
}

type ChapterMetaProps = {
  locale: Locale;
  section: StorySection;
  activeItem: ChapterItem;
};

export function ChapterMeta({
  locale,
  section,
  activeItem,
}: ChapterMetaProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      <span className="rounded-full border border-white/8 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/64">
        {String(section.items.length).padStart(2, "0")} items
      </span>
      <span className="rounded-full border border-white/8 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/64">
        {translate(locale, activeItem.meta)}
      </span>
    </div>
  );
}

type ActiveItemCardProps = {
  locale: Locale;
  activeIndex: number;
  activeItem: ChapterItem;
  compact?: boolean;
  featureRef?: RefObject<HTMLDivElement | null>;
};

export function ActiveItemCard({
  locale,
  activeIndex,
  activeItem,
  compact = false,
  featureRef,
}: ActiveItemCardProps) {
  return (
    <div
      ref={featureRef}
      className={cx(
        "rounded-[24px] border border-white/8 bg-[#20142b] shadow-[0_16px_40px_rgba(0,0,0,0.18)]",
        compact ? "mt-5 p-4" : "mt-5 p-5",
      )}
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/56">
        <span className="font-bold text-[#ffb15d]">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span>{translate(locale, activeItem.meta)}</span>
      </div>
      <h3
        className={cx(
          "mt-3 font-semibold leading-tight tracking-[-0.04em] text-white",
          compact ? "text-[1.45rem]" : "text-[clamp(1.2rem,1.7vw,1.75rem)]",
        )}
      >
        {translate(locale, activeItem.title)}
      </h3>
      <p className="mt-3 text-[0.94rem] leading-[1.85] text-white/76">
        {translate(locale, activeItem.body)}
      </p>
    </div>
  );
}

type ChapterRailProps = {
  section: StorySection;
  activeIndex: number;
  onSelectItem: (sectionId: string, index: number) => void;
};

export function ChapterRail({
  section,
  activeIndex,
  onSelectItem,
}: ChapterRailProps) {
  return (
    <div className="hidden border-r border-white/8 bg-[#201329] xl:flex xl:flex-col">
      {section.items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectItem(section.id, index)}
            className={cx(
              "relative flex h-[62px] items-center justify-center text-sm font-extrabold tracking-[0.14em] transition",
              isActive
                ? "bg-white/7 text-white"
                : "text-white/38 hover:bg-white/[0.04] hover:text-white/70",
            )}
          >
            {String(index + 1).padStart(2, "0")}
            {isActive ? (
              <span className="absolute inset-y-0 right-0 w-[3px] bg-[linear-gradient(180deg,#ffb15d_0%,#ff6aa9_100%)]" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
