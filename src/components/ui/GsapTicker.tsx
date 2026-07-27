"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export type TickerItem = string | { name: string; logo?: string };

interface GsapTickerProps {
  items: TickerItem[];
  speed?: number; // pixels per second
  direction?: "left" | "right";
  className?: string;
  separatorChar?: string;
  theme?: "dark" | "light";
}

export default function GsapTicker({
  items,
  speed = 80,
  direction = "left",
  className = "",
  separatorChar = "·",
  theme = "dark",
}: GsapTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const duration = totalWidth / speed;

    animRef.current = gsap.fromTo(
      track,
      { x: direction === "left" ? 0 : -totalWidth },
      {
        x: direction === "left" ? -totalWidth : 0,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      animRef.current?.kill();
    };
  }, [speed, direction, items]);

  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  const isLight = theme === "light";

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div ref={trackRef} className="flex items-center will-change-transform whitespace-nowrap">
        {allItems.map((item, idx) => {
          const isObject = typeof item === "object" && item !== null;
          const name = isObject ? item.name : item;
          const logo = isObject ? item.logo : undefined;

          return (
            <span key={idx} className="inline-flex items-center shrink-0">
              {logo ? (
                <div className="px-6 sm:px-10 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className={`h-7 sm:h-9 max-w-[140px] sm:max-w-[180px] object-contain transition-all duration-300 ${
                      isLight
                        ? "filter brightness-0 opacity-70 hover:opacity-100"
                        : "filter brightness-0 invert opacity-85 hover:opacity-100"
                    }`}
                  />
                </div>
              ) : (
                <span
                  className={`font-heading font-light tracking-[0.3em] uppercase text-sm sm:text-base px-6 sm:px-8 transition-colors duration-300 cursor-default ${
                    isLight ? "text-neutral-800 hover:text-[#C79B63]" : "text-neutral-200 hover:text-[#C79B63]"
                  }`}
                >
                  {name}
                </span>
              )}
              <span className={`text-[#C79B63] text-xs shrink-0 px-2 ${isLight ? "opacity-60" : "opacity-50"}`}>
                {separatorChar}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
