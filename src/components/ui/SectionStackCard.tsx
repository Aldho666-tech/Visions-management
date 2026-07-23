"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionStackCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  id?: string;
  bgClassName?: string;
}

export default function SectionStackCard({
  children,
  index,
  total,
  id,
  bgClassName = "bg-[#F8F7F4]",
}: SectionStackCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Card Stacking Depth Transformation as next section covers this card
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 28]);

  return (
    <div
      ref={containerRef}
      id={id}
      className="relative w-full"
      style={{
        zIndex: index + 1,
      }}
    >
      <div className={`sticky top-0 min-h-screen w-full ${bgClassName} overflow-hidden shadow-[0_-15px_50px_rgba(0,0,0,0.3)] transition-shadow duration-500`}>
        <motion.div
          style={{
            scale,
            opacity,
            borderRadius,
          }}
          className="w-full min-h-screen flex flex-col justify-center relative py-6"
        >
          {/* Section Stack Card Badge */}
          <div className="absolute top-6 right-8 text-[10px] font-mono tracking-[0.25em] text-[#C79B63] uppercase z-20 pointer-events-none">
            SECTION 0{index + 1} / 0{total}
          </div>

          {children}
        </motion.div>
      </div>
    </div>
  );
}
