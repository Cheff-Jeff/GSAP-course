"use client";

import Link from "next/link";
import styles from "./page.module.css";

const LESSEN = [
  {
    nummer: "01",
    slug: "/les01",
    titel: "Eerste tween",
    beschrijving: "gsap.to() — je allereerste animatie, refs en basissyntax.",
  },
  {
    nummer: "02",
    slug: "/les02",
    titel: "from() en fromTo()",
    beschrijving: "Inkom-animaties: vanuit een startwaarde naar de normale staat.",
  },
  {
    nummer: "03",
    slug: "/les03",
    titel: "Timelines",
    beschrijving: "Meerdere animaties na elkaar of overlappend laten spelen.",
  },
  {
    nummer: "04",
    slug: "/les04",
    titel: "Stagger",
    beschrijving: "Meerdere elementen met een kleine vertraging animeren.",
  },
  {
    nummer: "05",
    slug: "/les05",
    titel: "Easing",
    beschrijving: 'Het "gevoel" van een animatie sturen met snelheidscurves.',
  },
  {
    nummer: "06",
    slug: "/les06",
    titel: "useGSAP() hook",
    beschrijving: "De officiële, veilige manier om GSAP in React te gebruiken.",
  },
  {
    nummer: "07",
    slug: "/les07",
    titel: "ScrollTrigger basis",
    beschrijving: "Animaties starten op basis van scrollpositie.",
  },
  {
    nummer: "08",
    slug: "/les08",
    titel: "ScrollTrigger scrub & pin",
    beschrijving: "Animatie koppelen aan scrollsnelheid, elementen vastzetten.",
  },
  {
    nummer: "09",
    slug: "/les09",
    titel: "Hover interacties",
    beschrijving: "Animaties op basis van muisgebeurtenissen.",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>GSAP leertraject</p>
        <h1 className={styles.title}>Leer GSAP, les voor les</h1>
        <p className={styles.intro}>
          Negen oefeningen die je van nul meenemen naar scroll-gestuurde animaties. Elke les legt op de pagina zelf uit
          wat je gaat doen en welke GSAP-methode je nodig hebt — de code zelf schrijf je zelf, met TODO's als houvast.
          Loop je vast, dan staat er in elke lesmap een <code>oplossing.tsx</code> om te controleren.
        </p>
        <p className={styles.introSub}>Volg de lessen in volgorde: elke les bouwt voort op een begrip uit de vorige.</p>
      </header>

      <ol className={styles.list}>
        {LESSEN.map((les) => (
          <li key={les.nummer} className={styles.item}>
            <Link href={les.slug} className={styles.link}>
              <span className={styles.nummer}>{les.nummer}</span>
              <span className={styles.body}>
                <span className={styles.itemTitle}>{les.titel}</span>
                <span className={styles.itemDesc}>{les.beschrijving}</span>
              </span>
              <span className={styles.arrow}>→</span>
            </Link>
          </li>
        ))}
      </ol>

      <footer className={styles.footer}>
        <p>
          Installeer eerst de dependencies: <code>npm install gsap @gsap/react</code>
        </p>
      </footer>
    </main>
  );
}
