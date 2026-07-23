"use client";

import React from "react";
import { motion } from "framer-motion";

interface PureStackSectionProps {
  children: React.ReactNode;
  index: number;
  id?: string;
  bgClassName?: string;
}

export default function PureStackSection({
  children,
  index,
  id,
  bgClassName = "bg-[#F8F7F4]",
}: PureStackSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${bgClassName} overflow-visible border-t border-white/5 shadow-xl`}
      style={{
        zIndex: (index + 1) * 5,
      }}
    >
      {children}
    </motion.section>
  );
}
