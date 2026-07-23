"use client";

import React from "react";
import Link from "next/link";
import { Camera, Share2 } from "lucide-react";

interface FooterProps {
  onOpenProjectModal?: () => void;
  onOpenTalentModal?: () => void;
}

export default function Footer({ onOpenProjectModal, onOpenTalentModal }: FooterProps) {
  return (
    <footer className="bg-[#18211E] text-[#F8F7F4] pt-16 sm:pt-20 pb-10 border-t border-white/10 font-heading font-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top 4-Column Layout (Matching Exact Proportions & Sizing of Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16">
          {/* Column 1: Brand Logo & Social Icons */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <Link href="/" className="flex items-center space-x-3.5 group">
                <img
                  src="/logo-vm.svg"
                  alt="VM Icon"
                  className="h-8 sm:h-10 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_15px_rgba(199,155,99,0.3)] shrink-0"
                />
                <span className="font-heading font-light tracking-[0.3em] sm:tracking-[0.4em] text-base sm:text-lg lg:text-xl uppercase text-white group-hover:text-[#C79B63] transition-colors leading-none whitespace-nowrap">
                  VISIONS MANAGEMENT
                </span>
              </Link>
              <div className="text-xs text-neutral-400 font-light tracking-widest uppercase pt-1">
                Connecting Your Business
              </div>
            </div>

            {/* Social Icons (Exact Placement & Style from Reference) */}
            <div className="flex items-center space-x-6 text-neutral-300 pt-6 sm:pt-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C79B63] transition-colors text-sm font-mono font-medium"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C79B63] transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C79B63] transition-colors"
                aria-label="WhatsApp"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3.5 text-sm sm:text-base font-light text-[#F8F7F4]">
            <div>
              <Link href="/" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Home
              </Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-[#C79B63] transition-colors block py-0.5">
                About
              </Link>
            </div>
            <div>
              <Link href="/services" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Services
              </Link>
            </div>
            <div>
              <Link href="/partners" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Partners
              </Link>
            </div>
            <div>
              <Link href="/news" className="hover:text-[#C79B63] transition-colors block py-0.5">
                News
              </Link>
            </div>
            <div>
              <Link href="/contact" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Company Overview Links */}
          <div className="lg:col-span-3 space-y-3.5 text-sm sm:text-base font-light text-[#F8F7F4]">
            <div>
              <Link href="/about" className="hover:text-[#C79B63] transition-colors block py-0.5">
                About VISIONS
              </Link>
            </div>
            <div>
              <Link href="/partners" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Partnership Network
              </Link>
            </div>
            <div>
              <Link href="/creators" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Talent Roster
              </Link>
            </div>
            <div>
              <Link href="/news" className="hover:text-[#C79B63] transition-colors block py-0.5">
                Press Room
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Address Block (Exact Alignment from Reference) */}
          <div className="lg:col-span-3 space-y-2 text-sm sm:text-base font-light text-[#F8F7F4]">
            <div>
              <a
                href="tel:+6281234567890"
                className="hover:text-[#C79B63] transition-colors block tracking-wide"
              >
                +62 812 3456 7890
              </a>
            </div>
            <div className="pb-4">
              <a
                href="mailto:hello@visionsmanagement.id"
                className="hover:text-[#C79B63] transition-colors block tracking-wide text-neutral-200"
              >
                hello@visionsmanagement.id
              </a>
            </div>

            <div className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed space-y-0.5 pt-2">
              <p className="text-white font-light">VISIONS MANAGEMENT Partnership Agency</p>
              <p className="text-neutral-400">by VISIONS ENTERPRISE</p>
              <p className="text-neutral-400 pt-1">SCBD Tower 2, Jl. Jend. Sudirman, Jakarta 12190</p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Thin Line (Matching Reference Screenshot) */}
        <div className="border-t border-white/20 my-8 sm:my-10" />

        {/* Bottom Copyright Bar & Policies (Matching Reference Screenshot) */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-light text-neutral-400 space-y-4 sm:space-y-0">
          <div>
            <span>© VISIONS MANAGEMENT Partnership Agency by VISIONS ENTERPRISE</span>
          </div>

          <div className="flex items-center space-x-8 sm:space-x-12">
            <a href="#" className="hover:text-white transition-colors">
              Policies and Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
