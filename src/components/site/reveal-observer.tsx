"use client";

import { useEffect } from "react";

/* On mount:
   1. If reduced motion is preferred or IntersectionObserver is missing,
      mark every .reveal visible immediately.
   2. Otherwise observe. The observer fires once per element on first
      intersection and then unobserves.
   3. As a safety net, after 1500ms any .reveal still not visible gets
      marked visible. This catches the rare case where an element is
      scrolled past faster than the observer can register a transition,
      or where a CSS bug keeps opacity: 0 from animating away. */
export function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    targets.forEach((n) => observer.observe(n));

    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.is-visible)")
        .forEach((el) => el.classList.add("is-visible"));
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
