"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function WhyUsSection() {
  // Active card index state - default to first card (0)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cards = [
    {
      id: "01",
      title: "Strategy First",
      desc: "Every campaign starts with empirical data, audience demographics, and strategic positioning before creative execution.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="currentColor" />
          <circle cx="28" cy="20" r="12" stroke="currentColor" />
          <circle cx="20" cy="28" r="12" stroke="currentColor" />
          <circle cx="28" cy="28" r="12" stroke="currentColor" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "Curated Talents & Expansion",
      desc: "We represent vetted creators and macro/micro KOLs across Indonesia who genuinely align with your core brand identity and values.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="6" width="20" height="20" rx="4" transform="rotate(45 24 16)" stroke="currentColor" />
          <rect x="14" y="18" width="20" height="20" rx="4" transform="rotate(45 24 28)" stroke="currentColor" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Creative Excellence",
      desc: "In-house studio production, styling, and high-impact visual aesthetics designed to elevate commercial ROI.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="18" stroke="currentColor" />
          <circle cx="24" cy="24" r="12" stroke="currentColor" />
          <circle cx="24" cy="24" r="6" stroke="currentColor" fill="currentColor" fillOpacity="0.1" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            {/* Small Category Badge */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#2D5A47] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 block"
            >
              VALUES
            </motion.span>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#171717] leading-[1.08] font-heading"
            >
              Why Brands Choose,
              <br />
              <span className="font-semibold text-[#171717]">VISIONS.</span>
            </motion.h2>
          </div>

          {/* Right Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-600 max-w-sm text-sm sm:text-base font-light leading-relaxed"
          >
            We bridge the gap between creative storytelling and commercial growth with an international agency standard.
          </motion.p>
        </div>

        {/* Dynamic Interactive Cards Grid: Click/Hover to morph from Image 1 shape to Image 2 shape */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`p-8 sm:p-10 flex flex-col justify-between min-h-[440px] cursor-pointer transition-all duration-500 ease-in-out group ${
                  isActive
                    ? "bg-[#EBE7DF] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[90px] shadow-md border border-transparent"
                    : "bg-white border border-neutral-200/90 rounded-[12px] hover:border-neutral-300 shadow-sm"
                }`}
              >
                {/* Top Icon - Color adapts to active state */}
                <div className={`mb-12 transition-colors duration-300 ${isActive ? "text-[#171717]" : "text-[#2D5A47]"}`}>
                  {item.iconSvg}
                </div>

                {/* Middle & Bottom Content */}
                <div>
                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-medium text-[#171717] mb-3 leading-snug font-heading">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed mb-12">
                    {item.desc}
                  </p>

                  {/* Bottom Circle Arrow Button ↗ - Morphs between outlined (Image 1) and dark filled (Image 2) */}
                  <div className="pt-2">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#2D5A47] text-white shadow-md scale-105"
                          : "border border-neutral-300 text-neutral-700 group-hover:border-neutral-500"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
