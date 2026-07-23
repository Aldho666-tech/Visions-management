"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenProjectModal?: () => void;
  onOpenTalentModal?: () => void;
}

export default function Navbar({ onOpenProjectModal, onOpenTalentModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dedicated Core Navbar Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Partners", href: "/partners" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-[#171717]/95 backdrop-blur-md py-4 sm:py-5 shadow-2xl border-b border-white/10 text-[#F8F7F4]"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-6 sm:py-8 lg:py-9 text-[#F8F7F4]"
      }`}
    >
      {/* Container with Generous Breathing Room and Prominent Scaling */}
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Brand Logo - Enlarged ELEMENTIS-Style Typography & Icon */}
        <Link href="/" className="flex items-center space-x-4 group pr-4 shrink-0">
          <img
            src="/logo-vm.svg"
            alt="VM Icon"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_16px_rgba(199,155,99,0.35)]"
          />
          <span className="font-heading font-light tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.45em] text-sm sm:text-lg lg:text-xl uppercase text-white group-hover:text-[#C79B63] transition-colors leading-none whitespace-nowrap">
            VISIONS MANAGEMENT
          </span>
        </Link>

        {/* Desktop Nav Links - Prominent Luxury Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 text-sm xl:text-base tracking-[0.2em] font-light text-neutral-100 mx-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1.5 ${
                  isActive
                    ? "text-[#C79B63] border-b-2 border-[#C79B63]"
                    : "hover:text-white hover:border-b-2 hover:border-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Area - Enlarged Outline Button (Collabs With Us ↗) + Hamburger Toggle */}
        <div className="flex items-center space-x-4 sm:space-x-5 shrink-0">
          {/* Single Clean Prominent Action Button */}
          <button
            onClick={onOpenProjectModal}
            className="inline-flex items-center space-x-2 px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-light text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all rounded-none whitespace-nowrap tracking-wider shadow-lg"
          >
            <span>Collabs With Us</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>

          {/* Thin 3-Line Hamburger Menu Icon (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F8F7F4] hover:text-[#C79B63] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-[75px] sm:top-[85px] bg-[#171717]/98 backdrop-blur-2xl border-b border-white/10 p-8 shadow-2xl flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-5 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg sm:text-xl font-light text-[#F8F7F4] hover:text-[#C79B63] tracking-[0.25em] uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenProjectModal) onOpenProjectModal();
                }}
                className="w-full py-4 border-2 border-white/50 text-white font-light text-sm tracking-[0.2em] uppercase flex items-center justify-center space-x-2"
              >
                <span>Collabs With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
