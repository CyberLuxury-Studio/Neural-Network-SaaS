"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function IntegrationEcosystem() {
  const tools = ["TENSORFLOW", "PYTORCH", "GITHUB", "HUGGINGFACE", "AWS", "GCP", "AZURE", "DOCKER", "KUBERNETES"];

  return (
    <section className="py-24 border-b border-white/10 bg-[#0a0a0c] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-center"
        >
           <h2 className="text-sm font-bold font-mono text-neon-cyan uppercase tracking-[0.2em] mb-4">
              Seamless Integration Ecosystem
           </h2>
           <p className="text-on-surface-variant font-mono text-xs">DEPLOY ANYWHERE. TRAIN ON ANYTHING.</p>
        </motion.div>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {tools.map((tool, i) => (
            <span key={i} className="text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-neon-cyan transition-all cursor-crosshair">
              {tool}
            </span>
          ))}
          {tools.map((tool, i) => (
            <span key={`dup-${i}`} className="text-3xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-neon-cyan transition-all cursor-crosshair">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
