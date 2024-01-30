import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUnfollowUser } from "../../app/features/userSlice";
import { RiLoaderFill } from "react-icons/ri";

export const FollowButton = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { followUserStatus } = useSelector((state) => state.user);
  const isFollowing = userDetails?.followers?.some(
    (currentUser) => currentUser.username === user.username
  );

  return isFollowing ? (
    <button
      className="font-semibold cursor-pointer text-secondary-400 bg-secondary-100 rounded-2xl px-3 py-1  h-8 hover:bg-secondary-200"
      onClick={() =>
        dispatch(
          followUnfollowUser({
            userId: userDetails.id,
            isFollowing: isFollowing,
            dispatch,
          })
        )
      }
    >
      {followUserStatus === "pending" ? (
        <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-secondary-500" />
      ) : (
        "Following"
      )}
    </button>
  ) : (
    <button
      className="font-semibold cursor-pointer text-white bg-secondary-300 rounded-2xl px-3 py-1  h-8 hover:bg-secondary-400"
      onClick={() =>
        dispatch(
          followUnfollowUser({
            userId: userDetails.id,
            isFollowing: isFollowing,
            dispatch,
          })
        )
      }
    >
      {followUserStatus === "pending" ? (
        <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-secondary-100" />
      ) : (
        "+ Follow"
      )}
    </button>
  );
};
