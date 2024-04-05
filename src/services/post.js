import axiosInstance from "./index";
import { postUrl, config } from "../utils/index";

// get all posts
export const getAllPosts = () => axiosInstance.get(`${postUrl}/following`);

// get single post by postId
export const getPostByPostId = (postId) => axiosInstance.get(`${postUrl}/${postId}`);

// get all posts by username
export const getPostsByUserName = (username) =>
  axiosInstance.get(`${postUrl}/user/${username}`);

//   add new post to user's db
export const addPost = (postData) => {
  return axiosInstance.post(postUrl, postData);
};

// delete a post from user's db
export const deletePost = (postId) =>
  axiosInstance.delete(`${postUrl}/${postId}`);

// edit a post from user's db
export const editPost = (postData, postId) =>
  axiosInstance.post(`${postUrl}/${postId}/edit`, postData);

// like a post of user
export const likePost = (postId) =>
  axiosInstance.post(`${postUrl}/${postId}/like`, {});

// dislike a post of user
export const dislikePost = (postId) =>
  axiosInstance.delete(`${postUrl}/${postId}/dislike`, {});

// bookmark a post of user
export const bookmarkPost = (postId) =>
  axiosInstance.post(`${postUrl}/${postId}/bookmarks`, {});

// unbookmark a post of user
export const unBookmarkPost = (postId) =>
  axiosInstance.delete(`${postUrl}/${postId}/unbookmarks`, {});

// get all bookmarks of user
export const getAllBookmarkedPosts = () => axiosInstance.get(`${postUrl}/bookmarks`);
