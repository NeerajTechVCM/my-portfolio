import React from "react";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Vision College of Management, CSJMU",
      year: "2022 – 2025",
      score: "CGPA: 8.61",
      data:"fade-right"
    },
    {
      title: "Intermediate (12th)",
      institution: "P.V.N Public Inter College",
      year: "2021 – 2022",
      score: "Percentage: 80%",
      data:"fade-left"
    },
    {
      title: "High School (10th)",
      institution: "P.V.N Public Inter College",
      year: "2019 – 2020",
      score: "Percentage: 84%",
      data:"fade-right"
    },
  ];

  return (
    <section
      id="education"
      className=" text-white py-16 px-6 md:px-20 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-12 text-center drop-shadow-md">
        Education
      </h2>

      <div className="relative border-l-4 border-cyan-600 pl-6 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative group"   >
            <div data-aos={item.data}>
                  <span className="absolute -left-[13px] top-1 w-5 h-5 rounded-full bg-cyan-500 animate-pulse shadow-lg shadow-cyan-500/50"></span>

            <div className="bg-[#1e293b] p-5 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all duration-300 border border-cyan-800">
              <h3 className="text-xl md:text-2xl font-semibold text-violet-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.institution}</p>
              <p className="text-xs text-cyan-400 mt-1">{item.year}</p>
              <p className="text-xs text-emerald-300 mt-1 font-medium">{item.score}</p>
            </div>
            </div>
            {/* Glowing dot */}
          
          </div>
        ))}
      </div>
    </section>
  );
}
