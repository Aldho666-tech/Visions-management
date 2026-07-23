"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Trophy } from "lucide-react";

interface CampaignsSectionProps {
  onOpenProjectModal: () => void;
}

export default function CampaignsSection({ onOpenProjectModal }: CampaignsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const campaigns = [
    {
      id: "nike",
      brand: "Nike Indonesia",
      tagline: "Air Max Unlimited — Influencer Launch",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1600",
      reach: "4.5 Million",
      engagement: "8.2%",
      contentCount: "45 Commercial Videos",
      summary: "Activated 18 top fitness & street-style creators across Jakarta & Bali to showcase the new Air Max collection through high-energy short-form Reels and TikTok dance hooks.",
    },
    {
      id: "samsung",
      brand: "Samsung Galaxy",
      tagline: "Fold & Flip Series — Creative UGC Activation",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1600",
      reach: "6.8 Million",
      engagement: "9.4%",
      contentCount: "62 UGC & Tech Review Reels",
      summary: "Strategic product seeding & lifestyle storytelling highlighting camera versatility, generating viral organic trends and 350K+ direct website link clicks.",
    },
    {
      id: "zara",
      brand: "ZARA Fashion",
      tagline: "Autumn High Fashion Editorial Lookbook",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600",
      reach: "3.2 Million",
      engagement: "7.9%",
      contentCount: "30 Editorial Lookbook Videos",
      summary: "Curated 10 high-fashion micro & macro creators for exclusive runway lookbook shoots in studio and urban settings, driving record sell-outs.",
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
    <section id="campaigns" className="py-24 sm:py-32 bg-[#171717] text-[#F8F7F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#C79B63] text-xs font-bold uppercase tracking-widest mb-3">
              <Trophy className="w-4 h-4" />
              <span>EDITORIAL MAGAZINE CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-tight font-heading">
              Featured <span className="text-[#C79B63]">Campaigns</span>.
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-white/20 hover:border-[#C79B63] bg-white/5 hover:bg-[#C79B63] hover:text-[#171717] text-white transition-all"
              aria-label="Previous Campaign"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-mono text-neutral-400">
              0{currentIndex + 1} / 0{campaigns.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full border border-white/20 hover:border-[#C79B63] bg-white/5 hover:bg-[#C79B63] hover:text-[#171717] text-white transition-all"
              aria-label="Next Campaign"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Magazine Layout Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1D2622]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Large Image Left */}
            <div className="lg:col-span-7 relative h-[350px] sm:h-[480px] rounded-2xl overflow-hidden shadow-xl group">
              <img
                src={current.image}
                alt={current.brand}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3.5 py-1.5 rounded-full bg-[#C79B63] text-[#171717] text-[10px] font-extrabold uppercase tracking-widest">
                  CASE STUDY #{currentIndex + 1}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white uppercase mt-2 font-heading">
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
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F8F7F4] uppercase tracking-tight mb-4 font-heading">
                  {current.brand}
                </h3>
                <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                  {current.summary}
                </p>
              </div>

              {/* Case Study Key Metrics */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10 text-center bg-[#171717]/60 rounded-2xl">
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">REACH</span>
                  <span className="text-base sm:text-xl font-extrabold text-[#C79B63] font-mono">{current.reach}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">ENGAGEMENT</span>
                  <span className="text-base sm:text-xl font-extrabold text-[#F8F7F4] font-mono">{current.engagement}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-neutral-400 font-mono">CONTENT</span>
                  <span className="text-base sm:text-xl font-extrabold text-[#C79B63] font-mono">{current.contentCount.split(" ")[0]}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenProjectModal}
                  className="w-full py-4 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 group"
                >
                  <span>Read Full Case Study</span>
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
