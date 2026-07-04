"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  { title: "Sectie 1", text: "Scroll verder om de volgende te zien." },
  { title: "Sectie 2", text: "Elke sectie triggert zijn eigen animatie." },
  { title: "Sectie 3", text: "Scroll terug omhoog om te zien wat er gebeurt." },
  { title: "Sectie 4", text: "Dit patroon gebruik je voor scroll-reveals." },
];

export default function Les07() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".section");

      sections.forEach((section) => {
        // TODO: animeer elke "section" met gsap.from():
        //   opacity: 0, y: 60, duration: 0.8
        // en geef een scrollTrigger object mee met:
        //   trigger: section
        //   start: "top 80%"
        //   toggleActions: "play none none reverse"
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className={styles.page}>
      <h1 className={styles.title}>Les 7 — ScrollTrigger basis</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>Schrijf de TODO in de forEach hierboven uit.</li>
          <li>Scroll rustig naar beneden door de pagina.</li>
          <li>
            Elke sectie zou pas moeten animeren (fade + omhoog schuiven) op
            het moment dat hij het scherm binnenkomt.
          </li>
          <li>
            Scroll weer omhoog: de secties zouden moeten resetten en
            opnieuw afspelen. Dat komt door <code>toggleActions</code>.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          ScrollTrigger is een GSAP-plugin die een animatie koppelt aan de
          scrollpositie van de pagina in plaats van aan het laden van de
          pagina.
        </p>
        <p>De belangrijkste opties in een scrollTrigger-object:</p>
        <ul className={styles.infoList}>
          <li>
            <code>trigger</code> — welk element de trigger bepaalt
          </li>
          <li>
            <code>start: "top 80%"</code> — wanneer de bovenkant van het
            trigger-element 80% van de schermhoogte bereikt
          </li>
          <li>
            <code>toggleActions: "play none none reverse"</code> — speel af
            bij binnenkomst, doe niets bij verlaten, doe niets bij
            terug-in-beeld-komen, keer om bij terugscrollen
          </li>
        </ul>

        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: ScrollTrigger →
        </a>
      </section>

      {SECTIONS.map((s) => (
        <section key={s.title} className={`${styles.section} section`}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}
    </main>
  );
}
