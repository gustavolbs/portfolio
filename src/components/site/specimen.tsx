"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import styles from "./home.module.css";

const MIN_WIDTH = 320;
const MAX_WIDTH = 1280;

function layoutName(width: number) {
  if (width < 640) return "compact";
  if (width < 1024) return "medium";
  return "wide";
}

const columnsFor = (layout: string) => (layout === "compact" ? 4 : layout === "medium" ? 8 : 12);

export function Specimen() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(768);
  const [maxWidth, setMaxWidth] = useState(MAX_WIDTH);
  const layout = layoutName(width);
  const cols = columnsFor(layout);

  // The control never claims a width larger than the surface that holds it.
  useEffect(() => {
    const field = fieldRef.current;
    if (!field) return;
    const sync = () => {
      const fit = Math.floor((field.clientWidth - MIN_WIDTH) / 8) * 8 + MIN_WIDTH;
      const available = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH + 8, fit));
      setMaxWidth(available);
      setWidth((current) => Math.min(current, available));
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(field);
    return () => ro.disconnect();
  }, []);

  return (
    <div className={styles.specimenWrap} ref={fieldRef}>
      <div className={styles.layoutHeading}>
        <span>Live layout</span>
        <span>Drag or use arrow keys</span>
      </div>
      <div className={styles.ruler}>
        <input
          aria-controls="responsive-specimen"
          aria-label="Responsive specimen width"
          aria-valuetext={`${width} pixels, ${layout} layout`}
          id="layout-width"
          max={maxWidth}
          min={MIN_WIDTH}
          onChange={(event) => setWidth(Number(event.target.value))}
          step="8"
          type="range"
          value={width}
        />
        <div className={styles.rangeLabels} aria-hidden="true">
          <span>{MIN_WIDTH}px</span>
          <span>{maxWidth}px</span>
        </div>
      </div>

      <div className={styles.specimenField}>
        <article
          className={styles.specimen}
          data-layout={layout}
          id="responsive-specimen"
          style={{ "--specimen-width": `${width}px` } as CSSProperties}
        >
          <header className={styles.specimenHeader}>
            <span>Constraint / {layout}</span>
            <output htmlFor="layout-width">{width}px</output>
          </header>
          <div className={styles.specimenBody}>
            <h3>Hierarchy should survive every viewport.</h3>
            <p>
              Not by shrinking everything, but by deciding what leads, what follows and what can
              move.
            </p>
            <dl className={styles.specimenMetrics}>
              <div><dt>Columns</dt><dd>{String(cols).padStart(2, "0")}</dd></div>
              <div><dt>Mode</dt><dd>{layout}</dd></div>
              <div><dt>Input</dt><dd>keyboard ready</dd></div>
            </dl>
          </div>
        </article>
      </div>
    </div>
  );
}
