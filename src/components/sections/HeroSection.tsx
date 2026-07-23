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
          className="w-full h-full object-cover scale-105 filter brightness-[0.5] contrast-110 grayscale"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-41559-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Black & Gold Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#171717]" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="h-28 sm:h-32" />

      {/* Center Headline & CTA */}
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

          <div className="pt-4">
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

      {/* Bottom Area: Marquee Running Text + Bottom Info Line */}
      <div className="relative z-10 w-full pb-6 pt-0">
        {/* Edge-to-Edge Marquee */}
        <div className="w-full overflow-hidden select-none py-4 mb-2 border-y border-white/10 bg-black/40 backdrop-blur-sm">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 28,
            }}
            className="flex items-center whitespace-nowrap space-x-8 sm:space-x-12 w-max py-1"
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={index}
                className={`font-heading font-extralight text-3xl sm:text-5xl md:text-6xl leading-relaxed uppercase tracking-tight ${
                  item === "•" ? "text-[#C79B63]" : "text-neutral-200"
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Info Bar */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14">
          <div className="grid grid-cols-12 items-center text-xs text-neutral-400 font-light tracking-wider">
            {/* Left: Downward Arrow Button */}
            <div className="col-span-2 sm:col-span-2 flex items-center">
              <button
                onClick={onExploreWork}
                className="p-2 rounded-full border border-white/30 hover:border-[#C79B63] hover:bg-white/10 text-white transition-all group"
                aria-label="Scroll down to explore"
              >
                <ArrowDown className="w-4 h-4 text-[#C79B63] transform group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Center: Official Statement */}
            <div className="col-span-8 sm:col-span-8 text-center text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed uppercase tracking-widest font-mono">
              Visions Management — Connecting your business with elite global partners.
            </div>

            {/* Right: Scroll to Explore */}
            <div
              onClick={onExploreWork}
              className="col-span-2 sm:col-span-2 flex items-center justify-end space-x-2 text-[11px] uppercase tracking-[0.2em] text-neutral-300 hover:text-[#C79B63] cursor-pointer transition-colors"
            >
              <span className="hidden sm:inline">EXPLORE</span>
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
