import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Post from "./Pages/Post";
import Create from "./Pages/Create";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import UserPosts from "./Pages/UserPosts";
import EditPost from "./Pages/EditPost";
import Header from "../components/Header";
import ViewPost from "./Pages/ViewPost";

const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Post />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:id" element={<UserPosts />} />
        <Route path="/post/:id" element={<EditPost />} />
        <Route path="/view/:id" element={<ViewPost />} />
      </Routes>
    </>
  );
};

export default App;
