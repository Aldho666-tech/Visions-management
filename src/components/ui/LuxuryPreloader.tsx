"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs preloader on every initial open & page refresh
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

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
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light pt-8 sm:pt-16"
        >
          {/* Centered Large Container Shifted Downwards */}
          <div className="flex flex-col items-center text-center px-4 max-w-2xl mx-auto transform translate-y-6 sm:translate-y-12">
            {/* Huge Prominent VM SVG Monogram Logo */}
            <motion.img
              src="/logo-vm.svg"
              alt="VISIONS MANAGEMENT Logo"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{
                opacity: [0.4, 1, 0.75, 1],
                scale: [0.95, 1.06, 0.98, 1.03],
              }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-72 h-56 sm:w-[460px] sm:h-80 object-contain filter drop-shadow-[0_0_55px_rgba(199,155,99,0.5)] -mb-8"
            />

            {/* Tight Gold Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "220px",
                opacity: [0.2, 1, 0.4, 1],
              }}
              transition={{
                width: { duration: 1, delay: 0.3 },
                opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-4"
            />

            {/* Tagline Text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#C79B63] uppercase leading-tight"
            >
              A STRATEGY-LED CREATOR MARKETING JOURNEY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
