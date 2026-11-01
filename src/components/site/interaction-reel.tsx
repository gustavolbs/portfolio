"use client";

import { useRef, useState } from "react";

import { profile } from "@/content/site";

import styles from "./interaction-reel.module.css";

const scenes = [
  {
    id: "shape",
    number: "01",
    label: "Shape",
    title: "Turn ambiguity into direction.",
    description: "Frame the product problem, expose the tradeoffs and give the team a clear path forward.",
  },
  {
    id: "move",
    number: "02",
    label: "Move",
    title: "Make every state explain itself.",
    description: "Use interaction and motion to preserve context, confirm intent and keep people in control.",
  },
  {
    id: "ship",
    number: "03",
    label: "Ship",
    title: "Build systems that hold up.",
    description: "Engineer resilient React products across inputs, screens, locales and real production constraints.",
  },
] as const;

type SceneId = (typeof scenes)[number]["id"];

function ArrowIcon({ direction = "up-right" }: { direction?: "right" | "up-right" }) {
  return (
    <svg
      aria-hidden="true"
      className={styles.arrowIcon}
      data-direction={direction}
      viewBox="0 0 20 20"
    >
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function InteractionReel() {
  const [activeId, setActiveId] = useState<SceneId>("move");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = scenes.findIndex((scene) => scene.id === activeId);
  const activeScene = scenes[activeIndex];

  function selectRelativeScene(offset: number, moveFocus = false) {
    const nextIndex = (activeIndex + offset + scenes.length) % scenes.length;
    setActiveId(scenes[nextIndex].id);
    if (moveFocus) tabRefs.current[nextIndex]?.focus();
  }

  return (
    <main className={styles.page} id="main">
      <div className={styles.viewport}>
        <header className={styles.header}>
          <a className={styles.brand} href="#main" aria-label="Gustavo Bispo, home">
            Gustavo Bispo
          </a>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#reel">Reel</a>
            <a href="#principles">Principles</a>
            <a href={profile.mailto}>Email</a>
          </nav>
        </header>

        <section className={styles.hero} aria-labelledby="reel-title">
          <div className={styles.intro}>
            <div className={styles.introTitle}>
              <h1 id="reel-title" className={styles.headline}>
                I build
                <br />
                interfaces
                <br />
                people
                <br />
                understand<span aria-hidden="true">.</span>
              </h1>
            </div>
            <div className={styles.introFooter}>
              <div className={styles.introIdentity}>
                <p className={styles.role}>{profile.role}</p>
                <p className={styles.introSummary}>
                  {profile.years} years turning product complexity into clear, resilient interfaces.
                </p>
              </div>
              <p className={styles.interactionHint}>Explore with focus, pointer or touch</p>
            </div>
          </div>

          <div className={styles.stage} data-scene={activeId} id="reel">
            <div className={styles.scene} aria-live="polite">
              <div className={styles.sceneMeta}>
                <span>{activeScene.number} / {activeScene.label.toUpperCase()}</span>
                <span>Active state</span>
              </div>

              <div className={styles.art} aria-hidden="true">
                <span className={styles.orb} />
                <span className={styles.slab} />
                <span className={styles.path} />
                <span className={styles.arrow}><ArrowIcon direction="right" /></span>
              </div>

              <div className={styles.sceneCopy} key={activeId}>
                <h2>{activeScene.title}</h2>
                <p>{activeScene.description}</p>
              </div>
            </div>

            <div
              className={styles.rail}
              role="tablist"
              aria-label="Explore how Gustavo approaches interface work"
              onKeyDown={(event) => {
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  event.preventDefault();
                  selectRelativeScene(-1, true);
                }
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  event.preventDefault();
                  selectRelativeScene(1, true);
                }
              }}
            >
              {scenes.map((scene) => {
                const selected = scene.id === activeId;
                return (
                  <button
                    className={styles.verb}
                    data-active={selected ? "true" : "false"}
                    id={`tab-${scene.id}`}
                    key={scene.id}
                    onClick={() => setActiveId(scene.id)}
                    ref={(node) => { tabRefs.current[scenes.indexOf(scene)] = node; }}
                    role="tab"
                    aria-selected={selected}
                    aria-controls="reel"
                    tabIndex={selected ? 0 : -1}
                    type="button"
                  >
                    <span className={styles.verbMeta}>{scene.number}{selected ? " · Active" : ""}</span>
                    <strong>{scene.label}</strong>
                    <ArrowIcon />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>React / TypeScript / Next.js</span>
          <span>Design systems / Accessibility</span>
          <span>Product thinking / Technical leadership</span>
        </footer>
      </div>

      <section className={styles.principles} id="principles" aria-labelledby="principles-title">
        <div className={styles.sectionLead}>
          <h2 id="principles-title">Senior frontend work connects product intent to production.</h2>
        </div>
        <div className={styles.principleList}>
          <article>
            <span>Product</span>
            <h3>Frame the product problem.</h3>
            <p>Before code, I clarify the user decision, the constraint and what success must feel like.</p>
          </article>
          <article>
            <span>Systems</span>
            <h3>Build the system behind the screen.</h3>
            <p>Architecture, design systems, accessibility and performance keep quality repeatable as products and teams grow.</p>
          </article>
          <article>
            <span>Delivery</span>
            <h3>Lead the path to production.</h3>
            <p>I align design and engineering, expose tradeoffs early and stay accountable for the experience that ships.</p>
          </article>
        </div>
      </section>

      <section className={styles.contact} id="contact" aria-labelledby="contact-title">
        <div className={styles.contactGrid}>
          <h2 id="contact-title">Have a product worth making clearer?</h2>
          <div className={styles.contactAction}>
            <a className={styles.contactPrimary} href={profile.mailto}>
              Let&apos;s talk <ArrowIcon />
            </a>
            <div className={styles.contactMeta}>
              <p>{profile.email}</p>
              <div className={styles.contactProfiles} aria-label="Public profiles">
                <a href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
                <a href={profile.github} rel="noreferrer" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
