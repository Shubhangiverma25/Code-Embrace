import React from "react";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import GITHUB from "../assets/github.png";
import TAILWIND from "../assets/tailwind.png";
import AWS from "../assets/aws.png";
import NODE from "../assets/node.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center">
          <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="  my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="JS Icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TAILWIND} alt="TAILWIND Icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACT} alt="REACT Icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS Icon" />
            <p className="my-4">AWS</p>
          </div>
          <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GITHUB} alt="GITHUB Icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="my-4 shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={NODE} alt="NODE Icon" />
            <p className="my-4">NODE JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
