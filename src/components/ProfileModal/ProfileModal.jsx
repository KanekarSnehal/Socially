import React, { useState } from "react";
import reactDom from "react-dom";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../app/features/authSlice";
import { BsFillCameraFill } from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";

export const ProfileModal = ({ profileModal, setProfileModal }) => {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState(user);
  const [imageLoader, setImageLoader] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageChange = async (image) => {
    setImageLoader(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/dflebgpde/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setUserData({ ...userData, profileImage: json.secure_url });
        setImageLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return reactDom.createPortal(
    <div
      className={`fixed w-full h-full inset-0 backdrop-brightness-90 z-20 flex justify-center items-center`}
      onClick={() => setProfileModal(false)}
    >
      <div
        className="bg-primary-100 px-4 py-4 rounded-xl w-2/3 md:w-1/2 lg:w-4/12 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="duration-200 py-1 px-1 hover:bg-gray-400 rounded-full cursor-pointer ml-auto"
          onClick={() => setProfileModal(false)}
        >
          <GrClose />
        </div>

        <div className="flex flex-col mt-2 gap-1">
          <div className="flex gap-4">
            <p className="font-semibold text-secondary-400 w-1/6 text-lg">
              Avatar
            </p>
            {imageLoader ? (
              <div>
                <span className="font-semibold text-secondary-300 mr-2 text-xl">
                  Loading...
                </span>
                <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-secondary-300" />
              </div>
            ) : (
              <div className="relative">
                <img
                  className="h-16 w-16 rounded-full"
                  src={userData.profileImage}
                />
                <BsFillCameraFill className="absolute left-10 top-10 cursor-pointer text-secondary-400 text-2xl bg-gray-300 py-0.5 px-1 rounded-full" />
                <input
                  type="file"
                  className="absolute left-10 top-10 cursor-pointer w-6 h-6 opacity-0"
                  accept="image/jpeg, image/png, image/jpg"
                  onChange={(e) => handleImageChange(e.target.files[0])}
                ></input>
              </div>
            )}
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
            className={`px-2 py-1 bg-secondary-300 text-white flex justify-between hover:bg-secondary-400 mt-3 rounded-lg cursor-pointer flex items-center ml-auto ${
              imageLoader ? "cursor-not-allowed" : ""
            }`}
            onClick={() => {
              dispatch(editUserDetails(userData));
              setProfileModal(false);
            }}
            disabled={imageLoader}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("profile-modal-root")
  );
};
