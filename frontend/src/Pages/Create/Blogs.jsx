import React, { useEffect, useState } from "react";
import axios from "axios";

const Create = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await axios.get("http://localhost:7700/posts")
    setPosts(res.data)
  };

  useEffect(() => {
    getPosts()
  })
  return (
    <div className="container">
      <h1 className="text-center mt-5">Latest Blogs</h1>

      {posts.map((post)=> (
        <div key={post._id}>
          <h4>{post.title}</h4>
          <h5>{post.user.email}</h5>
        </div>
      ))}
    </div>
  );
};

export default Create;
