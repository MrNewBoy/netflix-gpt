import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-[#141414]">
      <div className="-mt-96 relative z-20 ">
        <MovieList title={"Now playing"} movie_list={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movie_list={movies.popular} />
        <MovieList title={"Top Rated"} movie_list={movies.topRated} />
        <MovieList
          title={"Popular TV Shows"}
          movie_list={movies.popularTVShows}
        />
      </div>
    </div>
  );
};

export default SecondaryConatiner;
