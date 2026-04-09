"use client";

import { ChapterSection } from "@/components/portfolio/chapter-section";
import type { Locale, StorySection } from "@/lib/portfolio-content";

type AnimatedChapterStageProps = {
  locale: Locale;
  section: StorySection;
  activeIndex: number;
  onSelectItem: (sectionId: string, index: number) => void;
};

export function AnimatedChapterStage({
  locale,
  section,
  activeIndex,
  onSelectItem,
}: AnimatedChapterStageProps) {
  return (
    <div className="w-full min-w-0">
      <ChapterSection
        locale={locale}
        section={section}
        activeIndex={activeIndex}
        onSelectItem={onSelectItem}
      />
    </div>
  );
}
