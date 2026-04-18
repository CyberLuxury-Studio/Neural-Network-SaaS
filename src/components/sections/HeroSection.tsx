"use client";

import dynamic from "next/dynamic";
import { CyberGlitchText } from "@/components/ui/CyberGlitchText";
import { WaitlistInput } from "@/components/ui/WaitlistInput";
import { fadeUpVariant } from "@/lib/motion";
import { motion } from "framer-motion";
import { SplineFallback } from "@/components/spline/SplineFallback";

const SplineScene = dynamic(() => import('@/components/spline/SplineScene'), {
  ssr: false,
  loading: () => <SplineFallback />
});

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-obsidian overflow-hidden pt-20">
      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text & CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col gap-6"
        >
          <div className="text-xs font-label text-primary tracking-[0.3em] uppercase mb-2">
            System Online // V.1.0.4
          </div>

          <CyberGlitchText
            text="ENTER THE NEXT ERA"
            className="text-5xl md:text-7xl lg:text-8xl tracking-tighter"
          />

          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-on-surface-variant max-w-lg mt-4 font-body leading-relaxed">
            Join the stealth beta. Limited access to the ultimate neural uplink for next-gen cyber architects.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-8">
            <WaitlistInput onSubmit={(email) => console.log('Waitlist:', email)} />
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[500px] lg:h-[700px] w-full"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Ambient background glow for 3D object */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/10 blur-[100px] rounded-full"></div>
          </div>
          <div className="relative z-10 w-full h-full">
             <SplineScene url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
