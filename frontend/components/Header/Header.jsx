import React from "react";
import { FaBlog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-danger navbar-light d-flex justify-content-space-around">
      <FaBlog color="white" />
      <NavLink className="text-uppercase text-decoration-none" style={{color: "white"}} to="">Blogs</NavLink>
      <NavLink className="text-uppercase text-decoration-none" style={{color: "white"}} to="">Create</NavLink>
      <NavLink className="text-uppercase text-decoration-none" style={{color: "white"}} to="">Login</NavLink>
    </nav>
  );
};

export default Header;