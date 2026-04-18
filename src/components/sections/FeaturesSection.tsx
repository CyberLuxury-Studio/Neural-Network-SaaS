"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { NeonCard } from "@/components/ui/NeonCard";
import { Route, BrainCircuit, Lock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-32 px-8 bg-void border-t border-surface-variant/30">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-2 tracking-tight">Core Subsystems</h2>
          <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Active Modules // 03</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <NeonCard
            highlightColor="primary"
            icon={<Route strokeWidth={1.5} size={36} />}
            title="Quantum Routing"
            description="Bypass traditional nodes. Our routing protocol ensures zero-latency data transmission across decentralized sectors."
          />
          <NeonCard
            highlightColor="secondary"
            icon={<BrainCircuit strokeWidth={1.5} size={36} />}
            title="Neural Uplink"
            description="Direct cognitive interface rendering physical peripherals obsolete. Seamless integration with the user's primary wetware."
          />
          <NeonCard
            highlightColor="tertiary"
            icon={<Lock strokeWidth={1.5} size={36} />}
            title="Zero-Trust Protocol"
            description="Absolute cryptographic isolation. Every interaction is verified, encrypted, and volatile upon session termination."
          />
        </motion.div>
      </div>
    </section>
  );
}