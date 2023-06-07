import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState();

  const getPost = async () => {
    const res = await axios.get(`http://localhost:7700/posts/${id}`);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, [id]);
  return (
    <div>
      {post && (
        <div className="container mt-5 text-center">
          <h2 className="mb-4">{post.title}</h2>
          <p>{post.body}</p>
          <p>{`Posted by ${post.user.email}`}</p>
          <p>{`at ${post.createdAt}`}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
