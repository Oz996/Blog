import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initState);

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7700/users/login",
        formData
      );
      console.log(res);
      if (res.status === 200) {
        const data = res.data;
        const token = data.token;
        handleLogin(token);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <form className="container" onSubmit={handleUserLogin}>
        <h1 className="mb-4">Login</h1>
        <label>Email</label>
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

export default Login;
