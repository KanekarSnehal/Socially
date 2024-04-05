import axiosInstance from "./index";
import { commentsUrl, config, postUrl } from "../utils";

export const getComments = (postId) => axiosInstance.get(`${commentsUrl}/${postId}`);

export const addComment = (postId, commentData) =>
  axiosInstance.post(`${postUrl}/${postId}/comments`, commentData, config());

export const editComment = (postId, commentId, commentData) =>
  axiosInstance.post(
    `${postUrl}/${postId}/comments/${commentId}`,
    commentData
  );

export const deleteComment = (postId, commentId) =>
  axiosInstance.delete(`${postUrl}/${postId}/comments/${commentId}`);

export const likeComment = (postId, commentId) =>
  axiosInstance.post(`${commentsUrl}/upvote/${postId}/${commentId}`, config());

export const dislikeComment = (postId, commentId) =>
  axiosInstance.post(`${commentsUrl}/downvote/${postId}/${commentId}`, config());
