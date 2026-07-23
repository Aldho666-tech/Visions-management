"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Talent Management & Influencer Campaign",
    budget: "$5,000 - $15,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after close
    }, 500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-[#171717]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#1D2622] text-[#F8F7F4] border border-[#C79B63]/30 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center flex flex-col items-center justify-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#C79B63]/20 flex items-center justify-center text-[#C79B63] mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F7F4]">
                  Project Inquiry Received!
                </h3>
                <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
                  Thank you, <span className="text-[#C79B63] font-medium">{formData.name}</span>. Our strategist team at Visions Management will review your project requirements for <span className="text-white font-medium">{formData.company || "your brand"}</span> and contact you within 24 hours.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-6 px-8 py-3 bg-[#C79B63] text-[#171717] font-semibold text-sm rounded-full hover:bg-[#d8ab73] transition-all transform hover:scale-105"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 text-[#C79B63] text-xs font-semibold uppercase tracking-widest mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Campaign</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F7F4] tracking-tight mb-2">
                  Let&apos;s Build Something Remarkable
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm mb-6">
                  Tell us about your brand vision, target creators, and project scope.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nike Indonesia"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] focus:outline-none focus:border-[#C79B63] transition-colors"
                      >
                        <option value="< $5,000">&lt; $5,000 (IDR 75M)</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000 (IDR 75M - 225M)</option>
                        <option value="$15,000 - $50,000">$15,000 - $50,000 (IDR 225M - 750M)</option>
                        <option value="$50,000+">$50,000+ (IDR 750M+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] focus:outline-none focus:border-[#C79B63] transition-colors"
                    >
                      <option value="Talent Management & Influencer Campaign">Talent Management & Influencer Campaign</option>
                      <option value="Content Production & UGC">Content Production & UGC</option>
                      <option value="Social Media Strategy & TikTok Marketing">Social Media Strategy & TikTok Marketing</option>
                      <option value="Commercial Photography & Video Production">Commercial Photography & Video Production</option>
                      <option value="Paid Performance Ads & Growth">Paid Performance Ads & Growth</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Project Details / Brief
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about campaign goals, key deliverables, target launch date..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#171717]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-sm tracking-wider uppercase py-4 rounded-xl transition-all flex items-center justify-center space-x-2 group"
                    >
                      <span>Submit Project Brief</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
