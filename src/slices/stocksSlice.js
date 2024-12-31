import { createSlice } from "@reduxjs/toolkit";

const stocksSlice = createSlice({
  name: "stocks",
  initialState: {
    trendingStocks: null,
    endPoint: null,
  },
  reducers: {
    addTrendingStocks: (state, action) => {
      state.trendingStocks = action.payload;
    },
    addEndPoint: (state, action) => {
      state.endPoint = action.payload;
    },
  },
});

export const { addTrendingStocks, addEndPoint } = stocksSlice.actions;

export default stocksSlice.reducer;
