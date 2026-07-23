"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxSection from "@/components/ui/ParallaxSection";
import PageHeroBanner from "@/components/ui/PageHeroBanner";
import IntroSection from "@/components/sections/IntroSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function AboutPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white">
        <CustomCursor />
        <Navbar
          onOpenProjectModal={() => setProjectModalOpen(true)}
          onOpenTalentModal={() => setTalentModalOpen(true)}
        />

        <div className="relative w-full overflow-hidden">
          <ParallaxSection bgClassName="bg-[#171717]" speed={0}>
            <PageHeroBanner
              category="AGENCY IDENTITY"
              title="About"
              highlightTitle="VISIONS"
              subtitle="We bridge the gap between high-fashion storytelling and empirical digital growth."
              imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
            />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#F8F7F4]" speed={-30}>
            <IntroSection onNavigateServices={() => {}} />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#F8F7F4]" speed={30}>
            <WhyUsSection />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#1D2622]" speed={-25}>
            <StatsSection />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#171717]" speed={25}>
            <CtaSection
              onOpenProjectModal={() => setProjectModalOpen(true)}
              onOpenTalentModal={() => setTalentModalOpen(true)}
            />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#1D2622]" speed={0}>
            <Footer
              onOpenProjectModal={() => setProjectModalOpen(true)}
              onOpenTalentModal={() => setTalentModalOpen(true)}
            />
          </ParallaxSection>
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
