"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenProjectModal?: () => void;
}

export default function ServicesSection({ onOpenProjectModal }: ServicesSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const servicesList = [
    {
      title: "Strategic Brand Partnerships & Co-Branding",
      category: "B2B COLLABORATIONS",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000",
      desc: "Curating high-impact enterprise joint ventures, brand co-marketing agreements, and executive business networking across global luxury sectors.",
    },
    {
      title: "Haute Fashion & Luxury Influencer Activations",
      category: "CREATOR NETWORK",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1000",
      desc: "Connecting your business with top 1% fashion icons, VIP influencer seeding, private runway activations, and verified talent representation.",
    },
    {
      title: "Commercial Studio & Film Production",
      category: "CINEMATIC PRODUCTION",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      desc: "High-end commercial video production, editorial campaign direction, luxury lookbooks, and short-form digital advertorial shoots.",
    },
    {
      title: "Global Talent Management & Representation",
      category: "EXCLUSIVE ROSTER",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
      desc: "Full contract negotiation, career trajectory planning, global sponsor sourcing, and executive representation for premier digital talent.",
    },
    {
      title: "Enterprise Market & Network Expansion",
      category: "BUSINESS GROWTH",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
      desc: "Empirical expansion strategies connecting your business with new regional markets, enterprise sponsors, and multinational distribution channels.",
    },
    {
      title: "Executive Media Strategy & Intelligence",
      category: "STRATEGIC ADVISORY",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
      desc: "Data-driven audience sentiment tracking, campaign ROI intelligence, media placement curation, and long-term brand equity architecture.",
    },
  ];

  const visibleCardsCount = 3;
  const maxSlideIndex = Math.max(0, servicesList.length - visibleCardsCount);

  const handleNext = () => {
    setActiveSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev <= 0 ? maxSlideIndex : prev - 1));
  };

  const currentItems = servicesList.slice(activeSlide, activeSlide + visibleCardsCount);
  if (currentItems.length < visibleCardsCount) {
    currentItems.push(...servicesList.slice(0, visibleCardsCount - currentItems.length));
  }

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#262626] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-[#C79B63] block mb-2">
            AGENCY CAPABILITIES
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-light tracking-tight font-heading text-white uppercase"
          >
            Partnership & Growth <span className="font-serif italic font-normal text-[#C79B63]">Solutions</span>
          </motion.h2>
        </div>

        {/* 3-Column Card Grid / Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="wait">
            {currentItems.map((item, idx) => (
              <motion.div
                key={`${item.title}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col justify-between space-y-6 group"
              >
                {/* Image Thumbnail */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#171717]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717]/90 text-[#F8F7F4] text-[9px] tracking-[0.2em] font-mono uppercase px-2.5 py-1 border border-white/10">
                    {item.category}
                  </div>
                </div>

                {/* Content Details */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-white leading-snug font-heading group-hover:text-[#C79B63] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom View Details Link */}
                <div className="pt-2">
                  <button
                    onClick={onOpenProjectModal}
                    className="inline-flex items-center space-x-2 text-xs font-light tracking-wider text-white border-b border-[#C79B63] hover:border-white pb-1 transition-all group-hover:text-[#C79B63]"
                  >
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Slider Controls & Progress Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          {/* Progress Bar Indicator */}
          <div className="w-48 sm:w-64 h-[2px] bg-white/20 relative overflow-hidden">
            <motion.div
              className="h-full bg-[#C79B63]"
              animate={{
                width: `${((activeSlide + 1) / (maxSlideIndex + 1)) * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>

          {/* Previous / Next Arrows */}
          <div className="flex items-center space-x-6 text-white">
            <button
              onClick={handlePrev}
              className="p-1 hover:text-[#C79B63] transition-colors focus:outline-none"
              aria-label="Previous Service"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>
            <button
              onClick={handleNext}
              className="p-1 hover:text-[#C79B63] transition-colors focus:outline-none"
              aria-label="Next Service"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
