"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Trophy } from "lucide-react";

interface CampaignsSectionProps {
  onOpenProjectModal: () => void;
}

export default function CampaignsSection({ onOpenProjectModal }: CampaignsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const campaigns = [
    {
      id: "chanel",
      brand: "CHANEL BEAUTÉ",
      tagline: "Strategic Luxury Co-Branding & SE Asia Activation",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1600",
      reach: "12.4 Million",
      engagement: "9.8%",
      contentCount: "48 B2B Activations",
      summary: "Orchestrated strategic B2B co-branding and exclusive creator partnerships for Chanel Beauté across regional luxury flagship launches.",
    },
    {
      id: "samsung",
      brand: "SAMSUNG GALAXY",
      tagline: "Multinational B2B Tech & Creator Co-Branding",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1600",
      reach: "18.6 Million",
      engagement: "11.2%",
      contentCount: "62 B2B Placements",
      summary: "Built cross-industry brand partnerships connecting Samsung Galaxy's flagship ecosystem with top-tier business leaders & digital creators.",
    },
    {
      id: "vogue",
      brand: "VOGUE INDONESIA",
      tagline: "High-Fashion Editorial & Brand Network Co-Curation",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1600",
      reach: "8.9 Million",
      engagement: "8.6%",
      contentCount: "35 High-Impact Features",
      summary: "Co-curated executive B2B network partnerships and VIP creator activations for Vogue Indonesia's annual fashion & leadership summit.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % campaigns.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + campaigns.length) % campaigns.length);
  };

  const current = campaigns[currentIndex];

  return (
    <section id="campaigns" className="py-16 sm:py-24 bg-[#171717] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#C79B63] text-xs font-mono font-medium uppercase tracking-[0.25em] mb-2">
              <Trophy className="w-4 h-4" />
              <span>STRATEGIC PARTNERSHIP CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase leading-tight font-heading text-white">
              Featured <span className="font-serif italic font-normal text-[#C79B63]">Partnerships</span>.
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/20 hover:border-[#C79B63] bg-white/5 hover:bg-[#C79B63] hover:text-[#171717] text-white transition-all"
              aria-label="Previous Campaign"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-mono text-neutral-400">
              0{currentIndex + 1} / 0{campaigns.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/20 hover:border-[#C79B63] bg-white/5 hover:bg-[#C79B63] hover:text-[#171717] text-white transition-all"
              aria-label="Next Campaign"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Magazine Layout Slider - Charcoal Grey Card Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#262626]/90 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Large Image Left */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[460px] rounded-xl overflow-hidden shadow-xl group bg-[#171717]">
              <img
                src={current.image}
                alt={current.brand}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-[#C79B63] text-[#171717] text-[10px] font-mono font-bold uppercase tracking-widest">
                  CASE STUDY #{currentIndex + 1}
                </span>
                <h4 className="text-2xl sm:text-3xl font-light text-white uppercase mt-2 font-heading tracking-wide">
                  {current.brand}
                </h4>
              </div>
            </div>

            {/* Case Study Details Right */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[#C79B63] text-xs font-mono tracking-widest uppercase block mb-1">
                  {current.tagline}
                </span>
                <h3 className="text-2xl sm:text-4xl font-light text-[#F8F7F4] uppercase tracking-tight mb-4 font-heading">
                  {current.brand}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {current.summary}
                </p>
              </div>

              {/* Case Study Key Metrics */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-white/10 text-center bg-[#171717]/80 rounded-xl">
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">REACH</span>
                  <span className="text-base sm:text-xl font-light text-[#C79B63] font-mono">{current.reach}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">ENGAGEMENT</span>
                  <span className="text-base sm:text-xl font-light text-[#F8F7F4] font-mono">{current.engagement}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">ACTIVATIONS</span>
                  <span className="text-base sm:text-xl font-light text-[#C79B63] font-mono">{current.contentCount.split(" ")[0]}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenProjectModal}
                  className="w-full py-3.5 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-light text-xs uppercase tracking-[0.2em] rounded-none transition-all shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Explore Partnership Brief</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
