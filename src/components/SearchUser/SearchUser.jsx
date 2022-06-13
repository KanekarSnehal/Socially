import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiLoaderFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hooks";

export const SearchUser = () => {
  const { allUsers } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const domNode = useOutsideClick(() => {
    setShowSearchResult(false);
    setSearchText("");
  });

  const searchQuery = () =>
    allUsers.filter(
      (user) =>
        user.username.toLowerCase().includes(searchText.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

  useEffect(() => {
    setLoading(true);
    const timerId = setTimeout(() => {
      if (searchText) setSearchResult(searchQuery);
      else setSearchResult([]);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchText]);

  const handleNavigate = (username) => {
    setSearchText("");
    setShowSearchResult(false);
    user.username === username
      ? navigate("/user-profile")
      : navigate(`/profile/${username}`);
  };

  return (
    <div className="ml-4 mr-10">
      <div className="relative">
        <input
          type="text"
          className="block p-4 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white"
          placeholder="Search Users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onClick={() => setShowSearchResult(true)}
          required
        />
        {showSearchResult ? (
          <IoMdClose
            className="text-xl text-secondary-300 hover:text-primary-300 absolute right-3.5 top-4 cursor-pointer"
            onClick={() => {
              setShowSearchResult(false);
              setSearchText("");
            }}
          />
        ) : (
          <BsSearch className="text-xl text-secondary-300 hover:text-primary-300 absolute right-3.5 top-4 cursor-pointer" />
        )}

        {showSearchResult && (
          <div
            className="bg-white rounded-lg px-4 py-4 w-full absolute top-15 mt-2 z-10 shadow-xl gap-5 flex flex-col"
            ref={domNode}
          >
            {searchResult.length === 0 ? (
              <p className="text-center font-semibold text-lg text-secondary-400">
                {searchText ? (
                  loading ? (
                    <>
                      <span className="font-semibold text-secondary-300 mr-2 text-xl">
                        Loading...
                      </span>
                      <RiLoaderFill className="w-max animate-spin text-2xl text-center inline text-secondary-300" />
                    </>
                  ) : (
                    "No user found"
                  )
                ) : (
                  "Search User"
                )}
              </p>
            ) : (
              searchResult.map((user) => (
                <div className="flex gap-4" key={user._id}>
                  <img
                    className="rounded-full self-center cursor-pointer h-10"
                    src={user.profileImage}
                    onClick={() => handleNavigate(user.username)}
                  />
                  <div className="flex flex-col">
                    <p
                      className="font-semibold cursor-pointer"
                      onClick={() => handleNavigate(user.username)}
                    >
                      {user.fullName}
                    </p>
                    <p className="text-xs text-gray-400">@{user.username}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
