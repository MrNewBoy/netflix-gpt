import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popular: null,
    topRated: null,
    popularTVShows: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    addPopularTVShows: (state, action) => {
      state.popularTVShows = action.payload;
    },
    backgroundTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  backgroundTrailer,
  addPopularMovies,
  addTopRatedMovies,
  addPopularTVShows,
} = moviesSlice.actions;
export default moviesSlice.reducer;
