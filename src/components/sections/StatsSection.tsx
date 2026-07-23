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
    <section className="py-20 sm:py-28 bg-[#F8F7F4] text-[#171717] relative overflow-hidden border-y border-neutral-200 font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Photo 1 Style Stats Grid with Vertical Line Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="border-l border-neutral-300 pl-6 sm:pl-8 flex items-start space-x-3.5 sm:space-x-4 group hover:border-[#2D5A47] transition-colors"
            >
              {/* Huge Delicate Number (Photo 1 Style) */}
              <div className="text-5xl sm:text-7xl lg:text-8xl xl:text-[88px] font-light text-[#171717] tracking-tight leading-none font-heading shrink-0">
                <CounterNumber value={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label & Subtitle Text Next to Top Right of Number */}
              <div className="pt-1 text-neutral-600 font-light">
                <h3 className="text-xs sm:text-sm font-medium text-[#171717] leading-tight mb-1 font-heading">
                  {stat.label}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-500 leading-normal max-w-[135px]">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
