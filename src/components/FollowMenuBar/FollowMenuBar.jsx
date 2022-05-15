import React from "react";

export const FollowMenuBar = () => {
  const followData = [
    {
      name: "Snehal Kanekar",
      socialId: "@snehalkanekar",
      img: "https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png",
    },
    {
      name: "Vedant Kanekar",
      socialId: "@vedantkanekar",
      img: "https://res.cloudinary.com/dflebgpde/image/upload/v1652528175/socially/hacker_obpy2s.png",
    },
  ];
  return (
    <div className="py-4 w-1/3 hidden lg:flex sticky top-8 height-90vh">
      <div className="mx-4 bg-white px-6 py-4 my-6 border rounded-lg shadow-lg  flex h-fit flex-col gap-4">
        <p className="font-semibold">Who to follow</p>
        {followData.map((item) => (
          <div className="flex gap-6">
            <img
              className="rounded-full self-center cursor-pointer h-8"
              src={item.img}
            />
            <div className="flex flex-col">
              <p className="font-semibold cursor-pointer">{item.name}</p>
              <p className="text-xs text-gray-400">{item.socialId}</p>
            </div>
            <button className="font-semibold cursor-pointer text-white bg-secondary-300 rounded-2xl px-2.5  hover:bg-secondary-400">
              + Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
