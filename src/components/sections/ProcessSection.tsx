"use client";

import React from "react";
import {
  MessageSquare,
  CreditCard,
  Send,
  CheckCircle,
  Truck,
  ShieldCheck,
  FileBarChart,
} from "lucide-react";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";
import GsapSplitText from "@/components/ui/GsapSplitText";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Guest Places an Order",
      desc: "Guest contacts the Visions Admin to place an order and claim the partnership discount.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "Payment & Delivery Confirmation",
      desc: "Admin confirms: (a) preferred payment method (cash or bank transfer), (b) delivery address, (c) estimated delivery fee (Gojek, Grab, or other courier).",
      icon: CreditCard,
    },
    {
      num: "03",
      title: "Order Sent to Partner",
      desc: "Visions Admin forwards the complete order details to the partner.",
      icon: Send,
    },
    {
      num: "04",
      title: "Partner Confirmation",
      desc: "Partner confirms: (a) product availability, (b) order acceptance, (c) estimated preparation time (if applicable).",
      icon: CheckCircle,
    },
    {
      num: "05",
      title: "Order Fulfillment",
      desc: "Partner prepares the order; order is delivered to the guest via Gojek, Grab, or another agreed delivery service.",
      icon: Truck,
    },
    {
      num: "06",
      title: "Payment Verification",
      desc: "Visions Admin verifies payment received (cash or bank transfer) and records the completed transaction.",
      icon: ShieldCheck,
    },
    {
      num: "07",
      title: "Monthly Reporting",
      desc: "Visions Admin prepares a monthly report covering: total orders, total sales value, discounts provided, payment reconciliation, and any outstanding issues.",
      icon: FileBarChart,
    },
  ];

  return (
    <section id="process" className="py-10 sm:py-14 bg-[#171717] text-[#F8F7F4] relative overflow-hidden font-heading font-light">
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
          <GsapSlideUpText delay={0.1} yOffset={20}>
            <span className="text-[#C79B63] text-xs font-mono font-medium tracking-[0.25em] uppercase block mb-3">
              OPERATIONAL WORKFLOW
            </span>
          </GsapSlideUpText>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight uppercase leading-tight font-heading text-white">
            <GsapSplitText text="How the" type="words" delay={0.2} stagger={0.05} />
            {" "}
            <span className="text-[#C79B63] font-serif italic font-normal">
              <GsapSplitText text="Partnership Works" type="words" delay={0.35} stagger={0.05} />
            </span>
          </h2>

          <GsapSlideUpText delay={0.3} yOffset={30}>
            <p className="mt-3 text-neutral-400 text-xs sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Every guest order follows a simple, transparent process—from placing an order and confirming payment to delivery and monthly reporting.
            </p>
          </GsapSlideUpText>
        </div>

        {/* Vertical Alternating Timeline */}
        <div className="relative">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C79B63] via-[#C79B63]/40 to-transparent -translate-x-1/2" />

          <div className="space-y-6 sm:space-y-12">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
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
                    <GsapSlideUpText delay={idx * 0.08} yOffset={35}>
                      <div className="bg-[#262626]/90 backdrop-blur-md border border-white/10 hover:border-[#C79B63]/50 p-4 sm:p-6 rounded-xl transition-all shadow-xl group">
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
                    </GsapSlideUpText>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
