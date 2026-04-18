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
    // Generate random module ID only on the client to prevent hydration mismatch
    setModuleId(`MDL_0${Math.floor(Math.random() * 9) + 1}`);
  }, []);

  const gradientMap = {
    primary: "from-primary",
    secondary: "from-secondary",
    tertiary: "from-tertiary",
  };

  const hoverBorderMap = {
    primary: "hover:border-primary/30",
    secondary: "hover:border-secondary/30",
    tertiary: "hover:border-tertiary/30",
  };

  const textIconMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <motion.div
      variants={fadeUpVariant}
      className={cn(
        "glassmorphism p-8 rounded-sm relative overflow-hidden border border-outline-variant/15 transition-colors group",
        hoverBorderMap[highlightColor]
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-[0.5px] bg-gradient-to-r to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
          gradientMap[highlightColor]
        )}
      />
      <div className={cn("text-4xl mb-6", textIconMap[highlightColor])}>
        {icon}
      </div>
      <h3 className="text-xl font-headline font-bold mb-4 text-on-surface">
        {title}
      </h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
      <div className="absolute bottom-4 right-4 text-[10px] font-label text-outline-variant tracking-widest uppercase">
        {moduleId}
      </div>
    </motion.div>
  );
}
