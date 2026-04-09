import { PanelCard, cx } from "@/components/portfolio/ui";

type RailItem = {
  id: string;
  label: string;
  description: string;
};

type PageRailProps = {
  items: readonly RailItem[];
  activeId: string;
  onSelect: (id: string) => void;
};

export function PageRail({ items, activeId, onSelect }: PageRailProps) {
  return (
    <aside className="fixed right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
      <PanelCard className="rounded-[24px] bg-[#17101f]/88 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm">
        <div className="mb-3 px-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/36">
          Navigate
        </div>
        <div className="grid gap-2">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item.id)}
                className={cx(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/42 hover:bg-white/[0.05] hover:text-white/74",
                )}
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
      </PanelCard>
    </aside>
  );
}
