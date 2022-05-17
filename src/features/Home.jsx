import React from "react";
import { PostList } from "../components";

export const Home = () => {
  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Home</p>
      <PostList />
    </div>
  );
};
