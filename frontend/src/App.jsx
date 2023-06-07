import React from "react";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Blogs from "./Pages/Create/Blogs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default App;
