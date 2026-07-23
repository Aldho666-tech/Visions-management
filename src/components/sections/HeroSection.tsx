"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export default function HeroSection({ onExploreWork, onStartProject }: HeroSectionProps) {
  return (
    <section id="vision" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#171717]">
      {/* Background Video with Performance Preload & Dark Overlay */}
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
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Hero Content - HOTSTONE Minimal Editorial Aesthetic */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-[#F8F7F4] pt-28 pb-16 flex flex-col items-center">
        {/* Main Headline - Light Delicate Font */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] font-heading max-w-4xl text-balance"
        >
          Your Influence Journey
        </motion.h1>

        {/* Minimal Underlined Read More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <button
            onClick={onExploreWork}
            className="inline-flex items-center space-x-2 text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-white border-b border-white/60 hover:border-white pb-1.5 transition-all group"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Chevron Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer text-white/80 hover:text-white transition-colors"
        onClick={onExploreWork}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7 stroke-[1.25]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
