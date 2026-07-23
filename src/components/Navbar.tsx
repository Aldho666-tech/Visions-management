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
          ? "bg-[#171717]/95 backdrop-blur-md py-3 sm:py-4 shadow-2xl border-b border-white/10 text-[#F8F7F4]"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3.5 sm:py-7 lg:py-8 text-[#F8F7F4]"
      }`}
    >
      {/* Container with Flawless Proportions across Mobile (320px) to Desktop */}
      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-8 lg:px-14 flex items-center justify-between">
        {/* Brand Logo - Compact Scaling on Small Mobile */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3.5 group shrink-0">
          <img
            src="/logo-vm.svg"
            alt="VM Icon"
            className="h-6 xs:h-7 sm:h-10 md:h-11 w-auto object-contain filter group-hover:brightness-125 transition-all drop-shadow-[0_0_16px_rgba(199,155,99,0.35)]"
          />
          <span className="font-heading font-light tracking-[0.2em] xs:tracking-[0.3em] sm:tracking-[0.4em] lg:tracking-[0.45em] text-[10px] xs:text-xs sm:text-base lg:text-xl uppercase text-white group-hover:text-[#C79B63] transition-colors leading-none whitespace-nowrap">
            VISIONS<span className="hidden xs:inline"> MANAGEMENT</span>
          </span>
        </Link>

        {/* Desktop Nav Links - Responsive Spacing */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-xs xl:text-base tracking-[0.2em] font-light text-neutral-100 mx-4">
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

        {/* Right Action Area - Perfectly Fitted Button + Menu Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
          {/* Single Action Button (Compact on Mobile to Prevent Overflow) */}
          <button
            onClick={onOpenProjectModal}
            className="inline-flex items-center space-x-1 sm:space-x-2 px-2.5 xs:px-3.5 sm:px-6 py-1.5 sm:py-2.5 text-[10px] xs:text-xs sm:text-sm font-light text-white border border-white/40 sm:border-2 hover:border-white hover:bg-white/10 transition-all rounded-none whitespace-nowrap tracking-wide"
          >
            <span>Collabs<span className="hidden xs:inline"> With Us</span></span>
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </button>

          {/* Thin 3-Line Hamburger Menu Icon (Mobile & Tablet) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 sm:p-1.5 text-[#F8F7F4] hover:text-[#C79B63] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8" />}
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
            className="lg:hidden fixed inset-x-0 top-[52px] xs:top-[60px] sm:top-[75px] bg-[#171717]/98 backdrop-blur-2xl border-b border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col space-y-6 max-h-[calc(100vh-75px)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-xl font-light text-[#F8F7F4] hover:text-[#C79B63] tracking-[0.25em] uppercase transition-colors py-1"
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
                className="w-full py-3 border border-white/40 text-white font-light text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center space-x-2"
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
