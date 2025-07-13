import React, { useState } from "react";
import { Menu, X } from "lucide-react";

import profilePic from "../assets/profile.jpg"; // make sure the image exists

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Education", "Skills", "Projects", "Contact Us"];

  const glow = {
    textShadow: "0 0 6px #22d3ee, 0 0 9px #a855f7",
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#1a1a2e] drop-shadow-lg shadow-cyan-500/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-auto py-3">

          {/* Logo + Profile */}
          <div className="flex items-center gap-3 min-w-0">
            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 min-w-[40px] rounded-full border-2 border-cyan-400 shadow-md"
            />

            {/* Vertical Line */}
            <div className="h-10 w-[2px] bg-gradient-to-b from-cyan-400 to-violet-500 shadow-md"></div>

            {/* Logo Text */}
            <div
              className="text-xl font-bold tracking-wide truncate"
              style={glow}
            >
              <span className="text-cyan-400">Port</span>
              <span className="text-violet-400">folio</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group transition duration-300"
              >
                <span
                  className="group-hover:text-cyan-400 transition"
                  style={glow}
                >
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <a
             href="/resume.pdf"
      

              download
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold shadow-md hover:from-pink-500 hover:to-yellow-400 hover:shadow-pink-500/50 transition duration-300"
              style={glow}
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a2e] px-4 py-4 space-y-4 text-white font-medium drop-shadow-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block hover:text-pink-400 transition"
              style={glow}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block mt-2 text-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-pink-500 hover:to-yellow-400 text-white transition"
            style={glow}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
