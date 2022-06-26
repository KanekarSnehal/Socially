import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../app/features/authSlice";
import { useNavigate } from "react-router-dom";
import { RiLoaderFill } from "react-icons/ri";

export const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const loginHandler = async () => {
    if (loginData.username && loginData.password !== "") {
      const response = await dispatch(loginUser(loginData));
      if (response?.payload.encodedToken) {
        navigate("/home");
      }
    }
  };

  return (
    <>
      <p className="my-2 ml-2">Username</p>
      <input
        type="text"
        className="form-input w-full rounded-full"
        placeholder="Enter your username"
        value={loginData.username}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            username: e.target.value,
          })
        }
      />
      <p className="mt-4 ml-2">Password</p>
      <input
        type="password"
        className="form-input w-full rounded-full"
        placeholder="Enter your password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({
            ...loginData,
            password: e.target.value,
          })
        }
      />
      <button
        className="bg-primary-300 mt-6 px-2 py-1.5 w-full rounded-lg hover:bg-primary-500"
        onClick={loginHandler}
      >
        {loading ? (
          <>
            <span className="font-semibold text-secondary-300 mr-2 text-xl">
              Logging in...
            </span>
            <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-secondary-300" />
          </>
        ) : (
          <span className="font-semibold text-secondary-300 text-xl">
            Login
          </span>
        )}
      </button>
      <div
        className="border-b-2 border-primary-300  my-4 px-4 pt-2  hover:border-b-4 cursor-pointer font-semibold text-primary-300 text-lg hover:text-secondary-300 self-center text-center"
        onClick={() =>
          setLoginData({ username: "snehalkanekar", password: "snehal@123" })
        }
      >
        Fill Test Data
      </div>
    </>
  );
};
