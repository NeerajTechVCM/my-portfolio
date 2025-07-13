import React from "react";
import swiggy from "../assets/swiggy.png";
import chat from "../assets/chat.png";
import fees from "../assets/fees.png";
import tic from "../assets/tic.png";
import simon from "../assets/simon.jpg";
import todo from "../assets/todo.jpg";
import  notes from "../assets/notes.png";


const projects = [
  {
    name: "Swiggy Clone",
    image: swiggy,
    description: "A static clone of the Swiggy home page using HTML and CSS.",
  },
  {
    name: "Chat App",
    image: chat,
    description: "A real-time chat app using MERN Stack and Socket.io.",
  },
  {
    name: "Fees Management System",
    image: fees,
    description: "A full-stack web app to manage student fee records.",
  },
  {
    name: "Notes App",
    image: notes,
    description: "A cloud-based notes app using the MERN stack with CRUD operations.",
    customImageStyle: "object-cover object-left", // For horizontal layout
  },
  {
    name: "Tic Tac Toe",
    image: tic,
    description: "A simple 2-player game built with HTML, CSS, and JavaScript.",
  },
  {
    name: "Simon Game",
    image: simon,
    description: "A memory-based color sequence game built using HTML, CSS, and JavaScript.",
  },
  {
    name: "Calculator",
    image:
      "https://cdn.dribbble.com/users/3513076/screenshots/13915139/media/db02d3f437d8f4827b0f0d13cf987474.jpg",
    description: "A clean and functional calculator made with HTML, CSS, and JavaScript.",
  },
  {
    name: "To-Do List",
    image: todo,
    description: "A React-based task manager with local storage support.",
  },

];

export default function Projects() {
  return (
    <section id="projects" className=" text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center drop-shadow-md">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
                 data-aos="fade-up"
            className="group bg-[#1e293b] border border-cyan-700 rounded-xl overflow-hidden 
              shadow-md transition-all duration-300 transform hover:scale-105 
              hover:shadow-cyan-400/40 hover:border-cyan-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className={`w-full h-48 bg-black p-2 transition-transform duration-300 group-hover:scale-110 ${
                  project.customImageStyle || "object-contain"
                }`}
              />
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
