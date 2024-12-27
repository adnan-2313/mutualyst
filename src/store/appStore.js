import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "../slices/stocksSlice";
const appStore = configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});

export default appStore;
