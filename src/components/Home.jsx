import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="bg-black w-full h-screen ">
      {/* container */}
      <div className="max-w-[70%] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p className="text-pink-600 sm:text-2xl">Hi, I am </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-300">
          Shakir.
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-400">
          I am a Front End Developer.
        </h2>
        <div>
          <button className="text-white border-1 px-3 py-1 mt-3 bg-blue-900 hover:bg-pink-600 duration-300">
            View works
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
