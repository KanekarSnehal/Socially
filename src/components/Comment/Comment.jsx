import React, { useState } from "react";
import { IoMdMore } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export const Comment = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className="mt-4 flex">
        <img
          className="h-8 rounded-full cursor-pointer"
          src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
        />
        <div className="ml-2 px-3 py-2 bg-slate-200 grow rounded-xl">
          <div className="flex justify-between h-6">
            <span className="text-sm font-semibold mr-2 cursor-pointer">
              Snehal Kanekar
            </span>
            <div className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative">
              <IoMdMore className="text-xl" />
            </div>
          </div>
          <p className="ext-sm text-gray-500 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            veniam distinctio porro nemo quidem tempora aliquid fugit quasi,
            temporibus, accusantium nam minima! Cupiditate repellendus,
            aspernatur dolores excepturi molestias maxime?
          </p>
        </div>
      </div>
      {/* ----------------------- */}
      <div className="mt-4 flex">
        <img
          className="h-8 rounded-full cursor-pointer"
          src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
        />
        <div className="ml-2 px-3 py-2 bg-slate-200 grow rounded-xl">
          <div className="flex justify-between h-6">
            <span className="text-sm font-semibold mr-2 cursor-pointer">
              Snehal Kanekar
            </span>
            <div className="duration-200 py-1 px-1 hover:bg-gray-200 rounded-full cursor-pointer relative">
              <IoMdMore className="text-xl" />
            </div>
          </div>
          <p className="ext-sm text-gray-500 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            veniam distinctio porro nemo quidem tempora aliquid fugit quasi,
            temporibus, accusantium nam minima! Cupiditate repellendus,
            aspernatur dolores excepturi molestias maxime?
          </p>
        </div>
      </div>
      <div className="mt-4 flex">
        <img
          className="h-8 rounded-full cursor-pointer"
          src="https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png"
        />
        <div className="ml-2 px-3 py-2 bg-slate-200 grow rounded-xl">
          <div className="flex justify-between h-6">
            <span className="text-sm font-semibold mr-2 cursor-pointer">
              Snehal Kanekar
            </span>
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
          <p className="ext-sm text-gray-500 break-all">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nostrum
            veniam distinctio porro nemo quidem tempora aliquid fugit quasi,
            temporibus, accusantium nam minima! Cupiditate repellendus,
            aspernatur dolores excepturi molestias maxime?
          </p>
        </div>
      </div>
    </>
  );
};
