"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./home.module.css";

/* A DevTools-style highlight on one word. The size in the tooltip is the
   word's real rendered box, so it changes when the viewport changes. It shows
   once on load (so people notice it), then on hover or focus. */
export function Inspector({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState("");
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize(`${Math.round(r.width)} × ${Math.round(r.height)}`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = window.setTimeout(() => setIntro(true), reduced ? 0 : 700);
    const hide = window.setTimeout(() => setIntro(false), reduced ? 2500 : 3600);
    return () => {
      ro.disconnect();
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  return (
    <span ref={ref} className={`${styles.insp} ${intro ? styles.inspOn : ""}`} tabIndex={0}>
      {children}
      <span className={styles.inspBox} aria-hidden="true" />
      <span className={styles.inspTip} aria-hidden="true">
        <b>span</b>.word<i>|</i>
        {size}
      </span>
    </span>
  );
}
