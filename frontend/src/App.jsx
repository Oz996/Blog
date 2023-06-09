import React from "react";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Blogs/Blogs";
import Post from "./Pages/Post/Post";
import Create from "./Pages/Create/Create";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Post/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default App;
