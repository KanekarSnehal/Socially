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
import {
  addComment,
  getComments,
  editComment,
  deleteComment,
  likeComment,
  dislikeComment,
} from "../../services/comment";
import { toast } from "react-toastify";

const initialState = {
  allPosts: [],
  userPosts: [],
  bookmarks: [],
  comments: [],
  bookmarkStatus: "idle",
  getAllPostsStatus: "idle",
  getUserPostsStatus: "idle",
  postAddStatus: "idle",
  postDeleteStatus: "idle",
  postEditStatus: "idle",
  commentsStatus: "idle",
  commentsError: null,
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
  async (username, { rejectWithValue }) => {
    try {
      const { data } = await getPostsByUserName(username);
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

export const fetchComments = createAsyncThunk(
  "comment/getComments",
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await getComments(postId);
      return data.comments;
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
      return data.posts;
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
      return data.posts;
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
      return data.posts;
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
      return data.posts;
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
      return data.posts;
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
      })
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
        state.allPosts = action.payload;
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
        state.allPosts = action.payload;
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
        state.allPosts = action.payload;
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
        state.allPosts = action.payload;
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
        state.allPosts = action.payload;
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

export const postReducer = postSlice.reducer;
