"use client";

import { useEffect, useRef } from "react";

import styles from "./home.module.css";

const RADIUS = 22;
const STEP = 6;

// One vermilion line, drawn by scroll from the title's full stop to the email underline.
// Also owns the IntersectionObserver reveals (content stays visible without JS).
export function ScrollLine() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const ghost = svg?.querySelector<SVGPathElement>("[data-ghost]");
    const ink = svg?.querySelector<SVGPathElement>("[data-ink]");
    const pen = svg?.querySelector<SVGCircleElement>("[data-pen]");
    const bar = document.querySelector<HTMLElement>("[data-bar]");
    const startEl = document.querySelector<HTMLElement>("[data-start]");
    const endEl = document.querySelector<HTMLElement>("[data-end]");
    if (!svg || !ghost || !ink || !pen || !bar || !startEl || !endEl) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const stages = document.querySelectorAll<HTMLElement>("[data-par]");
    let total = 0;
    let ys: number[] = [];
    let nodes: { c: SVGCircleElement; l: number }[] = [];

    const at = (el: Element, fx: number, fy: number) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + scrollX + r.width * fx, y: r.top + scrollY + r.height * fy };
    };

    const rounded = (p: { x: number; y: number }[]) => {
      let d = `M${p[0].x} ${p[0].y}`;
      for (let i = 1; i < p.length - 1; i++) {
        const a = p[i - 1], b = p[i], c = p[i + 1];
        const ab = Math.hypot(a.x - b.x, a.y - b.y);
        const bc = Math.hypot(c.x - b.x, c.y - b.y);
        const r = Math.min(RADIUS, ab / 2, bc / 2);
        d += `L${b.x + ((a.x - b.x) / ab) * r} ${b.y + ((a.y - b.y) / ab) * r}Q${b.x} ${b.y} ${b.x + ((c.x - b.x) / bc) * r} ${b.y + ((c.y - b.y) / bc) * r}`;
      }
      const e = p[p.length - 1];
      return d + `L${e.x} ${e.y}`;
    };

    const lengthAt = (y: number) => {
      let lo = 0, hi = ys.length - 1;
      while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ys[mid] < y) lo = mid + 1;
        else hi = mid;
      }
      return Math.min(lo * STEP, total);
    };

    const update = () => {
      if (!total) return;
      const atEnd = scrollY + innerHeight >= document.documentElement.scrollHeight - 4;
      const l = reduce.matches || atEnd ? total : lengthAt(scrollY + innerHeight * 0.62);
      ink.style.strokeDashoffset = String(total - l);
      nodes.forEach((n) => n.c.classList.toggle(styles.on, l >= n.l));
      if (reduce.matches) return;
      const p = ink.getPointAtLength(l);
      pen.setAttribute("cx", String(p.x));
      pen.setAttribute("cy", String(p.y));
      stages.forEach((el) => {
        const r = el.getBoundingClientRect();
        const t = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
        el.style.setProperty("--py", `${Math.max(-1, Math.min(1, t)) * -(Number(el.dataset.par) || 40)}px`);
      });
    };

    const build = () => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.scrollHeight;
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.height = `${h}px`;

      const L = Math.round(parseFloat(getComputedStyle(bar).paddingLeft) / 2);
      const s = at(startEl, 0.5, 1);
      const sy = s.y + 18;
      const mr = endEl.getBoundingClientRect();
      const ey = mr.bottom + scrollY - 2;
      const d = rounded([
        { x: s.x, y: sy },
        { x: L, y: sy },
        { x: L, y: ey },
        { x: mr.right + scrollX, y: ey },
      ]);
      ghost.setAttribute("d", d);
      ink.setAttribute("d", d);
      total = ink.getTotalLength();
      ink.style.strokeDasharray = String(total);
      ys = [];
      for (let l = 0; l <= total + STEP; l += STEP) ys.push(ink.getPointAtLength(Math.min(l, total)).y);

      nodes.forEach((n) => n.c.remove());
      nodes = [...document.querySelectorAll("[data-node]")].map((el) => {
        const y = at(el, 0, 0.5).y;
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("class", styles.node);
        c.setAttribute("cx", String(L));
        c.setAttribute("cy", String(y));
        c.setAttribute("r", "7");
        svg.insertBefore(c, pen);
        return { c, l: lengthAt(y) };
      });
      update();
    };

    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        update();
      });
    };
    const setLive = () => {
      svg.classList.toggle(styles.live, !reduce.matches);
      update();
    };

    addEventListener("scroll", onScroll, { passive: true });
    reduce.addEventListener("change", setLive);
    const ro = new ResizeObserver(build);
    ro.observe(document.body);
    document.fonts?.ready.then(build);
    setLive();
    build();

    const targets = document.querySelectorAll<HTMLElement>("[data-rise]");
    targets.forEach((el) => {
      const sibs = el.parentElement!.querySelectorAll(":scope > [data-rise]");
      el.style.setProperty("--i", String(Array.prototype.indexOf.call(sibs, el)));
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.in);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      removeEventListener("scroll", onScroll);
      reduce.removeEventListener("change", setLive);
      ro.disconnect();
      io.disconnect();
      nodes.forEach((n) => n.c.remove());
    };
  }, []);

  return (
    <svg ref={svgRef} className={styles.plot} aria-hidden="true" focusable="false">
      <path data-ghost className={styles.ghost} />
      <path data-ink className={styles.ink} />
      <circle data-pen className={styles.pen} r="5" />
    </svg>
  );
}
