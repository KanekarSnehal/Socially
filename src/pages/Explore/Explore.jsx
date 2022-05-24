import React, { useEffect } from "react";
import { PostList } from "../../components";
import { useDispatch, useSelector } from "react-redux";

export const Explore = () => {
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const explorePosts = allPosts?.filter(
    (post) =>
      post.username !== user.username &&
      !user.following.find(
        (followingUser) => followingUser.username === post.username
      )
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Explore</p>
      {explorePosts.length !== 0 ? (
        <PostList posts={explorePosts} />
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          No more posts available to explore!
        </p>
      )}
    </div>
  );
};
