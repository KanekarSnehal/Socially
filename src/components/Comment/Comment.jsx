import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUserComment } from "../../app/features/postSlice";
import {
  openModal,
  setModalType,
  setAdditionalData,
} from "../../app/features/modalSlice";

export const Comment = ({ postId, comment }) => {
  const [showOptions, setShowOptions] = useState(false);
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser =
    allUsers &&
    allUsers.find((currentUser) => currentUser.username === comment.username);

  const handleNavigate = () => {
    comment?.username === user?.username
      ? navigate("/user-profile")
      : navigate(`/profile/${currentUser?.username}`);
  };

  return (
    <>
      <div className="mt-4 flex">
        <img
          className="h-8 rounded-full cursor-pointer"
          src={currentUser?.profileImage}
          onClick={handleNavigate}
        />
        <div className="ml-2 px-3 py-2 bg-slate-200 grow rounded-xl">
          <div className="flex justify-between h-6">
            <span
              className="text-sm font-semibold mr-2 cursor-pointer"
              onClick={handleNavigate}
            >
              {currentUser?.fullName}
            </span>
            {comment?.username === user?.username && (
              <div
                className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative"
                onClick={() => setShowOptions(!showOptions)}
              >
                <IoMdMore className="text-xl" />
                {showOptions && (
                  <ul className="absolute z-10 bg-gray-100 px-2.5 py-1.5 border rounded-lg top-7 right-2 font-semibold text-secondary-300">
                    <li
                      className="flex items-center"
                      onClick={() => {
                        dispatch(setModalType("COMMENT"));
                        dispatch(openModal(comment));
                        dispatch(setAdditionalData(postId));
                      }}
                    >
                      <FiEdit className="mr-2" />
                      edit
                    </li>
                    <li
                      className="flex items-center"
                      onClick={() =>
                        dispatch(
                          deleteUserComment({
                            postId: postId,
                            commentId: comment._id,
                          })
                        )
                      }
                    >
                      <MdDeleteOutline className="mr-2" /> delete
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
          <p className="ext-sm text-gray-500 break-all">{comment.content}</p>
        </div>
      </div>
    </>
  );
};
