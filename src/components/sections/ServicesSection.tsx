"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";
import GsapSplitText from "@/components/ui/GsapSplitText";

interface ServicesSectionProps {
  onOpenProjectModal?: () => void;
}

export default function ServicesSection({ onOpenProjectModal }: ServicesSectionProps) {
  const [activeCard, setActiveCard] = useState<number>(0);

  const cards = [
    {
      id: 0,
      step: "01",
      badge: "STRATEGY",
      title: "Partnership Strategy",
      subtitle: "Building the right foundation before every collaboration.",
      desc: "We analyze your brand positioning, target demographics, and market opportunities to define clear partnership objectives.",
      subItems: [
        "Opportunity Mapping",
        "Collaboration Planning",
        "Partnership Roadmap",
        "Brand Synergy Analysis",
      ],
      bgClass: "bg-gradient-to-br from-[#1E2421] via-[#171717] to-[#121413]",
      badgeClass: "bg-[#C79B63] text-[#171717]",
      borderClass: "border-[#C79B63]/30",
    },
    {
      id: 1,
      step: "02",
      badge: "DEVELOPMENT",
      title: "Partnership Development",
      subtitle: "Connecting your business with key partners across Bali.",
      desc: "We source, evaluate, and negotiate strategic partnerships with high-converting villas, F&B hubs, and lifestyle brands.",
      subItems: [
        "Partner Sourcing & Vetting",
        "Business Matchmaking",
        "Terms Negotiation",
        "Community Partnerships",
      ],
      bgClass: "bg-gradient-to-br from-[#202020] via-[#171717] to-[#111111]",
      badgeClass: "bg-white/10 text-white border border-white/20",
      borderClass: "border-white/10",
    },
    {
      id: 2,
      step: "03",
      badge: "MANAGEMENT",
      title: "Activation & Management",
      subtitle: "Ensuring long-term commercial value and revenue growth.",
      desc: "We manage end-to-end execution, staff coordination, payment reconciliations, and monthly performance reviews.",
      subItems: [
        "Partnership Activation",
        "Monthly Performance Reviews",
        "Payment Reconciliation",
        "Standards Oversight",
      ],
      bgClass: "bg-gradient-to-br from-[#1F2220] via-[#171717] to-[#101312]",
      badgeClass: "bg-[#C79B63]/20 text-[#C79B63] border border-[#C79B63]/30",
      borderClass: "border-[#C79B63]/25",
    },
    {
      id: 3,
      step: "04",
      badge: "ECOSYSTEM",
      title: "Multi-Channel Network",
      subtitle: "Ready to scale? We build multi-venue partner networks.",
      desc: "We help you build and manage a network of channels that multiply your reach, revenue, and market dominance.",
      subItems: [
        "Multi-Venue Crosspromotion",
        "VIP Guest Excursion Loops",
        "Ecosystem Revenue Scaling",
        "Exclusive Network Access",
      ],
      bgClass: "bg-gradient-to-br from-[#1C201E] via-[#171717] to-[#0F1211]",
      badgeClass: "bg-[#C79B63] text-[#171717]",
      borderClass: "border-[#C79B63]/40",
    },
  ];

  return (
    <section id="services" className="py-14 sm:py-20 bg-[#171717] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature 2-Column Header Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div className="space-y-3">
            <GsapSlideUpText delay={0.1} yOffset={20}>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase">
                <Layers className="w-4 h-4" />
                <span>OUR CAPABILITIES</span>
              </div>
            </GsapSlideUpText>

            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-white font-heading leading-none">
              <GsapSplitText text="Strategic Partnership" type="words" delay={0.2} stagger={0.04} />
              {" "}
              <span className="font-serif italic font-normal text-[#C79B63]">
                <GsapSplitText text="Services" type="words" delay={0.35} stagger={0.04} />
              </span>
            </h2>
          </div>

          <GsapSlideUpText delay={0.3} yOffset={25}>
            <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              We design, execute, and manage end-to-end strategic partnership programs that unlock new revenue channels and brand presence.
            </p>
          </GsapSlideUpText>
        </div>

        {/* Clean Spacious 4-Column Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, idx) => {
            const isActive = activeCard === idx;

            return (
              <GsapSlideUpText key={card.id} delay={0.2 + idx * 0.12} yOffset={35}>
                <div
                  onMouseEnter={() => setActiveCard(idx)}
                  onClick={() => setActiveCard(idx)}
                  className={`p-7 sm:p-8 rounded-[24px] flex flex-col justify-between h-full cursor-pointer transition-all duration-500 ease-out border ${card.borderClass} ${card.bgClass} hover:-translate-y-2.5 shadow-2xl ${
                    isActive ? "ring-1 ring-[#C79B63]/60 shadow-[0_20px_50px_rgba(0,0,0,0.6)]" : "opacity-95 hover:opacity-100"
                  }`}
                >
                  <div>
                    {/* Top Badge & Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full ${card.badgeClass}`}>
                        {card.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-400">
                        {card.step}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-light tracking-tight font-heading text-white mb-2 uppercase leading-tight group-hover:text-[#C79B63] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs font-medium text-[#C79B63] mb-4 leading-relaxed">
                      {card.subtitle}
                    </p>

                    <p className="text-xs font-light text-neutral-300 leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    {/* Deliverables List */}
                    <div className="pt-4 border-t border-white/10 mb-6">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 block mb-3 font-semibold">
                        KEY DELIVERABLES
                      </span>
                      <ul className="space-y-2">
                        {card.subItems.map((item, sIdx) => (
                          <li key={sIdx} className="flex items-center space-x-2 text-xs font-light text-neutral-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C79B63] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onOpenProjectModal) onOpenProjectModal();
                      }}
                      className="w-full py-3.5 px-4 rounded-full bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-[0_10px_20px_rgba(199,155,99,0.3)]"
                    >
                      <span>START PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
