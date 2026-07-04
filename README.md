# GSAP leertraject voor Next.js — van nul naar ScrollTrigger

Dit is een reeks losse oefenpagina's. Elke les is een eigen map met een
`page.tsx` en `page.module.css`. Kopieer de map naar `app/(iets)/page.tsx`
in jouw Next.js project, of hernoem de map naar bijvoorbeeld `app/les-01/`.

## Installatie (eenmalig)

```bash
npm install gsap @gsap/react
```

`gsap` is de animatiebibliotheek zelf. `@gsap/react` geeft je de
`useGSAP()` hook, de door GSAP zelf aanbevolen manier om GSAP in React te
gebruiken (regelt automatisch cleanup, zie les 6). Documentatie:

- GSAP core: https://gsap.com/docs/v3/GSAP
- React integratie: https://gsap.com/resources/React

Alle pagina's zijn client components (`"use client"` bovenaan), want GSAP
manipuleert de DOM en dat mag alleen in de browser, niet tijdens server
rendering.

## Volgorde

| #   | Les                                                          | Wat je leert                                                |
| --- | ------------------------------------------------------------ | ----------------------------------------------------------- |
| 1   | Eerste tween (`les-01-eerste-tween`)                         | `gsap.to()`, refs, basisyntax                               |
| 2   | `from()` / `fromTo()` (`les-02-from-fromto`)                 | Animeren vanuit een startwaarde                             |
| 3   | Timelines (`les-03-timeline`)                                | Meerdere animaties na elkaar / overlappend                  |
| 4   | Stagger (`les-04-stagger`)                                   | Meerdere elementen met vertraging animeren                  |
| 5   | Easing (`les-05-easing`)                                     | Het "gevoel" van een animatie sturen                        |
| 6   | `useGSAP()` hook (`les-06-useGSAP-hook`)                     | De juiste, veilige manier in React (context + cleanup)      |
| 7   | ScrollTrigger basis (`les-07-scrolltrigger-basis`)           | Animeren op basis van scrollpositie                         |
| 8   | ScrollTrigger scrub & pin (`les-08-scrolltrigger-scrub-pin`) | Animatie koppelen aan scroll-snelheid, elementen vastzetten |
| 9   | Hover interacties (`les-09-hover-interacties`)               | Animaties op muisinteractie, meerdere refs beheren          |

Doe ze in deze volgorde: elke les bouwt voort op begrippen uit de vorige.

## Hoe te gebruiken

0. run `npm run dev` in je project, zodat de Next.js dev server draait.
1. Lees eerst het commentaarblok bovenaan `page.tsx` — daar staat de opdracht
   en uitleg.
2. Kijk naar de werkende code eronder.
3. Verander zelf iets (duur, easing, delay, kleur) en kijk wat er gebeurt.
   Dat is de snelste manier om GSAP te leren aanvoelen.
4. Volg de docs-link in de comment voor de volledige API van de gebruikte
   methode.
