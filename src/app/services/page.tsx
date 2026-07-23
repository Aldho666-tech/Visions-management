"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import StackedSection from "@/components/ui/StackedSection";
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

  const sections = [
    {
      id: "hero-banner",
      bgClassName: "bg-[#171717]",
      heightClass: "h-[180vh]",
      component: (
        <PageHeroBanner
          category="SOLUTIONS & CAPABILITIES"
          title="Our"
          highlightTitle="Services"
          subtitle="End-to-end influencer activation, commercial video production, and social media strategy."
          imageUrl="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1920"
        />
      ),
    },
    {
      id: "services",
      bgClassName: "bg-[#1D2622]",
      heightClass: "h-[220vh]",
      component: <ServicesSection onOpenProjectModal={() => setProjectModalOpen(true)} />,
    },
    {
      id: "why-us",
      bgClassName: "bg-[#F8F7F4]",
      heightClass: "h-[200vh]",
      component: <WhyUsSection />,
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
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white">
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
