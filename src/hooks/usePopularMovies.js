import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularMovies;
