import React, {  useState } from "react";
import { FaBlog, FaUser } from "react-icons/fa";
import { NavLink} from "react-router-dom";
import useAuth from "../../src/hooks/useAuth";


const Header = () => {
  const { isAuthenticated, userId ,handleLogout } = useAuth();
  

  return (
    <nav className="navbar bg-danger navbar-light">
      <FaBlog color="white" />
      <ul className="navbar-nav d-flex flex-row gap-5">
        {isAuthenticated && (
          <li className="nav-item">
            <NavLink to={`/profile/${userId}`}>
              <FaUser className="text-light"/>
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
