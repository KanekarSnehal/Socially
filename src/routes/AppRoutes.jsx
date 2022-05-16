import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage, Home } from "../page";
import { MainContainer } from "../components";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route
        path="/home"
        element={
          <MainContainer>
            <Home />
          </MainContainer>
        }
      />
    </Routes>
  );
};
