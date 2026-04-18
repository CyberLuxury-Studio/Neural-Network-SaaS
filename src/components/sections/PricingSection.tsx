"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/motion";
import { CyberButton } from "@/components/ui/CyberButton";
import { Check, X } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-40 px-8 bg-surface-dim relative overflow-hidden border-t border-outline-variant/10">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent"></div>
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60%] h-[60%] bg-primary-container/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-6xl font-headline font-bold tracking-tighter text-on-surface mb-6 uppercase">Access Protocols</h2>
          <p className="text-on-surface-variant font-body text-lg max-w-lg mx-auto font-light">Select your bandwidth. Upgrades require network approval and cryptographic verification.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-center"
        >
          {/* Tier 1 */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container p-12 border border-outline-variant/10 rounded-sm hover:-translate-y-4 transition-transform duration-500 shadow-2xl">
            <div className="text-xs font-label text-on-surface-variant tracking-[0.2em] uppercase mb-6">P-01</div>
            <h3 className="text-3xl font-headline font-bold mb-2 text-on-surface uppercase tracking-tight">Hacker</h3>
            <div className="text-5xl font-headline font-bold text-on-surface mb-8">0.0<span className="text-xl text-on-surface-variant font-light">/cycle</span></div>
            <ul className="space-y-6 mb-12 text-base text-on-surface-variant font-body">
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container/50" /> Basic Routing</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container/50" /> Public Archives</li>
              <li className="flex items-center gap-4 opacity-30"><X size={20} /> Priority Queue</li>
            </ul>
            <CyberButton variant="ghost" className="w-full tracking-[0.2em]">SELECT</CyberButton>
          </motion.div>

          {/* Tier 2 (Featured) */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container-high p-16 border border-primary-container/30 rounded-sm relative transform md:-translate-y-8 shadow-[0_24px_64px_-12px_rgba(0,243,255,0.15)] hover:shadow-[0_32px_80px_-12px_rgba(0,243,255,0.25)] transition-all duration-500 backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-secondary to-primary-container"></div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-xs font-label text-primary-container tracking-[0.2em] uppercase">P-02</div>
              <div className="text-[10px] bg-primary-container/10 text-primary-container px-3 py-1.5 rounded-sm tracking-[0.3em]">RECOMMENDED</div>
            </div>
            <h3 className="text-4xl font-headline font-bold mb-2 text-on-surface uppercase tracking-tight">Cyber</h3>
            <div className="text-6xl font-headline font-bold text-primary-container mb-8 tracking-tighter">49.9<span className="text-xl text-primary-container/60 font-light">/cycle</span></div>
            <ul className="space-y-6 mb-12 text-base text-on-surface font-body">
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container" /> Quantum Routing</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container" /> Encrypted Archives</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container" /> Priority Queue</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-primary-container" /> Neural Uplink (Beta)</li>
            </ul>
            <CyberButton variant="primary" className="w-full tracking-[0.2em] shadow-[0_0_30px_rgba(0,243,255,0.2)]">INITIALIZE CONNECT</CyberButton>
          </motion.div>

          {/* Tier 3 */}
          <motion.div variants={fadeUpVariant} className="bg-surface-container p-12 border border-outline-variant/10 rounded-sm hover:-translate-y-4 transition-transform duration-500 shadow-2xl">
            <div className="text-xs font-label text-on-surface-variant tracking-[0.2em] uppercase mb-6">P-03</div>
            <h3 className="text-3xl font-headline font-bold mb-2 text-on-surface uppercase tracking-tight">God-Mode</h3>
            <div className="text-5xl font-headline font-bold text-on-surface mb-8 tracking-tighter">INVITE<span className="text-xl text-on-surface-variant font-light"> ONLY</span></div>
            <ul className="space-y-6 mb-12 text-base text-on-surface-variant font-body">
              <li className="flex items-center gap-4"><Check size={20} className="text-tertiary/50" /> Absolute Admin</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-tertiary/50" /> Zero-Trust Override</li>
              <li className="flex items-center gap-4"><Check size={20} className="text-tertiary/50" /> Dedicated Sector</li>
            </ul>
            <CyberButton variant="glass" className="w-full tracking-[0.2em] text-tertiary border-tertiary/20 hover:bg-tertiary/5">REQUEST ACCESS</CyberButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
