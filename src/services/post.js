import axios from "axios";
import { postUrl, config } from "../utils/index";

// get all posts
export const getAllPosts = () => axios.get(postUrl);

// get single post by postId
export const getPostByPostId = (postId) => axios.get(`${postUrl}/${postId}`);

// get all posts by username
export const getPostsByUserName = (username) =>
  axios.get(`${postUrl}/user/${username}`);

//   add new post to user's db
export const addPost = (postData) => {
  return axios.post(postUrl, { postData }, config);
};

// delete a post from user's db
export const deletePost = (postId) =>
  axios.delete(`${postUrl}/${postId}`, config);

// edit a post from user's db
export const editPost = (postData) =>
  axios.post(`${postUrl}/edit/${postData._id}`, { postData }, config);

// like a post of user
export const likePost = (postId) =>
  axios.post(`${postUrl}/like/${postId}`, {}, config);

// dislike a post of user
export const dislikePost = (postId) =>
  axios.post(`${postUrl}/dislike/${postId}`, {}, config);
