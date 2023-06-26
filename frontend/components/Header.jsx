import React, { useState } from "react";
import { FaBlog, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../src/hooks/useAuth";

const Header = () => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <>
    <nav className="navbar navbar-expand bg-danger navbar-light d-flex">
      <div className="container">
      <NavLink
        to="/"
        className="d-flex align-items-center text-decoration-none text-light ms-5"
      >
        <FaBlog size={30} color="white" />
      </NavLink>
      <ul
        className="navbar-nav flex-row gap-5 me-5 ms-auto"

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
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Header;
