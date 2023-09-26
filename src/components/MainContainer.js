import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[Math.floor(Math.random() * movies.length)];

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground trailer_id={id} />
    </div>
  );
};

export default MainContainer;
