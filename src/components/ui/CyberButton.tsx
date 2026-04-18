"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "ghost";
}

export function CyberButton({ variant = "primary", className, children, ...props }: CyberButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98, x: [0, -2, 2, -2, 0] }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={cn(
        "py-4 px-8 font-label text-sm font-bold uppercase tracking-widest rounded-sm transition-all text-center",
        variant === "primary" &&
          "bg-primary text-on-primary ambient-glow-primary hover:ambient-glow-primary-hover",
        variant === "ghost" &&
          "border border-outline-variant/30 text-primary hover:bg-surface-container-high",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
