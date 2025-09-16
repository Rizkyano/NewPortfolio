import React from "react";

function Experience() {
  return (
    <div>
      <section id="experience" className="min-h-screen px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')]" />
        <div className="relative max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-10 text-cyan-400 text-center">Experience</h3>
          <ul className="space-y-8 text-gray-300">
            <li className="bg-gray-700/50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold">Frontend Developer - XYZ Company</h4>
              <p className="text-sm italic">2022 - Present</p>
              <p>Working on building responsive web apps with React and TailwindCSS.</p>
            </li>
            <li className="bg-gray-700/50 p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <h4 className="text-xl font-semibold">Intern - ABC Tech</h4>
              <p className="text-sm italic">2021 - 2022</p>
              <p>Assisted in UI/UX design and implemented React components.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Experience;
