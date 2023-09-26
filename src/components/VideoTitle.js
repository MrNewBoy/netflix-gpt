import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-[5%] absolute text-white bg-gradient-to-r from-black">
      <h2 className="w-4/12 font-bold text-3xl">{title}</h2>
      <p className="w-4/12 font-semibold text-lg">{overview}</p>
      <div className="bg-transparent w-8/12">
        <button className="pl-10 pr-6 py-2 font-bold text-lg rounded-md bg-white text-black  mr-4 my-4 border hover:bg-opacity-80 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 absolute left-1 "
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Play
        </button>
        <button className="pl-10 pr-6 py-2 font-bold text-lg rounded-md  bg-[#6D6D6D] bg-opacity-40 mr-4 my-4 relative hover:bg-opacity-80 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 absolute left-1  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
