import React from "react";
import { PostList } from "../../components";
import { useSelector } from "react-redux";

export const Bookmark = () => {
  const { bookmarks } = useSelector((state) => state.post);
  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Bookmark</p>
      <PostList posts={bookmarks} />
    </div>
  );
};
