"use client";

import { useEffect, useRef, useState } from "react";

type Row = {
  id: number;
  slug: string;
  company: string;
  metric: string;
};

/* Locale-independent thousands separator.
   `Number.prototype.toLocaleString()` resolves the locale from the runtime:
   Node renders "5,000" on the server, a pt-BR browser renders "5.000", and
   the text mismatch aborts hydration (React error #418), which discards the
   client tree and with it every attribute the pre-paint theme script set.
   Never format numbers for display with an implicit locale. */
function formatCount(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ROWS: Row[] = Array.from({ length: 5000 }, (_, i) => {
  const companies = [
    "Live Nation",
    "Nivells",
    "Evermart",
    "Leaf agriculture",
    "Civicplus",
    "Linker",
    "VCCESS",
    "Warren Brasil",
  ];
  const metrics = [
    "p75 LCP",
    "p95 LCP",
    "CLS",
    "INP",
    "TTFB",
    "FCP",
    "JS payload",
    "CSS payload",
  ];
  const idx = i + 1;
  return {
    id: idx,
    slug: `pr-${String(idx).padStart(4, "0")}`,
    company: companies[i % companies.length],
    metric: `${metrics[i % metrics.length]} · ${
      ["97", "1.1s", "0.00", "112ms", "84ms", "0.9s", "82kb", "12kb"][i % 8]
    }`,
  };
});

const ROW_HEIGHT = 36;
const VIEWPORT_HEIGHT = 280;
const OVERSCAN = 6;

export function CraftWindowedList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setScrollTop(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const start = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN);
  const end = Math.min(
    ROWS.length,
    Math.ceil((scrollTop + VIEWPORT_HEIGHT) / ROW_HEIGHT) + OVERSCAN,
  );
  const visible = ROWS.slice(start, end);
  const total = ROWS.length * ROW_HEIGHT;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
        <span className="text-meta">craft · 02 · windowed list</span>
        <span className="text-meta text-[var(--text-secondary)] tabular">
          {formatCount(ROWS.length)} rows · {visible.length} rendered
        </span>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-[13px] text-[var(--text-secondary)] mb-4 max-w-[60ch]">
          Five thousand rows. Only the visible window is in the DOM. Scroll
          the inner box; the count above updates.
        </p>

        <div
          ref={containerRef}
          tabIndex={0}
          role="grid"
          aria-rowcount={ROWS.length}
          aria-label="Synthetic performance log"
          className="rounded-[var(--radius-sm)] overflow-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] bg-[var(--bg-subtle)]"
          style={{ height: VIEWPORT_HEIGHT }}
        >
          <div role="rowgroup" style={{ height: total, position: "relative" }}>
            {visible.map((row, i) => {
              const rowIndex = start + i;
              return (
                <div
                  key={row.id}
                  role="row"
                  aria-rowindex={rowIndex + 1}
                  className="grid grid-cols-[6rem_1fr_auto] items-center gap-4 px-4 border-b border-[var(--border)] last:border-b-0 text-[12px] tabular absolute inset-x-0"
                  style={{
                    height: ROW_HEIGHT,
                    top: rowIndex * ROW_HEIGHT,
                  }}
                >
                  <span role="gridcell" className="font-mono text-[var(--text-tertiary)]">
                    {row.slug}
                  </span>
                  <span role="gridcell" className="text-[var(--text-secondary)] truncate">
                    {row.company}
                  </span>
                  <span role="gridcell" className="font-mono text-[var(--text)]">
                    {row.metric}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
