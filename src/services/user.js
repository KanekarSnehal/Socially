import axios from "axios";
import { userUrl, config, config1 } from "../utils/index";

export const getAllUsers = () => axios.get(userUrl);

export const getUserByUsername = (username) =>
  axios.get(`${userUrl}/${username}`);

export const editUserData = (userData) =>
  axios.post(`${userUrl}/edit`, { userData }, config());

export const followUser = (followUserId) =>
  axios.post(`${userUrl}/follow/${followUserId}`, {}, config());

export const unFollowUser = (followUserId) =>
  axios.post(`${userUrl}/unfollow/${followUserId}`, {}, config());

export const getBookmarks = () => axios.get(`${userUrl}/bookmark`, config());

export const bookmarkPost = (postId) =>
  axios.post(`${userUrl}/bookmark/${postId}`, {}, config());

export const unBookmarkPost = (postId) =>
  axios.post(`${userUrl}/remove-bookmark/${postId}`, {}, config());
