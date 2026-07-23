"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const partnerLogos = [
    {
      name: "Certified B Corp",
      svgIcon: (
        <div className="flex flex-col items-center justify-center font-bold border-2 border-[#1E293B] rounded-full w-10 h-10 text-center leading-none p-0.5 shrink-0">
          <span className="text-sm font-serif">B</span>
          <span className="text-[5px] tracking-tighter uppercase font-sans">CORP</span>
        </div>
      ),
    },
    {
      name: "Seed Capital Facility",
      svgIcon: (
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-4 h-7 border-l-4 border-b-4 border-[#1E293B] rounded-bl-full transform -rotate-12" />
          <div className="flex flex-col text-left font-mono text-[8px] uppercase font-bold leading-tight text-[#1E293B]">
            <span>SEED CAPITAL</span>
            <span className="text-[6.5px] text-[#475569]">ASSISTANCE FACILITY</span>
          </div>
        </div>
      ),
    },
    {
      name: "AFD",
      svgIcon: (
        <div className="flex items-center space-x-2 shrink-0">
          <div className="w-8 h-8 border-4 border-[#1E293B] rounded-full" />
          <div className="flex flex-col text-left font-heading leading-none">
            <span className="text-lg font-bold tracking-tight text-[#1E293B]">AFD</span>
            <span className="text-[5.5px] tracking-widest text-[#475569] font-mono">AGENCE FRANÇAISE DE DÉVELOPPEMENT</span>
          </div>
        </div>
      ),
    },
    {
      name: "FFEM",
      svgIcon: (
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#1E293B] flex items-center justify-center text-white text-[7px] font-bold">
            FFEM
          </div>
          <div className="flex flex-col text-left font-mono text-[6.5px] text-[#334155] leading-tight">
            <span className="font-bold">FONDS FRANÇAIS POUR</span>
            <span className="text-[5.5px] text-[#475569]">L'ENVIRONNEMENT MONDIAL</span>
          </div>
        </div>
      ),
    },
    {
      name: "B20 INDONESIA",
      svgIcon: (
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-5 h-7 bg-[#1E293B] text-white flex items-center justify-center text-[7px] font-bold rounded-t-full">
            B20
          </div>
          <div className="flex flex-col text-left font-heading text-[9px] font-bold leading-none text-[#1E293B]">
            <span>B20</span>
            <span className="text-[6.5px] font-mono text-[#475569]">INDONESIA</span>
          </div>
        </div>
      ),
    },
    {
      name: "INDONESIAN CARBON TRADE",
      svgIcon: (
        <div className="flex flex-col items-center text-center font-heading shrink-0">
          <div className="w-3.5 h-3.5 border-t-2 border-r-2 border-[#1E293B] rotate-45 mb-0.5" />
          <span className="text-[7.5px] font-bold tracking-wider uppercase text-[#1E293B]">INDONESIAN CARBON</span>
          <span className="text-[5.5px] font-mono text-[#475569] uppercase">TRADE ASSOCIATION</span>
        </div>
      ),
    },
    {
      name: "BAPPENAS",
      svgIcon: (
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="flex flex-col space-y-0.5">
            <div className="w-5 h-1 bg-[#1E293B]" />
            <div className="w-4 h-1 bg-[#1E293B]" />
            <div className="w-3 h-1 bg-[#1E293B]" />
          </div>
          <div className="flex flex-col text-left font-heading">
            <span className="text-xs font-bold tracking-wider text-[#1E293B] leading-none">BAPPENAS</span>
            <span className="text-[5.5px] font-mono text-[#475569]">KEMENTERIAN PPN</span>
          </div>
        </div>
      ),
    },
    {
      name: "DUBAI INTERNATIONAL BEST PRACTICES",
      svgIcon: (
        <div className="flex items-center space-x-1.5 shrink-0">
          <div className="w-5 h-5 border-2 border-[#1E293B] flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-[#1E293B]" />
          </div>
          <div className="flex flex-col text-left font-mono text-[6.5px] text-[#334155] leading-tight">
            <span className="font-bold">DUBAI INTERNATIONAL</span>
            <span className="text-[5.5px] text-[#475569]">BEST PRACTICES AWARD</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="partners" className="py-10 sm:py-12 bg-[#DFE7EC] text-[#1E293B] relative overflow-hidden font-heading border-y border-[#CBD5E1]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Small Tracked Header (Matching Reference Screenshot) */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.35em] uppercase text-[#334155]">
            SUPPORT & RECOGNITION:
          </span>
        </div>

        {/* Clean Single Horizontal Row of Partner Logos (Matching Reference Screenshot) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 sm:gap-8 lg:gap-4 opacity-90 hover:opacity-100 transition-opacity">
          {partnerLogos.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex items-center justify-center p-1.5 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              {item.svgIcon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
