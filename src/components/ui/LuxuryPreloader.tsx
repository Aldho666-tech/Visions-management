"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if preloader ran during current session to avoid annoying user on subpage navigation
    const hasSeen = sessionStorage.getItem("visions_preloader_seen");
    if (hasSeen) {
      setLoading(false);
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("visions_preloader_seen", "true");
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 bg-[#171717] text-[#F8F7F4] flex flex-col items-center justify-center select-none overflow-hidden font-heading font-light"
        >
          <div className="flex flex-col items-center text-center px-4 max-w-lg mx-auto">
            {/* Animated Brand Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-heading font-light tracking-[0.45em] sm:tracking-[0.65em] text-3xl sm:text-5xl uppercase text-white leading-none">
                VISIONS
              </h1>
              <span className="text-[10px] sm:text-xs font-light tracking-[0.45em] text-neutral-400 uppercase mt-3">
                BY VISIONS MANAGEMENT
              </span>
            </motion.div>

            {/* Gold Accent Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "180px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#C79B63] to-transparent my-8"
            />

            {/* Progress Counter & Bar */}
            <div className="w-56 sm:w-72 space-y-3">
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                <span>CREATIVE MARKETING AGENCY</span>
                <span className="text-[#C79B63] font-bold">
                  {progress.toString().padStart(2, "0")}%
                </span>
              </div>

              <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div
                  className="h-full bg-[#C79B63]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
