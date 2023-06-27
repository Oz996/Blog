import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ImArrowRight } from "react-icons/im";
import { toast } from "react-toastify";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initState);
  const [error, setError] = useState("");

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleUserLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email.length < 1 || password.length < 1) {
      setError("Wrong email/password");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }

    try {
      const res = await axios.post(
        "https://blogs-api-821q.onrender.com/users/login",
        formData
      );
      console.log(res);
      if (res.status === 200) {
        const data = res.data;
        const token = data.token;
        const email = formData.email;
        handleLogin(token, email);
        navigate("/");
        toast.success(`Welcome ${email}`);
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
      <form className="container w-25" onSubmit={handleUserLogin}>
        <h1 className="mb-4 mt-5 text-center">Login</h1>

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
                <Link className="text-decoration-none text-dark" to="/register">
          <p className="mt-2">
            Register here <ImArrowRight />
          </p>
        </Link>
        <button className="btn btn-primary mt-1">Login</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
