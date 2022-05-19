import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/user";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
};

export const fetchAllUsers = createAsyncThunk(
  "post/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsers();
      return data;
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
        state.allUsers = action.payload.users;
      })
      .addCase(fetchAllUsers.rejected, (state) => {
        state.allUserStatus = "rejected";
      });
  },
});

export const userReducer = userSlice.reducer;
