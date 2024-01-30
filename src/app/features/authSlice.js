import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signUpService } from "../../services/auth";
import { toast } from "react-toastify";
import { editUserData } from "../../services/user";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await loginService(userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await signUpService(userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserDetails = createAsyncThunk(
  "auth/editUserData",
  async ({ userName, userDetails }, { rejectWithValue }) => {
    try {
      const { data } = await editUserData(userName, userDetails);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = false;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = true;
        state.user = action.payload.data;
        localStorage.setItem("token", true);
        localStorage.setItem("user", JSON.stringify(action.payload.data));
        toast.success(`Welcome back! ${state.user.full_name}`, { icon: "👋" });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again:( ${state.error}`);
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        toast.success(
          `Account created Successfully, Please login!`
        );
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again:( ${state.error}`);
      })
      .addCase(editUserDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUserDetails.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(editUserDetails.rejected, (state, action) => {
        state.loading = false;
        toast.error(`Some went wrong, Please try again, ${state.error}`);
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
