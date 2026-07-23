"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Users, Video, Rocket, Sliders, LineChart } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep dive into your brand DNA, target audience demographics, campaign objectives, and competitive landscape.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Formulate messaging angles, platform selection (TikTok, IG, YouTube), creative hooks, and target ROI key performance indicators.",
      icon: Target,
    },
    {
      num: "03",
      title: "Matching Talent",
      desc: "Handpick and recruit verified creators from our 150+ roster who authentically align with your brand values and audience.",
      icon: Users,
    },
    {
      num: "04",
      title: "Content Production",
      desc: "Direct creative shoots, handle studio production, produce high-converting UGC and commercial videos adhering to brand guidelines.",
      icon: Video,
    },
    {
      num: "05",
      title: "Campaign Launch",
      desc: "Execute coordinated multi-channel creator posting schedules, live activations, and real-time social engagement.",
      icon: Rocket,
    },
    {
      num: "06",
      title: "Optimization",
      desc: "Monitor live metrics, boost top-performing organic reels/TikToks via paid Spark Ads, and refine budget allocation.",
      icon: Sliders,
    },
    {
      num: "07",
      title: "Performance Report",
      desc: "Deliver transparent data dashboards covering impressions, engagement rates, click-through rates, and verified sales conversions.",
      icon: LineChart,
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-32 bg-[#171717] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      {/* BTS Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-behind-the-scenes-of-a-photo-shoot-41560-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#171717]/90 to-[#171717]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C79B63] text-xs font-light tracking-[0.25em] uppercase block mb-3"
          >
            METHODOLOGY & TIMELINE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight uppercase leading-tight font-heading"
          >
            Our Proven <span className="text-[#C79B63] font-normal">7-Step</span> Process.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-neutral-400 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            From initial strategy session to final performance analytics, every campaign follows our precision roadmap.
          </motion.p>
        </div>

        {/* Vertical Timeline - 100% Mobile Responsive Layout */}
        <div className="relative">
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C79B63] via-[#C79B63]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-14">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge Center */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#171717] border-2 border-[#C79B63] flex items-center justify-center text-[#C79B63] font-bold text-xs shadow-xl z-10">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#C79B63]" />
                  </div>

                  {/* Content Box - Fit cleanly inside mobile viewport without horizontal overflow */}
                  <div className="pl-10 sm:pl-14 md:pl-0 md:w-1/2 md:px-12 w-full">
                    <div className="bg-[#1D2622]/90 backdrop-blur-md border border-white/10 hover:border-[#C79B63]/50 p-5 sm:p-8 rounded-2xl transition-all shadow-xl group">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xl sm:text-2xl font-light text-[#C79B63] font-mono">
                          {step.num}
                        </span>
                        <h3 className="text-base sm:text-xl font-light uppercase tracking-wide text-[#F8F7F4] group-hover:text-[#C79B63] transition-colors font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
