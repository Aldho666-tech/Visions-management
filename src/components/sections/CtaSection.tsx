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
    <section className="relative py-28 sm:py-36 bg-[#171717] text-[#F8F7F4] overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 filter brightness-75 contrast-125 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-41559-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/80 to-[#171717]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#C79B63] text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE VISIONS ECOSYSTEM</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight font-heading"
        >
          Ready to Create Something <span className="text-[#C79B63]">Remarkable?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto text-balance"
        >
          Whether you&apos;re a growing brand or an ambitious creator, let&apos;s build meaningful collaborations together.
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
            className="w-full sm:w-auto px-9 py-4 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-xs uppercase tracking-widest rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <span>START YOUR PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenTalentModal}
            className="w-full sm:w-auto px-9 py-4 bg-white/10 hover:bg-white/20 text-[#F8F7F4] font-semibold text-xs uppercase tracking-widest rounded-full backdrop-blur-md border border-white/20 hover:border-[#C79B63]/60 transition-all flex items-center justify-center space-x-2"
          >
            <UserPlus className="w-4 h-4 text-[#C79B63]" />
            <span>Become a Creator</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
