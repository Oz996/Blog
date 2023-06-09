import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  title: "",
  body: "",
};

const Create = () => {
  const [formData, setFormData] = useState(initState);

  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post("http://localhost:7700/posts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
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
      <form className="container mt-5" onSubmit={createPost}>
        <h1 className="mb-4">New Blog Post</h1>
        <label>Post title</label>
        <input
          name="title"
          type="text"
          className="form-control mb-3"
          onChange={handleChange}
        />
        <label>Post body</label>
        <textarea
          style={{ resize: "none" }}
          name="body"
          rows="10"
          className="form-control"
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default Create;
