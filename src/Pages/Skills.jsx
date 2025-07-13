import React from "react";
import htmlIcon from "../assets/html.png";
import jsIcon from "../assets/js.png";
import cssIcon from "../assets/css.jpg";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";

import mongoIcon from "../assets/mongo.png";
import expressIcon from "../assets/express.png";
import nodeIcon from "../assets/node.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon},
  { name: "Tailwind", icon: tailwindIcon },
  { name: "MongoDB", icon: mongoIcon},
  { name: "Express.js", icon: expressIcon},
  { name: "Node.js", icon: nodeIcon },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className=" text-white py-16 px-6 md:px-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center drop-shadow-md">
        Skills
      </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {skills.map((skill, index) => (
    <div
      key={index}
        data-aos="fade-up"
      className="relative group rounded-xl overflow-hidden border-4 border-cyan-700 
       shadow-md hover:shadow-cyan-500/30 hover:border-cyan-400 
       transform hover:scale-105 transition-all duration-300"
    >
      <div
        className="w-full h-40 bg-cover bg-center filter brightness-75 group-hover:brightness-100 transition-all duration-300"
        style={{ backgroundImage: `url(${skill.icon})` }}
      ></div>
    </div>
  ))}
</div>

    </section>
  );
}
