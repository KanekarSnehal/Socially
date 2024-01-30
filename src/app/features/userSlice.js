import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  getUserByUsername,
  followUnFollowUser,
} from "../../services/user";
import { toast } from "react-toastify";
import { editUserDetails } from "./authSlice";

const initialState = {
  allUsers: [],
  allUserStatus: "idle",
  allUsersError: null,
  userDetails: {},
  userDetailsStatus: "idle",
  userDetailsError: null,
  followUserStatus: "idle",
  followUserError: null,
};

export const fetchAllUsers = createAsyncThunk(
  "post/getAllUsers",
  async (searchText, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsers(searchText);
      return data;
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
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const followUnfollowUser = createAsyncThunk(
  "post/followUnfollowUser",
  async ({ userId, isFollowing, dispatch }, { rejectWithValue }) => {
    try {
      const { data } = await followUnFollowUser(userId, isFollowing);
      dispatch(editUserDetails(data.user));
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
        state.allUsers = action.payload.data;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.allUserStatus = "rejected";
        toast.error(
          `Some went wrong, Please try again, ${state.allUsersError}`
        );
      })
      .addCase(fetchUserDetails.pending, (state) => {
        state.userDetailsStatus = "pending";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.userDetailsStatus = "fulfilled";
        state.userDetails = action.payload.data;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.userDetailsStatus = "rejected";
        toast.error(
          `Some went wrong, Please try again, ${state.userDetailsError}`
        );
      })
      .addCase(followUnfollowUser.pending, (state) => {
        state.followUserStatus = "pending";
      })
      .addCase(followUnfollowUser.fulfilled, (state, action) => {
        state.followUserStatus = "fulfilled";
        toast.success('Followed successfully!');
      })
      .addCase(followUnfollowUser.rejected, (state, action) => {
        state.followUserStatus = "rejected";
        toast.error(
          `Some went wrong, Please try again, ${state.followUserError}`
        );
      });
  },
});

export const userReducer = userSlice.reducer;
