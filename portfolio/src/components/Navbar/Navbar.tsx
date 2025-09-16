import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center justify-between w-[90vw] max-w-5xl bg-[#121317]/95 border border-gray-700 rounded-2xl px-6 py-4 shadow-lg">
        {/* Logo + Nama */}
        <div className="flex items-center space-x-3">
          <div className="text-gray-300 font-bold text-2xl leading-none">
            {/* <span className="block">ade</span>
            <span className="block">ola</span> */}
          </div>
          <span className="text-sm tracking-widest text-gray-300">Rizkyano</span>
        </div>

        {/* Tombol Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-gray-300 hover:text-white transition">
          <span className="uppercase text-sm font-semibold">Menu</span>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-10 text-2xl text-gray-200">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">
            Experience
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition">
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
