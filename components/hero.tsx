/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline();
    const splitText = SplitText.create(textRef.current, { type: "words, chars" });

    timeline.to(imgRef.current, {
      opacity: 0.4,
      duration: 1.5,
      ease: "power2.inOut",
    });

    timeline.fromTo(
      splitText.chars,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          from: "center",
          each: 0.05,
        },
      },
      "-=0.8",
    );

    timeline.to(
      ".happyScroll",
      {
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.3,
      },
      "-=0.3",
    );
    timeline.to(
      ".happyScroll",
      {
        y: -10,
        duration: 1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      },
      "-=0.3",
    );
  }, []);

  return (
    <div className="hero relative flex h-full min-h-screen w-full items-center justify-center">
      <img
        ref={imgRef}
        className="absolute inset-0 z-1 h-screen w-full opacity-0"
        src="/img/Gemini_Generated_Image_js2zi6js2zi6js2z.png"
        alt="hero"
      />

      <div className="heading z-2 flex h-screen w-full flex-col">
        <h1 className="my-auto text-center text-8xl" ref={textRef}>
          WINTER IS COMING
        </h1>

        <div className="happyScroll mb-2 block w-full text-center text-lg opacity-0">
          <span>sroll down...</span>
        </div>
      </div>
    </div>
  );
}
