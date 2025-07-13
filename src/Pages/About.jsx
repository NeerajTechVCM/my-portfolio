import React from "react";
import AboutModel from "../component/AboutModel";

const About = () => {
  return (
    <section
      id="about"
      className="w-full  text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden"
    >
      {/* Left: 3D Model */}
      <div className=" md:w-1/2 h-[350px] flex justify-center items-center">
        <AboutModel />
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
    </section>
  );
};

export default About;
