import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    theme: "dark",
    logo: "/1.",
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
  },
});

export const { toggleTheme,setLogo } = appConfigSlice.actions;

export default appConfigSlice.reducer;
