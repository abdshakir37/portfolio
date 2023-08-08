import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="W-full h-screen bg-black text-white mb-10 ">
      <form
        method="POST"
        className="max-w-[70%] mx-auto px-8 flex flex-col justify-center h-full text-white"
        action="https://getform.io/f/63d1ea70-b498-4e54-a4a9-baa2df94a170"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
        </div>

        <input
          className="px-2  bg-gray-800"
          type="text"
          placeholder="Name"
          name="name"
        />

        <input
          className="my-4 px-2 bg-gray-800"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="px-2  bg-gray-800"
          placeholder="Message"
          name="message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
