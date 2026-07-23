"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface VelocityScrollProps {
  text: string;
  defaultVelocity?: number;
  className?: string;
}

export default function VelocityScroll({
  text,
  defaultVelocity = 3,
  className = "bg-[#171717] text-[#C79B63] border-y border-white/10",
}: VelocityScrollProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * defaultVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${(v % 50) - 50}%`);

  return (
    <div className={`overflow-hidden whitespace-nowrap flex py-4 sm:py-5 ${className}`}>
      <motion.div
        className="flex font-heading font-light tracking-[0.3em] uppercase text-xs sm:text-sm select-none"
        style={{ x }}
      >
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
        <span className="mr-12">{text}</span>
      </motion.div>
    </div>
  );
}
