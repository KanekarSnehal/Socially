import React from "react";

import { BiShow } from "react-icons/bi";

export const Login = () => {
  return (
    <>
      <p className="mt-4 ml-2">Email</p>
      <input
        type="email"
        class="form-input w-full rounded-full"
        placeholder="Enter your email"
      />
      <p className="mt-4 ml-2">Password</p>
      <input
        type="password"
        class="form-input w-full rounded-full"
        placeholder="Enter your password"
      />
      <button className="bg-primary-300 mt-6 px-4 py-2.5 w-full rounded-lg hover:bg-primary-500">
        Login
      </button>
      <button className="border-primary-300 border-2 my-4 px-4 py-2.5 w-full rounded-lg hover:bg-primary-100">
        Test Login
      </button>
    </>
  );
};
