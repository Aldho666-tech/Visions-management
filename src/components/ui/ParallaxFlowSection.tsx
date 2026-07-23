"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxFlowSectionProps {
  children: React.ReactNode;
  id?: string;
  bgClassName?: string;
  noPadding?: boolean; // useful for Hero banners that want edge-to-edge
}

export default function ParallaxFlowSection({
  children,
  id,
  bgClassName = "bg-[#F8F7F4]",
  noPadding = false,
}: ParallaxFlowSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Check mobile breakpoint (md: 768px) to reduce parallax intensity
  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  // Track local scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax Depth: Background moves much slower, Foreground moves slightly slower
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-5%" : "-20%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-2%" : "-5%"]);

  return (
    <section 
      id={id} 
      ref={ref} 
      className={`relative w-full ${bgClassName} overflow-hidden`}
    >
      {/* Background Parallax Layer */}
      <motion.div
        style={{ y: yBg }}
        className={`absolute top-0 left-0 w-full h-[125%] z-0 pointer-events-none ${bgClassName}`}
      />

      {/* Foreground Content Layer */}
      <motion.div
        style={{ y: yFg }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`relative z-10 w-full h-full flex flex-col justify-center ${noPadding ? "" : "py-24 sm:py-32"}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
