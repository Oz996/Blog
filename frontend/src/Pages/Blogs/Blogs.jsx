import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Create = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get("http://localhost:7700/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  });
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="my-5">Latest Blogs</h1>

      {posts.map((post) => (
        <Link
          to={`/blogs/${post._id}`}
          className="text-decoration-none text-dark"
          key={post._id}
        >
          {" "}
          <div
            style={{
              boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
              width: "50rem",
              alignItems: "center",
            }}
            className="border rounded-3 p-3 my-3"
          >
            <h3>{post.title}</h3>
            <h6>{`By: ${post.user.email}`}</h6>
            <p>{`Created at: ${post.createdAt}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Create;
