"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ProcessPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const sections = [
    {
      id: "process",
      bgClassName: "bg-[#171717]",
      component: (
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
            <span className="text-xs font-light tracking-[0.25em] text-[#C79B63] uppercase">EXECUTION ROADMAP</span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-heading uppercase mt-2 text-white">Our Process</h1>
          </div>
          <ProcessSection />
        </div>
      ),
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
      <main className="min-h-screen bg-[#171717] text-[#F8F7F4] selection:bg-[#C79B63] selection:text-white pt-16 lg:pt-0">
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
