import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-6xl transition-colors duration-500`}>
      <div className={`flex items-center justify-between rounded-2xl px-8 py-4 shadow-lg border transition-all duration-500 ${scrolled ? "bg-[#121317]/95 border-gray-700" : "bg-transparent border-transparent"}`}>
        {/* Logo + Nama */}
        <span className="text-lg md:text-xl font-bold tracking-wider text-gray-200">Rizkyano</span>

        {/* Menu Tengah */}
        <div className="flex items-center space-x-8 text-sm md:text-base text-gray-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Project
          </a>
        </div>

        {/* Contact */}
        <a href="#contact" className="text-sm md:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
