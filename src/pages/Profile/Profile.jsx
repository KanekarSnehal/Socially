import React, { useEffect } from "react";
import { UserDetails, PostList } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../../app/features/postSlice";
import { fetchUserDetails } from "../../app/features/userSlice";
import { useParams } from "react-router-dom";
import loader from "../../assets/loader.svg";

export const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const { userPosts } = useSelector((state) => state.post);
  const { userDetails, allUsers, userDetailsStatus } = useSelector(
    (state) => state.user
  );
  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchUserDetails(username));
  }, [username]);

  useEffect(() => {
    dispatch(fetchUserPosts(username));
  }, [allPosts, username]);

  return (
    <div className="lg:w-1/2 w-full px-4 py-2 relative">
      <p className="font-semibold text-2xl text-secondary-300 mb-8">Profile</p>
      {userDetails?.user_name && (
        <>
          <UserDetails user={userDetails} postLength={userPosts.length} showEditButton />
          {userPosts && <PostList posts={userPosts} />}
        </>
      )}
      {userDetailsStatus === "pending" && (
        <div className="flex justify-center items-center">
          <img src={loader} className="w-36 h-36" alt="loader" />
        </div>
      )}
    </div>
  );
};
