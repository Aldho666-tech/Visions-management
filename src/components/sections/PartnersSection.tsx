"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const partnerLogos = [
    {
      name: "Certified B Corp",
      text: "Certified B",
      subtext: "Corporation",
      svgIcon: (
        <div className="flex flex-col items-center justify-center font-bold border-2 border-neutral-800 rounded-full w-12 h-12 text-center leading-none p-1">
          <span className="text-base font-serif">B</span>
          <span className="text-[6px] tracking-tighter uppercase font-sans">CORP</span>
        </div>
      ),
    },
    {
      name: "Seed Capital Facility",
      text: "Seed Capital",
      subtext: "Assistance Facility",
      svgIcon: (
        <div className="flex items-center space-x-1.5">
          <div className="w-5 h-8 border-l-4 border-b-4 border-neutral-800 rounded-bl-full transform -rotate-12" />
          <div className="flex flex-col text-left font-mono text-[9px] uppercase font-bold leading-tight">
            <span>SEED CAPITAL</span>
            <span className="text-[7px] text-neutral-600">FACILITY</span>
          </div>
        </div>
      ),
    },
    {
      name: "AFD",
      text: "AFD",
      subtext: "AGENCE FRANÇAISE DE DÉVELOPPEMENT",
      svgIcon: (
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 border-4 border-neutral-800 rounded-full" />
          <div className="flex flex-col text-left font-heading leading-none">
            <span className="text-xl font-bold tracking-tight text-neutral-900">AFD</span>
            <span className="text-[6px] tracking-widest text-neutral-600 font-mono">AGENCE FRANÇAISE</span>
          </div>
        </div>
      ),
    },
    {
      name: "FFEM",
      text: "FFEM",
      subtext: "FONDS FRANÇAIS POUR L'ENVIRONNEMENT",
      svgIcon: (
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center text-white text-[8px] font-bold">
            FFEM
          </div>
          <div className="flex flex-col text-left font-mono text-[7px] text-neutral-700 leading-tight">
            <span className="font-bold">FONDS FRANÇAIS</span>
            <span className="text-[6px]">L'ENVIRONNEMENT</span>
          </div>
        </div>
      ),
    },
    {
      name: "B20 INDONESIA",
      text: "B20",
      subtext: "INDONESIA 2026",
      svgIcon: (
        <div className="flex items-center space-x-1.5">
          <div className="w-6 h-6 border border-neutral-800 rotate-45 flex items-center justify-center text-[7px] font-bold">
            B20
          </div>
          <div className="flex flex-col text-left font-heading text-[10px] font-bold leading-none">
            <span>B20</span>
            <span className="text-[7px] font-mono text-neutral-600">INDONESIA</span>
          </div>
        </div>
      ),
    },
    {
      name: "INDONESIAN CARBON TRADE",
      text: "INDONESIAN TRADE",
      subtext: "ASSOCIATION",
      svgIcon: (
        <div className="flex flex-col items-center text-center font-heading">
          <div className="w-4 h-4 border-t-2 border-r-2 border-neutral-800 rotate-45 mb-0.5" />
          <span className="text-[8px] font-bold tracking-wider uppercase text-neutral-900">INDONESIAN TRADE</span>
          <span className="text-[6px] font-mono text-neutral-600 uppercase">ASSOCIATION</span>
        </div>
      ),
    },
    {
      name: "BAPPENAS",
      text: "BAPPENAS",
      subtext: "KEMENTERIAN PPN",
      svgIcon: (
        <div className="flex items-center space-x-2">
          <div className="flex flex-col space-y-0.5">
            <div className="w-6 h-1 bg-neutral-800" />
            <div className="w-5 h-1 bg-neutral-800" />
            <div className="w-4 h-1 bg-neutral-800" />
          </div>
          <div className="flex flex-col text-left font-heading">
            <span className="text-sm font-bold tracking-wider text-neutral-900 leading-none">BAPPENAS</span>
            <span className="text-[6px] font-mono text-neutral-600">KEMENTERIAN PPN</span>
          </div>
        </div>
      ),
    },
    {
      name: "DUBAI INTERNATIONAL BEST PRACTICES",
      text: "DUBAI AWARD",
      subtext: "BEST PRACTICES AWARD",
      svgIcon: (
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 border-2 border-neutral-800 flex items-center justify-center">
            <div className="w-3 h-3 bg-neutral-800" />
          </div>
          <div className="flex flex-col text-left font-mono text-[7px] text-neutral-700 leading-tight">
            <span className="font-bold">DUBAI INTERNATIONAL</span>
            <span className="text-[6px]">BEST PRACTICES AWARD</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 bg-[#E8EEF4] text-[#171717] relative overflow-hidden font-heading border-y border-neutral-300/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Centered Small Tracked Header (Matching Reference Screenshot) */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.3em] uppercase text-neutral-600">
            SUPPORT & RECOGNITION:
          </span>
        </div>

        {/* Clean Single Horizontal Row of Partner Logos (Matching Reference Screenshot) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-10 lg:gap-6 opacity-85 hover:opacity-100 transition-opacity">
          {partnerLogos.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex items-center justify-center p-2 filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
            >
              {item.svgIcon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
