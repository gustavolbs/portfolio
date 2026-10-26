import { publicProfile as profile } from "@/content/public-profile";

import { ScrollLine } from "./scroll-line";
import { Specimen } from "./specimen";
import styles from "./home.module.css";

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

const hierarchy = [
  { label: "Leads", text: "The one thing the person came to do." },
  { label: "Follows", text: "The context that makes the decision easy." },
  { label: "Moves", text: "Everything that can reflow without losing meaning." },
] as const;

const quality = [
  { label: "Semantic HTML", text: "Structure first, styling second." },
  { label: "Keyboard paths", text: "Every control reachable and visible." },
  { label: "Container queries", text: "Components that respond to their own space." },
  { label: "Reduced motion", text: "Full parity, not a degraded fallback." },
] as const;

const arrow = (
  <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function Home() {
  return (
    <>
      <ScrollLine />
      <header className={styles.bar} data-bar>
        <a className={styles.brand} href="#main" aria-label="Gustavo Bispo, home">
          <svg className={styles.mark} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3v13a5 5 0 0 0 5 5h10" />
            <circle cx="6" cy="3" r="2" />
          </svg>
          <span>Gustavo Bispo</span>
        </a>
        <nav aria-label="Primary navigation">
          <a className={styles.nl} href="#frame">Frame</a>
          <a className={styles.nl} href="#build">Build</a>
          <a className={styles.nl} href="#ship">Ship</a>
          <a className={styles.nl} href="#lead">Lead</a>
          <a className={`${styles.nl} ${styles.keep}`} href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroIn}>
            <p className={styles.role}>{profile.role}</p>
            <h1 id="hero-title">
              I engineer interfaces that survive production<span className={styles.stop} data-start>.</span>
            </h1>
            <p className={styles.sub}>
              {profile.years} years across UX judgment, frontend systems and production delivery,
              embedded with the team and the problem. React, TypeScript and Next.js, plus LLMs
              where they earn their place.
            </p>
            <div className={styles.actions}>
              <a className={styles.btn} href={profile.mailto}>Email me</a>
              <a className={styles.ulink} href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
              <a className={styles.ulink} href={profile.github} rel="noreferrer" target="_blank">GitHub</a>
            </div>
          </div>
          <ol className={styles.steps} aria-label="Sections">
            <li><a href="#frame">Frame</a></li>
            <li><a href="#build">Build</a></li>
            <li><a href="#ship">Ship</a></li>
            <li><a href="#lead">Lead</a></li>
          </ol>
        </section>

        <section className={`${styles.chap} ${styles.g1}`} id="frame" aria-labelledby="v-frame">
          <div className={styles.copy}>
            <p className={`${styles.num} ${styles.rise}`} data-rise aria-hidden="true">01 / 04</p>
            <h2 className={`${styles.verb} ${styles.rise}`} data-rise data-node id="v-frame"><span>Frame</span></h2>
            <p className={`${styles.claim} ${styles.rise}`} data-rise>
              I turn ambiguous product problems into clear interaction models, then keep the
              interface focused on what people need to do.
            </p>
          </div>
          <div className={styles.stage} data-par="40">
            <ul className={`${styles.rows} ${styles.rise}`} data-rise>
              {hierarchy.map((item) => (
                <li key={item.label}>
                  <span className={styles.pl}>{item.label}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.chap} ${styles.wide} ${styles.g2}`} id="build" aria-labelledby="v-build">
          <div className={styles.copy}>
            <p className={`${styles.num} ${styles.rise}`} data-rise aria-hidden="true">02 / 04</p>
            <h2 className={`${styles.verb} ${styles.rise}`} data-rise data-node id="v-build"><span>Build</span></h2>
            <p className={`${styles.claim} ${styles.rise}`} data-rise>
              I design component boundaries, responsive rules and state flows that help teams
              extend a product without fighting it.
            </p>
            <p className={`${styles.proofCap} ${styles.rise}`} data-rise>
              <span className={styles.pl}>Try it</span> The ruler below controls this composition.
              Its width, hierarchy and reading order adapt without changing the content.
            </p>
          </div>
          <div className={`${styles.fullStage} ${styles.rise}`} data-rise>
            <Specimen />
          </div>
        </section>

        <section className={`${styles.chap} ${styles.flip} ${styles.g3}`} id="ship" aria-labelledby="v-ship">
          <div className={styles.copy}>
            <p className={`${styles.num} ${styles.rise}`} data-rise aria-hidden="true">03 / 04</p>
            <h2 className={`${styles.verb} ${styles.rise}`} data-rise data-node id="v-ship"><span>Ship</span></h2>
            <p className={`${styles.claim} ${styles.rise}`} data-rise>
              Accessibility, performance, resilient states and maintainability are part of the
              interface, not a cleanup pass.
            </p>
          </div>
          <div className={styles.stage} data-par="40">
            <ul className={`${styles.rows} ${styles.rise}`} data-rise aria-label="Quality built into this page">
              {quality.map((item) => (
                <li key={item.label}>
                  <span className={styles.pl}>{item.label}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.chap} ${styles.g4}`} id="lead" aria-labelledby="v-lead">
          <div className={styles.copy}>
            <p className={`${styles.num} ${styles.rise}`} data-rise aria-hidden="true">04 / 04</p>
            <h2 className={`${styles.verb} ${styles.rise}`} data-rise data-node id="v-lead"><span>Lead</span></h2>
            <p className={`${styles.claim} ${styles.rise}`} data-rise>
              Products are private. The experience is real: entertainment, fintech, agriculture and
              digital products.
            </p>
            <p className={`${styles.proofCap} ${styles.rise}`} data-rise>
              A selected path, not a complete resume. Today I also work embedded in customer
              problems through Linear Craft, and build with LLMs as a Claude Certified Architect.
            </p>
          </div>
          <div className={styles.stage} data-par="40">
            <ol className={`${styles.employers} ${styles.rise}`} data-rise>
              {employers.map((employer) => (
                <li key={employer.company}>
                  <strong>{employer.company}</strong>
                  <span>{employer.role}</span>
                  <time>{employer.period}</time>
                </li>
              ))}
            </ol>
            <h3 className={`${styles.subhead} ${styles.rise}`} data-rise>Education and credentials</h3>
            <ol className={`${styles.employers} ${styles.rise}`} data-rise>
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

        <section className={styles.close} id="contact" aria-labelledby="h-close">
          <h2 className={styles.rise} data-rise id="h-close">Have a product that needs senior frontend judgment?</h2>
          <a className={styles.mail} href={profile.mailto} data-end>{profile.email}</a>
          <p className={`${styles.who} ${styles.rise}`} data-rise>
            <a className={styles.plink} href={profile.linkedin} rel="noreferrer" target="_blank">LinkedIn{arrow}</a>
            <a className={styles.plink} href={profile.github} rel="noreferrer" target="_blank">GitHub{arrow}</a>
          </p>
        </section>
      </main>

      <footer className={styles.foot}>
        <p>© 2026 Gustavo Bispo</p>
        <p>Brazil / UTC-3</p>
        <p><a href="https://www.linearcraft.dev" rel="noopener">Linear Craft Technology</a></p>
      </footer>
    </>
  );
}
