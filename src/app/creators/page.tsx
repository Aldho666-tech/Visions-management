"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
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

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#171717] selection:bg-[#C79B63] selection:text-white pt-24">
      <CustomCursor />
      <Navbar
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-xs font-light tracking-[0.25em] text-[#C79B63] uppercase">EXCLUSIVE ROSTER</span>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-heading uppercase mt-2">Featured Creators</h1>
      </div>

      <CreatorsSection onOpenTalentModal={() => setTalentModalOpen(true)} />
      <StatsSection />
      <CtaSection
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <Footer
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />
      <TalentModal
        isOpen={talentModalOpen}
        onClose={() => setTalentModalOpen(false)}
      />
    </main>
  );
}
