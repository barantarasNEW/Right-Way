import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import namesReducer from "../features/names";

const store = configureStore({
  reducer: {
    user: userReducer,
    names: namesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;