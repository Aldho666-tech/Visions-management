"use client";

import React from "react";
import { Mail, Phone, Send } from "lucide-react";
import GsapSlideUpText from "@/components/ui/GsapSlideUpText";
import GsapSplitText from "@/components/ui/GsapSplitText";

interface ContactSectionProps {
  onOpenProjectModal?: () => void;
}

export default function ContactSection({ onOpenProjectModal }: ContactSectionProps) {
  return (
    <section id="contact-section" className="py-10 sm:py-14 bg-[#F8F7F4] text-[#171717] relative overflow-hidden font-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Signature Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-neutral-300 gap-6">
          <div className="space-y-3">
            <GsapSlideUpText delay={0.1} yOffset={20}>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium tracking-[0.3em] text-[#C79B63] uppercase">
                <Send className="w-4 h-4" />
                <span>GET IN TOUCH</span>
              </div>
            </GsapSlideUpText>

            <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-tight text-[#171717] font-heading leading-none">
              <GsapSplitText text="Let's Build Your" type="words" delay={0.2} stagger={0.05} />
              {" "}
              <span className="font-serif italic font-normal text-[#C79B63]">
                <GsapSplitText text="Next Partnership" type="words" delay={0.35} stagger={0.05} />
              </span>
            </h2>
          </div>

          <GsapSlideUpText delay={0.3} yOffset={25}>
            <p className="text-neutral-600 text-xs sm:text-sm font-light max-w-md leading-relaxed">
              Ready to connect your business with the right partners? Reach out to our team and let&apos;s explore what&apos;s possible together.
            </p>
          </GsapSlideUpText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Details Card */}
          <GsapSlideUpText delay={0.35} yOffset={40} className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#1E2421] via-[#171717] to-[#111413] text-[#F8F7F4] p-8 sm:p-10 rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[70px] border border-[#C79B63]/30 shadow-2xl flex flex-col justify-between space-y-8 h-full">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#C79B63] uppercase block mb-3">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-xl sm:text-2xl font-light uppercase tracking-wide font-heading text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                  Reach us directly via email or WhatsApp. We typically respond within 1 business day.
                </p>
              </div>

              <div className="space-y-6 text-sm font-light">
                <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C79B63]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#C79B63]/20 border border-[#C79B63]/30 flex items-center justify-center text-[#C79B63] shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-400 font-mono tracking-wider mb-0.5">
                      EMAIL INQUIRY
                    </span>
                    <a
                      href="mailto:hello@visionsmanagement.id"
                      className="hover:text-[#C79B63] font-mono text-sm text-neutral-200 transition-colors"
                    >
                      hello@visionsmanagement.id
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C79B63]/40 transition-colors">
                  <div className="w-11 h-11 rounded-full bg-[#C79B63]/20 border border-[#C79B63]/30 flex items-center justify-center text-[#C79B63] shrink-0 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-neutral-400 font-mono tracking-wider mb-0.5">
                      WHATSAPP DIRECT
                    </span>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#C79B63] font-mono text-sm text-neutral-200 transition-colors"
                    >
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={onOpenProjectModal}
                  className="w-full py-4 px-6 bg-[#C79B63] hover:bg-[#d8ab73] text-[#171717] font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_10px_25px_rgba(199,155,99,0.35)] flex items-center justify-center space-x-2 group"
                >
                  <span>START YOUR PROJECT</span>
                </button>
              </div>
            </div>
          </GsapSlideUpText>

          {/* Right: Process Overview Card */}
          <GsapSlideUpText delay={0.5} yOffset={40} className="lg:col-span-7">
            <div className="bg-white border border-neutral-200/90 p-8 sm:p-12 rounded-[28px] shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#C79B63] block mb-2 font-semibold">
                  HOW WE WORK
                </span>
                <h3 className="text-xl sm:text-2xl font-light uppercase tracking-wide mb-8 font-heading text-[#171717]">
                  From First Contact to Active Partnership
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      step: "01",
                      title: "Initial Inquiry",
                      desc: "Send us a brief overview of your business and the type of partnership you're looking for.",
                    },
                    {
                      step: "02",
                      title: "Discovery Call",
                      desc: "We schedule a 30–45 minute call to understand your goals, target audience, and partnership objectives.",
                    },
                    {
                      step: "03",
                      title: "Partnership Strategy",
                      desc: "We develop a tailored strategy identifying the right partners, collaboration formats, and activation plan.",
                    },
                    {
                      step: "04",
                      title: "Activation & Management",
                      desc: "We execute and manage the partnership end-to-end, tracking performance and reporting monthly.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="flex items-start space-x-5 p-4 rounded-2xl hover:bg-[#F8F7F4] border border-transparent hover:border-neutral-200/80 transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#171717] text-[#C79B63] font-mono text-xs font-bold flex items-center justify-center shadow-md shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-[#171717] uppercase tracking-wide font-heading mb-1 group-hover:text-[#C79B63] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500 font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GsapSlideUpText>
        </div>
      </div>
    </section>
  );
}
