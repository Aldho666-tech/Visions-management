"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function VisionPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const sections = [
    {
      id: "hero",
      bgClassName: "bg-[#171717]",
      noPadding: true,
      component: (
        <HeroSection
          onExploreWork={() => {}}
          onStartProject={() => setProjectModalOpen(true)}
        />
      ),
    },
    {
      id: "intro",
      bgClassName: "bg-[#F8F7F4]",
      component: <IntroSection onNavigateServices={() => {}} />,
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
      <main className="min-h-screen bg-[#F8F7F4] text-[#171717] selection:bg-[#C79B63] selection:text-white relative">
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
