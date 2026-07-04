"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Les08() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // TODO: gebruik gsap.to() op progressRef.current met:
      //   width: "100%"
      //   ease: "none"   <- bij scrub altijd "none" gebruiken
      // en een scrollTrigger object met:
      //   trigger: pinnedRef.current
      //   start: "top top"
      //   end: "+=800"
      //   pin: true
      //   scrub: true
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className={styles.page}>
      <h1 className={styles.title}>Les 8 — Scrub &amp; Pin</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Schrijf de TODO hierboven uit.</li>
          <li>
            Scroll door de paarse sectie: die zou moeten vastzitten
            (gepind) terwijl de voortgangsbalk vult op basis van hoeveel je
            scrolt.
          </li>
          <li>
            Verander <code>scrub: true</code> eens naar <code>scrub: 1</code>{" "}
            en voel het verschil.
          </li>
          <li>
            Verander <code>end: "+=800"</code> naar bijvoorbeeld{" "}
            <code>"+=1600"</code> om de sectie langer te maken.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          <code>scrub</code> koppelt de voortgang van de animatie direct
          aan je scrollpositie in plaats van aan tijd (duration).{" "}
          <code>scrub: true</code> is exact synchroon, een getal zoals{" "}
          <code>scrub: 1</code> geeft een vloeiende vertraging van dat
          aantal seconden.
        </p>
        <p>
          <code>pin: true</code> zet het trigger-element vast op het
          scherm zolang de scrollTrigger actief is.
        </p>
        <p>
          <code>end: "+=800"</code> bepaalt hoeveel pixels scroll de
          pin/scrub actief blijft.
        </p>

        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: ScrollTrigger (zoek op "scrub" en "pin") →
        </a>
      </section>

      <div className={styles.spacer} />

      <div ref={pinnedRef} className={styles.pinned}>
        <p className={styles.pinnedLabel}>
          Dit vlak blijft vast staan terwijl je scrolt
        </p>
        <div className={styles.progressTrack}>
          <div ref={progressRef} className={styles.progressFill} />
        </div>
      </div>

      <div className={styles.spacer} />
      <p className={styles.text}>Klaar! Dit was het einde van de sectie.</p>
    </main>
  );
}
