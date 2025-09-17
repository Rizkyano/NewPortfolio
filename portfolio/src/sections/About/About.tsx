import React from "react";
import { Code, Palette, Sparkles, Github, Linkedin, Twitter } from "lucide-react";

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble.png')]" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Foto Profil */}
        <img
          src="https://via.placeholder.com/150" // ganti dengan foto kamu
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg object-cover"
        />

        {/* Nama & Deskripsi */}
        <h3 className="text-4xl font-bold mb-4 text-cyan-400">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-300 mb-8">
          I am a passionate frontend developer with experience in building modern web applications using React, TypeScript, and TailwindCSS. I enjoy creating beautiful and responsive designs with smooth user experiences.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
            <Linkedin size={28} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition">
            <Twitter size={28} />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300">
            <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Clean Code</h4>
            <p className="text-gray-400 text-sm">Writing scalable and maintainable code with best practices.</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300">
            <Palette className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Creative Design</h4>
            <p className="text-gray-400 text-sm">Designing modern, elegant, and user-friendly interfaces.</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">Smooth UX</h4>
            <p className="text-gray-400 text-sm">Building fast, responsive, and engaging user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
