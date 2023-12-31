import React from "react";
import { projects } from "../data/constants";

function Projects({darkMode}) {
  return (
    <div id="project" className="flex flex-col items-center justify-center mt-10 mx-8 md:mx-16 lg:mx-24 px-4 md:px-8 xl:mx-56 py-16">
      <div className={`${darkMode ? 'bg-neutral-700 ' : 'bg-slate-100 hover:bg-slate-100'} bg-gray-100 p-4 rounded-3xl mb-8 md:mb-16 hover:bg-slate-300 transition`}>
        <h1 className={`${darkMode ? 'text-slate-100' : 'text-slate-700'} text-4xl text-center mb-2`}>My Projects</h1>
        <p className={`${darkMode ? 'text-slate-100' : 'text-slate-500'} text-center `}>
          Here are some of the projects I've worked on.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projects.map((project) => (
          <div key={project.id} className="mb-6 md:mb-8">
            <div className={`${darkMode ? 'bg-neutral-700 hover:bg-slate-400' : 'bg-white hover:bg-slate-200'} rounded-lg overflow-hidden shadow-md transition`}>
              <a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img src={project.image} alt={project.title} className="w-full" />
              </a>
              <div className="p-4">
                <h2 className={`${darkMode ? 'text-slate-100' : 'text-slate-700'} text-lg md:text-xl lg:text-2xl font-semibold  mb-2`}>{project.title}</h2>
                <p className={`${darkMode ? 'text-slate-200' : 'text-slate-500'} text-sm md:text-base lg:text-lg `}>{project.description}</p>
                <div className="mt-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 bg-slate-100 text-sm md:text-base lg:text-lg text-slate-700 rounded-md inline-block mr-2 mb-2`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
