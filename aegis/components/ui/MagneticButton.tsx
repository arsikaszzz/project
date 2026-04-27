"use client";

import { useState, useRef, MouseEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "./Button";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ 
  children, 
  href, 
  variant = "primary", 
  className,
  onClick 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / 3;
    const y = (e.clientY - centerY) / 3;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Button 
          href={href} 
          variant={variant} 
          className={className}
          onClick={onClick}
        >
          {children}
        </Button>
      </motion.div>
    </div>
  );
}
