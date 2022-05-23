import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUnfollowUser } from "../../app/features/userSlice";

export const FollowMenuBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const followData = allUsers
    ?.filter((currentUser) => currentUser.username !== user.username)
    .filter(
      (currentUser) =>
        !user.following.find(
          (followingUser) => followingUser._id === currentUser._id
        )
    );

  return (
    <div className="py-4 w-1/3 hidden lg:flex sticky top-8 height-90vh">
      <div className="ml-4 mr-10 bg-white px-6 py-4 my-6 border rounded-lg shadow-lg  flex h-fit flex-col gap-6 w-full">
        <p className="font-semibold">Who to follow</p>
        {followData.length === 0 ? (
          <div className="text-center">No Suggestions</div>
        ) : (
          followData.map((user) => (
            <div className="flex gap-6 justify-between" key={user._id}>
              <div className="flex gap-4">
                <img
                  className="rounded-full self-center cursor-pointer h-10"
                  src={user.profileImage}
                />
                <div className="flex flex-col">
                  <p className="font-semibold cursor-pointer">
                    {user.fullName}
                  </p>
                  <p className="text-xs text-gray-400">@{user.username}</p>
                </div>
              </div>
              <button
                className="font-semibold cursor-pointer text-white bg-secondary-300 rounded-2xl px-1.5  hover:bg-secondary-400"
                onClick={() =>
                  dispatch(
                    followUnfollowUser({
                      userId: user._id,
                      isFollowing: false,
                      dispatch,
                    })
                  )
                }
              >
                + Follow
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
