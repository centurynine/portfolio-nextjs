import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MyBio } from '../data/constants';

function Nav({ darkMode, setDarkMode }) {
  return (
    <nav className={`pt-10 pb-4 mb-12 flex justify-between pl-10 sticky top-0 z-10 ${darkMode ? 'color-black' : 'bg-white'}`}>
      <h1 className={`text-2xl font-burtons ${darkMode ? 'text-white' : 'text-black'}`}>PORTFOLIO</h1>
      <ul>
        <div className='flex flex-row space-x-4 mr-10'>
          <li className={`${darkMode ? 'text-white' : 'text-black'} cursor-pointer mt-1 `}>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
          </li>
          <div className='flex-row gap-4 hidden sm:hidden md:flex md:gap-4'> 
            <li><a href='#home' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-cyan-500 transition`}>Home</a></li>
            <li><a href='#about' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-cyan-500 transition`}>About</a></li>
            <li><a href='#skill' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-cyan-500 transition`}>Skills</a></li>
            <li><a href='#education' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-cyan-500 transition`}>Education</a></li>
            <li><a href='#project' className={`${darkMode ? 'text-white' : 'text-black'} hover:text-cyan-500 transition`}>Projects</a></li>
            </div>
          <li><a className={`bg-gradient-to-r from-cyan-500 to-blue-400 
                 text-white px-4 py-2 border-none rounded-2xl ml-4 hover:opacity-80 transition`} href={MyBio.resume} target='_blank' rel="noopener noreferrer">Resume</a></li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav
