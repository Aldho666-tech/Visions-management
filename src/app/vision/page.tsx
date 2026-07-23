"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StackedSection from "@/components/ui/StackedSection";
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
      heightClass: "h-[200vh]",
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
      heightClass: "h-[200vh]",
      component: <IntroSection onNavigateServices={() => {}} />,
    },
    {
      id: "contact",
      bgClassName: "bg-[#1D2622]",
      heightClass: "h-[100vh]",
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
          {sections.map((sec, idx) => (
            <StackedSection
              key={sec.id}
              id={sec.id}
              index={idx}
              totalSections={sections.length}
              bgClassName={sec.bgClassName}
              heightClass={sec.heightClass}
            >
              {sec.component}
            </StackedSection>
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
