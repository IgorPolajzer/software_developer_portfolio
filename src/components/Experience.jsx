import React, { useState } from "react";
import SkyLabsLogo from './../assets/skylabs_logo.png';
import SetronicaLogo from './../assets/setronica_logo.png';
import TridensLogo from '../assets/Tridens.png';

const experiences = [
  {
    company: "Tridens d.o.o",
    role: "Software Developer",
    timeframe: "March 24 2025 - Current",
    logo: TridensLogo,
    description: `At Tridens d.o.o, I have been working as a Java developer, contributing to backend systems and microservices development.`
  },
  {
    company: "Setronica d.o.o",
    role: "Internship – QA Engineer",
    timeframe: "August 1 2024 - June 1 2025",
    logo: SetronicaLogo,
    description: `Responsible for QA of LLM models, reviewing output, labeling accuracy, and providing feedback to improve performance.`
  },
  {
    company: "Skylabs d.o.o",
    role: "Internship – Software Engineer",
    timeframe: "August 1 2023 - 31 September 2023",
    logo: SkyLabsLogo,
    description: `Transformed C++ libraries to Python modules, developed RESTful APIs, and handled full development lifecycle.`
  }
];

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExp = experiences[currentIndex];

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-20">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Work Experience</h1>
        <h2 className="text-blue-200">COMPANIES I WORKED AT</h2>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + experiences.length) % experiences.length)}
          className="text-3xl text-white/50 hover:text-white transition"
        >
          ◀
        </button>

        <div className="bg-white/10 p-6 rounded-2xl shadow w-full max-w-2xl text-center flex flex-col items-center">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-1">{currentExp.company} - {currentExp.role}</h1>
          <h2 className="text-sm text-white/50 mb-2">{currentExp.timeframe}</h2>
          <img src={currentExp.logo} alt={`${currentExp.company} Logo`} className="h-20 md:h-28 mb-4 rounded-lg bg-white/10 p-2" />
          <p className="text-white italic font-semibold text-sm md:text-lg">{currentExp.description}</p>
        </div>

        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % experiences.length)}
          className="text-3xl text-white/50 hover:text-white transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

export default Experience;
