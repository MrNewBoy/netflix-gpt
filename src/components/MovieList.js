import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie_list }) => {
  return (
    <div className="p-4 ">
      <h1 className="font-bold text-2xl w-full p-2 pl-8 text-white">{title}</h1>
      <div className={`flex ${movie_list && "overflow-x-scroll"} `}>
        <div className="flex ">
          {movie_list &&
            movie_list.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
