import React, { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Comment } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import {
  deleteUserPost,
  likeDislikeUserPost,
  bookmarkUnbookmarkUserPost,
  addUserComment,
} from "../../app/features/postSlice";
import { openModal } from "../../app/features/modalSlice";
import { useNavigate } from "react-router-dom";

export const SinglePost = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const { bookmarks } = useSelector((state) => state.post);
  const [newComment, setNewComment] = useState("");
  const {
    _id,
    content,
    likes: { likeCount, likedBy },
    username,
    comments,
    createdAt,
  } = post;
  const navigate = useNavigate();

  const currentUserInfo = allUsers?.find(
    (currentUser) => currentUser.username === username
  );

  const isLiked = likedBy?.some(
    (likeUser) => likeUser.username === user.username
  );

  const isBookmarked = bookmarks?.some((post) => post._id === _id);

  const handleNavigate = () => {
    user.username === username
      ? navigate("/user-profile")
      : navigate(`/profile/${username}`);
  };

  const addCommentHandler = () => {
    dispatch(
      addUserComment({
        postId: post._id,
        commentData: newComment.trim(),
      })
    );
    setNewComment("");
  };

  return (
    <>
      <div className=" bg-white px-6 py-4 border rounded-lg shadow-lg  flex h-fit flex-col ">
        <div className="flex mb-2">
          <img
            className="h-12 rounded-full cursor-pointer"
            src={currentUserInfo?.profileImage}
            onClick={handleNavigate}
          />
          <div className="flex items-center justify-between w-full ml-2">
            <div onClick={handleNavigate}>
              <span className="md:text-lg font-semibold cursor-pointer ml-1 mr-1">
                {currentUserInfo?.fullName}
              </span>
              <span className="text-sm text-gray-400 cursor-pointer">
                @{username}
              </span>
            </div>
            {user.username === username && (
              <div
                className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative"
                onClick={() => setShowOptions(!showOptions)}
              >
                <IoMdMore className="text-xl" />
                {showOptions && (
                  <ul className="absolute z-10 bg-gray-100 px-2.5 py-1.5 border rounded-lg top-7 right-2 font-semibold text-secondary-300">
                    <li
                      className="flex items-center"
                      onClick={() => dispatch(openModal(post))}
                    >
                      <FiEdit className="mr-2" />
                      edit
                    </li>
                    <li
                      className="flex items-center"
                      onClick={() => dispatch(deleteUserPost(_id))}
                    >
                      <MdDeleteOutline className="mr-2" /> delete
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="break-all text-gray-600">{content}</p>
          <div className="flex my-3 text-secondary-300 text-lg">
            <div
              className="flex items-center justify-center mr-8 cursor-pointer"
              onClick={() => {
                dispatch(
                  likeDislikeUserPost({ postId: _id, isLiked: isLiked })
                );
              }}
            >
              {isLiked ? (
                <FaHeart className="mr-2" />
              ) : (
                <FaRegHeart className="mr-2" />
              )}
              <span>{likeCount < 2 ? "Like" : `${likeCount} Likes`}</span>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={() =>
                dispatch(
                  bookmarkUnbookmarkUserPost({ postId: _id, isBookmarked })
                )
              }
            >
              {isBookmarked ? (
                <RiBookmarkFill className="mr-2" />
              ) : (
                <RiBookmarkLine className="mr-2" />
              )}

              <span>Bookmark</span>
            </div>
            <div className="ml-auto">{new Date(createdAt).toDateString()}</div>
          </div>
          <div className="flex items-center">
            <img
              className="h-8 rounded-full cursor-pointer"
              src={user?.profileImage}
              onClick={handleNavigate}
            />
            <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1 ml-2">
              <input
                className="w-full focus:outline-none sm:text-sm mr-2"
                placeholder="Write your comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className={`text-sm text-secondary-300 cursor-pointer font-semibold hover:bg-gray-300 px-2 rounded-md ${
                  newComment.trim().length === 0 && "cursor-not-allowed"
                }`}
                disabled={newComment.trim().length === 0 ? true : false}
                onClick={addCommentHandler}
              >
                POST
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-2">
            {comments?.length !== 0 &&
              comments.map((comment) => (
                <Comment
                  key={comment._id}
                  postId={post._id}
                  comment={comment}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
