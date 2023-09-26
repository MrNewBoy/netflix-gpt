import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { backgroundTrailer } from "../utils/moviesSlice";

const useTrailer = (trailer_id) => {
  const dispatch = useDispatch();
  const trailer = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        trailer_id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await res.json();
    const trailer_data = data.results.filter((item) => item.type === "Trailer");
    const trailer = trailer_data.length ? trailer_data[0] : data.results[0];
    dispatch(backgroundTrailer(trailer));
  };

  useEffect(() => {
    if (trailer_id) trailer();
  }, []);
};

export default useTrailer;
