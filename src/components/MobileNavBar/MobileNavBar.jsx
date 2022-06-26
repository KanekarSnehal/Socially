import React, { useState } from "react";
import { ImHome } from "react-icons/im";
import { MdExplore, MdAccountCircle, MdOutlineLogout } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { logout } from "../../app/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { openModal } from "../../app/features/modalSlice";

export const MobileNavBar = () => {
  const isActiveClass = ({ isActive }) =>
    `rounded-lg px-4 py-1.5 ${isActive && "bg-gray-100 text-secondary-300"}`;
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 h-12 shadow-xl rounded-t-lg w-full bg-gray-300 px-2 py-1 md:hidden">
      <div className="flex text-xl xl:pl-20 py-1 items-center px-4 justify-between text-secondary-300">
        <NavLink to="/" className={isActiveClass}>
          <ImHome />
        </NavLink>
        <NavLink className={isActiveClass} to="/explore">
          <MdExplore />
        </NavLink>
        <NavLink className={isActiveClass} to="/bookmark">
          <BsBookmarkFill />
        </NavLink>
        <NavLink className={isActiveClass} to="/user-profile">
          <MdAccountCircle />
        </NavLink>
        <div
          className=" hover:bg-secondary-100 cursor-pointer rounded-lg px-2 py-1.5"
          onClick={() => {
            dispatch(logout());
            toast.success("Logged Out!");
          }}
        >
          <MdOutlineLogout />
        </div>
        <div
          className="hover:bg-gray-100 rounded-lg px-2 py-1.5"
          onClick={() => dispatch(openModal())}
        >
          <RiSendPlaneFill className="ml-2" />
        </div>
      </div>
    </div>
  );
};
