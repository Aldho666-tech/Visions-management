"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, UserPlus } from "lucide-react";

interface TalentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TalentModal({ isOpen, onClose }: TalentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    niche: "Lifestyle & Fashion",
    instagram: "",
    tiktok: "",
    followers: "50k - 200k",
    portfolio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            className="relative w-full max-w-2xl bg-[#171717] text-[#F8F7F4] border border-[#C79B63]/40 rounded-2xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden"
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
                  Talent Application Sent!
                </h3>
                <p className="text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
                  Welcome, <span className="text-[#C79B63] font-medium">{formData.name}</span>. Our Talent Acquisition team at Visions Management will review your profile and reach out via WhatsApp/Email to discuss representation opportunities.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-6 px-8 py-3 bg-[#C79B63] text-[#171717] font-semibold text-sm rounded-full hover:bg-[#d8ab73] transition-all transform hover:scale-105"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="flex items-center space-x-2 text-[#C79B63] text-xs font-semibold uppercase tracking-widest mb-2">
                  <UserPlus className="w-4 h-4" />
                  <span>Join Our Creator Roster</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F8F7F4] tracking-tight mb-2">
                  Elevate Your Creator Career
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm mb-6">
                  Partner with global brands, get exclusive campaign deals, and access dedicated talent management.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your real name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="creator@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Instagram Username
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        TikTok Username
                      </label>
                      <input
                        type="text"
                        placeholder="@username"
                        value={formData.tiktok}
                        onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Content Niche / Category
                      </label>
                      <select
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] focus:outline-none focus:border-[#C79B63] transition-colors"
                      >
                        <option value="Lifestyle & Fashion">Lifestyle & Fashion</option>
                        <option value="Beauty & Cosmetics">Beauty & Cosmetics</option>
                        <option value="Gaming & Tech">Gaming & Tech</option>
                        <option value="Food & Culinary">Food & Culinary</option>
                        <option value="Travel & Adventure">Travel & Adventure</option>
                        <option value="Fitness & Wellness">Fitness & Wellness</option>
                        <option value="Business & Finance">Business & Finance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                        Combined Reach / Followers
                      </label>
                      <select
                        value={formData.followers}
                        onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
                        className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] focus:outline-none focus:border-[#C79B63] transition-colors"
                      >
                        <option value="10k - 50k">10k - 50k Followers</option>
                        <option value="50k - 200k">50k - 200k Followers</option>
                        <option value="200k - 500k">200k - 500k Followers</option>
                        <option value="500k+">500k+ Followers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                      Media Kit / Portfolio Link
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/... or website link"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full bg-[#1D2622]/80 border border-[#D8D8D8]/20 rounded-xl px-4 py-3 text-sm text-[#F8F7F4] placeholder-neutral-500 focus:outline-none focus:border-[#C79B63] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-sm tracking-wider uppercase py-4 rounded-xl transition-all flex items-center justify-center space-x-2 group"
                    >
                      <span>Apply for Representation</span>
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
