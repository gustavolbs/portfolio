"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";

type Item = { id: string; label: string; hint: string };

const ITEMS: Item[] = [
  { id: "next", label: "Next.js", hint: "App router, RSC, ISR" },
  { id: "react", label: "React", hint: "19, server components, hooks" },
  { id: "ts", label: "TypeScript", hint: "strict, no any" },
  { id: "tailwind", label: "Tailwind", hint: "v4, tokens via @theme" },
  { id: "storybook", label: "Storybook", hint: "component docs" },
  { id: "expo", label: "Expo", hint: "React Native, OTA" },
  { id: "next-intl", label: "next-intl", hint: "i18n, hreflang" },
  { id: "algolia", label: "Algolia", hint: "search, localized indexes" },
  { id: "graphql", label: "GraphQL", hint: "typed schema, codegen" },
  { id: "swr", label: "SWR", hint: "client cache, revalidation" },
];

export function CraftCombobox() {
  const baseId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = ITEMS.filter((i) =>
    i.label.toLowerCase().includes(query.toLowerCase()),
  );

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[active];
      if (item) {
        setQuery(item.label);
        setOpen(false);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
        <span className="text-meta">craft · 03 · combobox</span>
        <span className="text-meta text-[var(--text-tertiary)]">aria · keyboard</span>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-[13px] text-[var(--text-tertiary)] mb-4 max-w-[60ch]">
          A combobox with full keyboard support. Type to filter, arrow keys to
          move, Enter to select, Escape to close. aria-expanded, aria-controls,
          aria-activedescendant wired.
        </p>

        <div className="relative max-w-md">
          <label
            htmlFor={`${baseId}-input`}
            className="text-meta block mb-2"
          >
            Stack
          </label>
          <input
            ref={inputRef}
            id={`${baseId}-input`}
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={`${baseId}-listbox`}
            aria-autocomplete="list"
            aria-activedescendant={
              open && filtered[active]
                ? `${baseId}-opt-${filtered[active].id}`
                : undefined
            }
            autoComplete="off"
            value={query}
            placeholder="Filter the stack"
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActive(0);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => window.setTimeout(() => setOpen(false), 120)}
            onKeyDown={onKey}
            className="w-full bg-[var(--bg)] border border-[var(--border-interactive)] rounded-[var(--radius-sm)] px-3 py-2 text-[14px] text-[var(--text)] placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          />

          {open && filtered.length > 0 && (
            <ul
              id={`${baseId}-listbox`}
              role="listbox"
              aria-label="Stack options"
              className="absolute z-10 top-full mt-1 left-0 right-0 max-h-60 overflow-auto bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-sm)] shadow-[var(--shadow-1)]"
            >
              {filtered.map((item, idx) => {
                const isActive = idx === active;
                return (
                  <li
                    key={item.id}
                    id={`${baseId}-opt-${item.id}`}
                    role="option"
                    aria-selected={isActive}
                    className={`px-3 py-2 cursor-pointer text-[14px] flex items-baseline justify-between gap-4 ${
                      isActive
                        ? "bg-[var(--surface-hover)] text-[var(--text)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                    onMouseEnter={() => setActive(idx)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setQuery(item.label);
                      setOpen(false);
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="text-[11px] text-[var(--text-tertiary)] font-mono">
                      {item.hint}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}

          {open && filtered.length === 0 && (
            <div className="absolute z-10 top-full mt-1 left-0 right-0 bg-[var(--bg)] border border-[var(--border)] rounded-[var(--radius-sm)] px-3 py-3 text-[13px] text-[var(--text-tertiary)]">
              No matches.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
