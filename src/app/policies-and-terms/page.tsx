"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/Modals/ProjectModal";
import TalentModal from "@/components/Modals/TalentModal";
import CustomCursor from "@/components/ui/CustomCursor";

export default function PoliciesAndTermsPage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [talentModalOpen, setTalentModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#171717] text-[#F8F7F4] selection:bg-[#C79B63] selection:text-white font-heading">
      <CustomCursor />
      <Navbar
        onOpenProjectModal={() => setProjectModalOpen(true)}
        onOpenTalentModal={() => setTalentModalOpen(true)}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-14 pt-36 pb-20">
        {/* Status Badge */}
        <div className="inline-block px-3 py-1 bg-[#C79B63]/20 border border-[#C79B63]/40 text-[#C79B63] text-xs font-mono tracking-widest uppercase mb-6 rounded-none">
          DRAFT — Pending Legal Review
        </div>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-8 font-heading">
          Policies &amp; Terms of Service
        </h1>

        <div className="space-y-8 text-neutral-300 text-sm sm:text-base font-light leading-relaxed border-t border-white/10 pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white uppercase tracking-wide">
              1. General Overview
            </h2>
            <p>
              Welcome to Visions Management. The policies and terms outlined here govern the use of our strategic partnership agency platform, services, and digital channels operated by Visions Enterprise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white uppercase tracking-wide">
              2. Privacy &amp; Data Handling
            </h2>
            <p>
              We respect your privacy and protect personal information provided during partnership inquiries, project briefs, and talent registrations. Data submitted through our forms is strictly used for internal communication, business matchmaking, and campaign execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white uppercase tracking-wide">
              3. Partnership Agreements &amp; Guarantees
            </h2>
            <p>
              All formal commercial engagements, revenue agreements, and co-branding activations are finalized under explicit written contracts between Visions Management and partner entities. Website content and preliminary estimates do not constitute binding commercial guarantees until signed contracts are executed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-white uppercase tracking-wide">
              4. Dispute Resolution &amp; Inquiries
            </h2>
            <p>
              If you have any questions, legal concerns, or dispute inquiries regarding our platform or partnerships, please contact our administrative office at{" "}
              <a href="mailto:hello@visionsmanagement.id" className="text-[#C79B63] underline">
                hello@visionsmanagement.id
              </a>.
            </p>
          </section>
        </div>
      </div>

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
