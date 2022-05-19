import axios from "axios";
import { userUrl, config } from "../utils/index";

export const getAllUsers = () => axios.get(userUrl);

export const getUserById = (userId) => axios.get(`${userUrl}/${userId}`);

export const editUserData = (userData) =>
  axios.post(`${userUrl}/edit`, { userData }, config);

export const followUser = (userId) =>
  axios.post(`${userUrl}/follow/${userId}`, config);

export const unFollowUser = (userId) =>
  axios.post(`${userUrl}/${userId}`, config);
