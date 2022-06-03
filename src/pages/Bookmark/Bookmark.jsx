import React, { useEffect } from "react";
import { PostList } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBookmarks } from "../../app/features/postSlice";
import loader from "../../assets/loader.svg";

export const Bookmark = () => {
  const { bookmarks, bookmarkStatus } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchAllBookmarks());
  }, [allPosts]);

  const bookmarkPost = allPosts?.filter((post) =>
    bookmarks.find((bookmarkPost) => bookmarkPost._id === post._id)
  );

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300">Bookmark</p>
      {bookmarkPost.length !== 0 ? (
        <PostList posts={bookmarkPost} />
      ) : bookmarkStatus === "pending" ? (
        <div className="flex justify-center items-center">
          <img src={loader} className="w-36 h-36" alt="loader" />
        </div>
      ) : (
        <p className="text-secondary-300 text-2xl text-center font-semibold">
          Bookmark posts to see them here!
        </p>
      )}
    </div>
  );
};
