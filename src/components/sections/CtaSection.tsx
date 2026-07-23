"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, UserPlus, Sparkles } from "lucide-react";

interface CtaSectionProps {
  onOpenProjectModal: () => void;
  onOpenTalentModal: () => void;
}

export default function CtaSection({ onOpenProjectModal, onOpenTalentModal }: CtaSectionProps) {
  return (
    <section className="relative py-20 sm:py-28 bg-[#F8F7F4] text-[#171717] overflow-hidden flex items-center justify-center font-heading font-light border-t border-neutral-300">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-[#171717] border border-[#C79B63]/40 text-[#C79B63] text-xs font-mono font-medium uppercase tracking-[0.25em] mb-6 shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE VISIONS ECOSYSTEM</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight uppercase leading-tight font-heading text-[#171717]"
        >
          Ready to Create Something <span className="font-serif italic font-normal text-[#C79B63]">Remarkable?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto text-balance"
        >
          Whether you&apos;re a growing brand or an ambitious creator, let&apos;s build meaningful strategic partnerships together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#171717] hover:bg-[#C79B63] text-white hover:text-[#171717] font-light text-xs uppercase tracking-[0.2em] border border-[#171717] hover:border-[#C79B63] transition-all shadow-xl flex items-center justify-center space-x-2 group"
          >
            <span>START YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenTalentModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-[#171717] text-[#171717] hover:text-white font-light text-xs uppercase tracking-[0.2em] border border-[#171717] transition-all flex items-center justify-center space-x-2"
          >
            <UserPlus className="w-4 h-4 text-[#C79B63]" />
            <span>BECOME A CREATOR</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
