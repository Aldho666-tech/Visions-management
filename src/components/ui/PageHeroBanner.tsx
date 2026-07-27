"use client";

import React from "react";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

interface PageHeroBannerProps {
  category: string;
  title: string;
  highlightTitle?: string;
  subtitle?: string;
  imageUrl: string;
}

export default function PageHeroBanner({
  category,
  title,
  highlightTitle,
  subtitle,
  imageUrl,
}: PageHeroBannerProps) {
  return (
    <section className="relative min-h-[260px] sm:min-h-[420px] w-full flex items-center justify-center overflow-hidden bg-[#171717] text-[#F8F7F4] py-14 sm:py-20">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover filter brightness-[0.45] contrast-110 grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-black/50 to-black/70" />
      </div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-10 sm:pt-14">
        {category && (
          <GsapSlideUpText delay={0.1} yOffset={20}>
            <span className="text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase block mb-4">
              {category}
            </span>
          </GsapSlideUpText>
        )}

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight uppercase font-heading">
          <GsapSplitText text={title} type="words" delay={0.2} stagger={0.05} />
          {highlightTitle && (
            <>
              {" "}
              <span className="text-[#C79B63] font-normal">
                <GsapSplitText text={highlightTitle} type="words" delay={0.35} stagger={0.05} />
              </span>
            </>
          )}
        </h1>

        {subtitle && (
          <GsapSlideUpText delay={0.5} yOffset={25}>
            <p className="mt-5 text-neutral-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </GsapSlideUpText>
        )}
      </div>
    </section>
  );
}
