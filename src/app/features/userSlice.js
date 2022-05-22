import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUserByUsername } from "../../services/user";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
  userDetails: {},
  userDetailsStatus: "idle",
};

export const fetchAllUsers = createAsyncThunk(
  "post/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsers();
      return data.users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUserDetails = createAsyncThunk(
  "post/getUserByUsername",
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getUserByUsername(username);
      return data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.allUserStatus = "pending";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.allUserStatus = "fulfilled";
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.allUserStatus = "rejected";
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.userDetailsStatus = "pending";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetailsStatus = "fulfilled";
        state.userDetails = action.payload;
      })
      .addCase(fetchUserDetails.rejected, (state) => {
        state.userDetailsStatus = "rejected";
      });
  },
});

export const userReducer = userSlice.reducer;
