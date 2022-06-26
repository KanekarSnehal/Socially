import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiSmileFill } from "react-icons/bs";
import reactDom from "react-dom";
import { openModal, closeModal } from "../../app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserPost,
  editUserComment,
  editUserPost,
} from "../../app/features/postSlice";
import Picker from "emoji-picker-react";

export const ModalInput = () => {
  const { modalOpenStatus, modalContent, modalType, additiondalData } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    modalContent && setInput(modalContent.content);
  }, [modalContent]);

  const postHandler = () => {
    modalContent
      ? dispatch(editUserPost({ ...modalContent, content: input }))
      : dispatch(addUserPost({ content: input }));
    setInput("");
    dispatch(closeModal());
  };

  const updateHanlder = () => {
    dispatch(
      editUserComment({
        postId: additiondalData,
        commentId: modalContent._id,
        commentData: input,
      })
    );
    setInput("");
    dispatch(closeModal());
  };

  const onEmojiClick = (event, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
  };

  return reactDom.createPortal(
    <div
      className={`fixed w-full h-full inset-0 backdrop-brightness-90 z-20 flex justify-center items-start ${
        modalOpenStatus ? "block" : "hidden"
      }`}
      onClick={() => {
        dispatch(closeModal());
        setInput("");
      }}
    >
      <div
        className="bg-primary-100 px-4 py-4 rounded-xl w-2/3 md:w-1/2 lg:w-4/12 flex flex-col mt-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center ">
          <img className="h-8 rounded-full" src={user.profileImage} />
          <div
            className="duration-200 py-1 px-1 hover:bg-gray-400 rounded-full cursor-pointer"
            onClick={() => {
              dispatch(closeModal());
              setInput("");
            }}
          >
            <GrClose />
          </div>
        </div>
        <textarea
          className="rounded-md px-4 py-2 w-full mt-2 bg-white border-none h-40"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's Happening?"
        />
        <div className="flex px-2 text-secondary-300 justify-center items-center mt-2.5 relative">
          <button
            className="text-xl cursor-pointer"
            onClick={() => setShowEmojiPicker((prevVal) => !prevVal)}
          >
            <BsEmojiSmileFill />
          </button>
          {showEmojiPicker && (
            <div className="z-10 drop-shadow-lg absolute top-8 -left-10">
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{ height: "18rem" }}
              />
            </div>
          )}
          {modalType === "POST" ? (
            <button
              className="px-2 py-1 bg-secondary-300 text-white flex justify-between hover:bg-secondary-400 rounded-lg cursor-pointer flex items-center ml-auto"
              onClick={postHandler}
            >
              POST <RiSendPlaneFill className="ml-2" />
            </button>
          ) : (
            <button
              className="px-2 py-1 bg-secondary-300 text-white flex justify-between hover:bg-secondary-400 rounded-lg cursor-pointer flex items-center ml-auto"
              onClick={updateHanlder}
            >
              UPDATE
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
