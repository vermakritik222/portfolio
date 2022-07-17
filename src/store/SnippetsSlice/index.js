import { createSlice } from "@reduxjs/toolkit";
import { setShowCodeCard, setCode, setData, setActiveCard } from "./reducers";

const initialState = {
  showCodeCard: false,
  code: {
    text: "",
    lang: "js",
    title: "",
  },
  data: {},
  activeCard: "",
};

export const snippetsSlice = createSlice({
  name: "snippets",
  initialState,
  reducers: {
    setShowCodeCard,
    setCode,
    setData,
    setActiveCard,
  },
});

export const snippetsActions = snippetsSlice.actions;

export default snippetsSlice;
