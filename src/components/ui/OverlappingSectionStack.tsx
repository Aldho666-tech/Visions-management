"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlappingSectionStackProps {
  children: React.ReactNode;
  index: number;
  total: number;
  id?: string;
  bgClassName?: string;
}

export default function OverlappingSectionStack({
  children,
  index,
  total,
  id,
  bgClassName = "bg-[#F8F7F4]",
}: OverlappingSectionStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Tumpang Tindih Scroll Transformations (Scale + Corner Rounding + Opacity Damping)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.91]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], [36, 48]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative w-full ${index > 0 ? "-mt-10 sm:-mt-16" : ""}`}
      style={{
        zIndex: (index + 1) * 10,
      }}
    >
      <div
        className={`sticky top-0 min-h-screen w-full ${bgClassName} ${
          index > 0
            ? "rounded-t-[36px] sm:rounded-t-[52px] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-white/10"
            : ""
        } overflow-hidden transition-shadow duration-500`}
      >
        <motion.div
          style={{
            scale,
            opacity,
            borderRadius,
          }}
          className="w-full min-h-screen flex flex-col justify-center relative py-6"
        >
          {/* Section Indicator Badge */}
          <div className="absolute top-6 right-8 text-[10px] font-mono tracking-[0.25em] text-[#C79B63] uppercase z-20 pointer-events-none">
            STACK 0{index + 1} / 0{total}
          </div>

          {children}
        </motion.div>
      </div>
    </div>
  );
}
