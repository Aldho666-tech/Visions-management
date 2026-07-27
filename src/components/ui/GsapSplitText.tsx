"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapSplitTextProps {
  text: string;
  className?: string;
  type?: "chars" | "words";
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function GsapSplitText({
  text,
  className = "",
  type = "words",
  delay = 0,
  duration = 0.8,
  stagger = 0.04,
}: GsapSplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".split-item");
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          yPercent: 110,
          opacity: 0,
          rotateX: -20,
        },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration,
          delay,
          stagger,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [type, delay, duration, stagger, text]);

  if (type === "chars") {
    const words = text.split(" ");
    return (
      <div ref={containerRef} className={`inline-block ${className}`}>
        {words.map((word, wIdx) => (
          <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-hidden align-top">
            {word.split("").map((char, cIdx) => (
              <span
                key={cIdx}
                className="split-item inline-block transform-gpu will-change-transform"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    );
  }

  // Type === "words"
  const words = text.split(" ");
  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, wIdx) => (
        <span key={wIdx} className="inline-block overflow-hidden mr-[0.25em] align-top py-0.5">
          <span className="split-item inline-block transform-gpu will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}
