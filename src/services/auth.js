import axios from "axios";

export const loginService = (userDetails) =>
  axios.post("/api/auth/login", {
    username: userDetails.username,
    password: userDetails.password,
  });

export const signUpService = (userDetails) =>
  axios.post("/api/auth/signup", {
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    username: userDetails.userName,
    password: userDetails.password,
  });
