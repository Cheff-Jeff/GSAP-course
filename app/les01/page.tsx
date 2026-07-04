"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Page() {
  const boxRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 300, //300px
      rotate: 360,
      duration: 1.5,
      ease: "power2.out",
      yoyo: true,
      repeat: -1,
    });
  });

  useEffect(() => {
    // TODO: schrijf hier je eerste gsap.to() animatie.
    //
    // Animeer boxRef.current met:
    //   - x: 300
    //   - rotation: 360
    //   - duration: 1.5
    //   - ease: "power2.out"
    //
    // gsap.to(element, { ...eigenschappen... })
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 1 — gsap.to()</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>
            Schrijf in de <code>useEffect</code> hierboven een <code>gsap.to()</code> call die{" "}
            <code>boxRef.current</code> animeert.
          </li>
          <li>
            Geef de animatie deze eigenschappen: <code>x: 300</code>, <code>rotation: 360</code>,{" "}
            <code>duration: 1.5</code>, <code>ease: "power2.out"</code>.
          </li>
          <li>Sla op en kijk of de rode box beweegt en ronddraait.</li>
          <li>
            Speel daarna met de waarden: verander <code>x</code>, <code>duration</code> en <code>rotation</code> en kijk
            wat er verandert.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          <code>
            gsap.to(element, {"{"} ...eigenschappen {"}"})
          </code>{" "}
          animeert een element van zijn <strong>huidige</strong> staat naar de waarden die je opgeeft. Vandaar de naam
          "to": waar het element naartoe animeert.
        </p>
        <p>
          We gebruiken een React <code>ref</code> (via <code>useRef</code>) om GSAP te vertellen welk DOM-element het
          moet animeren. GSAP werkt namelijk direct met de browser-DOM, niet met React state.
        </p>
        <p>
          <code>useEffect</code> zorgt dat de animatie pas start nadat de pagina in de browser is geladen — GSAP kan
          niet animeren wat nog niet bestaat.
        </p>

        <a className={styles.docsLink} href="https://gsap.com/docs/v3/GSAP/gsap.to()" target="_blank" rel="noreferrer">
          Documentatie: gsap.to() →
        </a>
      </section>

      <div className={styles.stage}>
        <div ref={boxRef} className={styles.box} />
      </div>
    </main>
  );
}
