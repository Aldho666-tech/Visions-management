"use client";

import React from "react";
import { Quote } from "lucide-react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";
import GsapTicker from "@/components/ui/GsapTicker";

export default function TestimonialsSection() {
  const clientLogos = [
    { name: "Forketta", logo: "/partners/forketta-logo.png" },
    { name: "Akua Mediteranian", logo: "/partners/akua-logo.png" },
    { name: "Gili Gili Fast Boat", logo: "/partners/gili-gili-logo.png" },
    { name: "The Bowl", logo: "/partners/the-bowl-logo.png" },
    { name: "Balisabi", logo: "/partners/balisabi-logo.png" },
    { name: "Loomie", logo: "/partners/loomie-logo.png" },
    { name: "Mangata", logo: "/partners/mangata-logo.png" },
    { name: "Jade Villa One", logo: "/partners/jade-villa-one-logo.png" },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading font-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        {/* Top Quote Icon */}
        <GsapSlideUpText delay={0.1} yOffset={25}>
          <div className="w-16 h-16 bg-[#171717] text-[#C79B63] mx-auto flex items-center justify-center mb-8 shadow-xl">
            <Quote className="w-8 h-8" />
          </div>
        </GsapSlideUpText>

        {/* Section Heading */}
        <GsapSlideUpText delay={0.2} yOffset={20}>
          <span className="text-xs font-mono font-medium tracking-[0.3em] uppercase text-[#C79B63] block mb-4">
            OUR PHILOSOPHY
          </span>
        </GsapSlideUpText>

        <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase leading-tight font-heading max-w-4xl mx-auto mb-8 text-[#171717]">
          <GsapSplitText text="Building Partnerships That" type="words" delay={0.25} stagger={0.05} />
          {" "}
          <span className="font-serif italic font-normal text-[#C79B63]">
            <GsapSplitText text="Create Lasting Value" type="words" delay={0.45} stagger={0.05} />
          </span>
        </h2>

        {/* Core Philosophy Quote */}
        <GsapSlideUpText delay={0.55} yOffset={35}>
          <blockquote className="text-lg sm:text-2xl font-light tracking-wide leading-relaxed max-w-4xl mx-auto text-balance text-neutral-700 italic font-serif">
            &ldquo;We believe successful businesses don&apos;t grow alone. By connecting brands, businesses, and communities, we create strategic partnerships that strengthen networks, unlock new opportunities, and deliver measurable business value.&rdquo;
          </blockquote>
        </GsapSlideUpText>
      </div>

      {/* Partner / Client Ticker — GSAP Infinite Scroll */}
      <div className="w-full border-t border-[#D8D8D8]/70 pt-12">
        <GsapSlideUpText delay={0.1} yOffset={20}>
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 block mb-8 text-center font-bold">
            TRUSTED BY BRANDS, BUSINESSES, &amp; COMMUNITIES
          </span>
        </GsapSlideUpText>

        {/* GSAP Ticker on light background */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F7F4] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F7F4] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden w-full py-2">
            <GsapTicker
              items={clientLogos}
              speed={65}
              direction="left"
              separatorChar="·"
              theme="light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
