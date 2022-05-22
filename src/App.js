import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchAllBookmarks, fetchAllPosts } from "./app/features/postSlice";
import { fetchAllUsers } from "./app/features/userSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) {
      dispatch(fetchAllPosts());
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      dispatch(fetchAllUsers());
      dispatch(fetchAllBookmarks());
    }
  }, [dispatch, token]);

  return (
    <div className="App">
      <ToastContainer autoClose={2000} theme="colored" />
      <AppRoutes />
    </div>
  );
}

export default App;
