import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  modalContent: {},
  modalOpenStatus: false,
  modalType: "POST",
  additiondalData: null,
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
      state.modalContent = {};
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setAdditionalData: (state, action) => {
      state.additiondalData = action.payload;
    },
  },
});

export const { openModal, closeModal, setModalType, setAdditionalData } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
