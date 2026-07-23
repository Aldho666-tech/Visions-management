"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Film, TrendingUp, Globe, Sparkles } from "lucide-react";

export default function WhyUsSection() {
  const reasons = [
    {
      icon: Target,
      num: "01",
      title: "STRATEGY FIRST",
      desc: "Every campaign starts with empirical data, audience demographics, and strategic positioning before creative execution.",
    },
    {
      icon: Users,
      num: "02",
      title: "CURATED TALENTS",
      desc: "We represent vetted creators and macro/micro KOLs who genuinely align with your core brand identity and values.",
    },
    {
      icon: Film,
      num: "03",
      title: "CREATIVE EXCELLENCE",
      desc: "In-house editorial studio production, styling, and high-impact visual aesthetics designed to captivate audience scroll.",
    },
    {
      icon: TrendingUp,
      num: "04",
      title: "PERFORMANCE DRIVEN",
      desc: "We prioritize conversions, brand lift, engagement, and sales over vanity metrics with full real-time dashboard analytics.",
    },
    {
      icon: Globe,
      num: "05",
      title: "NATIONWIDE NETWORK",
      desc: "Instant access to a diverse ecosystem of creators across Indonesia spanning lifestyle, beauty, tech, food, and fashion.",
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-[#C79B63] text-xs font-light tracking-[0.25em] uppercase mb-3"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VISIONS ADVANTAGE</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight uppercase leading-tight font-heading"
            >
              WHY BRANDS CHOOSE <span className="text-[#C79B63] font-normal">VISIONS.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 max-w-md text-xs sm:text-sm font-light leading-relaxed"
          >
            We bridge the gap between creative storytelling and commercial growth with an international agency standard.
          </motion.p>
        </div>

        {/* Distinct 5-Card White Light Mode Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-[#D8D8D8]/50 hover:border-[#C79B63] p-8 sm:p-10 rounded-[28px] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Minimalist Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F7F4] group-hover:bg-[#171717] flex items-center justify-center text-[#171717] group-hover:text-[#C79B63] transition-colors mb-8">
                    <IconComponent className="w-5 h-5 stroke-[1.5]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-light tracking-wider uppercase text-[#171717] mb-3 group-hover:text-[#C79B63] transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-xs font-light leading-relaxed mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Card Footer Bar (ADVANTAGE 01 | 100% VETTED) */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-400">
                  <span>ADVANTAGE {item.num}</span>
                  <span className="text-[#C79B63] font-semibold">100% VETTED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
