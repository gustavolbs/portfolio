"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./home.module.css";

/* Copies the email on click or when the E key is pressed anywhere on the page
   (ignored while typing or with a modifier key). */
export function CopyEmail({ email, label, done }: { email: string; label: string; done: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }, [email]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "e" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement;
      if (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      copy();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [copy]);

  return (
    <button type="button" className={styles.copy} onClick={copy}>
      <span aria-live="polite">{copied ? done : label}</span>
      <kbd className={styles.kbd} aria-hidden="true">E</kbd>
    </button>
  );
}
