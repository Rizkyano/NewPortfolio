import React from "react";
import { motion } from "framer-motion";

function Project() {
  return (
    <div>
      <section id="projects" className="min-h-screen px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/crossword.png')]" />
        <div className="relative max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-cyan-400 text-center">Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div key={project} whileHover={{ scale: 1.05 }} className="bg-gray-700/60 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
                <img src={`https://picsum.photos/400/250?random=${project}`} alt="project" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-white">Project {project}</h4>
                  <p className="text-gray-300 text-sm">A short description of the project goes here. Built using React, TypeScript, and TailwindCSS.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
