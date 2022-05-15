import React from "react";
import { SideMenuBar, FollowMenuBar } from "../index";

export const MainContainer = ({ children }) => {
  return (
    <div className="flex my-6">
      <SideMenuBar />
      {children}
      <FollowMenuBar />
    </div>
  );
};
