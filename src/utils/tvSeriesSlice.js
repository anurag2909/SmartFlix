import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    airingToday: null,
    onTheAir: null,
    popularTvSeries: null,
    topRatedTvSeries: null,
  },
  reducers: {
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
    addOnTheAir: (state, action) => {
      state.onTheAir = action.payload;
    },
    addPopularTvSeries: (state, action) => {
      state.popularTvSeries = action.payload;
    },
    addTopRatedTvSeries: (state, action) => {
      state.topRatedTvSeries = action.payload;
    },
  },
});

export const {
  addAiringToday,
  addOnTheAir,
  addPopularTvSeries,
  addTopRatedTvSeries,
} = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
