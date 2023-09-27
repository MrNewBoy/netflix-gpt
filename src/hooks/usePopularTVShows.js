import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVShows } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularTVShows = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularTVShows(data.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularTVShows;
