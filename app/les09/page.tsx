"use client";

import { useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Les09() {
  const scaleCard = useRef<HTMLDivElement>(null);
  const tiltCard = useRef<HTMLDivElement>(null);
  const glowCard = useRef<HTMLDivElement>(null);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 9 — Hover interacties</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>
            Vul de drie lege <code>onMouseEnter</code>/
            <code>onMouseLeave</code> handlers hieronder in de JSX in met
            een <code>gsap.to()</code> call.
          </li>
          <li>
            Kaart 1 ("Schalen"): animeer naar <code>scale: 1.08</code> bij
            enter, terug naar <code>scale: 1</code> bij leave. Duration
            0.3.
          </li>
          <li>
            Kaart 2 ("Kantelen"): animeer naar <code>rotation: 6</code>,{" "}
            <code>y: -8</code> bij enter, terug naar <code>rotation: 0</code>
            , <code>y: 0</code> bij leave. Duration 0.3, ease
            "power2.out".
          </li>
          <li>
            Kaart 3 ("Glow"): animeer{" "}
            <code>boxShadow: "0 0 40px 8px rgba(93,169,255,0.6)"</code> bij
            enter, terug naar{" "}
            <code>boxShadow: "0 0 0px 0px rgba(93,169,255,0)"</code> bij
            leave. Duration 0.3.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          Hover-animaties gebruiken geen scrollTrigger of automatische
          start: je roept <code>gsap.to()</code> handmatig aan op React's{" "}
          <code>onMouseEnter</code> en <code>onMouseLeave</code> events.
          Dat is het enige nieuwe idee in deze les.
        </p>
        <p>
          Voor de "leave"-animatie gebruik je dezelfde ref en animeer je
          gewoon terug naar de oorspronkelijke waarden. GSAP hoeft niet te
          "weten" wat de originele staat was; jij vertelt het gewoon
          opnieuw.
        </p>

        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: gsap.to() →
        </a>
      </section>

      <div className={styles.row}>
        <div
          ref={scaleCard}
          className={styles.card}
          onMouseEnter={() => {
            // TODO: gsap.to(scaleCard.current, { scale: 1.08, duration: 0.3 })
          }}
          onMouseLeave={() => {
            // TODO: gsap.to(scaleCard.current, { scale: 1, duration: 0.3 })
          }}
        >
          Schalen
        </div>

        <div
          ref={tiltCard}
          className={styles.card}
          onMouseEnter={() => {
            // TODO: gsap.to(tiltCard.current, { rotation: 6, y: -8,
            //   duration: 0.3, ease: "power2.out" })
          }}
          onMouseLeave={() => {
            // TODO: gsap.to(tiltCard.current, { rotation: 0, y: 0,
            //   duration: 0.3, ease: "power2.out" })
          }}
        >
          Kantelen
        </div>

        <div
          ref={glowCard}
          className={styles.card}
          onMouseEnter={() => {
            // TODO: gsap.to(glowCard.current, {
            //   boxShadow: "0 0 40px 8px rgba(93,169,255,0.6)",
            //   duration: 0.3 })
          }}
          onMouseLeave={() => {
            // TODO: gsap.to(glowCard.current, {
            //   boxShadow: "0 0 0px 0px rgba(93,169,255,0)",
            //   duration: 0.3 })
          }}
        >
          Glow
        </div>
      </div>
    </main>
  );
}
