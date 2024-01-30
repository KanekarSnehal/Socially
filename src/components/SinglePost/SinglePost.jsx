import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Comment } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { useOutsideClick } from "../../hooks";

import {
  deleteUserPost,
  likeDislikeUserPost,
  bookmarkUnbookmarkUserPost,
  addUserComment,
  fetchAllPosts,
} from "../../app/features/postSlice";
import { openModal, setModalType } from "../../app/features/modalSlice";
import { useNavigate } from "react-router-dom";

export const SinglePost = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.user);
  const [newComment, setNewComment] = useState("");
  let domNode = useOutsideClick(() => setShowOptions(false));

  const {
    id,
    description,
    creator: { user_name, full_name, profile_image },
    comments,
    created_at,
    is_liked,
    like_count,
    is_bookmarked,
    bookmark_count
  } = post;
  const navigate = useNavigate();

  const currentUserInfo = allUsers?.find(
    (currentUser) => currentUser.user_name === user_name
  );


  const handleNavigate = () => {
    navigate(`/profile/${user_name}`);
  };

  const addCommentHandler = async () => {
    await dispatch(
      addUserComment({
        postId: post.id,
        commentData: {
          action: 'create',
          data: [
            {
              content: newComment.trim()
            }
          ]
        },
      })
    );
    await dispatch(fetchAllPosts());
    setNewComment("");
  };

  return (
    <>
      <div className=" bg-white px-6 py-4 border rounded-lg shadow-lg  flex h-fit flex-col ">
        <div className="flex mb-2">
          <img
            className="h-12 w-12 object-contain rounded-full cursor-pointer"
            src={profile_image}
            onClick={handleNavigate}
          />
          <div className="flex items-center justify-between w-full ml-2">
            <div onClick={handleNavigate}>
              <span className="md:text-lg font-semibold cursor-pointer ml-1 mr-1">
                {full_name}
              </span>
              <span className="text-sm text-gray-400 cursor-pointer">
                @{user_name}
              </span>
            </div>
            {true && (
              <div
                ref={domNode}
                className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative"
                onClick={() => setShowOptions(!showOptions)}
              >
                <IoMdMore className="text-xl" />
                {showOptions && (
                  <ul className="absolute z-10 bg-gray-100 px-2.5 py-1.5 border rounded-lg top-7 right-2 font-semibold text-secondary-300">
                    <li
                      className="flex items-center"
                      onClick={() => {
                        dispatch(openModal(post));
                        dispatch(setModalType("POST"));
                      }}
                    >
                      <FiEdit className="mr-2" />
                      edit
                    </li>
                    <li
                      className="flex items-center"
                      onClick={ async () => {
                        await dispatch(deleteUserPost(id));
                        await dispatch(fetchAllPosts());
                      }}
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
          <p className="break-all text-gray-600">{description}</p>
          {/* {image && (
            <img src={image} className="h-[30rem] w-full mt-4 object-contain" />
          )} */}
          <div className="flex my-3 text-secondary-300 sm:text-lg text-sm">
            <div
              className="flex items-center justify-center sm:mr-8 mr-4 cursor-pointer"
              onClick={async() => {
                await dispatch(
                  likeDislikeUserPost({ postId: id, isLiked: is_liked })
                );
                await dispatch(fetchAllPosts());
              }}
            >
              {is_liked ? (
                <FaHeart className="mr-2" />
              ) : (
                <FaRegHeart className="mr-2" />
              )}
              <span>{like_count} {like_count || 0 < 2 ? `Like` : `Likes`}</span>
            </div>
            <div
              className="flex items-center justify-center cursor-pointer"
              onClick={async() => {
                await dispatch(
                  bookmarkUnbookmarkUserPost({ postId: id, isBookmarked: is_bookmarked })
                )
                await dispatch(fetchAllPosts());
              }
              }
            >
              {is_bookmarked ? (
                <RiBookmarkFill className="mr-2" />
              ) : (
                <RiBookmarkLine className="mr-2" />
              )}

              <span>{bookmark_count} {bookmark_count || 0 < 2 ? `Bookmark` : `Bookmarks`}</span>
            </div>
            <div className="ml-auto">{new Date(created_at).toDateString()}</div>
          </div>
          <div className="flex items-center">
            {
              user?.profile_image ? 
                <img
                  className="h-8 w-8 rounded-full cursor-pointer"
                  src={user?.profile_image}
                  onClick={handleNavigate}
                /> : <></>
            }
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
              comments?.map((comment) => (
                <Comment
                  key={comment.id}
                  postId={post.id}
                  comment={comment}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
