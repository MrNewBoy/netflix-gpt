import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const preflang = useSelector((store) => store.appInfo);

  return (
    <div className="py-[8%] flex justify-center ">
      <div className=" bg-black bg-opacity-40 w-full md:w-2/6 grid grid-cols-12 gap-4 rounded-md">
        <input
          className="border col-span-8 p-2 rounded-md font-semibold"
          type="text"
          placeholder={lang[preflang.language].placeHolderText}
        />
        <button className="col-span-4 p-2 border bg-[#e50914] bg-opacity-90  text-white rounded-md text-lg font-semibold">
          {lang[preflang.language].searchText}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
