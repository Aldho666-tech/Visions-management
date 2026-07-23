"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function CounterNumber({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(end * (1 - (1 - progress) * (1 - progress)));
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-light tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Creators Represented",
      desc: "Top-tier exclusive & partner KOLs across major niches.",
    },
    {
      number: 120,
      suffix: "+",
      label: "Brand Campaigns",
      desc: "High-impact digital & influencer product launches.",
    },
    {
      number: 18,
      suffix: "M+",
      label: "Monthly Organic Reach",
      desc: "Combined impression reach across TikTok, IG & YouTube.",
    },
    {
      number: 96,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Long-term brand retention rate & repeat campaign partners.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Photo 1 Style Stats Grid - Clean Unclipped Vertical Stack with Left Line Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: idx * 0.18 }}
              className="relative border-l-2 border-neutral-300/80 pl-6 sm:pl-8 flex flex-col justify-between group hover:border-[#2D5A47] transition-colors py-2 overflow-hidden"
            >
              {/* Color Block Curtain Wipe Animation (1-by-1 Sweep as you scroll) */}
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.18 + 0.1, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#2D5A47] origin-left z-20 pointer-events-none"
              />

              {/* Huge Delicate Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.18 + 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl xl:text-[84px] font-light text-[#171717] tracking-tight leading-none font-heading mb-4 shrink-0"
              >
                <CounterNumber value={stat.number} suffix={stat.suffix} />
              </motion.div>

              {/* Label & Description Text Placed Directly Below Number (Zero Clipping!) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.18 + 0.3 }}
                className="text-neutral-600 font-light"
              >
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#171717] leading-snug mb-1.5 font-heading">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
