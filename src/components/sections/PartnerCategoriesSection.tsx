"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Home, Users, Utensils, HeartPulse, ArrowUpRight } from "lucide-react";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";
import GsapSplitText from "@/components/ui/GsapSplitText";
import GsapParallaxVillaCard, { VillaCardData } from "@/components/ui/GsapParallaxVillaCard";

const villaData: Record<string, VillaCardData[]> = {
  Seminyak: [
    {
      id: "s1",
      name: "Villa Kayu",
      address: "No. X2, Gang Priuk, Kec. Kuta Utara, Bali 83061, Indonesia",
      mapsUrl: "https://share.google/jxSMgnKiZUTXtS9uJ",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1000",
      features: "Tropical Wooden Architecture • Private Pool • 3 BR",
      desc: "An authentic wooden tropical sanctuary in Seminyak, featuring lush private gardens, open-air pavilion living, and serene poolside deck.",
      area: "Seminyak",
    },
    {
      id: "s2",
      name: "Villa Sawo",
      address: "Gang Sawo No. 4, Kerobokan Kelod, Kuta Utara, Bali, Indonesia",
      mapsUrl: "https://share.google/v5pNKwlE5BwR7FTwY",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1000",
      features: "Modern Luxury Villa • Sunset Lounge • 4 BR",
      desc: "Contemporary luxury architecture with high ceilings, private pool deck, state-of-the-art kitchen, and premium guest amenities.",
      area: "Seminyak",
    },
    {
      id: "s3",
      name: "Villa Kak Dagut – Green Villa",
      address: "Gang Wayang No. 15, Kerobokan, Kec. Kuta Utara, 83061, Bali, Indonesia",
      mapsUrl: "https://maps.app.goo.gl/8hT8x3C3jqwtajRJ7",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
      features: "Eco Botanical Retreat • Natural Stone Pool • 3 BR",
      desc: "Serene eco retreat surrounded by botanical gardens and natural stone pools, creating a tranquil sanctuary for wellness staycations.",
      area: "Seminyak",
    },
    {
      id: "s4",
      name: "Villa Kak Dagut – Purple Villa",
      address: "Gang Wayang No. 15, Kerobokan, Kec. Kuta Utara, 83061, Bali, Indonesia",
      mapsUrl: "https://maps.app.goo.gl/8hT8x3C3jqwtajRJ7",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000",
      features: "Boutique Estate • Infinity Edge Pool • 3 BR",
      desc: "Boutique sanctuary offering elegant aesthetic interiors, private poolside dining, and seamless indoor-outdoor living spaces.",
      area: "Seminyak",
    },
    {
      id: "s5",
      name: "Villa Silvia – New Villa",
      address: "Gang Wayang 31 No. 2, Kerobokan, Kuta Utara, 83061, Bali, Indonesia",
      mapsUrl: "https://maps.app.goo.gl/x96jHSZi8c2Mmqeg6?g_st=ac",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
      features: "Newly Built Minimalist • Sun Deck • 4 BR",
      desc: "Newly constructed modern villa featuring minimal architectural lines, spacious sun terrace, and high-end guest finishings.",
      area: "Seminyak",
    },
    {
      id: "s6",
      name: "Villa Silvia – Villa Vlada",
      address: "Gang Wayang 31 No. 2, Kerobokan, Kuta Utara, 83061, Bali, Indonesia",
      mapsUrl: "https://maps.app.goo.gl/x96jHSZi8c2Mmqeg6?g_st=ac",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
      features: "Luxury Suite Residence • Private Cabana • 3 BR",
      desc: "Sophisticated private residence equipped with full kitchen amenities, poolside lounge cabana, and personalized guest services.",
      area: "Seminyak",
    },
  ],
  Sanur: [
    {
      id: "sn1",
      name: "Jade Villa One",
      address: "Sanur, Bali, Indonesia",
      mapsUrl: "https://share.google/Nw447PZD1ZyzJNS0Z",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      features: "Coastal Ocean Estate • Beach Proximity • 4 BR",
      desc: "Tranquil coastal estate in quiet Sanur, offering spacious living quarters, private swimming pool, and quick beach access.",
      area: "Sanur",
    },
  ],
  Canggu: [],
  Ubud: [],
};

export default function PartnerCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [selectedArea, setSelectedArea] = useState<string>("Seminyak");

  const categories = [
    {
      id: "villa",
      title: "Villa Partners",
      subtitle: "Curated Stay Experience",
      counter: "7 VILLA PARTNERSHIPS",
      icon: Home,
      body: "We partner with Bali's villas to elevate every guest's holiday — curating exclusive experiences, activities, and promotions that transform a simple stay into something truly memorable.",
    },
    {
      id: "community",
      title: "Community",
      subtitle: "Community & Events",
      counter: "XX+ COMMUNITY & EVENTS",
      icon: Users,
      body: "We collaborate with Bali's communities — art collectives, language exchange groups, wellness & yoga circles, sports clubs, and sustainability groups — to host events that bring value-aligned brands into these communities. Supported by a running event calendar, we introduce partner brands directly to the audiences that matter most to them.",
    },
    {
      id: "fnb",
      title: "F&B Business",
      subtitle: "Cross Marketing & Venue Partnership",
      counter: "XX+ F&B COLLABORATIONS",
      icon: Utensils,
      body: "Driving cross-marketing and brand presence through collaborations with villas, wellness & sport hubs, and cafes & restaurants — positioning each venue as a natural gathering point for community events and joint promotions.",
    },
    {
      id: "lifestyle",
      title: "Lifestyle",
      subtitle: "Wellness, Sport, and Guest Experience",
      counter: "XX+ LIFESTYLE PARTNERS",
      icon: HeartPulse,
      body: "Centered on wellness, sport, and guest experience — curating recommended places, activities, spa & fitness partners, and local excursions that support cross-marketing between partner brands under this collaboration network.",
    },
  ];

  const currentVillas = villaData[selectedArea] || [];

  return (
    <section className="py-10 sm:py-14 bg-[#F8F7F4] text-[#171717] font-heading relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300 gap-6">
          <div className="space-y-3">
            <GsapSlideUpText delay={0.1} yOffset={20}>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase">
                <Users className="w-4 h-4" />
                <span>COLLABORATION NETWORK</span>
              </div>
            </GsapSlideUpText>

            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] font-heading leading-none">
              <GsapSplitText text="Partner" type="words" delay={0.2} stagger={0.06} />
              {" "}
              <span className="font-serif italic font-normal text-[#C79B63]">
                <GsapSplitText text="Categories" type="words" delay={0.35} stagger={0.06} />
              </span>
            </h2>
          </div>

          <GsapSlideUpText delay={0.3} yOffset={25}>
            <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              Discover our specialized network across stay experiences, local communities, F&amp;B venues, and lifestyle hubs.
            </p>
          </GsapSlideUpText>
        </div>

        {/* 4 Category Cards Grid — Equal Height & No Parallax Y-Offset */}
        <GsapSlideUpText delay={0.15} yOffset={20}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === idx;

              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(idx);
                  }}
                  className={`p-6 sm:p-8 flex flex-col justify-between h-full cursor-pointer transition-all duration-500 ease-in-out group ${
                    isActive
                      ? "bg-[#EBE7DF] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-[70px] shadow-md border border-transparent"
                      : "bg-white border border-neutral-200/90 rounded-[12px] hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <div>
                    {/* Category Counter Tag */}
                    <div className="inline-block text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#C79B63] px-2.5 py-1 bg-[#171717] mb-6">
                      {cat.counter}
                    </div>

                    <div className="flex items-center space-x-3 mb-3">
                      <IconComp className={`w-5 h-5 ${isActive ? "text-[#171717]" : "text-[#C79B63]"}`} />
                      <h3 className="text-xl font-medium text-[#171717] font-heading">
                        {cat.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono text-[#171717]/60 block mb-3 uppercase tracking-wider font-semibold">
                      {cat.subtitle}
                    </span>

                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {cat.body}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 flex items-center justify-between border-t border-neutral-300/50">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 group-hover:text-[#171717] transition-colors">
                      Explore Category
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#171717] text-[#C79B63]"
                          : "border border-neutral-300 text-neutral-600 group-hover:border-neutral-500"
                      }`}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </GsapSlideUpText>
      </div>

      {/* Dedicated Interactive Villa Directory View with Parallax Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapSlideUpText delay={0.2} yOffset={45}>
          <div id="villas-directory" className="bg-white border border-neutral-200 p-6 sm:p-12 shadow-sm rounded-none">
            {/* Directory Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-neutral-200 gap-4">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.25em] text-[#C79B63] uppercase mb-2">
                  <Home className="w-4 h-4" />
                  <span>CURATED VILLA DIRECTORY</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-light uppercase tracking-tight text-[#171717] font-heading">
                  Villa <span className="font-serif italic font-normal text-[#C79B63]">Partnerships</span>
                </h3>
              </div>

              {/* Area Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {["Seminyak", "Sanur", "Canggu", "Ubud"].map((area) => {
                  const isSelected = selectedArea === area;
                  const count = villaData[area]?.length || 0;

                  return (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all flex items-center space-x-2 ${
                        isSelected
                          ? "bg-[#171717] text-[#F8F7F4] border border-[#171717]"
                          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 border border-neutral-200"
                      }`}
                    >
                      <span>{area}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-none ${isSelected ? "bg-[#C79B63] text-[#171717]" : "bg-neutral-300 text-neutral-700"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* GSAP Parallax Villa Cards Grid (1 by 1 Entrance with Photo Parallax) */}
            <AnimatePresence mode="wait">
              <div key={selectedArea}>
                {currentVillas.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentVillas.map((villa, idx) => (
                      <GsapParallaxVillaCard
                        key={villa.id}
                        villa={villa}
                        index={idx}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 text-center bg-[#F8F7F4] border border-dashed border-neutral-300 p-8">
                    <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-1 font-bold">
                      No villas listed yet in {selectedArea}
                    </p>
                    <p className="text-xs text-neutral-400 font-light">
                      Coming soon — currently onboarding new villa partners in this area.
                    </p>
                  </div>
                )}
              </div>
            </AnimatePresence>
          </div>
        </GsapSlideUpText>
      </div>
    </section>
  );
}
