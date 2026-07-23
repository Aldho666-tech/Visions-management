"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function VisionPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#171717] selection:bg-[#C79B63] selection:text-white">
      <CustomCursor />
      <Navbar
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <HeroSection
        onExploreWork={() => {}}
        onStartProject={() => setProjectModalOpen(true)}
      />

      <IntroSection onNavigateServices={() => {}} />

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
