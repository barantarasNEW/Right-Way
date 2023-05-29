import { PayloadAction, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../redux/store";

interface ModalState {
  modal: string;
}

const initialState: ModalState = {
  modal: ""
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<string>) => {
      state.modal = action.payload;
    }
  }
});

export const { setModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal;
export default modalSlice.reducer;