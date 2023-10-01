import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT Info",
  initialState: {
    showGPT: false,
  },
  reducers: {
    toggleGPT: (state) => {
      state.showGPT = !state.showGPT;
    },
  },
});

export const { toggleGPT } = gptSlice.actions;

export default gptSlice.reducer;
