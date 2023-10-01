import React from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const preflang = useSelector((store) => store.appInfo);

  return (
    <div className="py-[8%] flex justify-center ">
      <div className=" bg-black bg-opacity-70 w-full grid grid-cols-12 gap-4 ">
        <input
          className="border col-span-7 m-2 ml-[10%] p-2 rounded-md w-full font-semibold"
          type="text"
          placeholder={lang[preflang.language].placeHolderText}
        />
        <button className="col-span-3 m-2 ml-[30%] p-2 border bg-[#e50914] bg-opacity-90  text-white rounded-md text-lg font-semibold">
          {lang[preflang.language].searchText}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
