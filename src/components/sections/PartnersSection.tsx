"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const brandLogos = [
    {
      name: "CHANEL",
      logoElement: (
        <span className="font-serif tracking-[0.35em] text-lg sm:text-xl font-bold text-[#1E293B] uppercase">
          CHANEL
        </span>
      ),
    },
    {
      name: "DIOR",
      logoElement: (
        <span className="font-serif tracking-[0.3em] text-lg sm:text-xl font-medium text-[#1E293B] uppercase">
          DIOR
        </span>
      ),
    },
    {
      name: "VOGUE",
      logoElement: (
        <span className="font-serif tracking-[0.22em] text-lg sm:text-xl font-bold italic text-[#1E293B] uppercase">
          VOGUE
        </span>
      ),
    },
    {
      name: "GUCCI",
      logoElement: (
        <span className="font-serif tracking-[0.35em] text-base sm:text-lg font-bold text-[#1E293B] uppercase">
          GUCCI
        </span>
      ),
    },
    {
      name: "HERMÈS",
      logoElement: (
        <span className="font-serif tracking-[0.3em] text-base sm:text-lg font-semibold text-[#1E293B] uppercase">
          HERMÈS
        </span>
      ),
    },
    {
      name: "PRADA",
      logoElement: (
        <span className="font-sans tracking-[0.35em] text-base sm:text-lg font-extrabold text-[#1E293B] uppercase">
          PRADA
        </span>
      ),
    },
    {
      name: "SEPHORA",
      logoElement: (
        <span className="font-sans tracking-[0.28em] text-base sm:text-lg font-bold text-[#1E293B] uppercase">
          SEPHORA
        </span>
      ),
    },
    {
      name: "SAMSUNG",
      logoElement: (
        <span className="font-sans tracking-[0.25em] text-base sm:text-lg font-black text-[#1E293B] uppercase">
          SAMSUNG
        </span>
      ),
    },
  ];

  return (
    <section id="partners" className="py-10 sm:py-12 bg-[#DFE7EC] text-[#1E293B] relative overflow-hidden font-heading border-y border-[#CBD5E1]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Tracked Header */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.35em] uppercase text-[#334155]">
            GLOBAL BRAND PARTNERS & CLIENTS:
          </span>
        </div>

        {/* Single Horizontal Row of Major Luxury Global Brand Logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-10 lg:gap-6 opacity-90 hover:opacity-100 transition-opacity">
          {brandLogos.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex items-center justify-center px-3 py-1.5 filter contrast-125 hover:scale-105 transition-all duration-300"
            >
              {item.logoElement}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
