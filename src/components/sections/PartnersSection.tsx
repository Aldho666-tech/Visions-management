"use client";

import React from "react";
import GsapTicker from "@/components/ui/GsapTicker";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";

interface PartnersSectionProps {
  hideHeader?: boolean;
}

export default function PartnersSection({ hideHeader = false }: PartnersSectionProps) {
  const brandLogos = [
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
    <section
      id="partners"
      className="bg-[#171717] text-[#F8F7F4] py-10 sm:py-14 relative overflow-hidden font-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Clean Header Label (Matching User Screenshot) */}
        {!hideHeader && (
          <div className="mb-6 sm:mb-8 text-center">
            <GsapSlideUpText delay={0.1} yOffset={15}>
              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] sm:tracking-[0.35em] uppercase text-neutral-300 font-light">
                TRUSTED BY <span className="text-[#C79B63] font-semibold">PARTNER BRANDS &amp; CLIENTS</span>
              </p>
            </GsapSlideUpText>
          </div>
        )}

        {/* GSAP Ticker Row 1 — left */}
        <div className="relative my-2">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

          <GsapTicker
            items={brandLogos}
            speed={65}
            direction="left"
            separatorChar="·"
            className="py-3"
          />
        </div>

        {/* GSAP Ticker Row 2 — right */}
        <div className="relative my-1">
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#171717] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#171717] to-transparent z-10 pointer-events-none" />

          <GsapTicker
            items={[...brandLogos].reverse()}
            speed={50}
            direction="right"
            separatorChar="·"
            className="py-3"
          />
        </div>
      </div>
    </section>
  );
}
