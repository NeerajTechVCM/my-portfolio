import React, { useState, useEffect } from "react";
import LaptopViewer from "../component/LaptopModel";
import { FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Laptop from "../assets/laptop.png";

const Home = ({ topRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      ref={topRef}
      className="w-full mt-3 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12"
    >
      {/* Left Content */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
        <h1
          className="text-2xl lg:text-6xl font-bold"
          style={{
            textShadow: "0 0 6px #22d3ee, 0 0 10px #a855f7",
          }}
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">
            <TypeAnimation
              sequence={[" Neeraj Pal", 1000, "Frontend Developer", 1000]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              className="text-2xl lg:text-5xl"
              repeat={Infinity}
            />
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-violet-400">
          Frontend Developer Crafting Beautiful UI with Code & Imagination
        </h2>
        <p className="text-gray-300 max-w-md">
          I craft aesthetic and responsive web interfaces. Passionate about
          turning ideas into elegant, functional designs..
        </p>

        {/* CTA Button */}
        <a
          href="#contactus"
          className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold shadow-lg hover:from-sky-500 hover:to-purple-400 transition duration-300"
          style={{
            textShadow: "0 0 4px #22d3ee, 0 0 10px #9333ea",
          }}
        >
          Let’s Connect
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          {[
            {
              icon: <FaGithub />,
              url: "https://github.com/NeerajTechVCM",
              color: "hover:text-cyan-400",
            },
            {
              icon: <FaInstagram />,
              url: "https://www.instagram.com/watashi_wa_maodesu",
              color: "hover:text-pink-400",
            },
            {
              icon: <FaFacebook />,
              url: "https://www.facebook.com/profile.php?id=100037428103852",
              color: "hover:text-blue-400",
            },
            {
              icon: <FaWhatsapp />,
              url: "https://wa.me/<7905263694>",
              color: "hover:text-green-400",
            },
          ].map(({ icon, url, color }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl transition-transform duration-300 transform hover:scale-125 ${color} shadow-sm`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Model or Image */}
      <div className="relative flex p-5 justify-center items-center md:w-1/2 w-full mt-10 md:mt-0 h-[350px] md:h-[500px] rounded-lg overflow-hidden">
        {isMobile ? (
          <>
            <img
              src={Laptop}
              alt="Laptop Preview"
              className="w-full h-full object-contain"
            />
            {/* Permanent Floating Popup */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
              <div className="relative bg-black/80 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                💡 You can move the model on desktop/laptop
                {/* Arrow */}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-black/80"></div>
              </div>
            </div>
          </>
        ) : (
          <LaptopViewer />
        )}
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;
