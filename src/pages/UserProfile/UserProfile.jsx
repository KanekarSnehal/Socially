import React, { useEffect } from "react";
import { UserDetails, PostList } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserPosts } from "../../app/features/postSlice";
import { fetchUserDetails } from "../../app/features/userSlice";
import { editUserDetails } from "../../app/features/authSlice";

export const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const { userPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { allPosts } = useSelector((state) => state.post);
  const { allUsers } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(editUserDetails(user.username));
  }, [allUsers]);

  useEffect(() => {
    dispatch(fetchUserPosts(user.username));
  }, [allPosts]);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Profile</p>
      {user?.username && (
        <>
          <UserDetails
            user={user}
            showEditButton
            postLength={userPosts.length}
          />
          <PostList posts={userPosts} />
        </>
      )}
    </div>
  );
};
