"use client";

import React from "react";
import { motion } from "framer-motion";

interface OverlappingSectionProps {
  children: React.ReactNode;
  id?: string;
  bgClassName?: string;
  overlapIndex?: number;
}

export default function OverlappingSection({
  children,
  id,
  bgClassName = "bg-[#F8F7F4]",
  overlapIndex = 1,
}: OverlappingSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative w-full ${bgClassName} ${
        overlapIndex > 0
          ? "-mt-10 sm:-mt-16 rounded-t-[32px] sm:rounded-t-[44px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
          : ""
      } overflow-hidden`}
      style={{
        zIndex: overlapIndex * 5,
      }}
    >
      {children}
    </motion.section>
  );
}
