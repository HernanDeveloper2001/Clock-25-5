import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/data-clock/clockReducers";


export const store = configureStore({
  reducer: {
    reducer: rootReducer,
  }
})