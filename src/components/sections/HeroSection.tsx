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
          className="w-full h-full object-cover scale-105 filter brightness-[0.6] contrast-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-41559-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="h-28 sm:h-32" />

      {/* Center Headline & CTA */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] font-heading text-white text-balance drop-shadow-lg">
            Your Influence Journey
          </h1>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-light tracking-[0.22em] uppercase text-white border-b border-white/60 hover:border-white pb-1.5 transition-all group"
            >
              <span>Read More</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Area: Edge-to-Edge Unclipped Marquee + Bottom Info Line */}
      <div className="relative z-10 w-full pb-6 pt-0">
        {/* Edge-to-Edge Full Viewport Width Marquee (Unconstrained horizontally & vertically) */}
        <div className="w-full overflow-hidden select-none py-4 mb-2">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
            className="flex items-center whitespace-nowrap space-x-8 sm:space-x-12 w-max py-2"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className={`font-heading font-extralight text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-relaxed uppercase tracking-tight ${
                  item === "•" ? "text-[#C79B63]" : "text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Snug Thin Horizontal Divider & Bottom Info Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14">
          <div className="border-t border-white/25 mb-4" />

          {/* Bottom 3-Column Info Bar */}
          <div className="grid grid-cols-12 items-center text-xs text-neutral-300 font-light tracking-wider">
            {/* Left: Downward Arrow Button */}
            <div className="col-span-2 sm:col-span-2 flex items-center">
              <button
                onClick={onExploreWork}
                className="p-2 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white transition-all group"
                aria-label="Scroll down to explore"
              >
                <ArrowDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Center: Statement Text */}
            <div className="col-span-8 sm:col-span-8 text-center text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed">
              A strategy-led creator marketing journey connecting iconic brands with elite creators.
            </div>

            {/* Right: Scroll to Explore */}
            <div
              onClick={onExploreWork}
              className="col-span-2 sm:col-span-2 flex items-center justify-end space-x-2 text-[11px] uppercase tracking-[0.2em] text-neutral-300 hover:text-white cursor-pointer transition-colors"
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
      </div>
    </section>
  );
}
