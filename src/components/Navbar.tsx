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

  // Consolidated & Minimal Core Navbar Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-[#171717]/95 backdrop-blur-md py-3.5 shadow-2xl border-b border-white/10 text-[#F8F7F4]"
          : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4 sm:py-5 text-[#F8F7F4]"
      }`}
    >
      {/* Container with Generous Horizontal Breathing Room */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
        {/* Brand Logo - ELEMENTIS-Style Large Tracked Typography */}
        <Link href="/" className="flex items-center space-x-4 group pr-4">
          <img
            src="/logo-vm.svg"
            alt="VM Icon"
            className="h-8 sm:h-10 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_12px_rgba(199,155,99,0.3)]"
          />
          <span className="font-heading font-light tracking-[0.45em] sm:tracking-[0.55em] text-base sm:text-2xl uppercase text-white group-hover:text-[#C79B63] transition-colors leading-none whitespace-nowrap">
            VISIONS MANAGEMENT
          </span>
        </Link>

        {/* Desktop Nav Links - Clean 4 Core Items */}
        <nav className="hidden lg:flex items-center space-x-10 text-xs sm:text-[13px] tracking-[0.2em] font-light text-neutral-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? "text-[#C79B63] border-b border-[#C79B63]"
                    : "hover:text-white hover:border-b hover:border-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3.5 pl-4">
          <button
            onClick={onOpenProjectModal}
            className="px-5 py-2 text-xs tracking-[0.2em] font-light uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all rounded-none"
          >
            START PROJECT
          </button>
          <button
            onClick={onOpenTalentModal}
            className="px-5 py-2 text-xs tracking-[0.2em] font-light uppercase text-white border border-white/40 hover:border-white hover:bg-white/10 transition-all rounded-none"
          >
            JOIN AS TALENT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <button
            onClick={onOpenProjectModal}
            className="sm:hidden px-3.5 py-1.5 bg-white/10 text-white font-light text-xs uppercase tracking-[0.18em] border border-white/30"
          >
            START
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#F8F7F4] hover:text-[#C79B63] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden fixed inset-x-0 top-[65px] bg-[#171717]/95 backdrop-blur-xl border-b border-white/10 p-8 shadow-2xl flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-light text-[#F8F7F4] hover:text-[#C79B63] tracking-[0.25em] uppercase transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenProjectModal) onOpenProjectModal();
                }}
                className="w-full py-3 border border-white/40 text-white font-light text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-2"
              >
                <span>START PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenTalentModal) onOpenTalentModal();
                }}
                className="w-full py-3 border border-white/40 text-white font-light text-xs uppercase tracking-[0.2em]"
              >
                JOIN AS TALENT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
