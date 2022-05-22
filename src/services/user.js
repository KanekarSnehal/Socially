import axios from "axios";
import { userUrl, config } from "../utils/index";

export const getAllUsers = () => axios.get(userUrl);

export const getUserByUsername = (username) =>
  axios.get(`${userUrl}/${username}`);

export const editUserData = (userData) =>
  axios.post(`${userUrl}/edit`, { userData }, config);

export const followUser = (userId) =>
  axios.post(`${userUrl}/follow/${userId}`, config);

export const unFollowUser = (userId) =>
  axios.post(`${userUrl}/${userId}`, config);

export const getBookmarks = () => axios.get(`${userUrl}/bookmark`, config);

export const bookmarkPost = (postId) =>
  axios.post(`${userUrl}/bookmark/${postId}`, {}, config);

export const unBookmarkPost = (postId) =>
  axios.post(`${userUrl}/remove-bookmark/${postId}`, {}, config);
