import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [idk, setIdk] = useState(false);

  const { id } = useParams();
  const { userEmail } = useAuth();

  const getUserPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:7700/users/posts/${id}`);
      setUserPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    const foundPost = userPosts.find((post) => post.user.email === userEmail);
    if (foundPost) {
      setIdk(true);
    }
  }, [userPosts, userEmail]);

  console.log(userPosts);
  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Posts</h2>
      {idk ? (
        <>
          {userPosts.map((post) => (
            <Link className="text-decoration-none text-dark" key={post._id}>
              <div
                style={{
                  boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
                  width: "50rem",
                  alignItems: "center",
                }}
                className="border rounded-3 p-3 my-3"
              >
                <h4>{post.title}</h4>
                <div className="buttons mt-3 d-flex gap-3">
                  <button
                    className="btn btn-primary"
                    style={{ minWidth: "4.5rem" }}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </Link>
          ))}
        </>
      ) : (
        <>
          {userPosts.map((post) => (
            <Link className="text-decoration-none text-dark" key={post._id}>
              <div
                style={{
                  boxShadow: "0 2px 4px rgba(0,0,0,0.35)",
                  width: "50rem",
                  alignItems: "center",
                }}
                className="border rounded-3 p-3 my-3"
              >
                <h4>{post.title}</h4>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default UserPosts;
