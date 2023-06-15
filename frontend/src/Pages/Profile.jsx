import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [usersData, setUsersData] = useState([]);
  const { userEmail, handleLogout } = useAuth();
  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:7700/users/users");

      if (res.status === 200) {
        const user = res.data;
        setUsersData(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container w-50">
      <h3 className="mt-5">Welcome {userEmail}</h3>
      <button
        onClick={() => {
          handleLogout;
          navigate("/");
        }}
        className="btn btn-danger"
      >
        Logout
      </button>
      <h4 className="mt-4">Users</h4>
      {usersData.map((user) => (
        <Link
          key={user._id}
          className="text-decoration-none text-dark"
          to={user._id}
        >
          <div
            style={{
              boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
            }}
            className="border rounded-3 p-3 my-3"
          >
            <h4>{user.email}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Profile;
