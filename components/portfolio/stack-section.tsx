import type { Locale } from "@/lib/portfolio-content";
import { stackGroups, stackSection, translate } from "@/lib/portfolio-content";

type StackSectionProps = {
  locale: Locale;
};

const stackStyles: Record<
  string,
  {
    code: string;
    cardClass: string;
    accentClass: string;
    chipClass: string;
    spanClass?: string;
  }
> = {
  frontend: {
    code: "FE",
    cardClass:
      "xl:col-span-2 xl:row-span-2 bg-[linear-gradient(145deg,#2d1761_0%,#17112f_48%,#0f1020_100%)]",
    accentClass: "from-[#8c72ff] via-[#5ed8ff] to-[#ff9eb7]",
    chipClass:
      "border-white/10 bg-white/8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
  },
  backend: {
    code: "BE",
    cardClass: "bg-[linear-gradient(145deg,#1f274f_0%,#11172d_100%)]",
    accentClass: "from-[#6ca7ff] to-[#87f0ff]",
    chipClass: "border-[#9cc7ff]/18 bg-[#9cc7ff]/10 text-[#edf5ff]",
  },
  devops: {
    code: "OPS",
    cardClass: "bg-[linear-gradient(145deg,#233c2f_0%,#121d17_100%)]",
    accentClass: "from-[#7ee787] to-[#d7ff87]",
    chipClass: "border-[#9eed9f]/18 bg-[#9eed9f]/10 text-[#effff1]",
  },
  systems: {
    code: "SYS",
    cardClass: "bg-[linear-gradient(145deg,#4d2718_0%,#24140f_100%)]",
    accentClass: "from-[#ff9c5f] to-[#ffd166]",
    chipClass: "border-[#ffc58d]/18 bg-[#ffc58d]/10 text-[#fff3e7]",
  },
  product: {
    code: "PX",
    cardClass: "bg-[linear-gradient(145deg,#5a1f46_0%,#261121_56%,#16101d_100%)]",
    accentClass: "from-[#ff86c8] via-[#ffb36b] to-[#ffe08f]",
    chipClass: "border-[#ffb2da]/18 bg-[#ffb2da]/10 text-[#fff0f8]",
  },
};

export function StackSection({ locale }: StackSectionProps) {
  return (
    <section className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,#1d1128_0%,#120d1a_100%)] px-5 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] md:px-7 md:py-7">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
        <div className="max-w-[42rem]">
          <span className="inline-flex rounded-full border border-white/10 bg-[#ffffff08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72">
            {translate(locale, stackSection.eyebrow)}
          </span>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(1.9rem,4vw,3.9rem)] font-medium leading-[0.92] tracking-[-0.07em] text-white">
            {translate(locale, stackSection.title)}
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#2f1639_0%,#191426_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff9b68]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#68d6ff]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#b48cff]" />
          </div>
          <p className="mt-4 max-w-[48ch] text-sm leading-6 text-white/68">
            {translate(locale, stackSection.body)}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "System Design", "Product"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2">
        {stackGroups.map((group) => {
          const style = stackStyles[group.id];
          const isPrimary = group.id === "frontend";

          return (
            <article
              key={group.id}
              className={[
                "group relative overflow-hidden rounded-[28px] border border-white/10 p-4 transition duration-300 ease-out md:p-5",
                "shadow-[0_18px_48px_rgba(0,0,0,0.2)] hover:-translate-y-1.5 hover:shadow-[0_28px_68px_rgba(0,0,0,0.28)]",
                style.cardClass,
              ].join(" ")}
            >
              <div
                className={[
                "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-80",
                  style.accentClass,
                ].join(" ")}
              />
              <div
                className={[
                  "pointer-events-none absolute -right-5 top-2 bg-gradient-to-b bg-clip-text text-[4rem] font-semibold leading-none text-transparent opacity-[0.12] md:text-[5rem]",
                  style.accentClass,
                ].join(" ")}
              >
                {style.code}
              </div>
              <div
                className={[
                  "pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full blur-3xl",
                  style.accentClass,
                  "bg-gradient-to-br opacity-30",
                ].join(" ")}
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/55">
                    {style.code}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                <h3
                  className={[
                    "mt-3 max-w-[12ch] font-medium leading-[0.98] tracking-[-0.05em] text-white",
                    isPrimary
                      ? "text-[1.35rem] md:text-[1.7rem]"
                      : "text-[1.15rem] md:text-[1.35rem]",
                  ].join(" ")}
                >
                  {translate(locale, group.title)}
                </h3>

                <div className={isPrimary ? "mt-5 flex flex-wrap gap-2.5" : "mt-4 flex flex-wrap gap-2"}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={[
                        isPrimary
                          ? "inline-flex rounded-full border px-3 py-2 text-[12px] font-medium tracking-[0.01em] transition duration-300"
                          : "inline-flex rounded-full border px-2.5 py-1.5 text-[11px] font-medium tracking-[0.01em] transition duration-300",
                        style.chipClass,
                      ].join(" ")}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
