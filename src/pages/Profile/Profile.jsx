import React from "react";
import { UserDetails } from "../../components";

export const Profile = () => {
  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Profile</p>
      <UserDetails />
      {/* <PostList posts={allPosts} /> */}
    </div>
  );
};
