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
      title: "Talent Management & Representation",
      category: "TALENT ROSTER",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
      desc: "Exclusive representation, career trajectory strategy, brand deals negotiation, and long-term creator growth across major digital platforms.",
    },
    {
      title: "Influencer & KOL Campaigns",
      category: "CAMPAIGN ACTIVATION",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000",
      desc: "End-to-end influencer campaign strategy, verified creator matching, viral TikTok & Instagram Reels execution, and performance tracking.",
    },
    {
      title: "Content & Commercial Video Production",
      category: "STUDIO PRODUCTION",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      desc: "Studio-quality visual storytelling, short-form video production, UGC content creation, and commercial advertorial shoots.",
    },
    {
      title: "Social Media & Brand Growth",
      category: "DIGITAL STRATEGY",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000",
      desc: "Full channel oversight, content calendar curation, community management, and data-driven organic audience growth.",
    },
    {
      title: "Paid Performance Ads & Growth",
      category: "PERFORMANCE MARKETING",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      desc: "High-ROI paid social advertising campaigns across Meta, TikTok Spark Ads, and YouTube paid performance ecosystems.",
    },
    {
      title: "Commercial Photography & Styling",
      category: "VISUAL DIRECTION",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
      desc: "Editorial, lifestyle, lookbook, and product photography with full aesthetic creative direction and wardrobe styling.",
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
    <section id="services" className="py-24 sm:py-36 bg-[#1D2622] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title (Matching Reference Screenshot) */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-light tracking-tight font-heading text-white uppercase"
          >
            Integrated Service Solutions
          </motion.h2>
        </div>

        {/* 3-Column Card Grid / Slider (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                </div>

                {/* Content Details */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-light tracking-wide text-white leading-snug font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom View Details Link (Matching Reference Screenshot) */}
                <div className="pt-2">
                  <button
                    onClick={onOpenProjectModal}
                    className="inline-flex items-center space-x-2 text-xs font-light tracking-wider text-white border-b border-[#C79B63] hover:border-white pb-1 transition-all group-hover:text-[#C79B63]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Slider Controls & Progress Bar (Matching Reference Screenshot) */}
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
