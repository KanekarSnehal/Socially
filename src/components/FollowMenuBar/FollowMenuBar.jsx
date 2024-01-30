import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, followUnfollowUser } from "../../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { SearchUser } from "../index";

export const FollowMenuBar = () => {
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [])

  const followData = allUsers.slice(0, 4);

  const handleNavigate = (username) => {
    user.username === username
      ? navigate("/user-profile")
      : navigate(`/profile/${username}`);
  };

  return (
    <div className="py-4 w-1/3 hidden lg:flex lg:flex-col sticky top-8 height-90vh">
      <SearchUser />
      <div className="ml-4 mr-10 bg-white px-6 py-4 my-6 border rounded-lg shadow-lg  flex h-fit flex-col gap-6">
        <p className="font-semibold">Who to follow</p>
        {followData.length === 0 ? (
          <div className="text-center">No Suggestions</div>
        ) : (
          followData.map((user) => (
            <div
              className="flex gap-6 justify-between items-start"
              key={user.id}
            >
              <div className="flex gap-4">
                <img
                  className="rounded-full self-center cursor-pointer h-10 w-12"
                  src={user.profile_image}
                  onClick={() => handleNavigate(user.user_name)}
                />
                <div className="flex flex-col">
                  <p
                    className="font-semibold cursor-pointer"
                    onClick={() => handleNavigate(user.user_name)}
                  >
                    {user.full_name}
                  </p>
                  <p className="text-xs text-gray-400">@{user.user_name}</p>
                </div>
              </div>
              <button
                className="font-semibold cursor-pointer text-white bg-secondary-300 rounded-2xl px-2 py-1 hover:bg-secondary-400 flex"
                onClick={async () =>{
                  await dispatch(
                    followUnfollowUser({
                      userId: user.id,
                      isFollowing: false,
                      dispatch,
                    })
                  )
                  await dispatch(fetchAllUsers());
                }
                }
              >
                <span>+ </span>
                <p>Follow</p>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
