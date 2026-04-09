"use client";

import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";

import { AnimatedChapterStage } from "@/components/portfolio/animated-chapter-stage";
import { ChapterSection } from "@/components/portfolio/chapter-section";
import { FooterCta } from "@/components/portfolio/footer-cta";
import { HeroSection } from "@/components/portfolio/hero-section";
import { LanguageSwitcher } from "@/components/portfolio/language-switcher";
import { LogoMarquee } from "@/components/portfolio/logo-marquee";
import { StackSection } from "@/components/portfolio/stack-section";
import {
  clientLogos,
  intro,
  logoSection,
  railCopy,
  sections,
  translate,
  type Locale,
} from "@/lib/portfolio-content";

function getActiveItemIndex(
  element: HTMLElement | null,
  itemCount: number,
  viewportHeight: number,
) {
  if (!element || itemCount <= 1 || viewportHeight <= 0) {
    return 0;
  }

  const rect = element.getBoundingClientRect();
  const progressLine = viewportHeight * 0.5;
  const available = Math.max(rect.height - viewportHeight, 1);
  const raw = (progressLine - rect.top) / available;
  const clamped = Math.max(0, Math.min(raw, 0.9999));
  return Math.min(itemCount - 1, Math.floor(clamped * itemCount));
}

const smoothEasing = (value: number) => 1 - Math.pow(1 - value, 4);

export function PortfolioApp() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [activeItems, setActiveItems] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [activeRailItem, setActiveRailItem] = useState("intro");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const frameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const lenisRafRef = useRef<number | null>(null);
  const pageSectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.15,
      easing: smoothEasing,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      infinite: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    const onFrame = (time: number) => {
      lenis.raf(time);
      lenisRafRef.current = window.requestAnimationFrame(onFrame);
    };

    lenisRafRef.current = window.requestAnimationFrame(onFrame);

    return () => {
      if (lenisRafRef.current !== null) {
        window.cancelAnimationFrame(lenisRafRef.current);
      }

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const updateMetrics = () => {
      const nextActiveItems: Record<string, number> = {};
      let nextActiveSection = sections[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const element = sectionRefs.current[section.id];
        nextActiveItems[section.id] = getActiveItemIndex(
          element,
          section.items.length,
          window.innerHeight,
        );

        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = window.innerHeight * 0.5;
          const distance = Math.abs(rect.top - threshold);

          if (
            rect.top <= threshold &&
            rect.bottom >= threshold &&
            distance < closestDistance
          ) {
            closestDistance = distance;
            nextActiveSection = section.id;
          }
        }
      });

      setActiveItems(nextActiveItems);
      setActiveSection(nextActiveSection);

      const chapterIsActive = sections.some((section) => {
        const element = sectionRefs.current[section.id];
        if (!element) {
          return false;
        }

        const rect = element.getBoundingClientRect();
        const threshold = window.innerHeight * 0.5;
        return rect.top <= threshold && rect.bottom >= threshold;
      });

      if (chapterIsActive) {
        setActiveRailItem(nextActiveSection);
        return;
      }

      const railCandidates = ["intro", "logos", "stack", "footer"];

      let nextRailItem = "intro";
      let smallestDistance = Number.POSITIVE_INFINITY;

      railCandidates.forEach((key) => {
        const element =
          pageSectionRefs.current[key] ?? sectionRefs.current[key] ?? null;
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - window.innerHeight * 0.5);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nextRailItem = key;
        }
      });

      setActiveRailItem(nextRailItem);
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateMetrics();
      });
    };

    updateMetrics();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleSelectItem = (sectionId: string, index: number) => {
    const element = sectionRefs.current[sectionId];
    const section = sections.find((item) => item.id === sectionId);

    if (!section) {
      return;
    }

    if (!element) {
      setActiveItems((previous) => ({
        ...previous,
        [sectionId]: index,
      }));
      setActiveSection(sectionId);
      return;
    }

    const viewportHeight = window.innerHeight;
    const progressStart = viewportHeight * 0.5;
    const available = Math.max(element.offsetHeight - viewportHeight, 1);
    const bucket = Math.min(
      0.999,
      (index + 0.1) / Math.max(section.items.length, 1),
    );
    const targetRectTop = progressStart - available * bucket;
    const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
    const targetScroll = Math.max(0, absoluteTop - targetRectTop);

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScroll, {
        duration: 1.05,
        easing: smoothEasing,
      });
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const currentSection =
    sections.find((section) => section.id === activeSection) ?? sections[0];

  const railItems = [
    {
      id: "intro",
      label: translate(locale, railCopy.introLabel),
      description: translate(locale, railCopy.introDescription),
    },
    {
      id: "logos",
      label: translate(locale, railCopy.logosLabel),
      description: translate(locale, railCopy.logosDescription),
    },
    {
      id: "stack",
      label: translate(locale, railCopy.stackLabel),
      description: translate(locale, railCopy.stackDescription),
    },
    ...sections.map((section, index) => ({
      id: section.id,
      label: String(index + 1).padStart(2, "0"),
      description: translate(locale, section.eyebrow),
    })),
    {
      id: "footer",
      label: translate(locale, railCopy.footerLabel),
      description: translate(locale, railCopy.footerDescription),
    },
  ];

  const handleSelectRailItem = (id: string) => {
    if (id === "education" || id === "experience" || id === "creation") {
      handleSelectItem(id, 0);
      return;
    }

    const element = pageSectionRefs.current[id];
    if (!element) {
      return;
    }

    const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
    const targetScroll = Math.max(0, absoluteTop - 32);

    if (lenisRef.current) {
      lenisRef.current.scrollTo(targetScroll, {
        duration: 1.05,
        easing: smoothEasing,
      });
      return;
    }

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <main className="relative mx-auto w-[min(1380px,calc(100%-20px))] px-0 py-3 sm:w-[min(1380px,calc(100%-28px))] sm:py-4 md:py-5">
      <div className="pointer-events-none fixed left-[-10rem] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,106,169,0.42),transparent_66%)] blur-[110px]" />
      <div className="pointer-events-none fixed right-[-10rem] top-[18rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(95,230,224,0.28),transparent_66%)] blur-[110px]" />

      <header className="relative z-10 rounded-[22px] border border-white/10 bg-[#ffffff05] px-4 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] sm:px-5 md:rounded-[26px] md:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[1.02rem] font-bold tracking-[0.08em] text-white sm:text-[1.06rem]">
              Gustavo Bispo
            </p>
            <p className="mt-1 max-w-[26rem] text-sm leading-6 text-white/58">
              {translate(locale, intro.status)}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between lg:justify-end">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/gustavolbs"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/68 transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gbispo-santos/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/68 transition hover:text-white"
              >
                LinkedIn
              </a>
            </div>
            <div className="w-full sm:w-auto">
              <LanguageSwitcher locale={locale} onChange={setLocale} />
            </div>
          </div>
        </div>
      </header>

      <aside className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
        <div className="rounded-[24px] border border-white/10 bg-[#17101f]/88 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/36">
            Navigate
          </div>
          <div className="grid gap-2">
            {railItems.map((item) => {
              const isActive = item.id === activeRailItem;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectRailItem(item.id)}
                  className={[
                    "flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/42 hover:bg-white/[0.05] hover:text-white/74",
                  ].join(" ")}
                >
                  <span className="min-w-[1.6rem] text-xs font-extrabold tracking-[0.18em] text-[#ffb15d]">
                    {item.label}
                  </span>
                  <span className="max-w-[9rem] text-[11px] font-semibold uppercase tracking-[0.18em] text-white/58">
                    {item.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <div
        ref={(element) => {
          pageSectionRefs.current.intro = element;
        }}
        className="relative z-10 mt-4 sm:mt-5"
      >
        <HeroSection locale={locale} />
      </div>

      <section
        id="chapters"
        ref={(element) => {
          pageSectionRefs.current.logos = element;
        }}
        className="relative z-10 mt-5 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#241632_0%,#170f22_100%)] px-5 py-6 shadow-[0_26px_80px_rgba(0,0,0,0.24)] sm:mt-6 sm:px-6 sm:py-7 md:rounded-[34px] md:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
              {translate(locale, logoSection.eyebrow)}
            </span>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(1.9rem,3.4vw,3.2rem)] font-medium leading-[0.94] tracking-[-0.06em] text-white">
              {translate(locale, logoSection.title)}
            </h2>
          </div>

          <p className="max-w-[38ch] text-sm leading-7 text-white/66 md:text-right">
            {translate(locale, logoSection.body)}
          </p>
        </div>

        <div className="mt-6">
          <LogoMarquee items={clientLogos} locale={locale} />
        </div>
      </section>

      <div
        ref={(element) => {
          pageSectionRefs.current.stack = element;
        }}
        className="relative z-10 mt-6"
      >
        <StackSection locale={locale} />
      </div>

      <section className="relative z-10 mt-6 sm:mt-7">
        <div className="hidden min-h-screen items-center xl:sticky xl:top-0 xl:flex">
          <AnimatedChapterStage
            locale={locale}
            section={currentSection}
            activeIndex={activeItems[currentSection.id] ?? 0}
            onSelectItem={handleSelectItem}
          />
        </div>

        <div className="space-y-5 xl:hidden">
          {sections.map((section) => (
            <ChapterSection
              key={section.id}
              locale={locale}
              section={section}
              activeIndex={activeItems[section.id] ?? 0}
              onSelectItem={handleSelectItem}
              mobile
            />
          ))}
        </div>

        <div aria-hidden="true" className="pointer-events-none hidden xl:block">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(element) => {
                sectionRefs.current[section.id] = element;
                pageSectionRefs.current[section.id] = element;
              }}
              className="relative"
              style={{
                minHeight: `${100 + Math.max(section.items.length - 1, 0) * 38}vh`,
              }}
            />
          ))}
        </div>
      </section>

      <div
        ref={(element) => {
          pageSectionRefs.current.footer = element;
        }}
        className="relative z-10 mt-8 sm:mt-10"
      >
        <FooterCta locale={locale} />
      </div>
    </main>
  );
}
