import React from "react";

const Projects = () => {
  return (
    <div>
      <div name="projects" className="W-full h-screen bg-black">
        {/* conatainer */}
        <div className="max-w-[70%] mx-auto px-8 flex flex-col justify-center h-full text-white ">
          <div className="mb-10">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-1 gap-4 text-center p-4 border-4">
            <div className="bg-blue-600 h-full w-full">Shakir</div>
            <div className="bg-blue-600 h-full w-full">Shakir</div>
            <div className="bg-blue-600 h-full w-full">Shakir</div>
            <div className="bg-blue-600 h-full w-full">Shakir</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
