import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../app/features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };
  const signupHandler = async () => {
    if (
      signupData.fullName !== "" &&
      signupData.userName !== "" &&
      signupData.password !== ""
    ) {
      const response = await dispatch(signupUser(signupData));
      if (response?.payload.encodedToken) {
        navigate("/home");
      }
    } else {
      toast.error(`Please enter valid details`);
    }
  };

  return (
    <>
      <p className="mt-4 ml-2">Full Name</p>
      <input
        type="text"
        className="form-input w-full rounded-full"
        placeholder="Enter your full name"
        name="fullName"
        value={signupData.fullName}
        onChange={changeHandler}
      />

      <p className="mt-4 ml-2">Username</p>
      <input
        type="text"
        className="form-input w-full rounded-full"
        placeholder="Enter your username"
        name="userName"
        value={signupData.userName}
        onChange={changeHandler}
      />
      <p className="mt-4 ml-2">Password</p>
      <input
        type="password"
        className="form-input w-full rounded-full"
        placeholder="Enter your password"
        name="password"
        value={signupData.password}
        onChange={changeHandler}
      />
      <button
        className="bg-primary-300 mt-6 px-4 py-2.5 w-full rounded-lg hover:bg-primary-500"
        onClick={signupHandler}
      >
        Signup
      </button>
    </>
  );
};
