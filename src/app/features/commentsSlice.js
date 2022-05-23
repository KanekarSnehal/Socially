import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  getComments,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
} from "../../services/comments";
import { toast } from "react-toastify";

const initialState = {
  comments: [],
  commentsStatus: "idle",
  commentsError: null,
};

export const fetchComments = createAsyncThunk(
  "comment/getComments",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getComments(postId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addUserComment = createAsyncThunk(
  "comments/addComment",
  async ({ postId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await addComment(postId, commentData);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserComment = createAsyncThunk(
  "comments/editComment",
  async ({ postId, commentId, commentData }, { rejectWithValue }) => {
    try {
      const { data } = await editComment(postId, commentId, commentData);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUserComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await deleteComment(postId, commentId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const likeUserComment = createAsyncThunk(
  "comments/likeComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await likeComment(postId, commentId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const dislikeUserComment = createAsyncThunk(
  "comments/dislikeComment",
  async ({ postId, commentId }, { rejectWithValue }) => {
    try {
      const { data } = await dislikeComment(postId, commentId);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(addUserComment.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(addUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(addUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(editUserComment.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(editUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(editUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(deleteUserComment.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(deleteUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(deleteUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(likeUserComment.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(likeUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(likeUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      })
      .addCase(dislikeUserComment.pending, (state) => {
        state.commentsStatus = "pending";
      })
      .addCase(dislikeUserComment.fulfilled, (state, action) => {
        state.commentsStatus = "fulfilled";
        state.comments = action.payload;
      })
      .addCase(dislikeUserComment.rejected, (state, action) => {
        state.commentsStatus = "rejected";
        state.commentsError = action.payload;
        toast.error(
          `Some went wrong, Please try again, ${state.commentsError}`
        );
      });
  },
});

export const commentsReducer = commentsSlice.reducer;
