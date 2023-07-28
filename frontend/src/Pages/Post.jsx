import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  const getPost = async () => {
    const res = await axios.get(`https://blogs-api-821q.onrender.com/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, [id]);


  return (
    <div>
      {post && (
        <div className="container mt-5 d-flex flex-column align-items-center">
          <h2 className="mb-4">{post.title}</h2>
          <p className="fs-5">{post.body}</p>
          <p className="fw-light mt-5">{`Posted by: ${post?.user?.email}`}</p>
          <p className="fw-light">{`at: ${post.createdAt}`}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
