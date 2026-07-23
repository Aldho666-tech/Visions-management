"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Newspaper, Calendar, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import NewsModal, { NewsArticle } from "@/components/Modals/NewsModal";

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const newsArticles: NewsArticle[] = [
    {
      title: "Visions Management Expands Luxury Creator Roster Across Southeast Asia",
      category: "AGENCY NEWS",
      date: "JULY 18, 2026",
      author: "EDITORIAL TEAM",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=1200",
      excerpt:
        "Announcing our Q3 2026 strategic talent expansion, welcoming 35+ high-fashion, lifestyle, and luxury commercial creators to our exclusive management roster.",
      content: [
        "Visions Management is proud to announce our official expansion across key fashion capitals in Southeast Asia, including Jakarta, Singapore, and Bangkok. This strategic milestone introduces 35 new elite creators specializing in luxury fashion editorial, haute horlogerie, and high-end beauty activations.",
        "Through our proprietary creator intelligence platform and dedicated talent management division, Visions Management provides seamless brand representation, high-production commercial studio support, and empirical ROI tracking for global luxury clients.",
        "'Our mission has always been to elevate creator storytelling into a respected, high-revenue art form,' said the Managing Director of Visions Management. 'This expansion allows us to serve multinational houses with unprecedented regional depth.'"
      ],
    },
    {
      title: "Vogue & Visions Co-Host High-Fashion Digital Creator Summit 2026",
      category: "PRESS FEATURE",
      date: "JUNE 24, 2026",
      author: "PRESS OFFICE",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
      excerpt:
        "An exclusive private gathering in SCBD Jakarta uniting global brand directors, creative producers, and top 1% fashion influencers.",
      content: [
        "The inaugural Vogue x Visions Creator Summit took place at SCBD Jakarta, bringing together over 120 leading brand executives, luxury creative directors, and premier digital talent.",
        "Keynotes focused on the evolution of luxury creator marketing, algorithmic content performance, and the integration of cinematic commercial production into social-first campaigns.",
        "Attendees experienced private runway viewings, live panel discussions, and exclusive networking sessions designed to architect high-impact 2027 digital marketing roadmaps."
      ],
    },
    {
      title: "Digital Marketing Excellence Award: Best Influencer Campaign 2025",
      category: "AWARDS & HONORS",
      date: "MAY 12, 2026",
      author: "INDUSTRY REPORT",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
      excerpt:
        "Visions Management recognized for breaking engagement records with Chanel's high-fashion digital launch campaign.",
      content: [
        "Visions Management has been awarded 'Best Influencer Activation Campaign' at the Regional Digital Marketing Excellence Awards 2025.",
        "The award recognizes our multi-tiered creator campaign for Chanel Beauté, which achieved over 18 million organic impressions, a 340% increase in brand sentiment, and record conversion rates across Southeast Asian e-commerce flagships.",
        "Our data-backed curation model ensured that every participating creator perfectly embodied the brand's heritage while driving measurable retail outcome."
      ],
    },
  ];

  return (
    <section id="news" className="py-12 sm:py-16 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-light tracking-[0.3em] text-[#C79B63] uppercase">
              <Newspaper className="w-4 h-4" />
              <span>INSIGHTS & ANNOUNCEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] leading-none">
              News & <span className="font-serif italic font-normal text-[#C79B63]">Press</span>
            </h2>
          </div>

          <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md leading-relaxed">
            Stay updated with our agency milestones, industry reports, luxury creator awards, and upcoming high-fashion summits.
          </p>
        </div>

        {/* Featured Editorial Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {newsArticles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-neutral-200/80 hover:border-[#C79B63] transition-all group flex flex-col justify-between p-6 space-y-6 shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Image Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute top-3 left-3 bg-[#171717] text-[#F8F7F4] text-[9px] tracking-[0.2em] font-mono uppercase px-2.5 py-1">
                    {article.category}
                  </div>
                </div>

                {/* Date & Meta */}
                <div className="flex items-center space-x-2 text-[10px] font-mono text-[#C79B63] uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>

                {/* Headline Title */}
                <h3 className="text-base sm:text-lg font-light text-[#171717] tracking-tight leading-snug font-heading group-hover:text-[#C79B63] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Read Full Article Button */}
              <div className="pt-3 border-t border-neutral-100">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center space-x-2 text-xs font-light tracking-wider text-[#171717] border-b border-[#C79B63] hover:border-[#171717] pb-1 transition-all group-hover:text-[#C79B63]"
                >
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News Article Modal Drawer */}
      <NewsModal
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        article={selectedArticle}
      />
    </section>
  );
}
