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
    "INFLUENCE",
    "•",
    "CREATIVITY",
    "•",
    "STRATEGY",
    "•",
    "INNOVATION",
    "•",
    "AMPLITUDE",
    "•",
    "STORYTELLING",
    "•",
    "VISIONS",
    "•",
  ];

  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#171717]">
      {/* Background Video with Performance Preload & Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover scale-105 filter brightness-[0.55] contrast-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-41559-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
      </div>

      {/* Top Spacer for Navbar Breathing Room */}
      <div className="h-28 sm:h-32" />

      {/* Main Hero Body & Gigantic Marquee Running Text */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full">
        {/* Main Headline Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center px-4 max-w-4xl mx-auto mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] font-heading text-white text-balance">
            Your Influence Journey
          </h1>

          <div className="mt-6">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-white border-b border-white/60 hover:border-white pb-1.5 transition-all group"
            >
              <span>Read More</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Elementis-Style Gigantic Panoramic Running Marquee Text */}
        <div className="w-full overflow-hidden select-none py-4 border-y border-white/10 bg-black/20 backdrop-blur-[2px]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
            className="flex items-center whitespace-nowrap space-x-8 sm:space-x-12 w-max"
          >
            {/* Duplicated Marquee array for continuous infinite scroll */}
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className={`font-heading font-extralight text-[9vw] sm:text-[11vw] md:text-[12vw] leading-none uppercase tracking-tight ${
                  item === "•" ? "text-[#C79B63]" : "text-white/85"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Elementis-Style Bottom Footer Bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-16 pb-8 pt-4">
        {/* Thin Horizontal Divider */}
        <div className="border-t border-white/20 mb-6" />

        <div className="grid grid-cols-12 items-center text-xs text-neutral-300 font-light tracking-wider">
          {/* Left: Downward Arrow Click Indicator */}
          <div className="col-span-2 sm:col-span-1 flex items-center">
            <button
              onClick={onExploreWork}
              className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white transition-all group"
              aria-label="Scroll down to explore"
            >
              <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Center: Brand Subtitle Statement */}
          <div className="col-span-8 sm:col-span-8 text-center text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed">
            A strategy-led creator marketing journey connecting iconic brands with elite creators.
          </div>

          {/* Right: Scroll to Explore Indicator */}
          <div
            onClick={onExploreWork}
            className="col-span-2 sm:col-span-3 flex items-center justify-end space-x-2 text-[11px] uppercase tracking-[0.2em] text-neutral-300 hover:text-white cursor-pointer transition-colors"
          >
            <span className="hidden sm:inline">Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#C79B63]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
