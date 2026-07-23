"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Users, Video, Rocket, Sliders, LineChart } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Strategic Alignment & B2B Audit",
      desc: "Deep dive into your business objectives, target market demographics, brand positioning, and competitive landscape.",
      icon: Compass,
    },
    {
      num: "02",
      title: "Network & Partner Matching",
      desc: "Formulate messaging angles and handpick verified creators, global brand networks, and commercial partners.",
      icon: Target,
    },
    {
      num: "03",
      title: "Partnership Architecture & Co-Branding",
      desc: "Design high-impact joint venture structures, creative direction, and bespoke co-branding activation frameworks.",
      icon: Users,
    },
    {
      num: "04",
      title: "Deal Structuring & Contract Execution",
      desc: "Handle legal terms, revenue agreements, multi-tier sponsor commitments, and verified contract execution.",
      icon: Video,
    },
    {
      num: "05",
      title: "Campaign & Co-Execution",
      desc: "Launch coordinated multi-channel creator activations, live B2B events, and synchronized digital rollouts.",
      icon: Rocket,
    },
    {
      num: "06",
      title: "Multi-Channel Amplification",
      desc: "Monitor engagement, amplify top-performing content across enterprise networks, and optimize campaign ROI.",
      icon: Sliders,
    },
    {
      num: "07",
      title: "Performance Analytics & Enterprise Scaling",
      desc: "Deliver empirical data dashboards covering brand reach, engagement ROI, and long-term enterprise growth.",
      icon: LineChart,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#171717] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
      {/* BTS Video Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-15 filter grayscale contrast-125"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-behind-the-scenes-of-a-photo-shoot-41560-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-[#171717]/95 to-[#171717]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#C79B63] text-xs font-mono font-medium tracking-[0.25em] uppercase block mb-3"
          >
            OUR 7-STEP METHODOLOGY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light tracking-tight uppercase leading-tight font-heading"
          >
            Proven <span className="text-[#C79B63] font-serif italic font-normal">7-Step</span> Partnership Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-neutral-400 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            From initial B2B alignment to long-term enterprise scaling, every partnership follows our precision methodology.
          </motion.p>
        </div>

        {/* Vertical Timeline - 100% Mobile Responsive Layout */}
        <div className="relative">
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C79B63] via-[#C79B63]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-6 sm:space-y-12">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge Center */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#171717] border-2 border-[#C79B63] flex items-center justify-center text-[#C79B63] font-bold text-xs shadow-xl z-10">
                    <IconComp className="w-4 h-4 text-[#C79B63]" />
                  </div>

                  {/* Content Box */}
                  <div className="pl-10 sm:pl-14 md:pl-0 md:w-1/2 md:px-8 w-full">
                    <div className="bg-[#1D2622]/90 backdrop-blur-md border border-white/10 hover:border-[#C79B63]/50 p-4 sm:p-6 rounded-xl transition-all shadow-xl group">
                      <div className="flex items-center space-x-3 mb-1.5">
                        <span className="text-lg sm:text-xl font-light text-[#C79B63] font-mono">
                          {step.num}
                        </span>
                        <h3 className="text-sm sm:text-base font-light uppercase tracking-wide text-[#F8F7F4] group-hover:text-[#C79B63] transition-colors font-heading">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-neutral-300 text-xs font-light leading-relaxed">
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
