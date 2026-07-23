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
    <section className="py-20 sm:py-28 bg-[#F8F7F4] text-[#171717] relative overflow-hidden border-y border-neutral-300/80 font-heading">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Photo 1 Style Stats Grid with Larger Typography & Vertical Line Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="border-l-2 border-neutral-300/90 pl-6 sm:pl-8 flex items-baseline space-x-4 group hover:border-[#2D5A47] transition-colors py-2"
            >
              {/* Significantly Larger Delicate Number (Photo 1 Style) */}
              <div className="text-6xl sm:text-8xl lg:text-[100px] xl:text-[115px] font-light text-[#171717] tracking-tight leading-none font-heading shrink-0">
                <CounterNumber value={stat.number} suffix={stat.suffix} />
              </div>

              {/* Label & Description Text Next to Top Right of Number */}
              <div className="pt-1 text-neutral-600 font-light">
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#171717] leading-snug mb-1 font-heading">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-[12px] text-neutral-500 font-light leading-relaxed max-w-[160px]">
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
