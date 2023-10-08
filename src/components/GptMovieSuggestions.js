import React from "react";
import { useSelector } from "react-redux";
import GptShimmer from "./GptShimmer";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { shimmer, gptMoviesResults, gptMoviesName } = useSelector(
    (store) => store.gptInfo
  );

  if (shimmer) {
    return <GptShimmer />;
  } else {
    if (!gptMoviesName) return null;

    return (
      <div className="p-4 m-2 bg-black text-white relative bg-opacity-80 z-20">
        {gptMoviesName.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movie_list={gptMoviesResults[index]}
          />
        ))}
      </div>
    );
  }
};

export default GptMovieSuggestions;
