/* Theme is stored on the DOM (`<html data-theme>`), written before paint by the
   inline script in layout.tsx and mirrored into localStorage. The DOM is therefore
   an external store, and components read it with useSyncExternalStore rather than
   with state seeded during render: React renders the server snapshot while
   hydrating and re-renders from the real snapshot immediately after, which is the
   one pattern that reads browser-only state without risking a hydration mismatch. */

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

/* Deterministic and stable: it must not read anything the server cannot know. */
export function getServerSnapshot(): Theme {
  return "light";
}

function write(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
}

export function setTheme(theme: Theme) {
  write(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {}
  emit();
}

/* Re-assert the stored preference after mount. If React ever replaces the
   document element, the attribute the inline script set is lost with it, and
   the page would silently fall back to the light palette. */
export function ensureApplied() {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch {}
  const preferred: Theme =
    stored === "dark" || stored === "light"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  if (getSnapshot() !== preferred) {
    write(preferred);
    emit();
  }
}
