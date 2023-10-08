import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularTVShows } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const usePopularTVShows = () => {
  const dispatch = useDispatch();
  const popularTVShows = useSelector((store) => store.movies.popularTVShows);
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularTVShows(data.results));
  };
  useEffect(() => {
    popularTVShows && getMovies();
  }, []);
};

export default usePopularTVShows;
