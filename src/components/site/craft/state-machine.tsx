"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

type Segment = "problem" | "decisions" | "outcome";

const segments: { id: Segment; label: string; body: string }[] = [
  {
    id: "problem",
    label: "Problem",
    body: "The brief was: ship the slowest page in the app under 400ms without changing the API. Three of the slowest screens were 3-5s. The constraint was not the framework; the constraint was that any rewrite had to land without freezing the team for a quarter.",
  },
  {
    id: "decisions",
    label: "Decisions",
    body: "Migrated to Next.js with static site generation for the public pages and SWR for the authenticated ones. Replaced the payment iframe with a typed payment abstraction so the next provider swap would not require a code change. CI/CD in front of every deploy, with typecheck, lint, and a Lighthouse budget that fails the build.",
  },
  {
    id: "outcome",
    label: "Outcome",
    body: "Slowest pages dropped from 3-5s to roughly 300ms. Daily deployments became the default. The codebase became something the team could keep moving.",
  },
];

export function CraftStateMachine() {
  const [active, setActive] = useState<Segment>("problem");
  const [lastKey, setLastKey] = useState<string>("initial");
  const baseId = useId();
  const buttonRefs = useRef<Record<Segment, HTMLButtonElement | null>>({
    problem: null,
    decisions: null,
    outcome: null,
  });

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const order: Segment[] = ["problem", "decisions", "outcome"];
    const idx = order.indexOf(active);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setLastKey("ArrowRight");
      setActive(order[(idx + 1) % order.length]);
      buttonRefs.current[order[(idx + 1) % order.length]]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setLastKey("ArrowLeft");
      setActive(order[(idx - 1 + order.length) % order.length]);
      buttonRefs.current[order[(idx - 1 + order.length) % order.length]]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setLastKey("Home");
      setActive("problem");
      buttonRefs.current.problem?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      setLastKey("End");
      setActive("outcome");
      buttonRefs.current.outcome?.focus();
    }
  };

  const current = segments.find((s) => s.id === active)!;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
        <span className="text-meta">craft · 01 · tablist with roving tabindex</span>
        <span className="text-meta text-[var(--text-tertiary)] tabular">
          active · {active} · last key · {lastKey}
        </span>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-[13px] text-[var(--text-secondary)] mb-4 max-w-[60ch]">
          One tab stop owns the tablist. Arrow keys move between tabs,
          Home and End jump to the ends. The status row above shows the
          active tab and the last key that moved it.
        </p>

        <div
          role="tablist"
          aria-label="Checkout case study sections"
          aria-orientation="horizontal"
          onKeyDown={onKey}
          className="flex items-center gap-1 border-b border-[var(--border)]"
        >
          {segments.map((s, i) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  buttonRefs.current[s.id] = el;
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${s.id}`}
                aria-selected={isActive}
                aria-controls={`${baseId}-panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  setLastKey("click");
                  setActive(s.id);
                }}
                className={`relative px-4 py-3 text-[13px] font-medium tracking-[-0.005em] transition-colors duration-[var(--dur-1)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                }`}
              >
                <span className="font-mono text-[10px] tabular text-[var(--text-tertiary)] mr-2">
                  0{i + 1}
                </span>
                {s.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-px h-px bg-[var(--accent)]"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel-${current.id}`}
          aria-labelledby={`${baseId}-tab-${current.id}`}
          className="pt-6"
        >
          <p className="text-[15px] leading-[1.7] text-[var(--text-secondary)] max-w-[60ch]">
            {current.body}
          </p>
        </div>
      </div>
    </div>
  );
}
