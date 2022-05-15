import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { Comment } from "../index";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export const SinglePost = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className=" bg-white px-6 py-4 border rounded-lg shadow-lg  flex h-fit flex-col ">
        <div className="flex mb-2">
          <img
            className="h-12 rounded-full cursor-pointer"
            src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
          />
          <div className="flex items-center justify-between w-full ml-2">
            <div>
              <span className="md:text-lg font-semibold cursor-pointer ml-1 mr-1">
                Snehal Kanekar
              </span>
              <span className="text-sm text-gray-400 cursor-pointer">
                @snehalkanekar
              </span>
            </div>
            <div
              className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative"
              onClick={() => setShowOptions(!showOptions)}
            >
              <IoMdMore className="text-xl" />
              {showOptions && (
                <ul className="absolute z-10 bg-gray-100 px-2.5 py-1.5 border rounded-lg top-7 right-2 font-semibold text-secondary-300">
                  <li className="flex items-center">
                    <FiEdit className="mr-2" />
                    edit
                  </li>
                  <li className="flex items-center">
                    <MdDeleteOutline className="mr-2" /> delete
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="break-all text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className="flex my-3 text-secondary-300 text-lg">
            <div className="flex items-center justify-center mr-4 cursor-pointer">
              <FaRegHeart className="mr-2" />
              <span>Like</span>
            </div>
            <div className="flex items-center justify-center cursor-pointer">
              <BiBookmark className="mr-2" />
              <span>Bookmark</span>
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="h-8 rounded-full cursor-pointer"
              src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
            />
            <div className="self-center border-solid border border-gray-400 grow flex space-between items-center rounded-md px-2 py-1 ml-2">
              <input
                className="w-full focus:outline-none sm:text-sm mr-2"
                placeholder="Write your comment"
              />
              <button
                className={`text-sm text-secondary-300 cursor-pointer font-semibold hover:bg-gray-300 px-2 rounded-md`}
              >
                POST
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse gap-2">
            <Comment />
          </div>
        </div>
      </div>
    </>
  );
};
