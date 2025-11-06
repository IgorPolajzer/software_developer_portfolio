// Project.jsx
import React from "react";
import { Link } from "react-router-dom";

function Project({ title, image, status, navigation }) {
  if (title) {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-white/10 shadow-md transform transition-transform duration-200 hover:scale-105 cursor-pointer h-full w-full flex flex-col">
        <Link to={navigation} className="relative h-full w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-right block"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[#1b263b] p-4 box-border flex justify-between items-center">
            <h1 className="text-[#dbdbdb] text-sm sm:text-base">{title}</h1>
            <h1
              className={`font-bold text-sm sm:text-base ${
                status === "Completed" ? "text-[#65ff4a]" : "text-[#579adc]"
              }`}
            >
              {status}
            </h1>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-48 sm:h-64 rounded-3xl bg-white/10">
        <h1 className="text-[#dbdbdb] text-xl">Coming soon</h1>
      </div>
    );
  }
}

export default Project;
