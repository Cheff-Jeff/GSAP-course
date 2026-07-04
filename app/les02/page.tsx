"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";
import { useGSAP } from "@gsap/react";

export default function Les02() {
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(card1.current, {
      y: -100,
      opacity: 0,
      duration: 2,
      repeat: -1,
    });

    gsap.to(card2.current, {
      scale: 1.1,
      background: "#5da9ff",
      duration: 1,
      delay: 0.3,
      repeat: -1,
    });

    gsap.fromTo(
      card3.current,
      {
        x: 200,
        opacity: 0,
        rotate: 15,
      },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 1,
        delay: 0.6,
        repeat: -1,
      },
    );
  });

  useEffect(() => {
    // TODO 1: gebruik gsap.from() op card1.current
    //   startwaarden: y: -100, opacity: 0
    //   duration: 1
    // TODO 2: gebruik gsap.to() op card2.current
    //   eindwaarden: scale: 1.1, backgroundColor: "#5da9ff"
    //   duration: 1, delay: 0.3
    // TODO 3: gebruik gsap.fromTo() op card3.current
    //   start: { x: 200, opacity: 0, rotation: 15 }
    //   eind:  { x: 0, opacity: 1, rotation: 0 }
    //   duration: 1, delay: 0.6
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Les 2 — from() en fromTo()</h1>

      <section className={styles.info}>
        <h2 className={styles.infoHeading}>Opdracht</h2>
        <ol className={styles.infoList}>
          <li>
            Schrijf de drie TODO's in de <code>useEffect</code> hierboven uit, elk met de bijbehorende methode en
            waarden.
          </li>
          <li>Kijk daarna naar de drie kaarten: ze zouden alle drie in beeld moeten "vallen" op een eigen manier.</li>
          <li>
            Verander bij kaart 1 de startwaarde <code>y: -100</code> eens naar <code>y: 300</code> en kijk waar hij
            vandaan komt.
          </li>
        </ol>

        <h2 className={styles.infoHeading}>Uitleg</h2>
        <p>
          <code>gsap.to(el, {"{...}"})</code> gaat van de <strong>huidige</strong> staat naar de opgegeven waarden.
        </p>
        <p>
          <code>gsap.from(el, {"{...}"})</code> gaat van de <strong>opgegeven</strong> waarden naar de huidige staat.
          Handig voor inkom-animaties: je zet het element gewoon normaal neer in je JSX/CSS, en GSAP animeert het vanuit
          een verschoven of onzichtbare staat naar die normale plek.
        </p>
        <p>
          <code>
            gsap.fromTo(el, {"{start}"}, {"{eind}"})
          </code>{" "}
          laat jou zelf zowel de start- als eindwaarde bepalen.
        </p>

        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: gsap.from() →
        </a>
        <br />
        <a
          className={styles.docsLink}
          href="https://gsap.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer"
        >
          Documentatie: gsap.fromTo() →
        </a>
      </section>

      <div className={styles.row}>
        <div ref={card1} className={styles.card}>
          from()
        </div>
        <div ref={card2} className={styles.card}>
          to()
        </div>
        <div ref={card3} className={styles.card}>
          fromTo()
        </div>
      </div>
    </main>
  );
}
