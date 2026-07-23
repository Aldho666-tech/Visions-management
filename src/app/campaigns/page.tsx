"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import CampaignsSection from "@/components/sections/CampaignsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function CampaignsPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#171717] text-[#F8F7F4] selection:bg-[#C79B63] selection:text-white pt-24">
      <CustomCursor />
      <Navbar
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <span className="text-xs font-light tracking-[0.25em] text-[#C79B63] uppercase">CASE STUDIES & HIGHLIGHTS</span>
        <h1 className="text-4xl sm:text-6xl font-light tracking-tight font-heading uppercase mt-2 text-white">Brand Campaigns</h1>
      </div>

      <CampaignsSection onOpenProjectModal={() => setProjectModalOpen(true)} />
      <TestimonialsSection />
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
