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
          {/* Perfectly Centered Container */}
          <div className="flex flex-col items-center text-center px-4 max-w-lg mx-auto">
            {/* Logo Container with Shimmer Light Sweep (No Scale Pulsing) */}
            <div className="relative overflow-hidden p-2 rounded-2xl">
              {/* Official VM SVG Logo */}
              <motion.img
                src="/logo-vm.svg"
                alt="VISIONS MANAGEMENT Logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-56 h-36 sm:w-72 sm:h-44 object-contain filter drop-shadow-[0_0_40px_rgba(199,155,99,0.5)] relative z-10"
              />

              {/* Shimmer Light Sweep Ray Overlay */}
              <motion.div
                initial={{ x: "-180%" }}
                animate={{ x: "280%" }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 z-20 w-28 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] pointer-events-none mix-blend-overlay"
              />
            </div>

            {/* Gold Accent Pulse Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "180px",
                opacity: [0.3, 1, 0.5, 1],
              }}
              transition={{
                width: { duration: 1, delay: 0.3 },
                opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent mt-3 mb-4"
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
