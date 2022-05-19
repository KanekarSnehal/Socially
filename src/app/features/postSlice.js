import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllPosts,
  getPostsByUserName,
  addPost,
  deletePost,
  editPost,
  likePost,
  dislikePost,
} from "../../services/post";
import {
  bookmarkPost,
  getBookmarks,
  unBookmarkPost,
} from "../../services/user";

const initialState = {
  allPosts: [],
  userPosts: [],
  bookmarks: [],
  bookmarkStatus: "idle",
  getAllPostsStatus: "idle",
  getUserPostsStatus: "idle",
  postAddStatus: "idle",
  postDeleteStatus: "idle",
  postEditStatus: "idle",
};

export const fetchAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllPosts();
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "post/getPostsByUserName",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getPostsByUserName();
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchAllBookmarks = createAsyncThunk(
  "post/getBookmarks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getBookmarks();
      return data.bookmarks;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addUserPost = createAsyncThunk(
  "post/addPost",
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await addPost(postData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "post/deletePost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await deletePost(postId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "post/editPost",
  async (postData, { rejectWithValue }) => {
    try {
      const { data } = await editPost(postData);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const likeDislikeUserPost = createAsyncThunk(
  "post/likeDislikeUserPost",
  async ({ postId, isLiked }, { rejectWithValue }) => {
    try {
      const { data } = isLiked
        ? await dislikePost(postId)
        : await likePost(postId);
      return data.posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const bookmarkUnbookmarkUserPost = createAsyncThunk(
  "post/bookmarkUnbookmarkUserPost",
  async ({ postId, isBookmarked }, { rejectWithValue }) => {
    try {
      const { data } = isBookmarked
        ? await unBookmarkPost(postId)
        : await bookmarkPost(postId);
      return data.bookmarks;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.getAllPostsStatus = "pending";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.getAllPostsStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(
        fetchAllPosts.rejected,
        (state) => (state.getAllPostsStatus = "rejected")
      )
      .addCase(fetchUserPosts.pending, (state) => {
        state.getUserPostsStatus = "pending";
      })
      .addCase(fetchUserPosts.fulfilled, (state, action) => {
        state.getUserPostsStatus = "fulfilled";
        state.userPosts = action.payload;
      })
      .addCase(fetchUserPosts.rejected, (state) => {
        state.getUserPostsStatus = "rejected";
      })
      .addCase(addUserPost.pending, (state) => {
        state.postAddStatus = "pending";
      })
      .addCase(addUserPost.fulfilled, (state, action) => {
        state.postAddStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(addUserPost.rejected, (state) => {
        state.postAddStatus = "rejected";
      })
      .addCase(deleteUserPost.pending, (state) => {
        state.postDeleteStatus = "pending";
      })
      .addCase(deleteUserPost.fulfilled, (state, action) => {
        state.postDeleteStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(deleteUserPost.rejected, (state) => {
        state.postDeleteStatus = "rejected";
      })
      .addCase(editUserPost.pending, (state) => {
        state.postEditStatus = "pending";
      })
      .addCase(editUserPost.fulfilled, (state, action) => {
        state.postEditStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(editUserPost.rejected, (state) => {
        state.postEditStatus = "rejected";
      })
      .addCase(likeDislikeUserPost.pending, (state) => {
        state.getAllPostsStatus = "pending";
      })
      .addCase(likeDislikeUserPost.fulfilled, (state, action) => {
        state.getAllPostsStatus = "fulfilled";
        state.allPosts = action.payload;
      })
      .addCase(likeDislikeUserPost.rejected, (state) => {
        state.getAllPostsStatus = "rejected";
      })
      .addCase(fetchAllBookmarks.pending, (state) => {
        state.bookmarkStatus = "pending";
      })
      .addCase(fetchAllBookmarks.fulfilled, (state, action) => {
        state.bookmarkStatus = "fulfilled";
        state.bookmarks = action.payload;
      })
      .addCase(fetchAllBookmarks.rejected, (state) => {
        state.bookmarkStatus = "rejected";
      })
      .addCase(bookmarkUnbookmarkUserPost.pending, (state) => {
        state.bookmarkStatus = "pending";
      })
      .addCase(bookmarkUnbookmarkUserPost.fulfilled, (state, action) => {
        state.bookmarkStatus = "fulfilled";
        state.bookmarks = action.payload;
      })
      .addCase(bookmarkUnbookmarkUserPost.rejected, (state) => {
        state.bookmarkStatus = "rejected";
      });
  },
});

export const postReducer = postSlice.reducer;
