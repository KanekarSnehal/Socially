import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { ImHome } from "react-icons/im";
import { MdExplore, MdAccountCircle, MdOutlineLogout } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { ModalInput } from "../index";
import { RiSendPlaneFill } from "react-icons/ri";

export const SideMenuBar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <aside className="sticky top-8 xl:w-1/4 pr-4 py-2 hidden md:flex flex-col height-90vh">
        <header className="flex items-center justify-center font-bold text-primary-400">
          <img className="h-12" src={logo} />
          <p className=" text-3xl sm:ml-3.5">Socially</p>
        </header>
        <ul className="flex flex-col items-start mt-4 pl-14 text-xl xl:pl-20 pr-4 text-secondary-300">
          <li className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer">
            <ImHome className="mr-3.5" />
            <span className="text-gray-600 hidden md:block">Home</span>
          </li>
          <li className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer">
            <MdExplore className="mr-3.5" />
            <span>Explore</span>
          </li>
          <li className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer">
            <BsBookmarkFill className="mr-3.5" />
            <span>Bookmark</span>
          </li>
          <li className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer">
            <MdAccountCircle className="mr-3.5" />
            Profile
          </li>
          <li className="flex items-center mt-2 py-1.5 rounded-3xl  px-4 hover:bg-secondary-100 w-full cursor-pointer">
            <MdOutlineLogout className="mr-3.5" />
            Logout
          </li>
          <button
            className="mt-12 bg-secondary-300 py-2 px-4 w-full rounded-2xl text-white hover:bg-secondary-400 flex items-center justify-center"
            onClick={() => setShowModal(!showModal)}
          >
            POST <RiSendPlaneFill className="ml-2" />
          </button>
        </ul>
      </aside>
      {showModal && (
        <ModalInput showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};
