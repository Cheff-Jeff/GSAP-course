"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScroll() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!videoRef.current) {
      return;
    }

    const setupAnimation = () => {
      videoRef.current.pause();

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          pin: true,
          scrub: true,
          start: "top top",
          end: "+=3000",
          markers: false,
        },
      });

      timeline.fromTo(
        videoRef.current,
        {
          currentTime: 0,
        },
        {
          currentTime: videoRef.current.duration - 0.5,
          ease: "none",
          snap: { currentTime: 1 / 24 },
        },
      );
    };

    if (videoRef.current.readyState >= 1) {
      setupAnimation();
    } else {
      videoRef.current.addEventListener("loadedmetadata", setupAnimation, { once: true });
    }

    return () => videoRef.current?.removeEventListener("loadedmetadata", setupAnimation);
  }, []);

  return (
    <video
      ref={videoRef}
      src="/img/Epic_dark_fantasy_landscape_a.mp4"
      className="block w-full"
      muted
      playsInline
      autoPlay
      preload="auto"
    ></video>
  );
}
