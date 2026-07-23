"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const row1Brands = [
    "NIKE",
    "SAMSUNG",
    "ZARA",
    "SEPHORA",
    "UNIQLO",
    "SHOPEE",
    "TOKOPEDIA",
    "GRAB",
    "L'ORÉAL",
    "TIKTOK",
    "HYUNDAI",
    "GOTO",
  ];

  const row2Brands = [
    "SOMETHINC",
    "ERIGO",
    "BITTERSWEET",
    "LOVE BONITO",
    "GENTLE WOMAN",
    "BEAUTYHAUL",
    "SKINTIFIC",
    "DEAR ME BEAUTY",
    "AVOSKIN",
    "MAKE OVER",
    "MAYBELLINE",
    "WARDAH",
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading font-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        {/* Top Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-full bg-[#171717] text-[#C79B63] mx-auto flex items-center justify-center mb-8 shadow-xl"
        >
          <Quote className="w-8 h-8" />
        </motion.div>

        {/* Testimonial Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight uppercase leading-tight font-heading max-w-4xl mx-auto text-balance text-[#171717]"
        >
          &ldquo;Visions transformed our influencer strategy into a <span className="text-[#C79B63] font-normal">measurable</span> business growth engine.&rdquo;
        </motion.blockquote>

        {/* Client Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center space-y-2"
        >
          <div className="flex items-center space-x-1 text-[#C79B63]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <p className="text-sm font-light uppercase tracking-widest text-[#171717]">
            VP of Digital Marketing — Global Apparel Brand
          </p>
          <span className="text-xs text-neutral-500 font-mono">Verified Campaign Case Study • 2026</span>
        </motion.div>
      </div>

      {/* 2-ROW DUAL-DIRECTION RUNNING LOGO MARQUEE (Matching Reference Screenshot) */}
      <div className="w-full pt-12 border-t border-[#D8D8D8]/70">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 block mb-8 text-center font-bold">
          TRUSTED BY INDUSTRY LEADING BRANDS
        </span>

        <div className="space-y-4 overflow-hidden w-full relative">
          {/* Subtle Side Vignette Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F7F4] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F7F4] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Running Left to Right → */}
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex space-x-4 sm:space-x-6 pr-4 sm:pr-6 shrink-0"
            >
              {[...row1Brands, ...row1Brands].map((brand, idx) => (
                <div
                  key={`row1-${brand}-${idx}`}
                  className="bg-white border border-[#D8D8D8]/70 hover:border-[#C79B63] px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <span className="font-heading font-light tracking-[0.25em] text-xs sm:text-sm text-[#171717] uppercase">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Running Right to Left ← */}
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 32,
              }}
              className="flex space-x-4 sm:space-x-6 pr-4 sm:pr-6 shrink-0"
            >
              {[...row2Brands, ...row2Brands].map((brand, idx) => (
                <div
                  key={`row2-${brand}-${idx}`}
                  className="bg-white border border-[#D8D8D8]/70 hover:border-[#C79B63] px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <span className="font-heading font-light tracking-[0.25em] text-xs sm:text-sm text-[#171717] uppercase">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
