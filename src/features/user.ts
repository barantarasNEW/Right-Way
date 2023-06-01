import { PayloadAction, createSlice} from "@reduxjs/toolkit";
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

const userSlice = createSlice({
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
export default userSlice.reducer;