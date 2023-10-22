import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MyBio } from "../data/constants";
import TypewriterComponent from "typewriter-effect";
import MyImage from "../assets/images/picture.jpg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import Image from "next/image";
import BioBgAnimation from './BioAnimation';

function Bio({ darkMode }) {
  return (
    <div className={darkMode ? "dark"  : ""}> 
    <div id="about" className="flex flex-col xl:flex-row items-center justify-center mt-40">
      <div className="mx-10 md:mx-0 mb-20 md:mb-10 md:ml-56 md:mr-40 flex flex-col items-center justify-center">
        <div className=" flex flex-row gap-2 justify-center text-3xl md:text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
          <h2 className="">Hello, I am </h2>
          <h2 className="">{MyBio.name}</h2>
        </div>
        <span className="my-2 justify-center text-2xl md:text-4xl text-cyan-500 flex flex-row gap-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
          I am a
          <TypewriterComponent 
            options={{
              strings: MyBio.roles,
              autoStart: true,
              loop: true,
            }}
          /> 
        </span>
        <p className={`${darkMode ? 'text-white' : 'text-slate-700'} text-1xl md:text-2xl mr-5 text-center `}>
          {MyBio.description}
        </p>
        <div className="mt-5 flex flex-row text-4xl gap-4 text-slate-800 dark:text-white">
          <a href={MyBio.twitter} target="_blank"><AiFillTwitterCircle /></a>
          <a href={MyBio.facebook} target="_blank"><FaFacebook/></a>
          <a href={MyBio.github} target="_blank"><FaGithub/></a>
        </div>
      </div>
      <div className="xl:mr-56 relative ">
        <div className="w-56 absolute inset-0 ml-8 mt-20 hidden xl:block">
          <BioBgAnimation />
        </div>
        <Image
          src={MyImage}
          alt="profile"
          width={'100%'}
          className="rounded-full object-center mx-auto w-2/3 xl:w-full hover:scale-110 transition"
        />
 
      </div>
      </div>
      </div>
  );
}

export default Bio;
