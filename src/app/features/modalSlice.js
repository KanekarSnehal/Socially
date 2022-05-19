import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  modalContent: {},
  modalOpenStatus: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalOpenStatus = true;
      state.modalContent = action?.payload;
    },
    closeModal: (state) => {
      state.modalOpenStatus = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
