import axiosInstance from "./index";
import { userUrl } from "../utils/index";

export const getAllUsers = (searchText='') => axiosInstance.get(`${userUrl}/follow${searchText ? `?searchText=${searchText}` : ''}`);

export const getUserByUsername = (username) =>
  axiosInstance.get(`${userUrl}/${username}`);

export const editUserData = (username, userData) =>
  axiosInstance.post(`${userUrl}/${username}`, userData);

export const followUnFollowUser = (followUserId, isFollowing) =>
  axiosInstance.post(`${userUrl}/${followUserId}/follow-unfollow`, { action: isFollowing ? 'unfollow': 'follow' });

export const unFollowUser = (followUserId) =>
  axiosInstance.post(`${userUrl}/unfollow/${followUserId}`, {});
