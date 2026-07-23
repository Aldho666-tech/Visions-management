"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Tag, ArrowUpRight, Share2 } from "lucide-react";

export interface NewsArticle {
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: NewsArticle | null;
}

export default function NewsModal({ isOpen, onClose, article }: NewsModalProps) {
  if (!isOpen || !article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#171717] text-[#F8F7F4] border border-white/20 shadow-2xl overflow-hidden rounded-none my-8 z-10 font-heading"
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-white/10 bg-[#1D2622]">
            <div className="flex items-center space-x-3 text-xs tracking-[0.25em] text-[#C79B63] uppercase">
              <Tag className="w-3.5 h-3.5" />
              <span>{article.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-all rounded-full"
              aria-label="Close News Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Article Content Body */}
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 font-heading">
            {/* Header Title */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white uppercase leading-tight font-heading">
                {article.title}
              </h2>

              <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono tracking-wider pt-2 border-t border-white/10">
                <span className="flex items-center space-x-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C79B63]" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <User className="w-3.5 h-3.5 text-[#C79B63]" />
                  <span>{article.author}</span>
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden border border-white/10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover filter brightness-95"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-neutral-300 font-light text-sm sm:text-base leading-relaxed border-b border-white/10 pb-8 font-heading">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                VISIONS MANAGEMENT PRESS OFFICE
              </span>

              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-bold text-xs uppercase tracking-[0.2em] transition-all"
              >
                CLOSE ARTICLE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
