import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { ImHome } from "react-icons/im";
import { MdExplore, MdAccountCircle, MdOutlineLogout } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { ModalInput } from "../index";
import { RiSendPlaneFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { logout } from "../../app/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { openModal, closeModal } from "../../app/features/modalSlice";

export const SideMenuBar = () => {
  const isActiveClass = ({ isActive }) =>
    `flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer ${
      isActive && "bg-secondary-100 font-semibold text-secondary-300"
    }`;
  const dispatch = useDispatch();
  return (
    <>
      <aside className="sticky top-8 xl:w-1/4 pr-4 py-2 hidden md:flex flex-col height-90vh">
        <header className="flex items-center justify-center font-bold text-primary-400">
          <img className="h-12" src={logo} />
          <p className=" text-3xl sm:ml-3.5">Socially</p>
        </header>
        <div className="flex flex-col items-start mt-4 pl-14 text-xl xl:pl-20 pr-4 text-secondary-300">
          <NavLink to="/home" className={isActiveClass}>
            <ImHome className="mr-3.5" />
            <span>Home</span>
          </NavLink>
          <NavLink className={isActiveClass} to="/explore">
            <MdExplore className="mr-3.5" />
            <span>Explore</span>
          </NavLink>
          <NavLink className={isActiveClass} to="/bookmark">
            <BsBookmarkFill className="mr-3.5" />
            <span>Bookmark</span>
          </NavLink>
          <NavLink className={isActiveClass} to="/">
            <MdAccountCircle className="mr-3.5" />
            <span>Profile</span>
          </NavLink>
          <div
            className="flex items-center mt-2 py-1.5 rounded-3xl px-4 hover:bg-secondary-100 w-full cursor-pointer"
            onClick={() => {
              dispatch(logout());
              toast.success("Logged Out!");
            }}
          >
            <MdOutlineLogout className="mr-3.5" />
            <span>Logout</span>
          </div>
          <button
            className="mt-12 bg-secondary-300 py-2 px-4 w-full rounded-2xl text-white hover:bg-secondary-400 flex items-center justify-center"
            onClick={() => dispatch(openModal())}
          >
            POST <RiSendPlaneFill className="ml-2" />
          </button>
        </div>
        <ModalInput />
      </aside>
    </>
  );
};
