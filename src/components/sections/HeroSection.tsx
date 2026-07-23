"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export default function HeroSection({ onExploreWork, onStartProject }: HeroSectionProps) {
  const marqueeItems = [
    "PARTNERSHIP",
    "•",
    "CONNECTING YOUR BUSINESS",
    "•",
    "STRATEGY",
    "•",
    "ENTERPRISE",
    "•",
    "INNOVATION",
    "•",
    "VISIONS MANAGEMENT",
    "•",
  ];

  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#171717]">
      {/* Background Media - High-End Executive B2B Partnership Theme */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-110 grayscale"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-corporate-business-people-meeting-around-a-table-41584-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black Vignette Overlay for Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#171717]" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="h-24 sm:h-32" />

      {/* Center Animated Headline & Action Button */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto py-8">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Animated Headline Words with Silk Reveal & Gold Glow */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] sm:leading-[1.05] font-heading text-white text-balance drop-shadow-2xl overflow-hidden py-1">
            <motion.span
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="inline-block mr-2.5 sm:mr-4"
            >
              Connecting
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.38 }}
              className="inline-block mr-2.5 sm:mr-4"
            >
              Your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                textShadow: [
                  "0 0 20px rgba(199,155,99,0.3)",
                  "0 0 35px rgba(199,155,99,0.6)",
                  "0 0 20px rgba(199,155,99,0.3)",
                ],
              }}
              transition={{
                duration: 0.9,
                delay: 0.56,
                textShadow: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="inline-block font-serif italic font-normal text-[#C79B63] drop-shadow-[0_0_25px_rgba(199,155,99,0.4)]"
            >
              Business
            </motion.span>
          </h1>

          {/* Action Button Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-2"
          >
            <button
              onClick={onExploreWork}
              className="inline-flex items-center space-x-2 text-[11px] xs:text-xs sm:text-sm font-light tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white border-b border-[#C79B63] hover:border-white pb-1 sm:pb-1.5 transition-all group hover:text-[#C79B63]"
            >
              <span>DISCOVER PARTNERSHIPS</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C79B63] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Area: Pure Floating Marquee & Zero-Gap Bottom Info Bar */}
      <div className="relative z-10 w-full pb-0 pt-0">
        {/* Pure Floating Running Text */}
        <div className="w-full overflow-hidden select-none py-1 mb-1 bg-transparent">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
            className="flex items-center whitespace-nowrap space-x-4 sm:space-x-8 w-max py-0.5"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className={`font-heading font-light text-2xl xs:text-3xl sm:text-5xl lg:text-6xl leading-none uppercase tracking-tight ${
                  item === "•" ? "text-[#C79B63]" : "text-white/90 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom 3-Column Info Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14 pb-2">
          <div className="border-t border-white/20 mb-2" />

          <div className="flex items-center justify-between text-xs text-neutral-300 font-light tracking-wider">
            {/* Left: Downward Arrow Icon */}
            <div className="flex items-center">
              <button
                onClick={onExploreWork}
                className="p-1 rounded-full border border-white/30 hover:border-[#C79B63] hover:bg-white/10 text-white transition-all group"
                aria-label="Scroll down to explore"
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#C79B63] transform group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Center: Statement Text */}
            <div className="text-center text-[10px] xs:text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed px-2 truncate sm:whitespace-normal">
              Visions Management — Connecting your business with elite global partners.
            </div>

            {/* Right: Scroll to Explore */}
            <div
              onClick={onExploreWork}
              className="flex items-center justify-end space-x-1.5 sm:space-x-2 text-[10px] xs:text-[11px] sm:text-xs tracking-[0.15em] text-neutral-200 hover:text-[#C79B63] cursor-pointer transition-colors shrink-0"
            >
              <span className="hidden xs:inline">Scroll to Explore</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#C79B63]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
