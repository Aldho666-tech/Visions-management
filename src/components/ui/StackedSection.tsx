"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedSectionProps {
  children: React.ReactNode;
  index: number;
  total: number;
  id?: string;
  bgClassName?: string;
}

export default function StackedSection({
  children,
  index,
  total,
  id,
  bgClassName = "bg-[#F8F7F4]",
}: StackedSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Scale effect for card stacking depth
  const scale = useTransform(scrollYProgress, [0.7, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`sticky top-0 min-h-screen w-full ${bgClassName} shadow-[0_-15px_40px_rgba(0,0,0,0.3)] transition-shadow duration-500`}
      style={{
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="w-full min-h-screen flex flex-col justify-center relative py-12"
      >
        {/* Subtle Tab Number Indicator on Top Right of Each Stack */}
        <div className="absolute top-6 right-8 text-[10px] font-mono tracking-[0.25em] text-[#C79B63] uppercase z-20 pointer-events-none">
          SECTION 0{index + 1} / 0{total}
        </div>

        {children}
      </motion.div>
    </div>
  );
}
