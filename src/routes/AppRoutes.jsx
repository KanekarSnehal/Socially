import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AuthPage,
  Home,
  Explore,
  Bookmark,
  Profile,
  UserProfile,
} from "../pages";
import { MainContainer } from "../components";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth"} state={{ from: location?.pathname }} replace />
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <MainContainer>
              <Home />
            </MainContainer>
          }
        />
        <Route
          path="/explore"
          element={
            <MainContainer>
              <Explore />
            </MainContainer>
          }
        />
        <Route
          path="/bookmark"
          element={
            <MainContainer>
              <Bookmark />
            </MainContainer>
          }
        />
        <Route
          path="/user-profile"
          element={
            <MainContainer>
              <UserProfile />
            </MainContainer>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <MainContainer>
              <Profile />
            </MainContainer>
          }
        />
      </Route>
    </Routes>
  );
};
