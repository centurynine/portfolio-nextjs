import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MyBio } from "../data/constants";
import TypewriterComponent from "typewriter-effect";
import MyImage from "../assets/images/picture.jpg";
import { AiFillTwitterCircle } from "react-icons/ai";
import Image from "next/image";
import BioBgAnimation from './BioAnimation';

function Bio({ darkMode }) {
  return (
    <div id="about" className="flex flex-col xl:flex-row items-center justify-center">
      <div className="md:ml-56 md:mr-40 flex flex-col items-center justify-center">
        <div className=" flex flex-row gap-2 justify-center text-6xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
          <h2 className="">Hello, I am </h2>
          <h2 className="">{MyBio.name}</h2>
        </div>
        <span className="my-2 justify-center text-4xl text-cyan-500 flex flex-row gap-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-400">
          I am a
          <TypewriterComponent 
            options={{
              strings: MyBio.roles,
              autoStart: true,
              loop: true,
            }}
          /> 
        </span>
        <p className={`${darkMode ? 'text-white' : 'text-slate-700'} text-2xl mr-5 text-center `}>
          I'm interested in Node.js for creating diverse and user-friendly web
          applications, and I aim to excel in both frontend and backend
          development. This journey will shape me into a proficient FullStack
          Developer, poised to excel in all aspects of app development.
        </p>
        {/* <AiFillTwitterCircle /> */}
      </div>
      <div className="md:mr-56 relative">
        <div className="w-56 absolute inset-0 ml-8 mt-20 ">
          <BioBgAnimation />
        </div>
        <Image
          src={MyImage}
          alt="profile"
          width={'100%'}
          className="rounded-full object-center mx-auto w-2/3 xl:w-full  "
        />
      </div>
    </div>
  );
}

export default Bio;
