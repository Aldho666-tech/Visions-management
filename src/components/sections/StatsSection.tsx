"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Trophy, Award, Zap } from "lucide-react";

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
      // Ease out quad
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
    <span ref={ref} className="font-extrabold tracking-tighter">
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
      icon: Trophy,
    },
    {
      number: 120,
      suffix: "+",
      label: "Brand Campaigns",
      desc: "High-impact digital & influencer product launches.",
      icon: Award,
    },
    {
      number: 18,
      suffix: "M+",
      label: "Monthly Organic Reach",
      desc: "Combined impression reach across TikTok, IG & YouTube.",
      icon: Zap,
    },
    {
      number: 96,
      suffix: "%",
      label: "Client Satisfaction",
      desc: "Long-term brand retention rate & repeat campaign partners.",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#1D2622] text-[#F8F7F4] relative overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#171717]/80 border border-white/10 hover:border-[#C79B63]/60 p-8 rounded-3xl transition-all shadow-xl text-center group flex flex-col items-center justify-between"
              >
                <div className="w-12 h-12 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63] mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#F8F7F4] to-[#C79B63] mb-2 font-heading">
                    <CounterNumber value={stat.number} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-[#F8F7F4] mb-2 font-heading">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
