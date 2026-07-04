"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

export default function Les06() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  // TODO 1: gebruik useGSAP() met { scope: containerRef, dependencies: [] }
  // en animeer daarbinnen alle elementen met class ".box":
  //   gsap.from(".box", { opacity: 0, y: 30, stagger: 0.1, duration: 0.6 })

  // TODO 2: gebruik nog een useGSAP() met { scope: containerRef,
  // dependencies: [count] } die ELKE KEER opnieuw draait als "count"
  // verandert. Animeer ".counter" met:
  //   gsap.fromTo(".counter", { scale: 1.4 }, { scale: 1, duration: 0.4,
  //     ease: "back.out(2)" })

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 6 — useGSAP()</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Belangrijk</h2>
        <p>
          Dit is de les die je het vaakst gebruikt. Vanaf hier gebruiken we
          in plaats van <code>useEffect</code> de <code>useGSAP()</code>{" "}
          hook uit het pakket <code>@gsap/react</code>. Installeer met:{" "}
          <code>npm install @gsap/react</code>
        </p>

        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Schrijf de twee TODO's hierboven uit.</li>
          <li>
            Klik een paar keer snel op de knop en let op dat er geen
            "opstapeling" van animaties ontstaat en alles netjes blijft
            werken.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          Waarom niet gewoon <code>useEffect</code>? Dat werkt ook, maar
          dan moet je zelf alle GSAP-animaties opruimen bij unmount,
          rekening houden met React's StrictMode, en een{" "}
          <code>gsap.context()</code> gebruiken om alleen jouw animaties op
          te ruimen. <code>useGSAP()</code> (gemaakt door het GSAP-team
          zelf) regelt dit automatisch.
        </p>
        <p>
          De <code>scope</code>-optie zorgt dat je binnen de callback een
          simpele CSS-selector zoals <code>".box"</code> kan gebruiken in
          plaats van losse refs per element, want GSAP zoekt dan
          automatisch alleen binnen het scope-element.
        </p>
        <p>
          De <code>dependencies</code>-array werkt net als bij{" "}
          <code>useEffect</code>: een lege array betekent "alleen bij
          mount", een array met een waarde erin betekent "opnieuw
          uitvoeren als die waarde verandert".
        </p>

        <a
          className={styles.docsLink}
          href="https://gsap.com/resources/React"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: GSAP + React →
        </a>
      </section>

      <div ref={containerRef} className={styles.container}>
        <div className={`${styles.box} box`}>Box 1</div>
        <div className={`${styles.box} box`}>Box 2</div>
        <div className={`${styles.box} box`}>Box 3</div>

        <div className={styles.counterRow}>
          <span className={`${styles.counter} counter`}>{count}</span>
          <button
            className={styles.button}
            onClick={() => setCount((c) => c + 1)}
          >
            +1 (opnieuw animeren)
          </button>
        </div>
      </div>
    </main>
  );
}
