"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";
import { CyberButton } from "@/components/ui/CyberButton";
import { Check, X } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-32 px-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -left-[20%] top-[20%] w-[40%] h-[40%] bg-tertiary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface mb-4">ACCESS_TIERS</h2>
          <p className="text-on-surface-variant font-label max-w-md mx-auto">Select your bandwidth. Upgrades require network approval.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Tier 1 */}
          <motion.div variants={fadeUpVariant} className="bg-surface p-8 border border-outline-variant/20 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase mb-4">T-01</div>
            <h3 className="text-2xl font-headline font-bold mb-2 text-on-surface">Hacker</h3>
            <div className="text-4xl font-headline font-bold text-on-surface mb-6">0.0<span className="text-lg text-on-surface-variant">/cycle</span></div>
            <ul className="space-y-4 mb-8 text-sm text-on-surface-variant font-body">
              <li className="flex items-center gap-3"><Check size={16} className="text-primary/50" /> Basic Routing</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-primary/50" /> Public Archives</li>
              <li className="flex items-center gap-3 opacity-30"><X size={16} /> Priority Queue</li>
            </ul>
            <CyberButton variant="ghost" className="w-full">Select Tier</CyberButton>
          </motion.div>

          {/* Tier 2 (Featured) */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container-high p-10 border border-primary/30 rounded-sm relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,243,255,0.1)] hover:shadow-[0_0_40px_rgba(0,243,255,0.2)] transition-shadow duration-300">
            <div className="absolute -top-[1px] left-0 w-full h-[2px] bg-gradient-to-r from-tertiary to-primary"></div>
            <div className="flex justify-between items-center mb-4">
              <div className="text-[10px] font-label text-primary tracking-widest uppercase">T-02</div>
              <div className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-sm tracking-widest">RECOMMENDED</div>
            </div>
            <h3 className="text-3xl font-headline font-bold mb-2 text-on-surface">Cyber</h3>
            <div className="text-5xl font-headline font-bold text-primary mb-6">49.9<span className="text-lg text-primary/60">/cycle</span></div>
            <ul className="space-y-4 mb-8 text-sm text-on-surface font-body">
              <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Quantum Routing</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Encrypted Archives</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Priority Queue</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-primary" /> Neural Uplink (Beta)</li>
            </ul>
            <CyberButton variant="primary" className="w-full py-4">Initialize Connect</CyberButton>
          </motion.div>

          {/* Tier 3 */}
          <motion.div variants={fadeUpVariant} className="bg-surface p-8 border border-outline-variant/20 rounded-sm hover:-translate-y-2 transition-transform duration-300">
            <div className="text-[10px] font-label text-on-surface-variant tracking-widest uppercase mb-4">T-03</div>
            <h3 className="text-2xl font-headline font-bold mb-2 text-on-surface">God-Mode</h3>
            <div className="text-4xl font-headline font-bold text-on-surface mb-6">INVITE<span className="text-lg text-on-surface-variant"> ONLY</span></div>
            <ul className="space-y-4 mb-8 text-sm text-on-surface-variant font-body">
              <li className="flex items-center gap-3"><Check size={16} className="text-tertiary/50" /> Absolute Admin</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-tertiary/50" /> Zero-Trust Override</li>
              <li className="flex items-center gap-3"><Check size={16} className="text-tertiary/50" /> Dedicated Sector</li>
            </ul>
            <button className="w-full py-4 border border-tertiary/30 text-tertiary font-label text-sm uppercase tracking-wider rounded-sm hover:bg-tertiary/5 transition-colors font-bold">Request Access</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}