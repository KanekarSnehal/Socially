import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthPage } from "../Pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};
