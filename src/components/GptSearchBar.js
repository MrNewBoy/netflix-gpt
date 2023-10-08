import React, { useState } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTmovieResult, toggleShimmer } from "../utils/gptSlice";
const GptSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const preflang = useSelector((store) => store.appInfo);
  // search ,movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();
    return data.results;
  };
  const handleGPTsearch = async () => {
    if (inputValue === "") return;
    dispatch(toggleShimmer());
    const query =
      "Act as a movie recommendation system and suggest some movies for the query " +
      inputValue +
      " only give me names of 5 movies, comma separated like the example result given ahead. Example : Gadar, Sholay, Don , Golmaal, Koi Mil Gaya";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(toggleShimmer());
    dispatch(
      addGPTmovieResult({
        gptMovies,
        tmdbResults,
      })
    );
  };
  return (
    <div className="py-[8%] flex justify-center ">
      <form
        className=" bg-black bg-opacity-40 w-full md:w-2/6 grid grid-cols-12 gap-4 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="border col-span-8 p-2 rounded-md font-semibold"
          type="text"
          placeholder={lang[preflang.language].placeHolderText}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="col-span-4 p-2 border bg-[#e50914] bg-opacity-90  text-white rounded-md text-lg font-semibold"
          onClick={handleGPTsearch}
        >
          {lang[preflang.language].searchText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
