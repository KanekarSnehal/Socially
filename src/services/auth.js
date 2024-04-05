import axiosInstance from "./index";

export const loginService = (userDetails) =>
  axiosInstance.post("/api/auth/login", {
    user_name: userDetails.userName,
    password: userDetails.password,
    email_id: userDetails.emailId
  });

export const signUpService = (userDetails) =>
  axiosInstance.post("/api/auth/signup", {
    full_name: userDetails.fullName,
    user_name: userDetails.userName,
    password: userDetails.password,
    email_id: userDetails.emailId
  });
