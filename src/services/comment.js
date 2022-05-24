import axios from "axios";
import { commentsUrl, config } from "../utils";

export const getComments = (postId) => axios.get(`${commentsUrl}/${postId}`);

export const addComment = (postId, commentData) =>
  axios.post(`${commentsUrl}/add/${postId}`, { commentData }, config());

export const editComment = (postId, commentId, commentData) =>
  axios.post(
    `${commentsUrl}/edit/${postId}/${commentId}`,
    { commentData },
    config()
  );

export const deleteComment = (postId, commentId) =>
  axios.delete(`${commentsUrl}/delete/${postId}/${commentId}`, config());

export const likeComment = (postId, commentId) =>
  axios.post(`${commentsUrl}/upvote/${postId}/${commentId}`, config());

export const dislikeComment = (postId, commentId) =>
  axios.post(`${commentsUrl}/downvote/${postId}/${commentId}`, config());
