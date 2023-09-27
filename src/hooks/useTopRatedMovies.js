import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
