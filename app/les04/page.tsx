"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Les04() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(`.${styles.item}`);

    // TODO: gebruik gsap.from() op "items" (dit is een NodeList met alle
    // 8 blokjes) met:
    //   opacity: 0, y: 40, scale: 0.8
    //   duration: 0.6
    //   stagger: 0.08   <- dit is het nieuwe begrip in deze les
    //   ease: "back.out(1.7)"
    //
    // Let op: geef "items ?? []" mee als eerste argument, voor het geval
    // containerRef.current nog niet bestaat.
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 4 — Stagger</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Schrijf de TODO hierboven uit.</li>
          <li>
            Kijk naar de 8 blokjes die één voor één in beeld zouden moeten
            springen.
          </li>
          <li>
            Verander <code>stagger: 0.08</code> naar bijvoorbeeld{" "}
            <code>0.3</code> en zie het verschil.
          </li>
          <li>
            Probeer <code>stagger: {"{ each: 0.1, from: 'center' }"}</code>{" "}
            eens om de animatie vanuit het midden te laten uitwaaieren in
            plaats van van links naar rechts.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          Als je GSAP een array van elementen geeft, kun je de{" "}
          <code>stagger</code>-property gebruiken. In plaats van dat alle
          elementen tegelijk animeren, begint elk element een beetje later
          dan de vorige.
        </p>
        <p>
          <code>stagger: 0.08</code> betekent: elk volgend element start
          0.08 seconden na het vorige.
        </p>
        <p>
          Je kan ook een object geven voor meer controle, bijvoorbeeld{" "}
          <code>{"{ each: 0.1, from: 'center' }"}</code>. Andere opties
          voor <code>from</code>: <code>"start"</code>, <code>"end"</code>,{" "}
          <code>"edges"</code>, <code>"random"</code>.
        </p>

        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: stagger (op de gsap.to() pagina) →
        </a>
      </section>

      <div ref={containerRef} className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={styles.item} />
        ))}
      </div>
    </main>
  );
}
