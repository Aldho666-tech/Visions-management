"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StackedSectionProps {
  children: React.ReactNode;
  id?: string;
  index: number;
  totalSections: number;
  bgClassName?: string;
  heightClass?: string; // Default h-[200vh], customizable per section length
}

export default function StackedSection({
  children,
  id,
  index,
  totalSections,
  bgClassName = "bg-[#F8F7F4]",
  heightClass = "h-[200vh]",
}: StackedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check desktop breakpoint (lg: 1024px and up)
  useEffect(() => {
    const checkBreakpoint = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale 1 -> 0.9 & Opacity 1 -> 0.6 as section gets covered by next section
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "28px"]);

  const isLast = index === totalSections - 1;

  // On Mobile (< lg:), render standard unpinned layout for optimal mobile performance
  if (!isDesktop) {
    return (
      <section id={id} className={`relative w-full ${bgClassName} py-12 border-t border-white/5`}>
        {children}
      </section>
    );
  }

  return (
    <div ref={sectionRef} className={`relative w-full ${heightClass}`}>
      <motion.section
        id={id}
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          borderRadius: isLast ? "0px" : borderRadius,
          zIndex: (index + 1) * 10,
        }}
        className={`sticky top-0 h-screen w-full ${bgClassName} shadow-[0_-20px_50px_rgba(0,0,0,0.4)] overflow-hidden transform-gpu will-change-transform flex flex-col justify-center border-t border-white/10`}
      >
        {children}
      </motion.section>
    </div>
  );
}
