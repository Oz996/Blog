import React, { useState } from "react";
import { FaBlog, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../src/hooks/useAuth";

const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <nav className="navbar bg-danger navbar-light d-flex">
      <NavLink
        to="/"
        className="d-flex align-items-center text-decoration-none text-light gap-3"
        style={{ position: "absolute", left: "17%" }}
      >
        <FaBlog size={30} color="white" />
      </NavLink>
      <ul
        className="navbar-nav flex-row gap-5 align-items-center"
        style={{ position: "relative", left: "66%" }}
      >
        {isAuthenticated && (
          <li className="nav-item">
            <NavLink to="/profile">
              <FaUser className="text-light" />
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink
            className="text-uppercase text-decoration-none text-light"
            to="/"
          >
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="text-uppercase text-decoration-none text-light"
            to="/create"
          >
            Create
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li>
            <NavLink
              className="text-uppercase text-decoration-none text-light"
              to="/login"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink
              className="text-uppercase text-decoration-none text-light"
              to="/login"
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
