import React, { useEffect } from "react";
import { PostList } from "../components";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const { allPosts } = useSelector((state) => state.post);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Home</p>
      <PostList posts={allPosts} />
    </div>
  );
};
