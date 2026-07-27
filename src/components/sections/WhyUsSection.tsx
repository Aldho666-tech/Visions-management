"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

export default function WhyUsSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cards = [
    {
      id: "01",
      title: "Strategic Connections",
      desc: "We connect brands with the right businesses, communities, and industry to create valuable long-term collaborations.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="12" stroke="currentColor" />
          <circle cx="28" cy="20" r="12" stroke="currentColor" />
          <circle cx="20" cy="28" r="12" stroke="currentColor" />
          <circle cx="28" cy="28" r="12" stroke="currentColor" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "End-to-End Execution",
      desc: "From planning to activation, we manage every stage with clear strategies, efficient execution, and measurable outcomes.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="6" width="20" height="20" rx="4" transform="rotate(45 24 16)" stroke="currentColor" />
          <rect x="14" y="18" width="20" height="20" rx="4" transform="rotate(45 24 28)" stroke="currentColor" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "Long-Term Growth",
      desc: "Every partnership is designed to strengthen brand positioning, unlock new opportunities, and support long-term commercial success.",
      iconSvg: (
        <svg className="w-10 h-10 stroke-[1.25]" viewBox="0 0 48 48" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 36L20 24L28 30L40 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 14H40V24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300 gap-6">
          <div className="space-y-3">
            <GsapSlideUpText delay={0.1} yOffset={20}>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase">
                <Sparkles className="w-4 h-4" />
                <span>OUR ADVANTAGE</span>
              </div>
            </GsapSlideUpText>

            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] leading-none font-heading">
              <GsapSplitText text="Why Brands Choose," type="words" delay={0.2} stagger={0.04} />
              <br />
              <span className="font-serif italic font-normal text-[#C79B63]">
                <GsapSplitText text="VISIONS." type="words" delay={0.4} stagger={0.04} />
              </span>
            </h2>
          </div>

          <GsapSlideUpText delay={0.3} yOffset={25}>
            <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              We connect brands, communities, and businesses to create partnerships that deliver real commercial impact.
            </p>
          </GsapSlideUpText>
        </div>

        {/* Dynamic Interactive Cards Grid — Agency Compact Proportions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <GsapSlideUpText key={item.title} delay={0.2 + idx * 0.15} yOffset={30}>
                <div
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`p-6 sm:p-8 flex flex-col justify-between h-full cursor-pointer transition-all duration-500 ease-in-out group ${
                    isActive
                      ? "bg-[#EBE7DF] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[64px] shadow-lg border border-transparent"
                      : "bg-white border border-neutral-200/90 rounded-[16px] hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <div>
                    {/* Top Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive ? "bg-[#171717] text-[#C79B63]" : "bg-[#F8F7F4] text-[#171717]"
                      }`}>
                        <div className="scale-75">{item.iconSvg}</div>
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-neutral-400">
                        {item.id}
                      </span>
                    </div>

                    {/* Agency Typography Title */}
                    <h3 className="text-xl sm:text-2xl font-light text-[#171717] mb-3 leading-snug font-heading uppercase tracking-tight group-hover:text-[#C79B63] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Arrow Badge */}
                  <div className="pt-6 mt-6 border-t border-neutral-300/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                      LEARN MORE
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#171717] text-[#C79B63] shadow-md scale-105"
                          : "border border-neutral-300 text-neutral-600 group-hover:border-neutral-500"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>
                </div>
              </GsapSlideUpText>
            );
          })}
        </div>
      </div>
    </section>
  );
}
