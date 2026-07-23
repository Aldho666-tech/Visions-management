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
    <footer className="bg-[#1D2622] text-[#F8F7F4] pt-20 pb-10 border-t border-white/10 font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Column 1: Prominent VM SVG Logo & Social Icons */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div>
              <Link href="/" className="inline-block group">
                <img
                  src="/logo-vm.svg"
                  alt="VISIONS MANAGEMENT Logo"
                  className="h-24 sm:h-32 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_25px_rgba(199,155,99,0.4)]"
                />
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 text-neutral-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors text-xs font-mono font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3 text-xs tracking-[0.15em] font-light text-neutral-300">
            <div>
              <Link href="/" className="hover:text-white transition-colors block py-1">
                Home
              </Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-white transition-colors block py-1">
                About
              </Link>
            </div>
            <div>
              <Link href="/services" className="hover:text-white transition-colors block py-1">
                Services
              </Link>
            </div>
            <div>
              <Link href="/contact" className="hover:text-white transition-colors block py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Info & Actions */}
          <div className="lg:col-span-3 space-y-3 text-xs tracking-[0.15em] font-light text-neutral-300">
            <div>
              <Link href="/about" className="hover:text-white transition-colors block py-1">
                Agency Overview
              </Link>
            </div>
            <div>
              <Link href="/services" className="hover:text-white transition-colors block py-1">
                Creator Roster
              </Link>
            </div>
            <div>
              <button
                onClick={onOpenTalentModal}
                className="hover:text-white transition-colors text-left block py-1 font-light uppercase tracking-[0.15em]"
              >
                Join as Talent
              </button>
            </div>
            <div>
              <button
                onClick={onOpenProjectModal}
                className="hover:text-white transition-colors text-left block py-1 font-light uppercase tracking-[0.15em]"
              >
                Start Campaign Brief
              </button>
            </div>
          </div>

          {/* Column 4: Contact Details & Address */}
          <div className="lg:col-span-3 space-y-4 text-xs tracking-[0.15em] font-light text-neutral-300">
            <div>
              <a
                href="tel:+6281234567890"
                className="hover:text-white transition-colors block font-mono text-sm tracking-wider text-[#F8F7F4]"
              >
                +62 812 3456 7890
              </a>
            </div>
            <div>
              <a
                href="mailto:hello@visionsmanagement.id"
                className="hover:text-white transition-colors block font-mono text-xs tracking-wider text-[#C79B63]"
              >
                hello@visionsmanagement.id
              </a>
            </div>

            <div className="pt-2 text-[11px] leading-relaxed text-neutral-400 font-light space-y-0.5">
              <p className="text-white font-normal">VISIONS MANAGEMENT Creative Agency</p>
              <p>by VISIONS ENTERPRISE</p>
              <p>SCBD Tower 2, Jl. Jend. Sudirman, Jakarta 12190</p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Thin Divider */}
        <div className="border-t border-white/20 my-6" />

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-light tracking-[0.15em] text-neutral-400 space-y-4 sm:space-y-0">
          <div>
            <span>© VISIONS MANAGEMENT Creative Agency by VISIONS ENTERPRISE</span>
          </div>

          <div className="flex items-center space-x-8">
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
