import React from "react";
import Header from "../components/Header/Header";
import { Route, Routes} from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Post from "./Pages/Post/Post";
import Create from "./Pages/Create/Create";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import UserPosts from "./Pages/Profile/UserPosts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Post/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile/" element={<Profile/>}/>
        <Route path="/profile/:id" element={<UserPosts/>}/>
      </Routes>
    </>
  );
};

export default App;
