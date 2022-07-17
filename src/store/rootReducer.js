import { configureStore } from "@reduxjs/toolkit";
import snippetsSlice from "./SnippetsSlice";
const store = configureStore({
  reducer: {
    snippetsSlice: snippetsSlice.reducer,
    // restaurantSlice: restaurantSlice.reducer,
  },
});
export default store;
