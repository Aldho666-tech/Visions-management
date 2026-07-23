"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ParallaxFlowSection from "@/components/ui/ParallaxFlowSection";
import PageHeroBanner from "@/components/ui/PageHeroBanner";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  const sections = [
    {
      id: "hero-banner",
      bgClassName: "bg-[#171717]",
      noPadding: true,
      component: (
        <PageHeroBanner
          category="GET IN TOUCH"
          title="Contact"
          highlightTitle="VISIONS"
          subtitle="Let's build meaningful brand collaborations and elevate your creator career."
          imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        />
      ),
    },
    {
      id: "contact-info",
      bgClassName: "bg-[#F8F7F4]",
      component: (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 bg-[#1D2622] text-[#F8F7F4] p-8 sm:p-12 rounded-3xl space-y-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-light uppercase tracking-wide font-heading">
                Let&apos;s Architect Your Influence
              </h2>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                Our strategist team in Jakarta is ready to help you plan campaign briefs, select creator rosters, or represent your talent career.
              </p>

              <div className="space-y-6 pt-4 text-sm font-light">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-400 font-mono">EMAIL INQUIRY</span>
                    <a href="mailto:hello@visionsmanagement.id" className="hover:text-[#C79B63] font-mono text-base">hello@visionsmanagement.id</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-400 font-mono">PHONE & WHATSAPP</span>
                    <a href="tel:+6281234567890" className="hover:text-[#C79B63] font-mono text-base">+62 812 3456 7890</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-400 font-mono">STUDIO LOCATION</span>
                    <span className="text-sm">SCBD Tower 2, Jl. Jend. Sudirman, Jakarta 12190</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setProjectModalOpen(true)}
                  className="px-8 py-3.5 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition-all"
                >
                  START PROJECT BRIEF
                </button>
                <button
                  onClick={() => setTalentModalOpen(true)}
                  className="px-8 py-3.5 border border-white/30 text-white font-light text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/10 transition-all"
                >
                  CREATOR APPLICATION
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#D8D8D8]/60 p-8 sm:p-12 rounded-3xl shadow-sm flex flex-col justify-between text-[#171717]">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#C79B63] block mb-2 font-bold">OPERATING HOURS</span>
                <h3 className="text-2xl font-light uppercase tracking-wide mb-6 font-heading">Studio & Office Hours</h3>
                <div className="space-y-4 text-sm font-light text-neutral-600 border-t border-neutral-100 pt-6">
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span>Monday — Friday</span>
                    <span className="font-mono text-neutral-900">09:00 — 18:00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-neutral-100">
                    <span>Saturday</span>
                    <span className="font-mono text-neutral-900">10:00 — 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday & Public Holidays</span>
                    <span className="font-mono text-neutral-400">Closed (On-Call Shoots)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#F8F7F4] rounded-2xl border border-neutral-200">
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  For urgent production inquiries or live shoot booking coordination, please mention <span className="font-bold text-neutral-900">[URGENT]</span> in your email subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
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
      <main className="min-h-screen bg-[#171717] text-[#171717] selection:bg-[#C79B63] selection:text-white relative">
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
