"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Handshake } from "lucide-react";

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
      {/* Background Video with Black/Grey Vignette */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1920"
          className="w-full h-full object-cover scale-105 filter brightness-[0.55] contrast-110 grayscale"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-41559-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-[#171717]" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="h-28 sm:h-32" />

      {/* Center Headline & Subtitle */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center space-y-4"
        >
          {/* Partnership Agency Badge */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] uppercase text-[#C79B63] bg-black/60 border border-[#C79B63]/30 px-4 py-1.5 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-[#C79B63]" />
            <span>PREMIER PARTNERSHIP AGENCY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] font-heading text-white text-balance drop-shadow-xl">
            Connecting Your <span className="font-serif italic font-normal text-[#C79B63]">Business</span>
          </h1>

          <p className="text-xs sm:text-base text-neutral-300 font-light max-w-xl leading-relaxed">
            We architect high-impact strategic brand partnerships, enterprise networks, and luxury talent co-branding across global markets.
          </p>

          <div className="pt-2">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center space-x-2.5 text-xs sm:text-sm font-light tracking-[0.25em] uppercase text-white border-b border-[#C79B63] hover:border-white pb-1.5 transition-all group hover:text-[#C79B63]"
            >
              <span>DISCOVER PARTNERSHIPS</span>
              <ArrowUpRight className="w-4 h-4 text-[#C79B63] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Area: MASSIVE ELEMENTIS-Style Marquee Running Text + Bottom Info Bar */}
      <div className="relative z-10 w-full pb-6 pt-0">
        {/* Huge Edge-to-Edge Running Text (Matching ELEMENTIS Reference Screenshot) */}
        <div className="w-full overflow-hidden select-none py-2 mb-3 border-y border-white/10 bg-black/30 backdrop-blur-sm">
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
                className={`font-heading font-light text-6xl sm:text-8xl md:text-9xl lg:text-[130px] xl:text-[150px] leading-none uppercase tracking-tight ${
                  item === "•" ? "text-[#C79B63]" : "text-white/95 drop-shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ELEMENTIS-Style Bottom 3-Column Info Bar */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="border-t border-white/20 mb-4" />

          <div className="grid grid-cols-12 items-center text-xs text-neutral-300 font-light tracking-wider">
            {/* Left: Downward Arrow Icon */}
            <div className="col-span-2 sm:col-span-2 flex items-center">
              <button
                onClick={onExploreWork}
                className="p-2 rounded-full border border-white/30 hover:border-[#C79B63] hover:bg-white/10 text-white transition-all group"
                aria-label="Scroll down to explore"
              >
                <ArrowDown className="w-4 h-4 text-[#C79B63] transform group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Center: Statement Text (Matching ELEMENTIS Bottom Text) */}
            <div className="col-span-8 sm:col-span-8 text-center text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed">
              Visions Management — Connecting your business with elite global partners.
            </div>

            {/* Right: Scroll to Explore (Matching ELEMENTIS Bottom Text) */}
            <div
              onClick={onExploreWork}
              className="col-span-2 sm:col-span-2 flex items-center justify-end space-x-2 text-[11px] sm:text-xs tracking-[0.15em] text-neutral-200 hover:text-[#C79B63] cursor-pointer transition-colors"
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
