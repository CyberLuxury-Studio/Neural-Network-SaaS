"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { NeonCard } from "@/components/ui/NeonCard";
import { Route, BrainCircuit, Lock } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-40 px-8 bg-background relative border-t border-outline-variant/10">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col items-center text-center">
          <p className="text-primary-container font-label text-xs uppercase tracking-[0.3em] mb-4">Core Subsystems</p>
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter">THE VOID ARCHITECTURE</h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <NeonCard
            highlightColor="primary"
            icon={<Route strokeWidth={1} size={48} />}
            title="QUANTUM ROUTING"
            description="Instantaneous data transfer across multiple fragmented nodes. Eliminating latency in high-stakes environments."
          />
          <NeonCard
            highlightColor="primary"
            icon={<BrainCircuit strokeWidth={1} size={48} />}
            title="NEURAL UPLINK"
            description="Direct brain-to-machine interfacing. Seamless thought-to-execution rendering for ultimate control."
          />
          <NeonCard
            highlightColor="primary"
            icon={<Lock strokeWidth={1} size={48} />}
            title="ZERO-TRUST PROTOCOL"
            description="Absolute cryptographic isolation. Every interaction is verified, encrypted, and immediately volatile upon session termination."
          />
        </motion.div>
      </div>
    </section>
  );
}
