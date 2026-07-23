"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader ran during current session to avoid annoying user on subpage navigation
    const hasSeen = sessionStorage.getItem("visions_preloader_seen");
    if (hasSeen) {
      setLoading(false);
      return;
    }

    // 5 Seconds Duration as requested
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("visions_preloader_seen", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const logoLetters = "VISIONS".split("");

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-lg mx-auto">
            {/* Staggered Animated Letters for Logo VISIONS */}
            <div className="flex space-x-2 sm:space-x-4 font-heading font-light text-3xl sm:text-6xl uppercase text-white leading-none tracking-widest">
              {logoLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle Animated Entrance */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.3 }}
              className="text-[10px] sm:text-xs font-light tracking-[0.45em] text-neutral-400 uppercase mt-4 block"
            >
              BY VISIONS MANAGEMENT
            </motion.span>

            {/* Gold Accent Pulse Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "180px",
                opacity: [0.2, 1, 0.4, 1],
              }}
              transition={{
                width: { duration: 1, delay: 1.6 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-6"
            />

            {/* Animated Tagline Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1 }}
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-[#C79B63] uppercase"
            >
              A STRATEGY-LED CREATOR MARKETING JOURNEY
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
