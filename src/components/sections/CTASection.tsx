"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";
import { WaitlistInput } from "@/components/ui/WaitlistInput";

export function CTASection() {
  return (
    <section className="py-40 px-8 relative overflow-hidden bg-surface-container-lowest">
      {/* Radial Pulse Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] rounded-full border border-primary-container/5 absolute opacity-10"></div>
        <div className="w-[800px] h-[800px] rounded-full border border-primary-container/10 absolute opacity-20"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-primary-container/20 absolute opacity-40"></div>
        <div className="w-[400px] h-[400px] rounded-full border border-primary-container/30 absolute opacity-60 bg-primary-container/5 blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center"
      >
        <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter mb-12 text-on-surface">
          READY TO UPLOAD YOUR CONSCIOUSNESS?
        </h2>

        <WaitlistInput onSubmit={(email) => console.log('Final CTA Waitlist:', email)} />

        <p className="mt-8 text-xs font-label text-on-surface-variant uppercase tracking-[0.3em] opacity-60">
          Transmission secured via Aether Protocol_0x9A
        </p>
      </motion.div>
    </section>
  );
}
