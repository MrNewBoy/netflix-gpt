import React from "react";
import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";
const VideoBackground = ({ trailer_id }) => {
  useTrailer(trailer_id);
  const trailer = useSelector((store) => store.movies.trailer);
  console.log(trailer);
  if (!trailer) return;
  const { key, size } = trailer;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&modestbranding`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
