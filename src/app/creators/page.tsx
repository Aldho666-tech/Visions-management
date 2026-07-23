"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StackedSection from "@/components/ui/StackedSection";
import CreatorsSection from "@/components/sections/CreatorsSection";
import StatsSection from "@/components/sections/StatsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function CreatorsPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const sections = [
    {
      id: "creators-banner",
      bgClassName: "bg-[#F8F7F4]",
      heightClass: "h-[220vh]",
      component: (
        <div className="w-full text-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-4">
            <span className="text-xs font-light tracking-[0.25em] text-[#C79B63] uppercase">EXCLUSIVE ROSTER</span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-heading uppercase mt-2">Featured Creators</h1>
          </div>
          <CreatorsSection onOpenTalentModal={() => setTalentModalOpen(true)} />
        </div>
      ),
    },
    {
      id: "stats",
      bgClassName: "bg-[#F8F7F4]",
      heightClass: "h-[180vh]",
      component: <StatsSection />,
    },
    {
      id: "cta",
      bgClassName: "bg-[#171717]",
      heightClass: "h-[180vh]",
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
      <main className="min-h-screen bg-[#F8F7F4] text-[#171717] selection:bg-[#C79B63] selection:text-white">
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
