import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BKG_IMG_LOGIN } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 bg-black">
        <img
          className="hidden md:block md:bg-contain overflow-hidden w-full h-full bg-cover"
          src={BKG_IMG_LOGIN}
          alt="bg-img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
