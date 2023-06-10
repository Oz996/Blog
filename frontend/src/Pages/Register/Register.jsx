import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const initState = {
  email: "",
  password: "",
  confirm: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initState);

  const navigate = useNavigate();

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    const { email, password, confirm } = formData;

    if (password !== confirm) {
      console.log("error");
      return;
    }

    try {
      const res = await axios.post("http://localhost:7700/users/register", {
        email,
        password,
      });
      if (res.status === 201) {
        console.log(res.data);
        navigate("/login");
        toast.success("User registered")
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
      <form className="container" onSubmit={handleRegisterUser}>
        <h1 className="mb-4 mt-5">Register</h1>
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm"
          className="form-control"
          onChange={handleChange}
        />
        <button className="mt-3 btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
