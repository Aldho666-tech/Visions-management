"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface VillaCardData {
  id: string;
  name: string;
  address: string;
  mapsUrl: string;
  image: string;
  features: string;
  desc: string;
  area: string;
}

interface GsapParallaxVillaCardProps {
  villa: VillaCardData;
  index: number;
}

export default function GsapParallaxVillaCard({ villa, index }: GsapParallaxVillaCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    if (!card || !img) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation (staggered 1 by 1 slide-up)
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          delay: (index % 3) * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 2. Image Parallax scroll animation
      gsap.fromTo(
        img,
        { yPercent: -12, scale: 1.15 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, [index, villa.id]);

  return (
    <div
      ref={cardRef}
      className="bg-[#F8F7F4] border border-neutral-200 hover:border-[#C79B63] rounded-none shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between overflow-hidden"
    >
      {/* Top Parallax Image Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#171717]">
        <img
          ref={imageRef}
          src={villa.image}
          alt={villa.name}
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#C79B63] px-3 py-1 bg-[#171717]/90 border border-[#C79B63]/30 backdrop-blur-md">
            {villa.area}
          </span>
          <a
            href={villa.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full bg-[#171717]/80 hover:bg-[#C79B63] text-white hover:text-[#171717] flex items-center justify-center border border-white/20 transition-all shadow-md"
            aria-label={`Open Google Maps for ${villa.name}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Floating Features Badge on Image */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-neutral-200 text-[10px] font-mono tracking-wider truncate">
            <Sparkles className="w-3 h-3 text-[#C79B63] shrink-0" />
            <span className="truncate">{villa.features}</span>
          </div>
        </div>
      </div>

      {/* Card Content & Specific Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2.5">
          <h4 className="text-xl sm:text-2xl font-light text-[#171717] group-hover:text-[#C79B63] transition-colors font-heading leading-snug">
            {villa.name}
          </h4>

          <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
            {villa.desc}
          </p>

          <div className="flex items-start space-x-2 text-xs text-neutral-500 font-light pt-2 border-t border-neutral-200/80">
            <MapPin className="w-3.5 h-3.5 text-[#C79B63] shrink-0 mt-0.5" />
            <span className="leading-snug">
              {villa.address !== "—" ? villa.address : "Location details available via Google Maps"}
            </span>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="pt-4 border-t border-neutral-200">
          <a
            href={villa.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 bg-[#171717] hover:bg-[#C79B63] text-white hover:text-[#171717] text-xs font-mono font-medium tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-between group/btn shadow-md"
          >
            <span>OPEN GOOGLE MAPS</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
