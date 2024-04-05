import React, { useEffect } from "react";
import { PostList } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import loader from "../../assets/loader.svg";
import { fetchAllPosts } from "../../app/features/postSlice";

export const Home = () => {
  const { allPosts, getAllPostsStatus } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300">Home</p>
      {allPosts?.length ? (
        <PostList posts={allPosts} />
      ) : getAllPostsStatus === "pending" ? (
        <div className="flex justify-center items-center">
          <img src={loader} className="w-36 h-36" alt="loader" />
        </div>
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          Follow users to see their posts here!
        </p>
      )}
    </div>
  );
};
