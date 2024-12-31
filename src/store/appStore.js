import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from "../slices/stocksSlice";
import appConfigReducer from "../slices/appConfigSlice";

const appStore = configureStore({
  reducer: {
    stocks: stocksReducer,
    appConfig: appConfigReducer,
  },
});

export default appStore;
