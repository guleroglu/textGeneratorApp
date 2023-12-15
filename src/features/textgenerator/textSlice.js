import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paragraphs: [],
  tag: "p",
  inputValue: 1,
  includeHtml: "Yes",
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setTag: (state, action) => {
      state.tag = action.payload;
    },
    setIncludeHtml: (state, action) => {
      state.includeHtml = action.payload;
    },
    setParagraphs: (state, action) => {
       state.paragraphs = action.payload.slice();
    },
  },
});

export const { setInputValue, setTag, setIncludeHtml, setParagraphs } =
  textSlice.actions;
export default textSlice.reducer;
