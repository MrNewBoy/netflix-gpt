import React, { useEffect, useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header signout />
      <div className="">
        {/* mainconatainer
          -videobackground
          -videotitle
          secondary Container
            - movies list
            - cards 
         */}
        <MainContainer />
        <SecondaryConatiner />
      </div>
    </div>
  );
};

export default Browse;
