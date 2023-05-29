import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import modalReducer from "../features/modal";

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;