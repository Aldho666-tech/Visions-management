"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface IntroSectionProps {
  onNavigateServices: () => void;
}

export default function IntroSection({ onNavigateServices }: IntroSectionProps) {
  return (
    <section id="about" className="py-24 sm:py-36 bg-[#F8F7F4] text-[#171717] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header - HOTSTONE Layout */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-light tracking-[0.2em] text-neutral-500 uppercase mb-4"
          >
            VISIONS MANAGEMENT Creative Agency — Digital Growth & Talent Roster
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.15] font-heading max-w-5xl"
          >
            A <span className="text-[#C79B63] font-normal">Strategy-Led</span> Creator Marketing Journey
          </motion.h2>
        </div>

        {/* Narrative & Action Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
              Instead of chasing temporary trends, we architect enduring digital influence. From influencer campaigns, content production, social media strategy, to long-term talent representation—we scale brands through authentic storytelling and measurable performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:text-right"
          >
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center space-x-2 text-xs font-light tracking-[0.2em] uppercase text-[#171717] border-b border-[#171717]/40 hover:border-[#171717] pb-1 transition-all group"
            >
              <span>Our Services</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Editorial Photo Visual Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-[400px] sm:h-[600px] overflow-hidden group shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000"
            alt="Studio Photoshoot Visions Management"
            className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between text-white">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-light text-[#C79B63] block mb-1">
                EDITORIAL PRODUCTION & VISUAL DIRECTION
              </span>
              <h3 className="text-xl sm:text-3xl font-light tracking-wide uppercase font-heading">
                High Fashion & Digital Influencer Campaigns
              </h3>
            </div>
            <div className="mt-4 sm:mt-0 text-[10px] text-neutral-300 font-mono tracking-widest uppercase border-b border-white/40 pb-1">
              JAKARTA STUDIO 01
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
