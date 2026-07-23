"use client";

import React, { useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxSection from "@/components/ui/ParallaxSection";
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

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white relative">
        {/* Custom Mouse Cursor */}
        <CustomCursor />

        {/* Header Navigation */}
        <Navbar
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />

        {/* PARALLAX SCROLL SECTIONS */}
        <div className="relative w-full overflow-hidden">
          {/* Section 01: HERO */}
          <ParallaxSection id="vision" bgClassName="bg-[#171717]" speed={0}>
            <HeroSection
              onExploreWork={() => scrollToSection("about")}
              onStartProject={() => setProjectModalOpen(true)}
            />
          </ParallaxSection>

          {/* Section 02: INTRO */}
          <ParallaxSection id="about" bgClassName="bg-[#F8F7F4]" speed={-30}>
            <IntroSection onNavigateServices={() => scrollToSection("services")} />
          </ParallaxSection>

          {/* Section 03: SERVICES */}
          <ParallaxSection id="services" bgClassName="bg-[#1D2622]" speed={30}>
            <ServicesSection onOpenProjectModal={() => setProjectModalOpen(true)} />
          </ParallaxSection>

          {/* Section 04: PROCESS */}
          <ParallaxSection id="process" bgClassName="bg-[#171717]" speed={-25}>
            <ProcessSection />
          </ParallaxSection>

          {/* Section 05: WHY US */}
          <ParallaxSection id="why-us" bgClassName="bg-[#F8F7F4]" speed={25}>
            <WhyUsSection />
          </ParallaxSection>

          {/* Section 06: STATS */}
          <ParallaxSection id="stats" bgClassName="bg-[#F8F7F4]" speed={-30}>
            <StatsSection />
          </ParallaxSection>

          {/* Section 07: CREATORS */}
          <ParallaxSection id="creators" bgClassName="bg-[#F8F7F4]" speed={30}>
            <CreatorsSection onOpenTalentModal={() => setTalentModalOpen(true)} />
          </ParallaxSection>

          {/* Section 08: CAMPAIGNS */}
          <ParallaxSection id="campaigns" bgClassName="bg-[#171717]" speed={-25}>
            <CampaignsSection onOpenProjectModal={() => setProjectModalOpen(true)} />
          </ParallaxSection>

          {/* Section 09: TESTIMONIALS */}
          <ParallaxSection id="testimonials" bgClassName="bg-[#F8F7F4]" speed={25}>
            <TestimonialsSection />
          </ParallaxSection>

          {/* Section 10: CTA */}
          <ParallaxSection id="cta" bgClassName="bg-[#171717]" speed={-20}>
            <CtaSection
              onOpenProjectModal={() => setProjectModalOpen(true)}
              onOpenTalentModal={() => setTalentModalOpen(true)}
            />
          </ParallaxSection>

          {/* Section 11: FOOTER */}
          <ParallaxSection id="contact" bgClassName="bg-[#1D2622]" speed={0}>
            <Footer
              onOpenProjectModal={() => setProjectModalOpen(true)}
              onOpenTalentModal={() => setTalentModalOpen(true)}
            />
          </ParallaxSection>
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
