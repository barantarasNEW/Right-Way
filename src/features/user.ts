import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../redux/store";
import { User } from "../types/User";

interface UserState {
  user: User;
  isSigned: boolean;
}

const initialState: UserState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  isSigned: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setIsSigned: (state, action: PayloadAction<boolean>) => {
      state.isSigned = action.payload;
    }
  }
});

export const { setIsSigned, setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;