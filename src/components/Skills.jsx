import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";

import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="W-full h-screen bg-black">
      {/* conatainer */}
      <div className="max-w-[70%] mx-auto px-8 flex flex-col justify-center h-full text-white ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-6">These are the technolgies I have worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center p-4">
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={HTML} alt="" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={CSS} alt="" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={JavaScript} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={Tailwind} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={GitHub} alt="" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#240c16] p-4">
            <img className="w-12 mx-auto" src={ReactImg} alt="" />
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
