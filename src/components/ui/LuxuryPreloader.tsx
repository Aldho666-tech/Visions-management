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
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light px-4"
        >
          {/* Perfectly Centered Responsive Container */}
          <div className="flex flex-col items-center text-center w-full max-w-xl mx-auto">
            {/* VM SVG Icon + Sweep Light */}
            <div className="relative overflow-hidden p-2 rounded-2xl mb-4 sm:mb-6">
              <motion.img
                src="/logo-vm.svg"
                alt="VM Logo Icon"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-20 h-16 sm:w-32 sm:h-24 md:w-36 md:h-28 object-contain filter drop-shadow-[0_0_35px_rgba(199,155,99,0.45)] relative z-10"
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
                className="absolute inset-y-0 z-20 w-24 sm:w-28 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] pointer-events-none mix-blend-overlay"
              />
            </div>

            {/* ELEMENTIS-Style Responsive Tracked Typography (Fits 320px - 1440px seamlessly) */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading font-light tracking-[0.2em] xs:tracking-[0.3em] sm:tracking-[0.48em] md:tracking-[0.55em] text-[13px] xs:text-base sm:text-2xl md:text-3xl uppercase text-white leading-none whitespace-nowrap max-w-full"
            >
              VISIONS MANAGEMENT
            </motion.h1>

            {/* Gold Accent Pulse Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "100%",
                maxWidth: "200px",
                opacity: [0.3, 1, 0.5, 1],
              }}
              transition={{
                width: { duration: 1, delay: 0.4 },
                opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-4 sm:my-5"
            />

            {/* Subtitle Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-[9px] sm:text-xs font-mono tracking-[0.18em] sm:tracking-[0.28em] text-[#C79B63] uppercase leading-tight max-w-[280px] sm:max-w-none"
            >
              A STRATEGY-LED CREATOR MARKETING JOURNEY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
