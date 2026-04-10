import { useEffect, useRef } from "react";

import {
  ActiveItemCard,
  ChapterHeader,
  ChapterMeta,
  ChapterRail,
  SceneCard,
} from "@/components/portfolio/chapter-parts";
import { cx } from "@/components/portfolio/ui";
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
        <SceneCard section={section} compact />

        <article className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#321f45_0%,#261734_100%)] p-4 shadow-[0_20px_54px_rgba(0,0,0,0.18)] sm:p-5">
          <ChapterHeader
            locale={locale}
            section={section}
            activeIndex={activeIndex}
            headerRef={headerRef}
            compact
          />

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

          <ActiveItemCard
            locale={locale}
            activeIndex={activeIndex}
            activeItem={activeItem}
            compact
            featureRef={featureRef}
          />
        </article>
      </div>
    );
  }

  return (
    <div className="w-full min-w-0 transition-opacity duration-200">
      <div className="grid w-full min-w-0 gap-5 xl:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.88fr)]">
        <SceneCard section={section} sceneRef={sceneRef} />

        <article className="grid h-[320px] min-w-0 overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#321f45_0%,#261734_100%)] shadow-[0_24px_64px_rgba(0,0,0,0.22)] md:h-[420px] xl:grid-cols-[62px_minmax(0,1fr)] xl:h-[620px]">
          <ChapterRail
            section={section}
            activeIndex={activeIndex}
            onSelectItem={onSelectItem}
          />

          <div className="relative flex min-h-0 flex-col p-5 md:p-6 xl:p-7">
            <div
              className={cx(
                "pointer-events-none absolute right-4 top-2 text-[4.5rem] font-extrabold tracking-[-0.08em] text-white/[0.035] md:text-[6rem] xl:text-[7rem]",
              )}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </div>

            <ChapterHeader
              locale={locale}
              section={section}
              activeIndex={activeIndex}
              headerRef={headerRef}
            />
            <ChapterMeta locale={locale} section={section} activeItem={activeItem} />
            <ActiveItemCard
              locale={locale}
              activeIndex={activeIndex}
              activeItem={activeItem}
              featureRef={featureRef}
            />

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
