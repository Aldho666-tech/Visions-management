"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import PageHeroBanner from "@/components/ui/PageHeroBanner";
import PartnersSection from "@/components/sections/PartnersSection";
import PartnerCategoriesSection from "@/components/sections/PartnerCategoriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function PartnersPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const sections = [
    {
      id: "hero-banner",
      bgClassName: "bg-[#171717]",
      noPadding: true,
      component: (
        <PageHeroBanner
          category=""
          title="Our"
          highlightTitle="Partners"
          subtitle="Connecting brands, businesses, and communities to create valuable partnerships and new business opportunities."
          imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        />
      ),
    },
    {
      id: "partners-bar",
      bgClassName: "bg-[#171717]",
      noPadding: true,
      component: <PartnersSection hideHeader={true} />,
    },
    {
      id: "partner-categories",
      bgClassName: "bg-[#F8F7F4]",
      component: <PartnerCategoriesSection />,
    },
    {
      id: "why-us",
      bgClassName: "bg-[#F8F7F4]",
      component: <WhyUsSection />,
    },
    {
      id: "contact",
      bgClassName: "bg-[#171717]",
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
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white">
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
