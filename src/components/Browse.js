import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularTVShows from "../hooks/usePopularTVShows";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  usePopularTVShows();

  const showGPT = useSelector((store) => store.gptInfo.showGPT);
  return (
    <div>
      <Header signout />
      <div className="">
        {showGPT ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryConatiner />
          </>
        )}
      </div>
    </div>
  );
};

export default Browse;
