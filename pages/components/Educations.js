import React from "react";
import { education } from "../data/constants";

function Educations() {
  return (
    <div id="education" className="mt-10 flex flex-col mx-auto px-10 py-16 ">
      <div className="bg-gray-100 mx-auto p-4 rounded-3xl mb-16 hover:bg-slate-300 transition">
        <h1 className="text-4xl text-center text-slate-700 mb-2">
          My Educations
        </h1>
        <p className="text-center text-slate-500">
          My university and school educations.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      {education.map((edu, index) => (
          <div key={index} className="mb-8 max-w-3xl w-full">
            <div className="p-4 bg-slate-100 rounded-3xl hover:bg-slate-300 transition">
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                {edu.title}
              </h2>
              <div className="flex items-center gap-4">
                <img
                  src={edu.img}
                  alt={edu.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <span className="block text-md text-gray-700">
                    {edu.school}
                  </span>
                  <span className="block text-md text-gray-700">{edu.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Educations;