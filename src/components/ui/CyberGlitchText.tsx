"use client";

import { motion } from "framer-motion";

export function CyberGlitchText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative inline-block ${className}`}
    >
      <span className="relative z-10 text-on-surface font-headline font-bold leading-tight block">
        {text}
      </span>
      {/* Glitch layers animating briefly on mount using Framer Motion */}
      <motion.span
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: [-4, 4, -4, 4, 0],
          y: [2, -2, 2, -2, 0],
          opacity: [0, 0.8, 0.8, 0.8, 0]
        }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        className="absolute top-0 left-0 -z-10 text-neon-cyan font-headline font-bold leading-tight mix-blend-screen"
        aria-hidden="true"
      >
        {text}
      </motion.span>

      <motion.span
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: [4, -4, 4, -4, 0],
          y: [-2, 2, -2, 2, 0],
          opacity: [0, 0.8, 0.8, 0.8, 0]
        }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 -z-20 text-neon-pink font-headline font-bold leading-tight mix-blend-screen"
        aria-hidden="true"
      >
        {text}
      </motion.span>
    </motion.div>
  );
}
