import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { modalReducer } from "./features/modalSlice";
import { postReducer } from "./features/postSlice";
import { userReducer } from "./features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    user: userReducer,
    modal: modalReducer,
  },
});
