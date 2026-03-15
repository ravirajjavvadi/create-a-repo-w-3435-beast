'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Sparkles, Cpu, Layers, Rocket, Command, Globe, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BeastUI() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => setMounted(true), []);

  const skills = ["Hyper-Gradients","Glassmorphism","Framer Motion","Peak Autonomy","3D Layering"];

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative text-slate-100">
      <div className="fixed inset-0 z-0 bg-[#020617] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#8b5cf6]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[150px] rounded-full" />
      </div>

      <section className="relative h-[110vh] flex flex-col items-center justify-center px-6 z-10">
        <motion.div style={{ y: y1, opacity }} className="text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#8b5cf6] text-xs font-black tracking-[0.3em] uppercase mb-12 shadow-[0_0_30px_-5px_#8b5cf6/20]"
          >
            <Zap className="w-3 h-3" />
            Neural Bridge Established
          </motion.div>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mb-4 italic select-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-[#8b5cf6]">
              Aether
            </span>
            <br />
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              Noir
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-light tracking-wide max-w-4xl mx-auto uppercase">
            Digital Architect <span className="text-[#8b5cf6] mx-4">||</span> The Neural Nexus
          </p>
        </motion.div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase">Initialize Scroll</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#8b5cf6] to-transparent" />
        </div>
      </section>

      <section className="py-40 px-6 relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-3xl">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase whitespace-pre-line">Sovereign\nEmpires.</h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              "Materializing digital empires where physics ends."
            </p>
            <div className="flex gap-6">
              <Stat icon={Command} label="Autonomy" value="100%" />
              <Stat icon={Shield} label="Security" value="Antigravity" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass p-8 rounded-3xl group cursor-pointer overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                   <Sparkles className="w-4 h-4 text-[#8b5cf6]" />
                </div>
                <span className="text-xs text-[#8b5cf6] font-black mb-2 block tracking-widest uppercase">Layer 0{i+1}</span>
                <h3 className="text-2xl font-bold group-hover:text-[#8b5cf6] transition-colors">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 border-t border-white/5 text-center relative z-10">
        <p className="text-[10px] font-black tracking-[0.8em] text-slate-600 uppercase mb-8">
           Materialized Autonomously by Open Claw Forge Master v2
        </p>
        <div className="text-4xl font-black text-white/10 hover:text-white transition-colors cursor-default">
           Aether Noir &copy; 2026
        </div>
      </footer>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: any) {
  return (
    <div className="flex flex-col">
       <div className="flex items-center gap-2 mb-1">
          <Icon className="w-3 h-3 text-slate-500" />
          <span className="text-[10px] uppercase tracking-widest font-black text-slate-500">{label}</span>
       </div>
       <span className="text-3xl font-black font-mono tracking-tighter">{value}</span>
    </div>
  );
}