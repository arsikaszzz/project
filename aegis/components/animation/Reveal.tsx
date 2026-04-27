"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, JSX, ReactNode } from "react";
import { revealVariants } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const MotionComponent = (motion[as as keyof typeof motion] ||
    motion.div) as ComponentType<Record<string, unknown>>;

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
      custom={delay}
    >
      {children}
    </MotionComponent>
  );
}
