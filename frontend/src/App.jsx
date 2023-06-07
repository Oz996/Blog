import React from "react";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Create/Blogs";
import Post from "./Pages/Post/Post";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Post/>}/>
      </Routes>
    </>
  );
};

export default App;
