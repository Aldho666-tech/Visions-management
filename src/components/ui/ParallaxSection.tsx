"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  id?: string;
  bgClassName?: string;
  speed?: number; // e.g. -30 for upward float, 30 for downward float
}

export default function ParallaxSection({
  children,
  id,
  bgClassName = "bg-[#F8F7F4]",
  speed = -30,
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth Parallax Vertical Motion Shift
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative w-full ${bgClassName} overflow-hidden border-t border-white/5 shadow-xl`}
    >
      <motion.div style={{ y }} className="w-full relative py-2">
        {children}
      </motion.div>
    </section>
  );
}
