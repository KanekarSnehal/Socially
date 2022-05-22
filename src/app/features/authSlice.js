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
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await editUserData(userDetails);
      return data.user;
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
      state.token = "";
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
        state.token = action.payload.encodedToken;
        state.user = action.payload.foundUser;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", JSON.stringify(state.user));
        toast.success(`Welcome back! ${state.user.fullName}`, { icon: "👋" });
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
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        localStorage.setItem("token", state.token);
        localStorage.setItem("user", state.user);
        toast.success(
          `Account created Successfully, Welcome ${state.user.fullName}`
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
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(editUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(`Some went wrong, Please try again, ${state.error}`);
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
