import React, { useState } from "react";
import { SinglePost } from "../index";
import { IoMdFunnel } from "react-icons/io";
import { getSortedPosts } from "../../utils/helpers";

export const PostList = ({ posts }) => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortByOption, setSortByOption] = useState("Latest");

  const sortedPosts = getSortedPosts(posts, sortByOption);

  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col self-end mr-4 relative">
        <span
          className="flex justify-center bg-white rounded-lg shadow-lg items-center gap-1 px-6 py-1 cursor-pointer text-secondary-300 font-semibold gap-2"
          onClick={() => setShowSortOptions(!showSortOptions)}
        >
          <IoMdFunnel /> Sort
        </span>
        <ul
          className={`bg-white rounded-lg px-1.5 py-1 text-center absolute top-10 z-10 right-0 w-full shadow-xl cursor-pointer text-secondary-300 font-semibold ${
            showSortOptions ? "block" : "hidden"
          }`}
        >
          <li
            className="hover:bg-secondary-100  rounded-lg"
            onClick={() => setSortByOption("Latest")}
          >
            Latest
          </li>
          <li
            className="hover:bg-secondary-100  rounded-lg"
            onClick={() => setSortByOption("Oldest")}
          >
            Oldest
          </li>
          <li
            className="hover:bg-secondary-100  rounded-lg px-2"
            onClick={() => setSortByOption("Trending")}
          >
            Trending
          </li>
        </ul>
      </div>
      {sortedPosts &&
        sortedPosts.map((post) => <SinglePost key={post._id} post={post} />)}
    </div>
  );
};
