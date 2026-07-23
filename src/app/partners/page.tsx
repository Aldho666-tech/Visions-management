"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import PageHeroBanner from "@/components/ui/PageHeroBanner";
import PartnersSection from "@/components/sections/PartnersSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnersPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const partnerShowcase = [
    {
      name: "CHANEL BEAUTÉ",
      type: "LUXURY FASHION HOUSE",
      description: "Omnichannel creator seeding, private runway activations, and exclusive fragrance ambassador programs across Southeast Asia.",
      metrics: "18M+ Organic Impressions",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "DIOR PARFUMS",
      type: "HAUTE PARFUMERIE",
      description: "Targeted influencer gifting campaigns, VIP launch galas, and digital creator takeover initiatives.",
      metrics: "340% ROI Increase",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "VOGUE INDONESIA",
      type: "MEDIA & PUBLISHING",
      description: "Co-hosting annual fashion creator summits, digital editorial features, and exclusive talent interviews.",
      metrics: "Official Media Partner",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "SEPHORA LUXE",
      type: "BEAUTY CONGLOMERATE",
      description: "Live commerce broadcasts, creator masterclasses, and retail store opening activations.",
      metrics: "120K+ Direct Conversions",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const sections = [
    {
      id: "hero-banner",
      bgClassName: "bg-[#171717]",
      noPadding: true,
      component: (
        <PageHeroBanner
          category="GLOBAL NETWORK"
          title="Our"
          highlightTitle="Partners"
          subtitle="Collaborating with global fashion houses, media conglomerates, and international enterprise leaders."
          imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        />
      ),
    },
    {
      id: "partners-bar",
      bgClassName: "bg-[#DFE7EC]",
      noPadding: true,
      component: <PartnersSection />,
    },
    {
      id: "partner-showcase",
      bgClassName: "bg-[#F8F7F4]",
      component: (
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-12">
          <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-semibold tracking-[0.3em] uppercase text-[#C79B63]">
              FEATURED COLLABORATION CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] font-heading leading-tight">
              Architecting Impact with <span className="font-serif italic font-normal text-[#C79B63]">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {partnerShowcase.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-neutral-200/80 p-8 rounded-none shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between space-y-6"
              >
                <div className="space-y-6">
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute top-4 left-4 bg-[#171717] text-[#F8F7F4] text-[10px] tracking-[0.2em] font-mono uppercase px-3 py-1">
                      {item.type}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-light tracking-wide text-[#171717] font-heading group-hover:text-[#C79B63] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#C79B63] tracking-widest uppercase">
                    {item.metrics}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#C79B63]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "why-us",
      bgClassName: "bg-[#F8F7F4]",
      component: <WhyUsSection />,
    },
    {
      id: "stats",
      bgClassName: "bg-[#F8F7F4]",
      component: <StatsSection />,
    },
    {
      id: "cta",
      bgClassName: "bg-[#171717]",
      component: (
        <CtaSection
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />
      ),
    },
    {
      id: "contact",
      bgClassName: "bg-[#1D2622]",
      noPadding: true,
      component: (
        <Footer
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />
      ),
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white">
        <CustomCursor />
        <Navbar
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />

        <div className="relative w-full">
          {sections.map((sec) => (
            <ParallaxFlowSection
              key={sec.id}
              id={sec.id}
              bgClassName={sec.bgClassName}
              noPadding={sec.noPadding}
            >
              {sec.component}
            </ParallaxFlowSection>
          ))}
        </div>

        <ProjectModal
          isOpen={projectModalOpen}
          onClose={() => setProjectModalOpen(false)}
        />
        <TalentModal
          isOpen={talentModalOpen}
          onClose={() => setTalentModalOpen(false)}
        />
      </main>
    </SmoothScroll>
  );
}
