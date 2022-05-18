import React from "react";
import { SinglePost } from "../index";

export const PostList = ({ posts }) => {
  return (
    <div className="flex flex-col gap-5">
      {posts && posts.map((post) => <SinglePost key={post._id} post={post} />)}
    </div>
  );
};
