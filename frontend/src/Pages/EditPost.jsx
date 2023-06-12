import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteModal from "../../components/DeleteModal";

const EditPost = () => {
  const [post, setPost] = useState([]);
  const [modal, setModal] = useState(false)

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setFormData({ ...post });
  }, [post]);

  const getPost = async () => {
    try {
      const res = await axios.get(`http://localhost:7700/posts/${id}`);
      if (res.status === 200) {
        setPost(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  const updatePost = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `http://localhost:7700/posts/${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.status === 200) {
        toast.success("Post updated");
        navigate("/profile");
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
    <div className="container mt-5">
      {modal && <DeleteModal/>}
      {post && (
        <form onSubmit={updatePost}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            className="form-control mb-3"
            onChange={handleChange}
          />
          <label>Body</label>
          <textarea
            rows="10"
            type="text"
            name="body"
            value={formData.body}
            className="form-control"
            style={{ resize: "none" }}
            onChange={handleChange}
          ></textarea>
          <div className="d-flex gap-3 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button className="btn btn-danger" onClick={(e) => {setModal(prev => !prev); e.preventDefault()}}>
              Delete
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditPost;
