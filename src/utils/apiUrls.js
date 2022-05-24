export const postUrl = "/api/posts";

export const userUrl = "/api/users";

export const commentsUrl = "/api/comments";

export const config = () => ({
  headers: { authorization: localStorage.getItem("token") },
});
