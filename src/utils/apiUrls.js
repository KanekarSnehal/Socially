export const postUrl = "/api/posts";

export const userUrl = "/api/users";

export const config = {
  headers: { authorization: localStorage.getItem("token") },
};
