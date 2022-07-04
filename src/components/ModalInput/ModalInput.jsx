import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiSendPlaneFill, RiLoaderFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { BsEmojiSmileFill, BsFillCameraFill } from "react-icons/bs";
import reactDom from "react-dom";
import { openModal, closeModal } from "../../app/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserPost,
  editUserComment,
  editUserPost,
} from "../../app/features/postSlice";
import Picker from "emoji-picker-react";
import { useOutsideClick } from "../../hooks";
import { toast } from "react-toastify";

export const ModalInput = () => {
  const { modalOpenStatus, modalContent, modalType, additiondalData } =
    useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [image, setImage] = useState({ value: null, type: "" });
  const domRef = useOutsideClick(() => setShowEmojiPicker(false));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modalContent && modalContent?.content) {
      setInput(modalContent.content);
      setImage({ value: modalContent.image, type: "old" });
    }
  }, [modalContent]);

  const postHandler = async () => {
    setLoading(true);
    if (image.value) {
      const data = new FormData();
      data.append("file", image.value);
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
          modalContent
            ? dispatch(
                editUserPost({
                  ...modalContent,
                  content: input,
                  image: json.secure_url,
                })
              )
            : dispatch(addUserPost({ content: input, image: json.secure_url }));
        })
        .catch((error) => {
          toast.error(`Some went wrong, Please try again, ${error}`);
        });
    } else {
      modalContent
        ? dispatch(
            editUserPost({
              ...modalContent,
              content: input,
              image: image.value,
            })
          )
        : dispatch(addUserPost({ content: input, image: image.value }));
    }
    setLoading(false);
    setInput("");
    setImage({ value: null, type: "" });
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
    setImage({ value: null, type: "" });
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
        setImage({ value: null, type: "" });
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
              setImage({ value: null, type: "" });
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
        {image.value && (
          <div className="relative mt-4 h-40 w-40">
            <TiDelete
              className="absolute top-0 right-0 text-2xl text-secondary-400 cursor-pointer"
              onClick={() => setImage({ value: null, type: "" })}
            />
            <img
              src={
                modalContent?.image
                  ? image.type === "new"
                    ? URL.createObjectURL(image?.value)
                    : image?.value
                  : image.value && URL.createObjectURL(image?.value)
              }
              className="h-40 w-40"
            />
          </div>
        )}
        <div className="flex px-2 text-secondary-300 justify-center items-center mt-2.5 relative gap-4">
          <button
            className="text-xl cursor-pointer"
            onClick={() => setShowEmojiPicker((prevVal) => !prevVal)}
          >
            <BsEmojiSmileFill />
          </button>
          {showEmojiPicker && (
            <div
              className="z-10 drop-shadow-lg absolute top-8 -left-10"
              ref={domRef}
            >
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{ height: "18rem" }}
              />
            </div>
          )}
          {modalType !== "COMMENT" && (
            <div className="relative">
              <BsFillCameraFill className="absolute left-0 -top-3 cursor-pointer text-secondary-400 text-2xl" />
              <input
                type="file"
                className="absolute left-0 -top-3 cursor-pointer w-6 h-6 opacity-0"
                accept="image/jpeg, image/png, image/jpg"
                onChange={(e) =>
                  setImage({ value: e.target.files[0], type: "new" })
                }
              ></input>
            </div>
          )}

          {modalType === "POST" ? (
            <button
              className="px-2 py-1 bg-secondary-300 text-white flex justify-between hover:bg-secondary-400 rounded-lg cursor-pointer flex items-center ml-auto"
              onClick={postHandler}
            >
              {loading ? (
                <span className="flex items-center">
                  POSTING...
                  <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-white ml-2" />
                </span>
              ) : (
                <span className="flex items-center">
                  POST <RiSendPlaneFill className="ml-2" />
                </span>
              )}
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
