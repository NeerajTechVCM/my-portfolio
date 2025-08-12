import React, { useState, useEffect } from "react";
import AboutModel from "../component/AboutModel";
import modelImage from "../assets/desk.jpeg"; 

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      className="w-full text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
    >
      {/* Left: Model or Image */}
      <div className="relative md:w-1/2 h-[350px] flex justify-center items-center">
        {isMobile ? (
          <>
            <img
              src={modelImage}
              alt="3D Model"
              className="w-full h-full object-contain"
            />
          
            <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
              <div className="relative bg-black/80 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                💡 You can move the model on desktop/laptop
                {/* Arrow */}
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-black/80"></div>
              </div>
            </div>
          </>
        ) : (
          <AboutModel />
        )}
      </div>

      {/* Right: About Text */}
      <div className="md:w-1/2 w-full text-center md:text-left space-y-5">
        <h2
          className="text-4xl font-bold"
          style={{ textShadow: "0 0 6px #22d3ee, 0 0 10px #a855f7" }}
        >
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Hi, I'm <span className="text-violet-400 font-semibold">Neeraj Pal</span>, a passionate
          front-end developer with a strong foundation in{" "}
          <span className="text-cyan-400 font-semibold">HTML, CSS, JavaScript, and React</span>.
          I enjoy creating interactive and user-friendly web applications, focusing on
          responsiveness, efficiency, and scalability.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          I have a keen interest in problem-solving and continuously improving my skills.
          In my free time, I explore new technologies, contribute to open-source projects,
          and stay updated with the latest trends in web development.
        </p>
      </div>

      {/* Animation style */}
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

export default About;
