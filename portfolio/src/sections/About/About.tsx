import React from "react";

function About() {
  return (
    <div>
      <section id="about" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble.png')]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            I am a passionate frontend developer with experience in building modern web applications using React, TypeScript, and TailwindCSS. I enjoy creating beautiful and responsive designs with smooth user experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
