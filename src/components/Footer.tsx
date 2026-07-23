"use client";

import React from "react";
import Link from "next/link";
import { Camera, Share2, Handshake } from "lucide-react";

interface FooterProps {
  onOpenProjectModal?: () => void;
  onOpenTalentModal?: () => void;
}

export default function Footer({ onOpenProjectModal, onOpenTalentModal }: FooterProps) {
  return (
    <footer className="bg-[#171717] text-[#F8F7F4] pt-20 pb-10 border-t border-white/10 font-heading font-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">
          {/* Column 1: VM SVG Icon + Brand Name + Tagline */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3.5 group">
                <img
                  src="/logo-vm.svg"
                  alt="VM Icon"
                  className="h-8 sm:h-10 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_15px_rgba(199,155,99,0.3)] shrink-0"
                />
                <span className="font-heading font-light tracking-[0.25em] sm:tracking-[0.45em] text-sm sm:text-base lg:text-lg uppercase text-white group-hover:text-[#C79B63] transition-colors leading-none whitespace-nowrap">
                  VISIONS MANAGEMENT
                </span>
              </Link>

              <div className="space-y-2 pt-2">
                <div className="inline-flex items-center space-x-2 text-[10px] font-mono tracking-[0.25em] text-[#C79B63] uppercase bg-white/5 border border-white/10 px-3 py-1">
                  <Handshake className="w-3.5 h-3.5" />
                  <span>CONNECTING YOUR BUSINESS</span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
                  A premier partnership agency connecting businesses with global brand networks, strategic markets, and top-tier talent.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-6 text-neutral-400">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C79B63] transition-colors text-xs font-mono font-bold"
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
          <div className="lg:col-span-2 space-y-3 text-xs tracking-[0.15em] font-light text-neutral-300">
            <span className="text-[10px] font-mono text-[#C79B63] uppercase tracking-widest block mb-2 font-bold">NAVIGATION</span>
            <div>
              <Link href="/" className="hover:text-[#C79B63] transition-colors block py-1">
                Home
              </Link>
            </div>
            <div>
              <Link href="/about" className="hover:text-[#C79B63] transition-colors block py-1">
                About
              </Link>
            </div>
            <div>
              <Link href="/services" className="hover:text-[#C79B63] transition-colors block py-1">
                Services
              </Link>
            </div>
            <div>
              <Link href="/partners" className="hover:text-[#C79B63] transition-colors block py-1">
                Partners
              </Link>
            </div>
            <div>
              <Link href="/news" className="hover:text-[#C79B63] transition-colors block py-1">
                News
              </Link>
            </div>
            <div>
              <Link href="/contact" className="hover:text-[#C79B63] transition-colors block py-1">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Info & Actions */}
          <div className="lg:col-span-3 space-y-3 text-xs tracking-[0.15em] font-light text-neutral-300">
            <span className="text-[10px] font-mono text-[#C79B63] uppercase tracking-widest block mb-2 font-bold">INITIATIVES</span>
            <div>
              <Link href="/partners" className="hover:text-[#C79B63] transition-colors block py-1">
                Brand Network
              </Link>
            </div>
            <div>
              <Link href="/creators" className="hover:text-[#C79B63] transition-colors block py-1">
                Talent Roster
              </Link>
            </div>
            <div>
              <button
                onClick={onOpenTalentModal}
                className="hover:text-[#C79B63] transition-colors text-left block py-1 font-light uppercase tracking-[0.15em]"
              >
                Join as Talent
              </button>
            </div>
            <div>
              <button
                onClick={onOpenProjectModal}
                className="hover:text-[#C79B63] transition-colors text-left block py-1 font-light uppercase tracking-[0.15em]"
              >
                Start Partnership Brief
              </button>
            </div>
          </div>

          {/* Column 4: Contact Details & Address */}
          <div className="lg:col-span-3 space-y-4 text-xs tracking-[0.15em] font-light text-neutral-300">
            <span className="text-[10px] font-mono text-[#C79B63] uppercase tracking-widest block mb-2 font-bold">HEADQUARTERS</span>
            <div>
              <a
                href="tel:+6281234567890"
                className="hover:text-[#C79B63] transition-colors block font-mono text-sm tracking-wider text-[#F8F7F4]"
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
              <p className="text-white font-normal">VISIONS MANAGEMENT PARTNERSHIP AGENCY</p>
              <p>SCBD Tower 2, Jl. Jend. Sudirman, Jakarta 12190</p>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Thin Divider */}
        <div className="border-t border-white/20 my-6" />

        {/* Bottom Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-light tracking-[0.15em] text-neutral-400 space-y-4 sm:space-y-0">
          <div>
            <span>© VISIONS MANAGEMENT Partnership Agency — Connecting Your Business</span>
          </div>

          <div className="flex items-center space-x-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Partnership
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
