import { createSlice } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    trendingStocks: null,
  },
  reducers: {
    addTrendingStocks: (state, action) => {
      state.trendingStocks = action.payload;
    },
  },
});

export const { addTrendingStocks } = stocksSlice.actions;

export default stocksSlice.reducer;
