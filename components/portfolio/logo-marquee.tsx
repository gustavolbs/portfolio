"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { LogoItem } from "@/lib/portfolio-content";

type LogoMarqueeProps = {
  items: readonly LogoItem[];
};

export function LogoMarquee({ items }: LogoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    animationRef.current = track.animate(
      [
        { transform: "translate3d(0, 0, 0)" },
        { transform: "translate3d(-50%, 0, 0)" },
      ],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    );

    return () => {
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, []);

  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) {
      return;
    }

    if (isPaused) {
      animation.pause();
    } else {
      animation.play();
    }
  }, [isPaused]);

  const renderedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#21152d]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#21152d] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#21152d] to-transparent" />
      <div className="overflow-hidden">
        <div ref={trackRef} className="inline-flex min-w-max items-center">
          {renderedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="group relative inline-flex min-h-[132px] w-[220px] shrink-0 items-center justify-center px-7 py-8"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <Image
                src={item.src}
                alt={index < items.length ? item.name : ""}
                width={180}
                height={56}
                className="h-auto max-h-12 w-auto max-w-full object-contain brightness-0 invert"
                aria-hidden={index >= items.length}
              />
              <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-full border border-white/10 bg-[#0f0917]/95 px-3 py-2 text-[11px] font-medium tracking-[0.1em] text-white opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
