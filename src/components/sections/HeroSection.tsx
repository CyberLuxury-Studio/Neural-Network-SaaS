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
    <section className="relative w-full min-h-screen flex items-center bg-surface-container-lowest overflow-hidden pt-32 pb-32">
      <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Text & CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col gap-8"
        >
          <div className="text-xs font-label text-primary-container tracking-[0.3em] uppercase mb-2 flex items-center gap-3">
            <span className="w-2 h-2 bg-primary-container rounded-full animate-pulse"></span>
            Aether Protocol // Active
          </div>

          <h1 className="font-headline text-7xl lg:text-8xl font-bold tracking-tighter text-primary leading-[0.9]">
            ENTER THE<br/>
            <CyberGlitchText text="NEXT ERA" className="text-primary-container" />
          </h1>

          <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-on-surface-variant max-w-xl mt-4 font-body leading-relaxed font-light">
            Transcend the physical. Connect to the ultimate cyber-luxury network. Reserve your node in the void architect.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-8">
            <WaitlistInput onSubmit={(email) => console.log('Waitlist:', email)} buttonText="INITIALIZE" />
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="relative h-[600px] lg:h-[800px] w-full"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-container/5 blur-[120px] rounded-full"></div>
          </div>
          <div className="relative z-10 w-full h-full glassmorphism overflow-hidden">
             <SplineScene url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
