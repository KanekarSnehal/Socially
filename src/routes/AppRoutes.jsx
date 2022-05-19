import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage, Home, Explore, Bookmark } from "../pages";
import { MainContainer } from "../components";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} state={{ from: location?.pathname }} replace />
  );
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/home"
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
      </Route>
    </Routes>
  );
};
