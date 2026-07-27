"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface GsapCardMarqueeProps {
  children: React.ReactNode[];
  speed?: number; // pixels per second
  className?: string;
}

export default function GsapCardMarquee({
  children,
  speed = 40,
  className = "",
}: GsapCardMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Total width of half the duplicated content
    const totalWidth = track.scrollWidth / 2;
    const duration = totalWidth / speed;

    tweenRef.current = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -totalWidth,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed, children.length]);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  // Duplicate children 3 times to ensure infinite smooth marquee coverage
  const items = [...children, ...children, ...children];

  return (
    <div
      className={`overflow-hidden w-full relative py-4 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Side Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#F8F7F4] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#F8F7F4] to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex items-stretch space-x-6 sm:space-x-8 w-max will-change-transform"
      >
        {items.map((item, idx) => (
          <div key={idx} className="shrink-0 w-[290px] xs:w-[320px] sm:w-[350px]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
