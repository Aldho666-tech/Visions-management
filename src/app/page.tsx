"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import LuxuryPreloader from "@/components/ui/LuxuryPreloader";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PartnersSection from "@/components/sections/PartnersSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CampaignsSection from "@/components/sections/CampaignsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";

import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";

export default function Home() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Clean, Streamlined Core Homepage Sequence
  const sections = [
    { id: "vision", bgClassName: "bg-[#171717]", component: <HeroSection onExploreWork={() => scrollToSection("about")} onStartProject={() => setProjectModalOpen(true)} />, noPadding: true },
    { id: "about", bgClassName: "bg-[#F8F7F4]", component: <IntroSection onNavigateServices={() => scrollToSection("services")} /> },
    { id: "services", bgClassName: "bg-[#1D2622]", component: <ServicesSection onOpenProjectModal={() => setProjectModalOpen(true)} /> },
    { id: "partners", bgClassName: "bg-[#DFE7EC]", component: <PartnersSection />, noPadding: true },
    { id: "why-us", bgClassName: "bg-[#F8F7F4]", component: <WhyUsSection /> },
    { id: "stats", bgClassName: "bg-[#F8F7F4]", component: <StatsSection /> },
    { id: "campaigns", bgClassName: "bg-[#171717]", component: <CampaignsSection onOpenProjectModal={() => setProjectModalOpen(true)} /> },
    { id: "testimonials", bgClassName: "bg-[#F8F7F4]", component: <TestimonialsSection /> },
    { id: "cta", bgClassName: "bg-[#171717]", component: <CtaSection onOpenProjectModal={() => setProjectModalOpen(true)} onOpenTalentModal={() => setTalentModalOpen(true)} /> },
    { id: "contact", bgClassName: "bg-[#171717]", component: <Footer onOpenProjectModal={() => setProjectModalOpen(true)} onOpenTalentModal={() => setTalentModalOpen(true)} />, noPadding: true },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white relative">
        <LuxuryPreloader />
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
