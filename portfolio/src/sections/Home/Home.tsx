// src/sections/Home.tsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background transparan agar sinkron dengan Hero */}
      <div className="absolute inset-0 z-10" />

      {/* Welcome Text */}
      <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="relative z-20 text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
        Hi, I’m <span className="text-cyan-300">Rizkyano</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="relative z-10 mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
        Crafting modern web experiences with <span className="text-cyan-200 font-semibold">React & TailwindCSS</span>.
      </motion.p>

      {/* Scroll Down Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10 z-10 flex flex-col items-center">
        <span className="text-gray-300 text-sm mb-2">Scroll Down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-cyan-300 rounded-full flex items-start justify-center p-1">
          <motion.div animate={{ y: [0, 18, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 bg-cyan-300 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
