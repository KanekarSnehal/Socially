import React from "react";
import { SideMenuBar, FollowMenuBar } from "../index";
import { MobileNavBar } from "../MobileNavBar/MobileNavBar";

export const MainContainer = ({ children }) => {
  return (
    <>
      <div className="flex mt-6 mb-14">
        <SideMenuBar />
        {children}
        <FollowMenuBar />
      </div>
      <MobileNavBar />{" "}
    </>
  );
};
