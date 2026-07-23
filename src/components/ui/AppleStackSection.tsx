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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Apple-style scaling down & subtle dimming when covered by next section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "24px"]);

  const isLast = index === totalSections - 1;

  return (
    <div ref={containerRef} className="relative h-[120vh]">
      <motion.section
        id={id}
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          borderRadius: isLast ? "0px" : borderRadius,
          zIndex: (index + 1) * 5,
        }}
        className={`sticky top-0 min-h-screen w-full ${bgClassName} shadow-[0_-10px_40px_rgba(0,0,0,0.3)] overflow-hidden transform-gpu will-change-transform border-t border-white/10`}
      >
        {children}
      </motion.section>
    </div>
  );
}
