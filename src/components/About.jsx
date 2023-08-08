import React from "react";

const about = () => {
  return (
    <div name="about" className="bg-black w-full h-screen text-white py-20">
      <div className="max-w-[70%] mx-auto px-8 h-full text-white flex flex-col justify-center  ">
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-pink-600">
            About
          </p>
        </div>

        <div>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            itaque. Non impedit obcaecati commodi, facilis culpa necessitatibus
            dolorum nobis enim unde maxime blanditiis! Iste necessitatibus
            eligendi fugit voluptas doloremque. Perferendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
