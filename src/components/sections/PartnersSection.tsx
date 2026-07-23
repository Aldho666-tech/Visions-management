"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, ShieldCheck, Sparkles, Building2 } from "lucide-react";

interface PartnerItem {
  name: string;
  category: "LUXURY & FASHION" | "BEAUTY & LIFESTYLE" | "TECH & PLATFORMS";
  logoText: string;
  tagline: string;
  campaignCount: string;
  featuredImg: string;
}

export default function PartnersSection() {
  const [activeTab, setActiveTab] = useState<string>("ALL");

  const partners: PartnerItem[] = [
    {
      name: "CHANEL BEAUTÉ",
      category: "LUXURY & FASHION",
      logoText: "CHANEL",
      tagline: "High-Fashion Creator Activation & Private Gala Coverage",
      campaignCount: "14 Campaigns",
      featuredImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "DIOR PARFUMS",
      category: "LUXURY & FASHION",
      logoText: "DIOR",
      tagline: "Exclusive Fragrance Launch & VIP Influencer Seeding",
      campaignCount: "18 Campaigns",
      featuredImg: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "VOGUE INDONESIA",
      category: "LUXURY & FASHION",
      logoText: "VOGUE",
      tagline: "Editorial Media Sponsorship & Creator Spotlight Summit",
      campaignCount: "8 Initiatives",
      featuredImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "SEPHORA LUXE",
      category: "BEAUTY & LIFESTYLE",
      logoText: "SEPHORA",
      tagline: "Omnichannel Beauty Launch & Creator Livestream Takeovers",
      campaignCount: "22 Campaigns",
      featuredImg: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "SAMSUNG GLOBAL",
      category: "TECH & PLATFORMS",
      logoText: "SAMSUNG",
      tagline: "Flagship Galaxy Smartphone Creator Experience Launch",
      campaignCount: "12 Campaigns",
      featuredImg: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    },
    {
      name: "TIKTOK CREATOR MARKET",
      category: "TECH & PLATFORMS",
      logoText: "TikTok",
      tagline: "Official Strategic Talent Agency & Affiliate Partner",
      campaignCount: "Strategic Partner",
      featuredImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const categories = [
    { label: "ALL PARTNERS", value: "ALL" },
    { label: "LUXURY & FASHION", value: "LUXURY & FASHION" },
    { label: "BEAUTY & LIFESTYLE", value: "BEAUTY & LIFESTYLE" },
    { label: "TECH & PLATFORMS", value: "TECH & PLATFORMS" },
  ];

  const filteredPartners =
    activeTab === "ALL"
      ? partners
      : partners.filter((p) => p.category === activeTab);

  const brandLogos = [
    "CHANEL", "DIOR", "VOGUE", "SEPHORA", "SAMSUNG", "PRADA", "L'ORÉAL", "TIKTOK", "BAZAAR", "HERMÈS"
  ];

  return (
    <section id="partners" className="py-24 sm:py-36 bg-[#1D2622] text-[#F8F7F4] relative overflow-hidden font-heading">
      {/* Decorative Gold Radial Mesh Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C79B63]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/15 gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-light tracking-[0.3em] text-[#C79B63] uppercase">
              <Building2 className="w-4 h-4" />
              <span>GLOBAL BRAND NETWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light uppercase tracking-tight text-white leading-none">
              Our <span className="font-serif italic font-normal text-[#C79B63]">Partners</span>
            </h2>
          </div>

          <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            We collaborate with elite global luxury fashion houses, beauty conglomerates, and premier media platforms to architect culture-shaping campaigns.
          </p>
        </div>

        {/* Continuous Infinite Marquee Logo Carousel */}
        <div className="mb-16 py-6 border-y border-white/10 overflow-hidden relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap opacity-75 hover:opacity-100 transition-opacity">
            {[...brandLogos, ...brandLogos].map((logo, idx) => (
              <span
                key={`${logo}-${idx}`}
                className="text-2xl sm:text-4xl font-heading font-light tracking-[0.35em] text-neutral-400 hover:text-[#C79B63] transition-colors uppercase inline-block mx-4"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-5 py-2.5 text-xs tracking-[0.2em] font-light uppercase transition-all border ${
                activeTab === cat.value
                  ? "bg-[#C79B63] text-[#171717] border-[#C79B63] font-medium"
                  : "bg-transparent text-neutral-300 border-white/20 hover:border-white hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="wait">
            {filteredPartners.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#171717]/90 border border-white/10 hover:border-[#C79B63] p-8 transition-all group flex flex-col justify-between space-y-8"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                    <span className="text-2xl font-light tracking-[0.3em] uppercase text-[#C79B63] font-heading">
                      {item.logoText}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] font-mono text-neutral-400 uppercase bg-white/5 px-3 py-1 border border-white/10">
                      {item.campaignCount}
                    </span>
                  </div>

                  <div className="relative h-48 w-full overflow-hidden mb-6 bg-black/40">
                    <img
                      src={item.featuredImg}
                      alt={item.name}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <h3 className="text-lg font-light tracking-wide text-white mb-2 font-heading">
                    {item.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-[#C79B63] tracking-wider uppercase">
                  <span>Verified Collaboration</span>
                  <ShieldCheck className="w-4 h-4 text-[#C79B63]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Trust Badge Banner */}
        <div className="bg-[#171717] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-light tracking-wide uppercase text-white font-heading">
                Become an Official Brand Partner
              </h4>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Access curated creator rosters, luxury production pipelines, and priority campaign execution.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-colors"
          >
            PARTNER WITH VISIONS
          </a>
        </div>
      </div>
    </section>
  );
}
