"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface NeonCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  highlightColor?: "primary" | "secondary" | "tertiary";
}

export function NeonCard({
  title,
  description,
  icon,
  highlightColor = "primary",
}: NeonCardProps) {
  const [moduleId, setModuleId] = useState("MDL_00");

  useEffect(() => {
    setModuleId(`MDL_0${Math.floor(Math.random() * 9) + 1}`);
  }, []);

  const gradientMap = {
    primary: "from-primary-container",
    secondary: "from-secondary",
    tertiary: "from-tertiary",
  };

  const hoverState = "hover:bg-surface-container-highest hover:backdrop-blur-2xl";

  const textIconMap = {
    primary: "text-primary-container",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <motion.div
      variants={fadeUpVariant}
      className={cn(
        "glassmorphism p-12 relative overflow-hidden transition-all duration-500 group",
        hoverState
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          gradientMap[highlightColor]
        )}
      />
      <div className={cn("text-5xl mb-8 opacity-80 group-hover:opacity-100 transition-opacity", textIconMap[highlightColor])}>
        {icon}
      </div>
      <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface tracking-tight">
        {title}
      </h3>
      <p className="text-base text-on-surface-variant leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-6 right-8 text-xs font-label text-outline-variant tracking-[0.2em] uppercase">
        {moduleId}
      </div>
    </motion.div>
  );
}
