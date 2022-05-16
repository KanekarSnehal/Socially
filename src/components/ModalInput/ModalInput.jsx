import React from "react";
import { GrClose } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import reactDom from "react-dom";

export const ModalInput = ({ showModal, setShowModal }) => {
  return reactDom.createPortal(
    <div
      className="fixed w-full h-full inset-0 backdrop-brightness-90 z-20 flex justify-center items-center"
      onClick={() => setShowModal(!showModal)}
    >
      <div
        className="bg-primary-100 px-4 py-4 rounded-xl w-2/3 md:w-1/2 lg:w-4/12 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center ">
          <img
            className="h-8 rounded-full"
            src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
          />
          <div
            className="duration-200 py-1 px-1 hover:bg-gray-400 rounded-full cursor-pointer"
            onClick={() => setShowModal(!showModal)}
          >
            <GrClose />
          </div>
        </div>
        <textarea
          className="rounded-md px-4 py-2 w-full mt-2 bg-white border-none h-60"
          placeholder="What's Happening?"
        />
        <div className="flex justify-between">
          <button className="px-2 py-1 bg-secondary-300 text-white hover:bg-secondary-400 mt-3 rounded-lg cursor-pointer flex items-center ml-auto">
            POST <RiSendPlaneFill className="ml-2" />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
