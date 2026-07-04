"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";
import { useGSAP } from "@gsap/react";

export default function Les03() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const barFillRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    timelineRef.current = gsap.timeline();

    timelineRef.current.from(titleRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.6,
    });

    timelineRef.current.fromTo(
      barFillRef.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 1,
        ease: "power1.inOut",
      },
      "-=1",
    );

    timelineRef.current.from(buttonRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.6,
    });
  });

  useEffect(() => {
    // TODO: maak een timeline met gsap.timeline() en sla 'm op in
    // timelineRef.current (zodat de "opnieuw afspelen"-knop werkt)
    //
    // Bouw de timeline met .from() en .fromTo() calls, in deze volgorde:
    //   1. .from(titleRef.current, { y: -30, opacity: 0, duration: 0.6 })
    //   2. .fromTo(barFillRef.current,
    //        { width: "0%" },
    //        { width: "100%", duration: 1, ease: "power1.inOut" },
    //        "-=0.1"  <- positieparameter, zorgt voor overlap
    //      )
    //   3. .from(buttonRef.current, { opacity: 0, y: 10, duration: 0.4 })
    //
    // Vergeet niet: return () => { tl.kill() } in de cleanup van useEffect
  }, []);

  const replay = () => {
    timelineRef.current?.restart();
  };

  return (
    <main className={styles.page}>
      <h1 ref={titleRef} className={styles.title}>
        Les 3 — Timelines
      </h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Bouw de timeline volgens de TODO-stappen in de code hierboven.</li>
          <li>
            Klik op "Speel opnieuw af" en kijk hoe de drie stappen na elkaar gebeuren: titel komt in beeld, dan vult de
            balk zich, dan verschijnt de knop.
          </li>
          <li>
            Verander de positieparameter <code>"-=0.1"</code> eens (zie uitleg) om te zien hoe animaties kunnen
            overlappen.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          Een <code>gsap.timeline()</code> laat je tweens toevoegen met <code>.to()</code> / <code>.from()</code> die
          automatisch na elkaar afspelen, in de volgorde waarin je ze toevoegt. Zo hoef je geen delays met de hand uit
          te rekenen.
        </p>
        <p>De positieparameter (het 3e argument) bepaalt wanneer een animatie in de tijdlijn start:</p>
        <ul className={styles.infoList}>
          <li>
            <code>"-=0.3"</code> → start 0.3s voordat de vorige animatie eindigt (overlap)
          </li>
          <li>
            <code>"&lt;"</code> → start op hetzelfde moment als de vorige animatie startte
          </li>
          <li>
            <code>"+=0.5"</code> → start 0.5s na het einde van de vorige animatie
          </li>
        </ul>

        <a className={styles.docsLink} href="https://gsap.com/docs/v3/GSAP/Timeline" target="_blank" rel="noreferrer">
          Documentatie: Timeline →
        </a>
      </section>

      <div className={styles.barTrack}>
        <div ref={barFillRef} className={styles.barFill} />
      </div>

      <button ref={buttonRef} className={styles.button} onClick={replay}>
        Speel opnieuw af
      </button>
    </main>
  );
}
