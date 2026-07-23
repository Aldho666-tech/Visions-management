"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Camera, Sparkles, Users } from "lucide-react";

interface CreatorsSectionProps {
  onOpenTalentModal: () => void;
}

export default function CreatorsSection({ onOpenTalentModal }: CreatorsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Lifestyle", "Fashion", "Beauty", "Gaming", "Food", "Travel"];

  const creators = [
    {
      name: "Clara Vance",
      category: "Lifestyle",
      handle: "@claravance",
      reach: "1.2M",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      location: "Jakarta",
    },
    {
      name: "Julian Rivera",
      category: "Fashion",
      handle: "@julianrivera",
      reach: "850K",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      location: "Bali",
    },
    {
      name: "Sonia Tan",
      category: "Beauty",
      handle: "@soniatan.glow",
      reach: "2.4M",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      location: "Jakarta",
    },
    {
      name: "Kevin 'Nexus' Aris",
      category: "Gaming",
      handle: "@nexusgaming",
      reach: "3.1M",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
      location: "Bandung",
    },
    {
      name: "Maya & Chef Dan",
      category: "Food",
      handle: "@tastetales.id",
      reach: "980K",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800",
      location: "Surabaya",
    },
    {
      name: "Leo Travel Log",
      category: "Travel",
      handle: "@leowanderlust",
      reach: "1.5M",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      location: "Bali",
    },
  ];

  const filteredCreators =
    activeFilter === "All"
      ? creators
      : creators.filter((c) => c.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="creators" className="py-24 sm:py-32 bg-[#F8F7F4] text-[#171717] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Title & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-[#C79B63] text-xs font-bold uppercase tracking-widest mb-3">
              <Users className="w-4 h-4" />
              <span>CURATED ROSTER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase leading-tight font-heading">
              Featured <span className="text-[#C79B63]">Creators</span>.
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-[#171717] text-[#F8F7F4] shadow-md"
                    : "bg-white text-neutral-600 hover:bg-[#171717]/10 border border-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3x2 Creator Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCreators.map((creator) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={creator.name}
                className="group relative rounded-3xl overflow-hidden bg-[#171717] shadow-xl aspect-[3/4] cursor-pointer"
              >
                {/* Image */}
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-6 left-6 flex items-center space-x-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    {creator.category}
                  </span>
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight font-heading">
                        {creator.name}
                      </h3>
                      <p className="text-xs text-[#C79B63] font-mono font-medium flex items-center space-x-1">
                        <Camera className="w-3.5 h-3.5 inline mr-1" />
                        <span>{creator.handle}</span>
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="block text-[10px] text-neutral-400 font-mono uppercase">REACH</span>
                      <span className="text-base font-extrabold text-[#F8F7F4] font-mono">{creator.reach}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                    <span>{creator.location}, Indonesia</span>
                    <span className="text-[#C79B63] font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>View Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Creators Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenTalentModal}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#171717] hover:bg-[#1D2622] text-[#F8F7F4] text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-xl hover:scale-105 group"
          >
            <span>View All Creators</span>
            <ArrowUpRight className="w-4 h-4 text-[#C79B63] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
