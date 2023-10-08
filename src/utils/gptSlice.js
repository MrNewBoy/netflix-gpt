import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT Info",
  initialState: {
    showGPT: false,
    gptMoviesResults: null,
    gptMoviesName: null,
    shimmer: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
    addGPTmovieResult: (state, action) => {
      const { gptMovies, tmdbResults } = action.payload;
      state.gptMoviesResults = tmdbResults;
      state.gptMoviesName = gptMovies;
    },
    toggleShimmer: (state) => {
      state.shimmer = !state.shimmer;
    },
  },
});

export const { toggleGPT, addGPTmovieResult, toggleShimmer } = gptSlice.actions;

export default gptSlice.reducer;
