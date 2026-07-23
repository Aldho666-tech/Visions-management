"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxSection from "@/components/ui/ParallaxSection";
import PageHeroBanner from "@/components/ui/PageHeroBanner";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ServicesPage() {
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
              category="SOLUTIONS & CAPABILITIES"
              title="Our"
              highlightTitle="Services"
              subtitle="End-to-end influencer activation, commercial video production, and social media strategy."
              imageUrl="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1920"
            />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#1D2622]" speed={-30}>
            <ServicesSection onOpenProjectModal={() => setProjectModalOpen(true)} />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#F8F7F4]" speed={30}>
            <WhyUsSection />
          </ParallaxSection>

          <ParallaxSection bgClassName="bg-[#171717]" speed={-25}>
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
