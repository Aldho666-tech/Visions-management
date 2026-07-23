"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs preloader on every initial open & page refresh
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

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
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light"
        >
          {/* Tight & Compact Centered Container */}
          <div className="flex flex-col items-center text-center px-4 max-w-lg mx-auto">
            {/* VM SVG Monogram Logo */}
            <motion.img
              src="/logo-vm.svg"
              alt="VISIONS MANAGEMENT Logo"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: [0.5, 1, 0.8, 1],
                scale: [0.96, 1.02, 0.98, 1.01],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-32 h-24 sm:w-44 sm:h-32 object-contain filter drop-shadow-[0_0_25px_rgba(199,155,99,0.4)]"
            />

            {/* Tight Gold Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "160px",
                opacity: [0.3, 1, 0.4, 1],
              }}
              transition={{
                width: { duration: 0.8, delay: 0.3 },
                opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-3 sm:my-4"
            />

            {/* Tight Tagline Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#C79B63] uppercase leading-tight"
            >
              A STRATEGY-LED CREATOR MARKETING JOURNEY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
