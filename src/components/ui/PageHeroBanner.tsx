"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeroBannerProps {
  category: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  imageUrl: string;
}

export default function PageHeroBanner({
  category,
  title,
  highlightTitle,
  subtitle,
  imageUrl,
}: PageHeroBannerProps) {
  return (
    <section className="relative h-[420px] sm:h-[500px] w-full flex items-center justify-center overflow-hidden bg-[#171717] text-[#F8F7F4]">
      {/* Half-screen Banner Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover filter brightness-[0.55] contrast-105 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/40 to-black/70" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs font-light tracking-[0.3em] text-[#C79B63] uppercase block mb-3"
        >
          {category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-light tracking-tight uppercase font-heading text-balance"
        >
          {title} {highlightTitle && <span className="text-[#C79B63] font-normal">{highlightTitle}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
