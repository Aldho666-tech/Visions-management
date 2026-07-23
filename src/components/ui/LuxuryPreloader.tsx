"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs preloader on every initial open & page refresh
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

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
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-xl mx-auto">
            {/* Extra Large Prominent Animated Official VM SVG Logo Icon Only */}
            <motion.img
              src="/logo-vm.svg"
              alt="VISIONS MANAGEMENT Logo"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: [0.4, 1, 0.75, 1],
                scale: [0.95, 1.08, 0.98, 1.04],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-64 h-64 sm:w-96 sm:h-96 object-contain filter drop-shadow-[0_0_60px_rgba(199,155,99,0.5)]"
            />

            {/* Gold Accent Pulse Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: "220px",
                opacity: [0.2, 1, 0.4, 1],
              }}
              transition={{
                width: { duration: 1.2, delay: 0.4 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
              }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-8"
            />

            {/* Animated Tagline Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
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
