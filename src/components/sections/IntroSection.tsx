"use client";

import React from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

interface IntroSectionProps {
  onNavigateServices: () => void;
}

export default function IntroSection({ onNavigateServices }: IntroSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300 gap-6">
          <div className="space-y-3">
            <GsapSlideUpText delay={0.1} yOffset={20}>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase">
                <Compass className="w-4 h-4" />
                <span>BUILDING STRATEGIC PARTNERSHIPS</span>
              </div>
            </GsapSlideUpText>

            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] leading-none font-heading">
              <GsapSplitText text="Connecting Your Business to the" type="words" delay={0.2} stagger={0.04} />
              <br />
              <span className="text-[#C79B63] font-serif italic font-normal">
                <GsapSplitText text="Right Partners" type="words" delay={0.4} stagger={0.04} />
              </span>
            </h2>
          </div>
        </div>

        {/* Narrative & Action Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <GsapSlideUpText delay={0.3} yOffset={30} className="lg:col-span-8">
            <p className="text-neutral-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
              Visions Management is a strategic partnership agency that designs, develops, and manages partnerships between brands, businesses, and communities. We don&apos;t simply make introductions—we build strategic collaborations that create long-term business value.
            </p>
          </GsapSlideUpText>

          <GsapSlideUpText delay={0.4} yOffset={25} className="lg:col-span-4 lg:text-right">
            <button
              onClick={onNavigateServices}
              className="inline-flex items-center space-x-2 text-xs font-light tracking-[0.2em] uppercase text-[#171717] border-b border-[#C79B63] hover:border-[#171717] pb-1 transition-all group hover:text-[#C79B63]"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C79B63] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </GsapSlideUpText>
        </div>

        {/* Visual Banner */}
        <GsapSlideUpText delay={0.5} yOffset={40}>
          <div className="relative w-full h-[360px] sm:h-[500px] overflow-hidden group shadow-2xl border border-neutral-300">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
              alt="Visions Management Strategic Partnership Meeting"
              className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/30 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-white">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-3xl font-light tracking-wide uppercase font-heading text-white">
                  Connecting Your Business
                </h3>
              </div>
            </div>
          </div>
        </GsapSlideUpText>
      </div>
    </section>
  );
}
