import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/Slices/postSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
