import React from "react";
import { skills } from "../data/constants";

function Skills({darkMode}) {
  console.log(darkMode);
  return (
    <div id="skill" className="mt-40 flex flex-col mx-auto px-10 py-16">
      <div className="bg-gray-100 mx-auto p-4 rounded-3xl mb-16 hover:bg-slate-300 transition">
        <h1 className="text-4xl text-center text-slate-700 mb-2">My Skills</h1>
        <p className="text-center text-slate-500">
          Here are some of the skills I've acquired along my journey.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {skills.map((skillGroup, index) => (
            <div key={index} className="mb-8">
              <h2 className={`${darkMode ? 'text-white' : 'text-slate-700'} text-3xl text-slate-700 mb-4`}>
                {skillGroup.title}
              </h2>
              <div className="flex flex-row flex-wrap gap-4">
                {skillGroup.skills.slice(0, 2).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 rounded-full bg-gray-100 p-2 hover:bg-slate-400 transition"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-lg text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-4 mt-4">
                {skillGroup.skills.slice(2, 4).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 rounded-full bg-slate-100 p-2 hover:bg-slate-400 transition"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-lg text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>  <div className="flex flex-row flex-wrap gap-4 mt-4">
                {skillGroup.skills.slice(4, 6).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 rounded-full bg-slate-100 p-2 hover:bg-slate-400 transition"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-lg text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-4 mt-4">
                {skillGroup.skills.slice(6, 8).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 rounded-full bg-slate-100 p-2 hover:bg-slate-400 transition"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-6 h-6"
                    />
                    <span className="text-lg text-slate-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
