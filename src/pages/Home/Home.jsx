import React from "react";
import { PostList } from "../../components";
import { useSelector } from "react-redux";
import loader from "../../assets/loader.svg";

export const Home = () => {
  const { allPosts, getAllPostsStatus } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const homePosts = allPosts?.filter(
    (post) =>
      post.username === user.username ||
      user.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300">Home</p>
      {homePosts?.length ? (
        <PostList posts={homePosts} />
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
