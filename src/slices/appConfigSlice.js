import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState: {
    theme: "dark",
    logo: "/1.",
    session: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const { toggleTheme, setLogo, setSession } = appConfigSlice.actions;

export default appConfigSlice.reducer;
