"use client";

import { useEffect, useState, type CSSProperties } from "react";

import { publicProfile as profile } from "@/content/public-profile";

import styles from "./live-layout.module.css";

const MIN_WIDTH = 320;
const MAX_WIDTH = 1280;

const employers = [
  { company: "Live Nation Entertainment", role: "Senior Frontend Engineer", period: "2024 / Now" },
  { company: "Nivells", role: "Tech Lead and Senior Frontend Engineer", period: "2024 / 2025" },
  { company: "Leaf Agriculture", role: "Senior Frontend Engineer", period: "2023 / 2024" },
  { company: "Warren Brasil", role: "Frontend Engineer, Mid to Senior", period: "2021 / 2022" },
  { company: "Evermart", role: "Frontend Engineer, Technical Leadership", period: "2020 / 2021" },
] as const;

const credentials = [
  { title: "Master's in Web Development", institution: "Universitat Oberta de Catalunya", year: "Expected 2027" },
  { title: "MBA in Software Architecture", institution: "Full Cycle", year: "2025" },
  { title: "B.S. in Computer Science", institution: "UFCG", year: "2023" },
  { title: "Claude Certified Architect and applied AI certifications", institution: "Anthropic", year: "2026" },
] as const;

const capabilities = [
  {
    number: "01",
    title: "Product judgement",
    body: "I turn ambiguous product problems into clear interaction models, then keep the interface focused on what people need to do.",
  },
  {
    number: "02",
    title: "Frontend systems",
    body: "I design component boundaries, responsive rules and state flows that help teams extend a product without fighting it.",
  },
  {
    number: "03",
    title: "Production quality",
    body: "Accessibility, performance, resilient states and maintainability are part of the interface, not a cleanup pass.",
  },
] as const;

function layoutName(width: number) {
  if (width < 640) return "compact";
  if (width < 1024) return "medium";
  return "wide";
}

export function LiveLayout() {
  const [width, setWidth] = useState(768);
  const [maxWidth, setMaxWidth] = useState(MAX_WIDTH);
  const activeLayout = layoutName(width);
  const specimenStyle = { "--specimen-width": `${width}px` } as CSSProperties;

  useEffect(() => {
    function syncAvailableWidth() {
      const available = window.innerWidth <= 760
        ? Math.floor((window.innerWidth - MIN_WIDTH) / 8) * 8 + MIN_WIDTH
        : MAX_WIDTH;
      setMaxWidth(available);
      setWidth((current) => {
        if (current <= available) return current;
        return MIN_WIDTH + Math.round((available - MIN_WIDTH) / 16) * 8;
      });
    }

    syncAvailableWidth();
    window.addEventListener("resize", syncAvailableWidth);
    return () => window.removeEventListener("resize", syncAvailableWidth);
  }, []);

  return (
    <main className={styles.page} id="main">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.columnNumbers} aria-hidden="true">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index}>{String(index + 1).padStart(2, "0")}</span>
          ))}
        </div>

        <header className={styles.header}>
          <a className={styles.brand} href="#main" aria-label="Gustavo Bispo, home">
            Gustavo Bispo
          </a>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href={profile.mailto}>Email</a>
            <a href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
            <a href={profile.github} rel="noreferrer" target="_blank">GitHub</a>
          </nav>
        </header>

        <p className={styles.role}>
          <span aria-hidden="true" />
          {profile.role}
        </p>

        <h1 className={styles.headline} id="hero-title">
          <span>I engineer interfaces</span>
          <span>that survive production.</span>
        </h1>

        <div className={styles.facts} aria-label="Professional summary">
          <strong>{profile.years} years</strong>
          <span>React / TypeScript / Next.js</span>
        </div>

      </section>

      <section className={styles.specimenSection} aria-labelledby="specimen-title">
        <div className={styles.sectionLabel}>
          <span>01</span>
          <span>Responsive systems</span>
        </div>

        <div className={styles.specimenIntro}>
          <h2 id="specimen-title">One interface.<br />Three constraints.</h2>
          <p>
            The ruler below controls this composition. Its width, hierarchy and
            reading order adapt without changing the content.
          </p>
        </div>

        <div className={styles.specimenControl}>
          <div className={styles.layoutHeading}>
            <span>Live layout</span>
            <span>Drag or use arrow keys</span>
          </div>
          <div className={styles.ruler}>
            <input
              aria-controls="responsive-specimen"
              aria-label="Responsive specimen width"
              aria-valuetext={`${width} pixels, ${activeLayout} layout`}
              id="layout-width"
              max={maxWidth}
              min={MIN_WIDTH}
              onChange={(event) => setWidth(Number(event.target.value))}
              step="8"
              type="range"
              value={width}
            />
            <div className={styles.rangeLabels} aria-hidden="true">
              <span><strong>320</strong><small>Mobile<br />4 cols</small></span>
              <span data-active={activeLayout === "medium"}><strong>{width}</strong><small>{activeLayout}<br />{activeLayout === "compact" ? "4" : activeLayout === "medium" ? "8" : "12"} cols</small></span>
              <span>
                <strong>{maxWidth}</strong>
                <small>{maxWidth < MAX_WIDTH ? "This screen" : "Desktop"}<br />{maxWidth < 640 ? "4" : maxWidth < 1024 ? "8" : "12"} cols</small>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.specimenField}>
          <article
            className={styles.specimen}
            data-layout={activeLayout}
            id="responsive-specimen"
            style={specimenStyle}
          >
            <header className={styles.specimenHeader}>
              <span>Constraint / {activeLayout}</span>
              <output htmlFor="layout-width">{width}px</output>
            </header>
            <div className={styles.specimenBody}>
              <p className={styles.specimenKicker}>The invariant</p>
              <h3>Hierarchy should survive every viewport.</h3>
              <p className={styles.specimenCopy}>
                Not by shrinking everything, but by deciding what leads, what
                follows and what can move.
              </p>
              <dl className={styles.specimenMetrics}>
                <div><dt>Columns</dt><dd>{activeLayout === "compact" ? "04" : activeLayout === "medium" ? "08" : "12"}</dd></div>
                <div><dt>Mode</dt><dd>{activeLayout}</dd></div>
                <div><dt>Input</dt><dd>keyboard ready</dd></div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.experienceSection} aria-labelledby="experience-title">
        <div className={styles.sectionLabel}>
          <span>02</span>
          <span>Selected trajectory</span>
        </div>
        <div className={styles.experienceHeading}>
          <h2 id="experience-title">Products are private.<br />The experience is real.</h2>
          <p>
            A selected path, not a complete resume. These teams span
            entertainment, fintech, agriculture and digital products.
          </p>
        </div>
        <ol className={styles.employers}>
          {employers.map((employer, index) => (
            <li key={employer.company}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{employer.company}</strong>
              <small>{employer.role}</small>
              <small className={styles.period}>{employer.period}</small>
            </li>
          ))}
        </ol>

        <div className={styles.credentials}>
          <h3>Education and credentials</h3>
          <ol>
            {credentials.map((credential) => (
              <li key={credential.title}>
                <strong>{credential.title}</strong>
                <span>{credential.institution}</span>
                <time>{credential.year}</time>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.capabilitiesSection} aria-labelledby="capabilities-title">
        <div className={styles.sectionLabel}>
          <span>03</span>
          <span>What I bring</span>
        </div>
        <h2 className={styles.capabilitiesTitle} id="capabilities-title">
          Senior frontend is a product role.
        </h2>
        <div className={styles.capabilities}>
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.body}</p>
            </article>
          ))}
        </div>
        <ul className={styles.qualityList} aria-label="Quality built into this page">
          <li>Semantic HTML</li>
          <li>Keyboard paths</li>
          <li>Container queries</li>
          <li>Reduced motion</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>Have a product that needs senior frontend judgement?</p>
        <a href={profile.mailto}>Let&apos;s talk</a>
        <div>
          <span>Brazil / UTC-3</span>
          <a href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
          <a href={profile.github} rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
