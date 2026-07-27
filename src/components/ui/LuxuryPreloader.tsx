"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant quick preloader fade out
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light px-4"
        >
          {/* Centered Logo & Title */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Logo VM */}
            <motion.img
              src="/logo-vm.svg"
              alt="VM Logo Icon"
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-16 sm:w-28 sm:h-20 object-contain"
            />

            {/* VISIONS MANAGEMENT Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-light tracking-[0.3em] sm:tracking-[0.45em] text-sm sm:text-2xl uppercase text-white leading-none whitespace-nowrap"
            >
              VISIONS MANAGEMENT
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
