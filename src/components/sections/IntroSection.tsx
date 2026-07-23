"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface IntroSectionProps {
  onNavigateServices: () => void;
}

export default function IntroSection({ onNavigateServices }: IntroSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header - Partnership Agency Positioning */}
        <div className="mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-mono font-medium tracking-[0.25em] text-[#C79B63] uppercase mb-4"
          >
            VISIONS MANAGEMENT — PREMIER PARTNERSHIP AGENCY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] font-heading max-w-5xl text-[#171717]"
          >
            Connecting <span className="text-[#C79B63] font-normal italic font-serif">Your Business</span> To Global Opportunities
          </motion.h2>
        </div>

        {/* Narrative & Action Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
              Visions Management is not a social media agency—we are a premier partnership agency dedicated to connecting your business with elite creators, multinational brand networks, and high-revenue commercial opportunities. We bridge vision with execution.
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
              className="inline-flex items-center space-x-2 text-xs font-light tracking-[0.2em] uppercase text-[#171717] border-b border-[#C79B63] hover:border-[#171717] pb-1 transition-all group hover:text-[#C79B63]"
            >
              <span>EXPLORE PARTNERSHIPS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C79B63] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Visual Banner - Black, Grey, White, Gold Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full h-[360px] sm:h-[500px] overflow-hidden group shadow-2xl border border-neutral-300"
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=2000"
            alt="Visions Management Strategic Partnership"
            className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between text-white">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#C79B63] block">
                OFFICIAL AGENCY MOTO
              </span>
              <h3 className="text-xl sm:text-3xl font-light tracking-wide uppercase font-heading text-white">
                Connecting Your Business
              </h3>
            </div>
            <div className="mt-4 sm:mt-0 text-[10px] text-neutral-300 font-mono tracking-widest uppercase border-b border-[#C79B63] pb-1">
              GLOBAL PARTNERSHIP NETWORK 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
