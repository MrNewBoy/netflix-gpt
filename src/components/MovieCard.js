import React from "react";
import { MOVIE_CARD_IMG } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const { poster_path, title, backdrop_path } = movie;
  return (
    <div className="w-48 p-2  ">
      <img
        className="rounded-md"
        alt={MOVIE_CARD_IMG + backdrop_path}
        src={MOVIE_CARD_IMG + poster_path}
      ></img>
    </div>
  );
};

export default MovieCard;
