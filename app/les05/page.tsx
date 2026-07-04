"use client";

import { useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

const EASES = [
  { label: "linear", ease: "linear" },
  { label: "power2.out", ease: "power2.out" },
  { label: "power2.in", ease: "power2.in" },
  { label: "back.out(1.7)", ease: "back.out(1.7)" },
  { label: "bounce.out", ease: "bounce.out" },
];

export default function Les05() {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const play = () => {
    EASES.forEach((item, index) => {
      gsap.fromTo(
        refs.current[index],
        {
          x: 0,
        },
        {
          x: 400,
          duration: 1.2,
          ease: item.ease,
          overwrite: true,
        },
      );

      // TODO: gebruik gsap.fromTo() op refs.current[i] met:
      //   start: { x: 0 }
      //   eind:  { x: 400, duration: 1.2, ease: item.ease, overwrite: true }
      //
      // "overwrite: true" zorgt dat als je snel opnieuw klikt, de vorige
      // animatie netjes wordt afgebroken in plaats van te stapelen.
    });
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 5 — Easing</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Schrijf de TODO in de "play"-functie hierboven uit.</li>
          <li>
            Klik op "Speel af" en let goed op hoe elk van de vijf balken beweegt, niet alleen dát ze bewegen. Ze hebben
            allemaal dezelfde duration en afstand, alleen de ease verschilt.
          </li>
          <li>
            Verander bij één van de balken de ease-waarde in iets uit de GSAP ease-visualizer (link hieronder) en kijk
            of je het verschil voelt.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          "Ease" (easing) bepaalt de snelheidscurve van een animatie: begint hij langzaam en versnelt hij? Of juist
          andersom? Schiet hij voorbij zijn doel en veert hij terug?
        </p>
        <p>Veelgebruikte eases:</p>
        <ul className={styles.infoList}>
          <li>
            <code>linear</code> → constante snelheid, voelt "robotachtig"
          </li>
          <li>
            <code>power2.out</code> → snel starten, rustig afremmen
          </li>
          <li>
            <code>power2.in</code> → rustig starten, hard versnellen
          </li>
          <li>
            <code>back.out(1.7)</code> → schiet voorbij het doel en veert terug
          </li>
          <li>
            <code>bounce.out</code> → stuitert als een bal
          </li>
        </ul>

        <a className={styles.docsLink} href="https://gsap.com/docs/v3/Eases" target="_blank" rel="noreferrer">
          Interactieve ease-visualizer (documentatie) →
        </a>
      </section>

      <button className={styles.button} onClick={play}>
        Speel af
      </button>

      <div className={styles.list}>
        {EASES.map((item, i) => (
          <div key={item.label} className={styles.row}>
            <span className={styles.label}>{item.label}</span>
            <div className={styles.track}>
              <div
                ref={(el) => {
                  refs.current[i] = el;
                }}
                className={styles.ball}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
