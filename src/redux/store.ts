import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import countriesName from "../features/countriesName";

const store = configureStore({
  reducer: {
    user: userReducer,
    countriesName: countriesName,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;