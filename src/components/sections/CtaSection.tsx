"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

interface CtaSectionProps {
  onOpenProjectModal?: () => void;
  onOpenTalentModal?: () => void;
}

export default function CtaSection({ onOpenProjectModal }: CtaSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F7F4] text-[#171717] overflow-hidden flex items-center justify-center font-heading font-light border-t border-neutral-300">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <GsapSlideUpText delay={0.1} yOffset={20}>
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#171717] border border-[#C79B63]/40 text-[#C79B63] text-xs font-mono font-medium uppercase tracking-[0.25em] mb-6 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THE VISIONS ECOSYSTEM</span>
          </div>
        </GsapSlideUpText>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase leading-tight font-heading text-[#171717]">
          <GsapSplitText text="Connecting Your Business To" type="words" delay={0.25} stagger={0.04} />
          {" "}
          <span className="font-serif italic font-normal text-[#C79B63]">
            <GsapSplitText text="Global Opportunities" type="words" delay={0.5} stagger={0.04} />
          </span>
        </h2>

        <GsapSlideUpText delay={0.65} yOffset={30}>
          <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto text-balance">
            Visions Management is a premier partnership agency dedicated to connecting your business with the right partners, brand networks, and high-value commercial opportunities.
          </p>
        </GsapSlideUpText>

        {/* Single Primary CTA Button */}
        <GsapSlideUpText delay={0.8} yOffset={25}>
          <div className="mt-10 flex justify-center">
            <button
              onClick={onOpenProjectModal}
              className="px-9 py-4 bg-[#171717] hover:bg-[#C79B63] text-white hover:text-[#171717] font-semibold text-xs uppercase tracking-[0.25em] border border-[#171717] hover:border-[#C79B63] transition-all duration-300 shadow-2xl flex items-center space-x-3 group"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </GsapSlideUpText>
      </div>
    </section>
  );
}
