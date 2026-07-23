"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AppleStackSectionProps {
  children: React.ReactNode;
  id?: string;
  index: number;
  totalSections: number;
  bgClassName?: string;
}

export default function AppleStackSection({
  children,
  id,
  index,
  totalSections,
  bgClassName = "bg-[#F8F7F4]",
}: AppleStackSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this section as it enters and leaves viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth fluid scaling down when covered by the next section
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0.75]);
  const borderRadius = useTransform(scrollYProgress, [0.5, 1], ["0px", "20px"]);

  const isLast = index === totalSections - 1;

  return (
    <div ref={containerRef} className="relative w-full">
      <motion.section
        id={id}
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          borderRadius: isLast ? "0px" : borderRadius,
          zIndex: (index + 1) * 5,
        }}
        className={`sticky top-0 min-h-screen w-full ${bgClassName} shadow-[0_-15px_45px_rgba(0,0,0,0.35)] overflow-hidden transform-gpu will-change-transform border-t border-white/10 flex flex-col justify-center`}
      >
        {children}
      </motion.section>
    </div>
  );
}
