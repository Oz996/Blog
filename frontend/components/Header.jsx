import React, { useState } from "react";
import { FaBlog, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../src/hooks/useAuth";

const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <nav className="navbar bg-danger navbar-light d-flex justify-content-center">
      <ul className="navbar-nav flex-row gap-5 align-items-center">
        <NavLink to="/">
          <FaBlog size={25} color="white" />
        </NavLink>
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
