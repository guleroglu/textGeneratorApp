import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/textgenerator/textSlice";

export const store = configureStore({
  reducer: {
    text: textReducer,
  },
});
