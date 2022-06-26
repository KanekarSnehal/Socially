import React, { useState } from "react";
import { FollowButton } from "../FollowButton/FollowButton";
import { ProfileModal } from "../ProfileModal/ProfileModal";

export const UserDetails = ({ user, showEditButton, postLength }) => {
  const [profileModal, setProfileModal] = useState(false);

  return (
    <>
      <div className=" bg-white px-6 py-4 gap-4 border rounded-lg shadow-lg  flex h-fit sm:gap-6 mb-4">
        <img
          className="sm:h-20 h-16 w-20 rounded-full cursor-pointer sm:w-20 bg-secondary-100"
          src={user.profileImage}
        />
        <div className="flex flex-col w-full gap-2">
          <div className="flex justify-between">
            <div>
              <p className="md:text-2xl text-lg font-semibold cursor-pointer text-secondary-300">
                {user.fullName}
              </p>
              <p className="text-sm text-gray-400 cursor-pointer">
                @{user.username}
              </p>
            </div>
            {showEditButton ? (
              <div
                className="font-semibold cursor-pointer text-gray-500 border-gray-400 border-2 rounded-md px-2 py-1  h-8 hover:bg-secondary-200 justify-center flex items-center"
                onClick={() => setProfileModal(true)}
              >
                Edit
              </div>
            ) : (
              <FollowButton userDetails={user} />
            )}
          </div>
          <p className="text-gray-500 font-semibold break-all">{user.bio}</p>
          <div className="font-semibold text-gray-500 gap-8 flex ">
            <span>{postLength} Posts</span>
            <span>{user.followers.length} Followers</span>
            <span>{user.following.length} Following</span>
          </div>
          <div className="font-semibold  ">
            <a
              href={user.link}
              className="decoration-1
            text-blue-400
            break-all"
            >
              {user.link}
            </a>
          </div>
        </div>
      </div>
      {profileModal && (
        <ProfileModal
          profileModal={profileModal}
          setProfileModal={setProfileModal}
        />
      )}
    </>
  );
};
