import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 md:px-20 border-t border-cyan-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-xl font-semibold text-cyan-400 drop-shadow">
            Designed & Developed by Neeraj Pal
          </h3>
          <p className="text-gray-400 text-sm">
            "Turning code into creative experiences."
          </p>
          <p className="text-gray-500 text-xs">
            Kanpur, India | np6848586@gmail.com
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/NeerajTechVCM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:scale-125 transform transition duration-300 hover:shadow-md hover:shadow-white"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:np6848586@gmail.com"
            className="text-red-400 text-2xl hover:scale-125 transform transition duration-300 hover:shadow-red-400 drop-shadow-lg"
          >
            <FaEnvelope />
          </a>

          <a
             href="https://www.instagram.com/watashi_wa_maodesu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 text-2xl hover:scale-125 transform transition duration-300 hover:shadow-pink-400 drop-shadow-lg"
          >
            <FaInstagram />
          </a>

          <a
           href="https://www.facebook.com/profile.php?id=100037428103852"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:scale-125 transform transition duration-300 hover:shadow-blue-500 drop-shadow-lg"
          >
            <FaFacebook />
          </a>

          <a
            href="https://wa.me/<7905263694>"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-2xl hover:scale-125 transform transition duration-300 hover:shadow-green-400 drop-shadow-lg"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 text-center text-sm text-gray-500 ">
        © {new Date().getFullYear()} Neeraj Pal. All rights reserved.
      </div>
    </footer>
  );
}
