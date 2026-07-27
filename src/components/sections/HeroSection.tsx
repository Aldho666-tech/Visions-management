"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

interface HeroSectionProps {
  onExploreWork?: () => void;
  onStartProject?: () => void;
}

export default function HeroSection({ onExploreWork }: HeroSectionProps) {
  const marqueeItems = [
    "STRATEGIC PARTNERSHIP",
    "•",
    "THE RIGHT PARTNERS CHANGE EVERYTHING",
    "•",
    "COMMUNITY & COLLABORATION",
    "•",
    "VISIONS MANAGEMENT",
    "•",
  ];

  return (
    <section id="vision" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#171717]">
      {/* Background Media */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-[#171717]" />
      </div>

      {/* Top Spacer */}
      <div className="h-24 sm:h-32" />

      {/* Center Animated Content */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto py-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Main Headline with SplitText Character/Word Reveal */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.15] font-heading text-white drop-shadow-2xl uppercase max-w-5xl py-2">
            <div className="block">
              <GsapSplitText text="The Right" type="chars" delay={0.2} stagger={0.03} />
              {" "}
              <span className="font-serif italic font-normal text-[#C79B63]">
                <GsapSplitText text="Partners" type="chars" delay={0.4} stagger={0.03} />
              </span>
            </div>
            <div className="block mt-1">
              <GsapSplitText text="Change Everything" type="chars" delay={0.6} stagger={0.025} />
            </div>
          </h1>

          {/* Action Button */}
          <GsapSlideUpText delay={0.95} yOffset={25}>
            <div className="pt-4 flex justify-center">
              <Link
                href="/services"
                className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-light text-xs sm:text-sm tracking-[0.2em] uppercase border border-white/40 hover:border-white transition-all duration-300 flex items-center space-x-2.5 group"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowUpRight className="w-4 h-4 text-[#C79B63] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </GsapSlideUpText>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="relative z-10 w-full pb-0 pt-0">
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

        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-14 pb-2">
          <div className="border-t border-white/20 mb-2" />

          <div className="flex items-center justify-between text-xs text-neutral-300 font-light tracking-wider">
            <div className="flex items-center">
              <button
                onClick={onExploreWork}
                className="p-1 rounded-full border border-white/30 hover:border-[#C79B63] hover:bg-white/10 text-white transition-all group"
                aria-label="Scroll down to explore"
              >
                <ArrowDown className="w-3.5 h-3.5 text-[#C79B63] transform group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="text-center text-[10px] xs:text-[11px] sm:text-xs text-neutral-300 max-w-xl mx-auto leading-relaxed px-2 truncate sm:whitespace-normal">
              Visions Management — Connecting your business with the right partners.
            </div>

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
