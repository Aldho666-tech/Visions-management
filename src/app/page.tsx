"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import AppleStackSection from "@/components/ui/AppleStackSection";
import LuxuryPreloader from "@/components/ui/LuxuryPreloader";
import Navbar from "@/components/Navbar";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CreatorsSection from "@/components/sections/CreatorsSection";
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

  const sections = [
    { id: "vision", bgClassName: "bg-[#171717]", component: <HeroSection onExploreWork={() => scrollToSection("about")} onStartProject={() => setProjectModalOpen(true)} /> },
    { id: "about", bgClassName: "bg-[#F8F7F4]", component: <IntroSection onNavigateServices={() => scrollToSection("services")} /> },
    { id: "services", bgClassName: "bg-[#1D2622]", component: <ServicesSection onOpenProjectModal={() => setProjectModalOpen(true)} /> },
    { id: "process", bgClassName: "bg-[#171717]", component: <ProcessSection /> },
    { id: "why-us", bgClassName: "bg-[#F8F7F4]", component: <WhyUsSection /> },
    { id: "stats", bgClassName: "bg-[#F8F7F4]", component: <StatsSection /> },
    { id: "creators", bgClassName: "bg-[#F8F7F4]", component: <CreatorsSection onOpenTalentModal={() => setTalentModalOpen(true)} /> },
    { id: "campaigns", bgClassName: "bg-[#171717]", component: <CampaignsSection onOpenProjectModal={() => setProjectModalOpen(true)} /> },
    { id: "testimonials", bgClassName: "bg-[#F8F7F4]", component: <TestimonialsSection /> },
    { id: "cta", bgClassName: "bg-[#171717]", component: <CtaSection onOpenProjectModal={() => setProjectModalOpen(true)} onOpenTalentModal={() => setTalentModalOpen(true)} /> },
    { id: "contact", bgClassName: "bg-[#1D2622]", component: <Footer onOpenProjectModal={() => setProjectModalOpen(true)} onOpenTalentModal={() => setTalentModalOpen(true)} /> },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white relative">
        {/* Luxury Preloader on Page Load & Refresh */}
        <LuxuryPreloader />

        {/* Custom Mouse Cursor */}
        <CustomCursor />

        {/* Header Navigation */}
        <Navbar
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />

        {/* APPLE-STYLE STACKING SCROLL SECTIONS */}
        <div className="relative w-full">
          {sections.map((sec, idx) => (
            <AppleStackSection
              key={sec.id}
              id={sec.id}
              index={idx}
              totalSections={sections.length}
              bgClassName={sec.bgClassName}
            >
              {sec.component}
            </AppleStackSection>
          ))}
        </div>

        {/* Interactive Modals */}
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
