import React, { useState } from "react";
import reactDom from "react-dom";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../app/features/authSlice";

export const ProfileModal = ({ profileModal, setProfileModal }) => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(user);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return reactDom.createPortal(
    <div
      className={`fixed w-full h-full inset-0 backdrop-brightness-90 z-20 flex justify-center items-center`}
      onClick={() => {
        setProfileModal(false);
      }}
    >
      <div
        className="bg-primary-100 px-4 py-4 rounded-xl w-2/3 md:w-1/2 lg:w-4/12 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="duration-200 py-1 px-1 hover:bg-gray-400 rounded-full cursor-pointer ml-auto"
          onClick={() => {
            setProfileModal(false);
          }}
        >
          <GrClose />
        </div>

        <div className="flex flex-col mt-2 gap-1">
          <div className="flex gap-4">
            <p className="font-semibold text-secondary-400 w-1/6 text-lg">
              Avatar
            </p>
            <img
              className="h-12 w-12 rounded-full"
              src={userData.profileImage}
            />
          </div>

          <div className="flex gap-4">
            <p className="font-semibold text-secondary-400 w-1/6 text-lg">
              Bio
            </p>
            <textarea
              className="rounded-md px-4 py-2 w-full mt-2 bg-white border-none h-40"
              name="bio"
              value={userData.bio}
              onChange={handleChange}
              placeholder="What's Happening?"
            />
          </div>

          <div className="flex gap-4">
            <p className="font-semibold text-secondary-400 w-1/6 text-lg">
              Link
            </p>
            <input
              type="text"
              name="link"
              className="rounded-md px-4 py-2 w-full mt-2 bg-white border-none"
              value={userData.link}
              onChange={handleChange}
            />
          </div>

          <button
            className="px-2 py-1 bg-secondary-300 text-white flex justify-between hover:bg-secondary-400 mt-3 rounded-lg cursor-pointer flex items-center ml-auto"
            onClick={() => {
              dispatch(editUserDetails(userData));
              setProfileModal(false);
            }}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("profile-modal-root")
  );
};
