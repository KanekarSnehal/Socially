import React, { useState } from "react";
import heroImage from "../assets/hero-image.png";
import { Login, Signup } from "../components";

export const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <div className="flex flex-wrap ">
      <img className="md:w-1/2 w-100 shrink-0" src={heroImage} />
      <div className="md:w-1/2 w-full  mt-10 mb-10">
        <h1 className="text-center my-6 text-4xl text-secondary-300">
          Socially
        </h1>
        <div className="py-2 px-4 shadow-xl flex justify-content hover:shadow-2xl flex-col rounded-lg border-primary border-2 w-9/12 mx-auto">
          <ul className="flex align-items space-between my-4">
            <li
              className={`w-1/2 py-3 px-4 text-center cursor-pointer rounded-full hover:bg-primary-100  focus:outline-none focus:ring focus:ring-primary-300 mr-2 ${
                activeTab === "login" ? "bg-primary-300" : ""
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </li>
            <li
              className={`w-1/2 py-3 px-4 text-center cursor-pointer rounded-full hover:bg-primary-100  focus:outline-none focus:ring focus:ring-primary-300 ${
                activeTab === "signup" ? "bg-primary-300" : ""
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Signup
            </li>
          </ul>
          <div className="flex-col">
            {activeTab === "login" ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};
