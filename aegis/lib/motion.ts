import { Variants } from "framer-motion";

export const easings = {
  expoOut: [0.22, 1, 0.36, 1] as const,
  expoInOut: [0.65, 0, 0.35, 1] as const,
};

export const durations = {
  fast: 0.2,
  normal: 0.6,
  slow: 0.8,
};

export const revealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24,
    clipPath: "inset(0 0 100% 0)"
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: durations.normal,
      ease: easings.expoOut,
      delay: custom * 0.06,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easings.expoOut },
  },
};

export const magneticVariants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: (custom: { x: number; y: number }) => ({
    scale: 1.02,
    x: custom.x * 0.2,
    y: custom.y * 0.2,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  }),
};
