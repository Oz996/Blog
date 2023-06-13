import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewPost = () => {
  const [post, setPost] = useState([]);

  const { id } = useParams();

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
  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      {post && (
        <>
          <h2 className="mb-4">{post.title}</h2>
          <p className="fs-5">{post.body}</p>
          <p className="fw-light mt-5">{`at ${post.createdAt}`}</p>
        </>
      )}
    </div>
  );
};

export default ViewPost;
