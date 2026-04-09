import { useEffect, useRef } from "react";
import Image from "next/image";

import type { Locale, StorySection } from "@/lib/portfolio-content";
import { railCopy, translate } from "@/lib/portfolio-content";

type ChapterSectionProps = {
  locale: Locale;
  section: StorySection;
  activeIndex: number;
  onSelectItem: (sectionId: string, index: number) => void;
  mobile?: boolean;
};

export function ChapterSection({
  locale,
  section,
  activeIndex,
  onSelectItem,
  mobile = false,
}: ChapterSectionProps) {
  const activeItem = section.items[activeIndex] ?? section.items[0];
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const featureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mobile) {
      return;
    }

    const animations = [
      headerRef.current?.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 420,
          easing: "ease-out",
        },
      ),
      featureRef.current?.animate(
        [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ],
        {
          duration: 480,
          easing: "ease-out",
        },
      ),
    ];

    return () => {
      animations.forEach((animation) => animation?.cancel());
    };
  }, [activeIndex, mobile, section.id]);

  useEffect(() => {
    if (mobile) {
      return;
    }

    const animation = sceneRef.current?.animate(
      [
        {
          opacity: 0.86,
          transform: "scale(0.992)",
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          transform: "scale(1)",
          filter: "blur(0px)",
        },
      ],
      {
        duration: 620,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    return () => {
      animation?.cancel();
    };
  }, [mobile, section.id]);

  if (mobile) {
    return (
      <div className="space-y-4">
        <div
          className={[
            "relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_22px_54px_rgba(0,0,0,0.2)]",
            "h-[280px] sm:h-[340px]",
          ].join(" ")}
        >
          <div
            className={[
              "absolute inset-0",
              section.kind === "study" &&
                "bg-[radial-gradient(circle_at_18%_22%,rgba(95,230,224,0.28),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,177,93,0.14),transparent_18%),linear-gradient(180deg,#352367_0%,#241746_100%)]",
              section.kind === "work" &&
                "bg-[radial-gradient(circle_at_72%_20%,rgba(255,106,169,0.28),transparent_22%),radial-gradient(circle_at_12%_78%,rgba(95,230,224,0.12),transparent_18%),linear-gradient(180deg,#341f62_0%,#251746_100%)]",
              section.kind === "create" &&
                "bg-[radial-gradient(circle_at_48%_16%,rgba(255,177,93,0.22),transparent_20%),radial-gradient(circle_at_88%_68%,rgba(255,106,169,0.12),transparent_18%),linear-gradient(180deg,#331f5d_0%,#241742_100%)]",
            ].join(" ")}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,transparent_72%,rgba(255,255,255,0.04))]" />
          <div className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
            {section.label}
          </div>
          <Image
            src={section.image}
            alt={section.label}
            fill
            sizes="100vw"
            className="object-contain object-center p-4"
            priority={section.id === "education"}
          />
        </div>

        <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#321f45_0%,#261734_100%)] p-4 shadow-[0_20px_54px_rgba(0,0,0,0.18)] sm:p-5">
          <div ref={headerRef}>
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                {translate(locale, section.eyebrow)}
              </span>
              <span className="text-[3.25rem] font-extrabold leading-none tracking-[-0.08em] text-white/[0.05]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="mt-4 max-w-[12ch] text-[2rem] font-medium leading-[0.94] tracking-[-0.06em] text-white sm:text-[2.3rem]">
              {translate(locale, section.title)}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/66">
              {translate(locale, section.body)}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {section.items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(section.id, index)}
                  className={[
                    "inline-flex min-h-10 items-center justify-center rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition",
                    isActive
                      ? "border-[#ffb15d]/40 bg-[#ffb15d]/12 text-[#ffd9b7]"
                      : "border-white/8 bg-white/5 text-white/58",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              );
            })}
          </div>

          <div
            ref={featureRef}
            className="mt-5 rounded-[22px] border border-white/8 bg-[#20142b] p-4 shadow-[0_14px_34px_rgba(0,0,0,0.16)]"
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-white/56">
              <span className="font-bold text-[#ffb15d]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span>{translate(locale, activeItem.meta)}</span>
            </div>
            <h3 className="mt-3 text-[1.45rem] font-semibold leading-tight tracking-[-0.04em] text-white">
              {translate(locale, activeItem.title)}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/76">
              {translate(locale, activeItem.body)}
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 transition-opacity duration-200">
      <div className="grid w-full min-w-0 gap-5 xl:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.88fr)]">
        <div
          ref={sceneRef}
          className={[
            "relative min-w-0 overflow-hidden rounded-[30px] border border-white/10 bg-[#1c1226] shadow-[0_26px_70px_rgba(0,0,0,0.24)]",
            "h-[320px] md:h-[420px] xl:h-[560px]",
          ].join(" ")}
        >
          <div
            className={[
              "absolute inset-0",
              section.kind === "study" &&
                "bg-[radial-gradient(circle_at_18%_22%,rgba(95,230,224,0.28),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(255,177,93,0.14),transparent_18%),linear-gradient(180deg,#352367_0%,#241746_100%)]",
              section.kind === "work" &&
                "bg-[radial-gradient(circle_at_72%_20%,rgba(255,106,169,0.28),transparent_22%),radial-gradient(circle_at_12%_78%,rgba(95,230,224,0.12),transparent_18%),linear-gradient(180deg,#341f62_0%,#251746_100%)]",
              section.kind === "create" &&
                "bg-[radial-gradient(circle_at_48%_16%,rgba(255,177,93,0.22),transparent_20%),radial-gradient(circle_at_88%_68%,rgba(255,106,169,0.12),transparent_18%),linear-gradient(180deg,#331f5d_0%,#241742_100%)]",
            ].join(" ")}
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.16),transparent_24%),linear-gradient(180deg,transparent_72%,rgba(255,255,255,0.04))]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:38px_38px] opacity-25 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.38),transparent_88%)]" />
          <div className="absolute left-3 top-3 z-10 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
            {section.label}
          </div>
          <Image
            src={section.image}
            alt={section.label}
            fill
            sizes="(max-width: 1280px) 100vw, 58vw"
            className="object-contain object-center p-4 md:p-6"
            priority={section.id === "education"}
          />
        </div>

        <article className="grid h-[320px] min-w-0 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#321f45_0%,#261734_100%)] shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:h-[420px] xl:grid-cols-[62px_minmax(0,1fr)] xl:h-[560px]">
          <div className="hidden border-r border-white/8 bg-[#201329] xl:flex xl:flex-col">
            {section.items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(section.id, index)}
                  className={[
                    "relative flex h-[62px] items-center justify-center text-sm font-extrabold tracking-[0.14em] transition",
                    isActive
                      ? "bg-white/7 text-white"
                      : "text-white/38 hover:bg-white/[0.04] hover:text-white/70",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                  {isActive ? (
                    <span className="absolute inset-y-0 right-0 w-[3px] bg-[linear-gradient(180deg,#ffb15d_0%,#ff6aa9_100%)]" />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="relative flex min-h-0 flex-col p-5 md:p-6">
            <div className="pointer-events-none absolute right-4 top-2 text-[4.5rem] font-extrabold tracking-[-0.08em] text-white/[0.035] md:text-[6rem] xl:text-[7rem]">
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            <div ref={headerRef}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/72">
                {translate(locale, section.eyebrow)}
              </span>
              <h2 className="mt-4 max-w-[14ch] text-[clamp(1.75rem,3vw,3rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
                {translate(locale, section.title)}
              </h2>
              <p className="mt-3 max-w-[50ch] text-sm leading-7 text-white/66">
                {translate(locale, section.body)}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/8 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/64">
                {String(section.items.length).padStart(2, "0")} items
              </span>
              <span className="rounded-full border border-white/8 bg-white/6 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/64">
                {translate(locale, activeItem.meta)}
              </span>
            </div>

            <div
              ref={featureRef}
              className="mt-5 rounded-[24px] border border-white/8 bg-[#20142b] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/56">
                <span className="font-bold text-[#ffb15d]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span>{translate(locale, activeItem.meta)}</span>
              </div>
              <h3
                key={`${activeItem.id}-title`}
                className="mt-3 text-[clamp(1.3rem,2vw,2rem)] font-semibold leading-tight tracking-[-0.04em] text-white"
              >
                {translate(locale, activeItem.title)}
              </h3>
              <p
                key={`${activeItem.id}-body`}
                className="mt-3 text-sm leading-7 text-white/76"
              >
                {translate(locale, activeItem.body)}
              </p>
            </div>

            <div className="mt-auto pt-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/38">
                {translate(locale, railCopy.chapterHint)}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
