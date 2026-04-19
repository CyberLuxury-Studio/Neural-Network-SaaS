"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Database, Network, Zap } from "lucide-react";

export function ModelArchitectureSection() {
  const nodes = [
    { id: 1, icon: <Database />, title: "Data Ingestion", color: "from-blue-500 to-cyan-400" },
    { id: 2, icon: <BrainCircuit />, title: "Neural Processing", color: "from-purple-500 to-pink-500" },
    { id: 3, icon: <Network />, title: "Pattern Recognition", color: "from-orange-500 to-red-500" },
    { id: 4, icon: <Zap />, title: "Output Generation", color: "from-emerald-400 to-teal-500" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-4 font-headline tracking-tighter"
        >
          Proprietary Architecture
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto font-body"
        >
          Built on a custom 175B parameter foundational model optimized specifically for high-frequency data streaming.
        </motion.p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto z-10">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-emerald-500 opacity-20 -translate-y-1/2 -z-10 rounded-full"></div>
        
        {nodes.map((node, index) => (
          <motion.div 
            key={node.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
            className="flex flex-col items-center relative mb-12 md:mb-0 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 rounded-full"></div>
            
            <div className={`w-24 h-24 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden group-hover:border-white/30 transition-colors`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="text-white relative z-10"
              >
                {node.icon}
              </motion.div>
            </div>
            
            <h3 className="font-bold text-lg text-white font-headline tracking-wide">{node.title}</h3>
            
            {/* Mobile connecting line */}
            {index < nodes.length - 1 && (
              <div className="md:hidden w-1 h-12 bg-gradient-to-b from-white/20 to-transparent my-4"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
